import path from "node:path";
import fs from "node:fs/promises";

type LogStatus = "success" | "failed" | "info";

type SystemLogInput = {
  action: string;
  status?: LogStatus;
  actorId?: string | null;
  actorUsername?: string | null;
  actorRole?: string | null;
  targetType?: string | null;
  targetId?: string | null;
  detail?: string | null;
  metadata?: Record<string, unknown> | null;
  ip?: string | null;
  userAgent?: string | null;
};

const LOG_DIR = path.resolve(process.cwd(), "data", "logs");
const LOG_TIME_ZONE = process.env.TZ ?? "Asia/Shanghai";

function formatParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    timeZone: LOG_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return Object.fromEntries(
    formatter.formatToParts(date).flatMap((part) =>
      part.type === "literal" ? [] : [[part.type, part.value]],
    ),
  ) as Record<string, string>;
}

function getLogDate(date: Date) {
  const parts = formatParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function getLogTimestamp(date: Date) {
  const parts = formatParts(date);
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

function sanitizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stringifyMetadata(metadata: Record<string, unknown> | null | undefined) {
  if (!metadata || Object.keys(metadata).length === 0) {
    return "";
  }

  return JSON.stringify(metadata);
}

function buildLogLine(input: SystemLogInput, now: Date) {
  const status = input.status ?? "success";
  const parts = [
    `[${getLogTimestamp(now)}]`,
    `[${status.toUpperCase()}]`,
    `action=${input.action}`,
  ];

  if (input.actorUsername || input.actorId) {
    parts.push(
      `actor=${sanitizeText(input.actorUsername ?? "unknown")}(${sanitizeText(input.actorId ?? "-")})`,
    );
  }

  if (input.actorRole) {
    parts.push(`role=${sanitizeText(input.actorRole)}`);
  }

  if (input.targetType) {
    parts.push(`target=${sanitizeText(input.targetType)}${input.targetId ? `:${sanitizeText(input.targetId)}` : ""}`);
  }

  if (input.ip) {
    parts.push(`ip=${sanitizeText(input.ip)}`);
  }

  if (input.userAgent) {
    parts.push(`ua="${sanitizeText(input.userAgent)}"`);
  }

  if (input.detail) {
    parts.push(`detail="${sanitizeText(input.detail)}"`);
  }

  const metadata = stringifyMetadata(input.metadata);
  if (metadata) {
    parts.push(`meta=${metadata}`);
  }

  return `${parts.join(" ")}\n`;
}

export async function ensureSystemLogDir() {
  await fs.mkdir(LOG_DIR, { recursive: true });
}

export function getSystemLogPath(date = new Date()) {
  return path.join(LOG_DIR, `${getLogDate(date)}.log`);
}

export function getRequestLogContext(request: Request) {
  return {
    ip: request.headers.get("x-forwarded-for"),
    userAgent: request.headers.get("user-agent"),
  };
}

export async function writeSystemLog(input: SystemLogInput) {
  const now = new Date();
  await ensureSystemLogDir();
  await fs.appendFile(getSystemLogPath(now), buildLogLine(input, now), "utf8");
}
