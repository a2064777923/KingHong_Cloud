# 贤得慌又云里雾里

一个私有部署的云上传档案与分享服务原型，面向电脑、手机、平板多端使用。

## 当前阶段

已落地：

- Next.js + TypeScript + Tailwind 基础工程
- 登录页 / 首页 / 管理后台 / 文件空间 / 分享页原型
- Prisma 数据模型：用户、会话、文件、文件夹、分享、审计日志
- 初始管理员账号自动播种：`admin / ab123456`
- 安全响应头中间件
- 简单权限模型（用户仅见自己的文件）及进阶授权预留结构

待接入：

- 真实上传 / 下载 / 预览链路
- 文件夹 CRUD
- 用户管理后台表单
- 分享密码校验与次数扣减
- 搜索 / 排序 / 筛选真实功能
- 准生产部署脚本（当前环境无 Docker）

## 本地运行

```bash
pnpm install
pnpm prisma generate
pnpm prisma db push
pnpm tsx scripts/seed.ts
pnpm dev --hostname 0.0.0.0 --port 9527
```

然后访问：

- 本机：`http://127.0.0.1:9527`
- 公网：`http://<你的服务器IP>:9527`

## 环境变量

参考 `.env.example`。

## 架构原则

- 先做简单权限模型，稳定上线
- 代码可读优先，模块职责分离
- 安全默认开启：Cookie、密码哈希、安全头
- UI 同时考虑桌面与移动端操作习惯

## 后续建议

1. 安装 Docker / Docker Compose，补齐准生产部署
2. 切换 SQLite → PostgreSQL
3. 接入对象存储（本地磁盘 / MinIO）
4. 增加限流、验证码、登录失败锁定、审计检索
