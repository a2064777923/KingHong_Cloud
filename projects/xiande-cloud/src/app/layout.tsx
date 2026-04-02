import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { env } from "@/lib/env";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.appBaseUrl),
  title: {
    default: env.appName,
    template: `%s - ${env.appName}`,
  },
  description: "高可读、高安全、面向多端的私有云档案上传与分享服务",
  applicationName: env.appName,
  openGraph: {
    title: env.appName,
    description: "高可读、高安全、面向多端的私有云档案上传与分享服务",
    siteName: env.appName,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-[#07111f] text-white antialiased">{children}</body>
    </html>
  );
}
