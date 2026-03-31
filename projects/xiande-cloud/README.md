# 贤得慌又云里雾里

私有部署的文件上传、预览、下载与分享服务。

## 当前能力

- 账号登录
- 文件上传 / 下载 / 预览
- 文件夹结构
- 分享链接
- 分享密码、失效时间、下载次数控制
- 管理端统计视图

## 启动

```bash
pnpm install
pnpm db:generate
pnpm db:push
pnpm seed
pnpm dev
```

访问：

- `http://127.0.0.1:9527`
- `http://<公网IP>:9527`

## 生产化

见 `DEPLOYMENT.md`
