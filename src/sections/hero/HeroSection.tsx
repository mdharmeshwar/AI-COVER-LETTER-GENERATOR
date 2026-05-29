import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BrainCircuit, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = ["Gemini AI", "ATS-Optimized", "Resume-Aware", "Secure .env"];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-36 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(28,66,164,0.28),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(126,58,255,0.18),transparent_24%),linear-gradient(180deg,rgba(8,11,24,0.94),#050712_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:82px_82px]" />

      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 shadow-[0_0_32px_rgba(56,118,255,0.14)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-blue-200" />
            AI-powered application intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          >
            Generate Enterprise-Grade
            <span className="block bg-gradient-to-r from-blue-300 via-white to-violet-300 bg-clip-text text-transparent">
              AI Cover Letters Instantly
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Transform job applications with resume-aware personalization, ATS-optimized tone, and executive-level writing automation built for fast, premium hiring workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild className="h-12 min-w-[180px] px-6 text-base">
              <a href="#generator">
                Start Generating
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 min-w-[180px] px-6 text-base">
              <a href="#features">Explore Platform</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trust.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 shadow-[0_0_28px_rgba(47,94,255,0.10)] backdrop-blur-xl">
                <div className="flex items-center gap-2 text-blue-200">
                  <BadgeCheck className="h-4 w-4" />
                  {item}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(103,136,255,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(181,90,255,0.16),transparent_22%)] blur-3xl" />
          <div className="glass-panel relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-[0_30px_90px_rgba(20,35,80,0.35)] sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#081229]/90 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">Live AI Console</p>
                  <h2 className="mt-2 text-xl font-black text-white">Application Brief</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-300/20">
                  <BrainCircuit className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Candidate profile analyzed",
                  "Resume signals extracted",
                  "Company tone calibrated",
                  "ATS language optimized",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.28 }}
                    className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                      <ShieldCheck className="h-4 w-4 text-blue-300" />
                      {item}
                    </div>
                    <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
                      Ready
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-500/15 via-white/5 to-violet-500/15 p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <WandSparkles className="h-4 w-4 text-blue-200" />
                  AI recommendation
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Activate a professional narrative that connects your resume story to the company mission, highlights strong outcomes, and closes with decisive intention.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
