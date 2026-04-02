# 生产部署说明

## 运行端口

- 默认端口：`9527`

## 推荐部署流程

```bash
cd /root/.openclaw/workspace/projects/xiande-cloud
pnpm install
cp .env.example .env
# 然后编辑 .env
pnpm seed
./scripts/deploy-production.sh
```

## 上线前必须检查的环境变量

```env
SESSION_SECRET="请改成随机长字符串"
APP_BASE_URL="https://你的公网域名或公网IP地址"
INITIAL_ADMIN_USERNAME="admin"
INITIAL_ADMIN_PASSWORD="你自己的强密码"
```

### `APP_BASE_URL` 很关键

它用于服务端生成分享链接。

如果这里还是：

```env
APP_BASE_URL="http://127.0.0.1:9527"
```

那生成出来的分享链接在外网一定不可访问。

生产环境应改成例如：

```env
APP_BASE_URL="http://1.2.3.4:9527"
```

或：

```env
APP_BASE_URL="https://files.example.com"
```

## 启动方式

```bash
./scripts/deploy-production.sh
```

这个脚本会：

- 先停掉旧的 `9527` 生产进程或 `xiande-cloud.service`
- 执行 `pnpm db:generate`
- 执行 `pnpm db:push`
- 执行 `pnpm build`
- 调用 `scripts/start-production.sh` 启动最新 standalone
- 校验 `/login`、`/app` 和 `/_next/static/*`

其中 `scripts/start-production.sh` 会在启动 standalone 服务前同步：

- `public/`
- `.next/static/`

避免出现页面能打开，但静态资源 404、样式丢失、脚本加载失败的问题。

如果服务已经在运行，重新 `pnpm build` 后一定要替换旧进程，不能让旧的 `9527` 进程继续跑。否则旧的 standalone 工作目录可能已经被新构建替换，进而导致静态资源异常、代码仍是旧版本，或 SQLite 打开到失效路径。

推荐把它当成固定规则：

```bash
cd /root/.openclaw/workspace/projects/xiande-cloud
./scripts/deploy-production.sh
```

如果不是用 `systemd`，部署脚本也会先停掉占用 `9527` 的旧进程，再用 `./scripts/start-production.sh` 拉起新进程。**不要在旧进程还活着时单独执行 `pnpm build`。**

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

启用：

```bash
systemctl daemon-reload
systemctl enable xiande-cloud
systemctl restart xiande-cloud
systemctl status xiande-cloud
```

## 防火墙 / 公网访问

若要公网访问，确保以下都成立：

1. 服务监听 `0.0.0.0:9527`
2. 云防火墙 / 安全组放行 9527
3. 本机防火墙放行 9527
4. `APP_BASE_URL` 使用真实公网地址

## 出问题时优先排查

### 登录后报错

```bash
pnpm db:generate
pnpm db:push
pnpm seed
pnpm build
./scripts/start-production.sh
```

同时检查：

- 当前运行进程是不是最新构建
- `.env` 是否存在且已生效
- 管理员用户名密码是否与你数据库一致
- `/_next/static/*` 静态资源是否返回 200
- 服务是否真的监听在 `0.0.0.0:9527`

### 页面样式丢失 / 静态资源异常

先查：

- 是否使用了 `scripts/start-production.sh`
- 当前 `9527` 进程是不是旧构建残留
- `/_next/static/chunks/*.css` 是否返回 200
- standalone 下静态资源是否已完整复制

### 分享链接不可用

先查：

- `APP_BASE_URL` 是否配置错误
- 域名 / IP 是否真实可达
- 端口是否放行

## 验收顺序

每次大改后，优先验证：

1. `/login`
2. 登录后 `/app`
3. 文件预览页 `/app/preview/:id`
4. 分享页 `/share/:token`
5. 移动端批量上传、多选、批量删除、批量分享

## 不要提交到仓库的内容

- `.env`
- `prisma/*.db`
- `data/`
- 日志文件
- 部署机私有说明或个人协作文件
