"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FileMovePanel } from "@/components/file-move-panel";

type FolderOption = {
  id: string;
  name: string;
  path: string;
};

export function FileCardActions({
  fileId,
  currentFolderId,
  folders,
}: {
  fileId: string;
  currentFolderId: string | null;
  folders: FolderOption[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 sm:mt-3">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-slate-300 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs"
      >
        {open ? "收起更多" : "更多操作"}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/30 p-2.5 sm:p-3">
          <FileMovePanel fileId={fileId} currentFolderId={currentFolderId} folders={folders} />
        </div>
      ) : null}
    </div>
  );
}
