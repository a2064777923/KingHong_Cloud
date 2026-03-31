import argon2 from "argon2";
import crypto from "node:crypto";
import { SHARE_TOKEN_BYTES } from "@/lib/constants";
import { env } from "@/lib/env";

export async function hashPassword(password: string) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
}

export async function verifyPassword(hash: string, password: string) {
  return argon2.verify(hash, password);
}

export function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export function signSessionToken(rawToken: string) {
  return crypto
    .createHmac("sha256", env.sessionSecret)
    .update(rawToken)
    .digest("hex");
}

export function generateOpaqueToken(bytes = SHARE_TOKEN_BYTES) {
  return crypto.randomBytes(bytes).toString("base64url");
}
