import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1).max(64),
  password: z.string().min(1).max(256),
});

export const createFolderSchema = z.object({
  name: z.string().trim().min(1).max(120),
  parentId: z.string().trim().optional().nullable(),
});

export const createShareSchema = z.object({
  fileIds: z.array(z.string().min(1)).min(1).max(100),
  password: z.string().trim().max(64).optional().or(z.literal("")),
  expiresAt: z.string().datetime().optional().or(z.literal("")),
  maxDownloads: z.coerce.number().int().positive().max(100000).optional(),
  allowPreview: z.coerce.boolean().optional().default(true),
});

export const createUserSchema = z.object({
  username: z.string().trim().min(3).max(64),
  password: z.string().min(6).max(128),
  role: z.enum(["ADMIN", "USER"]).default("USER"),
  maxUploadMb: z.coerce.number().int().positive().max(102400).optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1).max(128),
  newPassword: z.string().min(6).max(128),
});

export const adminResetPasswordSchema = z.object({
  userId: z.string().min(1),
  newPassword: z.string().min(6).max(128),
});
