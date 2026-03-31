import { Archive, FileCode2, FileImage, FileText, Film, Music4, Presentation, FileQuestion } from "lucide-react";
import { FileKind } from "@prisma/client";

export function FileKindIcon({ kind }: { kind: FileKind }) {
  const className = "h-5 w-5";
  switch (kind) {
    case FileKind.IMAGE:
      return <FileImage className={className} />;
    case FileKind.VIDEO:
      return <Film className={className} />;
    case FileKind.AUDIO:
      return <Music4 className={className} />;
    case FileKind.PDF:
    case FileKind.TEXT:
      return <FileText className={className} />;
    case FileKind.CODE:
      return <FileCode2 className={className} />;
    case FileKind.ARCHIVE:
      return <Archive className={className} />;
    case FileKind.OFFICE:
      return <Presentation className={className} />;
    default:
      return <FileQuestion className={className} />;
  }
}
