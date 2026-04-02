<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment Rule

- Production on port `9527` runs from Next.js standalone output.
- After every `pnpm build`, you must replace the old production process before considering the deploy complete.
- Never leave an old standalone process serving while new build artifacts have already been written, or you may hit stale code, broken static assets, or invalid runtime paths.
- Preferred flow: stop or restart the existing service/process, run `pnpm build`, then start the new process via `./scripts/start-production.sh` or `systemctl restart xiande-cloud`.
