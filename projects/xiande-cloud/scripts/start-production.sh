#!/usr/bin/env bash
set -euo pipefail

cd /root/.openclaw/workspace/projects/xiande-cloud

rm -rf .next/standalone/.next/static
mkdir -p .next/standalone/.next/static
cp -a .next/static/. .next/standalone/.next/static/

rm -rf .next/standalone/public
mkdir -p .next/standalone/public
cp -a public/. .next/standalone/public/ 2>/dev/null || true

export NODE_ENV=production
export PORT="9527"
export HOSTNAME="0.0.0.0"
export PATH="/root/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

exec /root/.nvm/versions/node/v22.22.2/bin/node .next/standalone/server.js
