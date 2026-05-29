import { motion } from "framer-motion";
import { FileText, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { parseResumePdf } from "@/services/parser";
import { cn } from "@/lib/utils";

type Props = {
  disabled?: boolean;
  resumeText: string;
  onParsed: (payload: { fileName: string; text: string }) => void;
  onClear: () => void;
  fileName?: string;
};

export function ResumeUpload({ disabled, resumeText, onParsed, onClear, fileName }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [parsing, setParsing] = useState(false);

  async function handleFile(file?: File) {
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF resume.");
      return;
    }
    setParsing(true);
    try {
      const text = await parseResumePdf(file);
      onParsed({ fileName: file.name, text });
      toast.success("Resume parsed successfully.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not parse this PDF.");
    } finally {
      setParsing(false);
    }
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          void handleFile(event.dataTransfer.files[0]);
        }}
        className={cn(
          "group relative flex min-h-[12rem] cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/15 bg-white/5 p-6 text-center transition duration-300",
          dragging && "border-blue-300/70 bg-blue-500/10",
          disabled && "pointer-events-none opacity-60",
        )}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          disabled={disabled}
          onChange={(event) => void handleFile(event.target.files?.[0])}
        />
        <motion.div
          animate={{ y: dragging ? -5 : 0, scale: dragging ? 1.02 : 1 }}
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-300/20"
        >
          <UploadCloud className="h-6 w-6" />
        </motion.div>
        <p className="text-sm font-semibold text-white">{parsing ? "Extracting resume text..." : "Drop resume PDF or browse"}</p>
        <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">Upload a PDF resume and let the system extract content to personalize your cover letter with accuracy.</p>
      </div>

      {fileName && (
        <div className="rounded-[1.5rem] border border-white/10 bg-[#071126]/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-white">
              <FileText className="h-4 w-4 shrink-0 text-blue-300" />
              <span className="truncate">{fileName}</span>
            </div>
            <Button type="button" variant="ghost" className="h-9 px-2 text-slate-200" onClick={onClear}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-h-28 overflow-auto rounded-2xl border border-white/10 bg-black/20 p-3 text-xs leading-5 text-slate-300">
            {resumeText || "No text extracted yet."}
          </div>
        </div>
      )}
    </div>
  );
}
