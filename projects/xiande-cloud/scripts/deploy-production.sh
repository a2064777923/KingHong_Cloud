#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SERVICE_NAME="${SERVICE_NAME:-xiande-cloud}"
PORT="${PORT:-9527}"
HEALTHCHECK_HOST="${HEALTHCHECK_HOST:-127.0.0.1}"
APP_URL="${APP_URL:-http://${HEALTHCHECK_HOST}:${PORT}}"
START_TIMEOUT_SECONDS="${START_TIMEOUT_SECONDS:-30}"

log() {
  printf '[deploy] %s\n' "$*"
}

service_exists() {
  systemctl cat "${SERVICE_NAME}.service" >/dev/null 2>&1
}

stop_port_processes() {
  if command -v lsof >/dev/null 2>&1; then
    local pids
    pids="$(lsof -ti "tcp:${PORT}" -sTCP:LISTEN || true)"
    if [ -n "$pids" ]; then
      log "stopping port ${PORT} listener(s): ${pids}"
      kill $pids
      return
    fi
  fi

  if command -v fuser >/dev/null 2>&1; then
    if fuser "${PORT}/tcp" >/dev/null 2>&1; then
      log "stopping port ${PORT} listener(s) via fuser"
      fuser -k "${PORT}/tcp" >/dev/null 2>&1 || true
    fi
  fi
}

wait_for_http() {
  local url="$1"
  local expected_regex="$2"
  local attempt=1
  local max_attempts=$((START_TIMEOUT_SECONDS * 2))

  while [ "$attempt" -le "$max_attempts" ]; do
    local status
    status="$(curl -sS -o /dev/null -w '%{http_code}' "$url" || true)"
    if printf '%s' "$status" | rg -q "$expected_regex"; then
      return 0
    fi

    sleep 0.5
    attempt=$((attempt + 1))
  done

  return 1
}

verify_static_asset() {
  local login_html
  local asset_path
  local asset_status

  login_html="$(curl -fsS "${APP_URL}/login")"
  asset_path="$(printf '%s' "$login_html" | rg -o '/_next/static/[^"]+' | head -n 1 | tr -d '\r\n')"

  if [ -z "$asset_path" ]; then
    log "failed to find a static asset on /login"
    return 1
  fi

  asset_status="$(curl -sS -o /dev/null -w '%{http_code}' "${APP_URL}${asset_path}")"
  if [ "$asset_status" != "200" ]; then
    log "static asset check failed: ${asset_status} ${asset_path}"
    return 1
  fi

  log "static asset ok: ${asset_path}"
}

start_without_systemd() {
  local log_file="${DEPLOY_LOG_FILE:-${ROOT_DIR}/data/deploy-production.log}"
  mkdir -p "$(dirname "$log_file")"

  log "starting via nohup -> ${log_file}"
  nohup "${ROOT_DIR}/scripts/start-production.sh" >"$log_file" 2>&1 &
}

main() {
  cd "$ROOT_DIR"

  log "root: ${ROOT_DIR}"
  log "app url: ${APP_URL}"

  if service_exists; then
    log "stopping systemd service ${SERVICE_NAME}.service"
    systemctl stop "${SERVICE_NAME}.service"
  else
    stop_port_processes
  fi

  log "running prisma generate"
  pnpm db:generate

  log "running prisma db push"
  pnpm db:push

  log "building production bundle"
  pnpm build

  if service_exists; then
    log "starting systemd service ${SERVICE_NAME}.service"
    systemctl start "${SERVICE_NAME}.service"
  else
    start_without_systemd
  fi

  log "waiting for /login"
  wait_for_http "${APP_URL}/login" '^200$'

  log "waiting for /app redirect or page"
  wait_for_http "${APP_URL}/app" '^(200|30[1278])$'

  log "verifying static asset responses"
  verify_static_asset

  log "deployment finished successfully"
}

main "$@"
