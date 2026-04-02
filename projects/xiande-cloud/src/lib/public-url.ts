import { env } from "@/lib/env";

type HeaderSource = {
  get(name: string): string | null;
};

function normalizeBaseUrl(value: string) {
  return value.trim().replace(/\/+$/, "");
}

function toUrl(value: string | null | undefined) {
  if (!value) return null;
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function isLoopbackHost(hostname: string) {
  const normalized = hostname.trim().toLowerCase();
  return (
    normalized === "localhost" ||
    normalized === "127.0.0.1" ||
    normalized === "::1" ||
    normalized === "[::1]" ||
    normalized.endsWith(".localhost")
  );
}

function buildHeaderUrl(proto: string | null | undefined, host: string | null | undefined) {
  const normalizedHost = host?.split(",")[0]?.trim();
  if (!normalizedHost) return null;

  const normalizedProto = proto?.split(",")[0]?.trim() || "http";
  return toUrl(`${normalizedProto}://${normalizedHost}`);
}

export function resolvePublicBaseUrl(headers?: HeaderSource) {
  const originUrl = toUrl(headers?.get("origin"));
  const forwardedUrl = buildHeaderUrl(headers?.get("x-forwarded-proto"), headers?.get("x-forwarded-host"));
  const hostUrl = buildHeaderUrl(headers?.get("x-forwarded-proto"), headers?.get("host"));
  const envUrl = toUrl(normalizeBaseUrl(env.appBaseUrl));

  const candidates = [originUrl, forwardedUrl, hostUrl, envUrl].filter((value): value is URL => Boolean(value));
  const publicCandidate = candidates.find((candidate) => !isLoopbackHost(candidate.hostname));

  return normalizeBaseUrl((publicCandidate ?? candidates[0] ?? new URL("http://127.0.0.1:3000")).toString());
}

export function buildShareUrl(token: string, headers?: HeaderSource) {
  return `${resolvePublicBaseUrl(headers)}/share/${token}`;
}
