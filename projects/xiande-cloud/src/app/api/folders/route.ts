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

export async function PATCH(request: Request) {
  const user = await requireUser();
  const payload = await request.json();
  const id = String(payload.id ?? "").trim();
  const name = String(payload.name ?? "").trim();

  if (!id || !name) return badRequest("缺少文件夹参数");

  const folder = await db.folder.findFirst({ where: { id, ownerId: user.id } });
  if (!folder) return badRequest("文件夹不存在", 404);

  const parentPath = folder.path.split("/").slice(0, -1).join("/") || "";
  const nextPath = `${parentPath}/${name}`.replace(/\/+/g, "/");

  await db.$transaction(async (tx) => {
    await tx.folder.update({
      where: { id: folder.id },
      data: { name, path: nextPath },
    });

    const children = await tx.folder.findMany({
      where: { ownerId: user.id, path: { startsWith: `${folder.path}/` } },
      select: { id: true, path: true },
    });

    await Promise.all(
      children.map((child) =>
        tx.folder.update({
          where: { id: child.id },
          data: { path: child.path.replace(folder.path, nextPath) },
        }),
      ),
    );
  });

  return ok({ id: folder.id, name, path: nextPath });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id")?.trim();
  if (!id) return badRequest("缺少文件夹 ID");

  const folder = await db.folder.findFirst({ where: { id, ownerId: user.id } });
  if (!folder) return badRequest("文件夹不存在", 404);

  const childCount = await db.fileEntry.count({ where: { ownerId: user.id, folderId: folder.id } });
  if (childCount > 0) return badRequest("文件夹下仍有文件，请先移动或删除文件");

  await db.folder.delete({ where: { id: folder.id } });
  return ok({ id: folder.id });
}
