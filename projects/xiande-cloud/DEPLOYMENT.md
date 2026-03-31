# 生产化部署说明

## 当前运行端口

- 9527

## 生产运行方式

```bash
cd /root/.openclaw/workspace/projects/xiande-cloud
pnpm install
pnpm db:generate
pnpm db:push
pnpm build
PORT=9527 HOSTNAME=0.0.0.0 NODE_ENV=production node .next/standalone/server.js
```

## 建议的 systemd 服务

```ini
[Unit]
Description=Xiande Cloud
After=network.target

[Service]
Type=simple
WorkingDirectory=/root/.openclaw/workspace/projects/xiande-cloud
Environment=NODE_ENV=production
Environment=PORT=9527
Environment=HOSTNAME=0.0.0.0
Environment=PATH=/root/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ExecStart=/root/.openclaw/workspace/projects/xiande-cloud/scripts/start-production.sh
Restart=always
RestartSec=3
User=root

[Install]
WantedBy=multi-user.target
```

然后执行：

```bash
systemctl daemon-reload
systemctl restart xiande-cloud
systemctl status xiande-cloud
```

## 注意

- 首次部署前修改 `.env` 中的 `SESSION_SECRET`
- 首次部署前设置你自己的管理员账号和密码
- 若公网访问，确保 9527 入站规则已放行
