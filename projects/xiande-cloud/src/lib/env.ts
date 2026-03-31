export const env = {
  appName: process.env.APP_NAME ?? "贤得慌又云里雾里",
  appBaseUrl: process.env.APP_BASE_URL ?? "http://127.0.0.1:3000",
  sessionSecret: process.env.SESSION_SECRET ?? "change-me-in-production",
  filesRoot: process.env.FILES_ROOT ?? "./data/files",
  initialAdminUsername: process.env.INITIAL_ADMIN_USERNAME ?? "admin",
  initialAdminPassword: process.env.INITIAL_ADMIN_PASSWORD ?? "ab123456",
  maxUploadBytesUser: BigInt(process.env.MAX_UPLOAD_BYTES_USER ?? "104857600"),
};
