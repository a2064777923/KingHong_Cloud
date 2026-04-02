import path from "node:path";
import fsSync from "node:fs";
import fs from "node:fs/promises";
import { Readable } from "node:stream";
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

function parseSingleRange(rangeHeader: string | null, size: number) {
  if (!rangeHeader) return null;
  if (size <= 0 || !rangeHeader.startsWith("bytes=")) return "invalid" as const;

  const ranges = rangeHeader.slice(6).split(",");
  if (ranges.length !== 1) return "invalid" as const;

  const [startText = "", endText = ""] = ranges[0].trim().split("-", 2);
  if (!startText && !endText) return "invalid" as const;

  if (!startText) {
    const suffixLength = Number.parseInt(endText, 10);
    if (!Number.isFinite(suffixLength) || suffixLength <= 0) return "invalid" as const;
    const start = Math.max(size - suffixLength, 0);
    return { start, end: size - 1 };
  }

  const start = Number.parseInt(startText, 10);
  if (!Number.isFinite(start) || start < 0 || start >= size) return "invalid" as const;

  if (!endText) {
    return { start, end: size - 1 };
  }

  const end = Number.parseInt(endText, 10);
  if (!Number.isFinite(end) || end < start) return "invalid" as const;

  return { start, end: Math.min(end, size - 1) };
}

export async function createInlineFileResponse({
  request,
  storageKey,
  mimeType,
  originalName,
}: {
  request: Request;
  storageKey: string;
  mimeType: string;
  originalName: string;
}) {
  const absolutePath = resolveStoragePath(storageKey);
  const stats = await fs.stat(absolutePath);
  const size = stats.size;
  const range = parseSingleRange(request.headers.get("range"), size);

  if (range === "invalid") {
    return new Response(null, {
      status: 416,
      headers: {
        "Accept-Ranges": "bytes",
        "Content-Range": `bytes */${size}`,
      },
    });
  }

  const start = range?.start ?? 0;
  const end = range?.end ?? size - 1;
  const contentLength = Math.max(end - start + 1, 0);
  const headers = new Headers({
    "Accept-Ranges": "bytes",
    "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(originalName)}`,
    "Content-Length": String(contentLength),
    "Content-Type": mimeType || "application/octet-stream",
  });

  if (range) {
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  }

  const stream = Readable.toWeb(fsSync.createReadStream(absolutePath, { start, end }));

  return new Response(stream as BodyInit, {
    status: range ? 206 : 200,
    headers,
  });
}
