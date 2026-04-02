#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NODE_BIN="${NODE_BIN:-$(command -v node || true)}"
BIND_HOST="${BIND_HOST:-0.0.0.0}"

if [ -z "$NODE_BIN" ] && [ -x /root/.nvm/versions/node/v22.22.2/bin/node ]; then
  NODE_BIN="/root/.nvm/versions/node/v22.22.2/bin/node"
fi

if [ -z "$NODE_BIN" ]; then
  echo "node not found" >&2
  exit 1
fi

cd "$ROOT_DIR"

rm -rf .next/standalone/.next/static
mkdir -p .next/standalone/.next/static
cp -a .next/static/. .next/standalone/.next/static/

rm -rf .next/standalone/public
mkdir -p .next/standalone/public
cp -a public/. .next/standalone/public/ 2>/dev/null || true

export NODE_ENV=production
export PORT="${PORT:-9527}"
export HOSTNAME="$BIND_HOST"
export PATH="$(dirname "$NODE_BIN"):/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

exec "$NODE_BIN" .next/standalone/server.js
