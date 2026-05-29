import { Sparkles } from "lucide-react";

const columns = [
  {
    title: "Product",
    items: [
      { label: "AI Generator", href: "#generator" },
      { label: "Resume Parsing", href: "#generator" },
      { label: "ATS Output", href: "#features" },
      { label: "Markdown Export", href: "#generator" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Security", href: "#footer" },
      { label: "Enterprise", href: "#features" },
      { label: "Careers", href: "#footer" },
      { label: "Contact", href: "#footer" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Prompt Guide", href: "#features" },
      { label: "Templates", href: "#features" },
      { label: "API Status", href: "#footer" },
      { label: "Support", href: "#footer" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#050a16] px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-lg font-black text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-[0_0_30px_rgba(77,101,255,0.3)]">
              <Sparkles className="h-4 w-4" />
            </span>
            AI Cover Letter Generator
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Enterprise-grade AI writing automation for professionals who want every application to feel precise, credible, and personal.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-slate-300">{column.title}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {column.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-blue-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 AI Cover Letter Generator. All rights reserved.</span>
        <span>Built for secure Gemini-powered workflows.</span>
      </div>
    </footer>
  );
}
