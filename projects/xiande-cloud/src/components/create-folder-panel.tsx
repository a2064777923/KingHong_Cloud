"use client";

import { useState } from "react";

export function CreateFolderPanel({ parentId }: { parentId?: string | null }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;

    setBusy(true);
    setMessage("");

    const response = await fetch("/api/folders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), parentId: parentId ?? null }),
    });

    const result = await response.json();
    setBusy(false);

    if (!response.ok) {
      setMessage(result.message ?? "新建文件夹失败");
      return;
    }

    setName("");
    setMessage("文件夹创建成功");
    window.location.reload();
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <h3 className="text-sm font-medium text-white">新建文件夹</h3>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="输入文件夹名称"
          className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-300/40"
        />
        <button
          disabled={busy}
          className="rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 disabled:opacity-70"
        >
          {busy ? "创建中..." : "创建文件夹"}
        </button>
      </div>
      {message ? <p className="mt-2 text-xs text-slate-300">{message}</p> : null}
    </form>
  );
}
