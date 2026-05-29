import { motion } from "framer-motion";
import { Copy, Download, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTypingText } from "@/hooks/useTypingText";
import { sampleLetter } from "@/constants/options";

type Props = {
  output: string;
  loading: boolean;
};

export function OutputPanel({ output, loading }: Props) {
  const visibleText = useTypingText(output || sampleLetter);

  function normalizeMarkdown(text: string) {
    // Normalize line endings and remove backtick formatting that turns
    // every line into an inline code pill in the UI.
    let normalized = text.replace(/\r\n/g, "\n");

    // Remove fenced code blocks and any stray backticks so lines render
    // as regular paragraphs in the markdown renderer.
    normalized = normalized.replace(/```[\s\S]*?```/g, (m) => m.replace(/```/g, "\n")).replace(/`/g, "");

    const lines = normalized.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
    if (nonEmptyLines.length === 0) {
      return normalized.trim();
    }

    const minIndent = nonEmptyLines.reduce((min, line) => {
      const match = line.match(/^(\s*)\S/);
      return match ? Math.min(min, match[1].length) : min;
    }, Number.POSITIVE_INFINITY);

    return lines
      .map((line) => (minIndent === Number.POSITIVE_INFINITY ? line : line.slice(minIndent)))
      .join("\n")
      .trim();
  }

  const sanitizedText = normalizeMarkdown(visibleText);

  async function copyOutput() {
    await navigator.clipboard.writeText(output || "");
    toast.success("Cover letter copied.");
  }

  function exportMarkdown() {
    const blob = new Blob([output || ""], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ai-cover-letter.md";
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success("Markdown export started.");
  }

  return (
    <div className="glass-panel flex min-h-[680px] flex-col rounded-[1.75rem] p-5 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
            <Sparkles className="h-4 w-4" />
            AI Output
          </div>
          <h3 className="mt-2 text-xl font-black text-white">Personalized Cover Letter</h3>
          <p className="mt-2 text-sm text-slate-400">Review the polished output with premium formatting before copying or exporting.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" className="h-11 px-4 text-sm" disabled={!output || loading} onClick={() => void copyOutput()}>
            <Copy className="h-4 w-4" />
            Copy
          </Button>
          <Button type="button" variant="outline" className="h-11 px-4 text-sm" disabled={!output || loading} onClick={exportMarkdown}>
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="relative mt-4 flex-1 overflow-visible rounded-[1.5rem] border border-white/10 bg-[#050b18]/85 shadow-[inset_0_0_60px_rgba(12,22,44,0.24)]">
        {loading ? (
          <div className="space-y-4 p-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="h-4 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,.05),rgba(96,165,250,.22),rgba(255,255,255,.05))] bg-[length:200%_100%] animate-shimmer"
                style={{ width: `${index % 3 === 0 ? 94 : index % 3 === 1 ? 78 : 62}%` }}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="markdown-output flex-1 min-h-[320px] overflow-auto p-6 text-sm leading-7 text-slate-200 sm:text-[15px]"
          >
            <ReactMarkdown>{sanitizedText}</ReactMarkdown>
          </motion.div>
        )}
      </div>
    </div>
  );
}
