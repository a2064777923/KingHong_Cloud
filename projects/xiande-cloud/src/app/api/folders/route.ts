import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { badRequest, ok } from "@/lib/http";
import { createFolderSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const payload = await request.json();
  const parsed = createFolderSchema.safeParse(payload);
  if (!parsed.success) return badRequest("文件夹参数不合法");

  const { name, parentId } = parsed.data;
  let parentPath = "";

  if (parentId) {
    const parent = await db.folder.findFirst({ where: { id: parentId, ownerId: user.id } });
    if (!parent) return badRequest("父文件夹不存在", 404);
    parentPath = parent.path;
  }

  const folder = await db.folder.create({
    data: {
      ownerId: user.id,
      name,
      parentId: parentId || null,
      path: `${parentPath}/${name}`.replace(/\/+/g, "/"),
    },
  });

  return ok(folder, 201);
}
