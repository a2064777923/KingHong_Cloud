import { cookies } from "next/headers";
import { sha256 } from "@/lib/crypto";

function shareCookieName(token: string) {
  return `xiande_share_${sha256(token).slice(0, 16)}`;
}

export async function markShareVerified(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(shareCookieName(token), "verified", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function isShareVerified(token: string) {
  const cookieStore = await cookies();
  return cookieStore.get(shareCookieName(token))?.value === "verified";
}
