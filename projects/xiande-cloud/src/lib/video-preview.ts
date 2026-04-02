import path from "node:path";
import fs from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolvePreviewPath, resolveStoragePath } from "@/lib/files";

const VIDEO_PREVIEW_MIME_TYPE = "video/mp4";
const VIDEO_PREVIEW_SUFFIX = "-preview.mp4";

function getPreviewFileName(originalName: string) {
  const extension = path.extname(originalName);
  const baseName = extension ? originalName.slice(0, -extension.length) : originalName;
  return `${baseName}${VIDEO_PREVIEW_SUFFIX}`;
}

async function runFfmpeg(args: string[]) {
  await new Promise<void>((resolve, reject) => {
    const child = spawn("ffmpeg", args, {
      stdio: ["ignore", "ignore", "pipe"],
    });

    let stderr = "";

    child.stderr.on("data", (chunk) => {
      stderr = `${stderr}${chunk.toString()}`.slice(-4000);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(stderr.trim() || `ffmpeg exited with code ${code}`));
    });
  });
}

export async function ensureLowResolutionVideoPreview(storageKey: string) {
  const sourcePath = resolveStoragePath(storageKey);
  const previewPath = resolvePreviewPath(storageKey);
  const sourceStats = await fs.stat(sourcePath);

  try {
    const previewStats = await fs.stat(previewPath);
    if (previewStats.size > 0 && previewStats.mtimeMs >= sourceStats.mtimeMs) {
      return previewPath;
    }
  } catch {
    // Preview has not been generated yet.
  }

  await fs.mkdir(path.dirname(previewPath), { recursive: true });

  const tempPath = `${previewPath}.${process.pid}.${Date.now()}.tmp.mp4`;

  try {
    await runFfmpeg([
      "-y",
      "-i",
      sourcePath,
      "-map",
      "0:v:0",
      "-map",
      "0:a:0?",
      "-vf",
      "scale=w=854:h=480:force_original_aspect_ratio=decrease:force_divisible_by=2",
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-profile:v",
      "main",
      "-pix_fmt",
      "yuv420p",
      "-crf",
      "31",
      "-maxrate",
      "900k",
      "-bufsize",
      "1800k",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-ac",
      "2",
      "-movflags",
      "+faststart",
      tempPath,
    ]);

    await fs.rename(tempPath, previewPath);
  } catch (error) {
    await fs.rm(tempPath, { force: true });

    try {
      const previewStats = await fs.stat(previewPath);
      if (previewStats.size > 0) {
        return previewPath;
      }
    } catch {
      // No cached preview was produced.
    }

    throw error;
  }

  return previewPath;
}

export function getVideoPreviewResponseMeta(originalName: string) {
  return {
    mimeType: VIDEO_PREVIEW_MIME_TYPE,
    originalName: getPreviewFileName(originalName),
  };
}
