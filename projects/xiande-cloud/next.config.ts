import type { NextConfig } from "next";

const adminUploadBodyLimit = Number(process.env.MAX_UPLOAD_BYTES_ADMIN ?? "1073741824");

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    proxyClientMaxBodySize: Number.isFinite(adminUploadBodyLimit) && adminUploadBodyLimit > 0
      ? adminUploadBodyLimit
      : 1073741824,
  },
};

export default nextConfig;
