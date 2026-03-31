import path from "node:path";
import fs from "node:fs/promises";
import { env } from "@/lib/env";

export function resolveStoragePath(storageKey: string) {
  return path.resolve(process.cwd(), env.filesRoot, storageKey);
}

export async function ensureDataDirs() {
  await fs.mkdir(path.resolve(process.cwd(), env.filesRoot), { recursive: true });
}

export function detectFileKind(mimeType: string, ext?: string | null) {
  const extension = (ext ?? "").toLowerCase();

  if (mimeType.startsWith("image/")) return "IMAGE";
  if (mimeType.startsWith("video/")) return "VIDEO";
  if (mimeType.startsWith("audio/")) return "AUDIO";
  if (mimeType === "application/pdf") return "PDF";
  if (mimeType.startsWith("text/")) return extension === "txt" ? "TEXT" : "CODE";
  if (["zip", "rar", "7z", "tar", "gz"].includes(extension)) return "ARCHIVE";
  if (["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(extension)) return "OFFICE";
  return "OTHER";
}

export function formatBytes(size: bigint | number) {
  const value = typeof size === "bigint" ? Number(size) : size;
  if (value < 1024) return `${value} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let current = value / 1024;
  let i = 0;
  while (current >= 1024 && i < units.length - 1) {
    current /= 1024;
    i++;
  }
  return `${current.toFixed(current >= 10 ? 0 : 1)} ${units[i]}`;
}
