import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["Features", "#features"],
  ["Generator", "#generator"],
  ["Contact", "#footer"],
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl border border-white/10 bg-[#071126]/78 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-3xl sm:px-6">
        <a href="#" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-[0_0_30px_rgba(67,109,255,0.35)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200/80">AI Cover Letter Generator</p>
            <p className="text-sm font-black tracking-tight text-white">Enterprise AI Writing</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex gap-3">
          <Button asChild className="h-11 px-5 text-sm">
            <a href="#generator">Generate Now</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-300/40 hover:bg-white/10 lg:hidden"
          aria-label="Open mobile menu"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-[#081229]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
              <Button asChild variant="primary" className="w-full py-3 text-sm">
                <a href="#generator">Generate Now</a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
