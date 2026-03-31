#!/usr/bin/env bash
set -euo pipefail

cd /root/.openclaw/workspace/projects/xiande-cloud
export NODE_ENV=production
export PATH="/root/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
exec /root/.nvm/versions/node/v22.22.2/bin/pnpm start
