import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="px-4 py-24">
      <Reveal>
        <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-[#081229]/90 p-8 sm:p-14 shadow-[0_40px_140px_rgba(0,0,0,0.22)]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(157,81,255,0.14),transparent_24%)]" />
          <div className="absolute inset-x-20 top-10 h-48 rounded-full bg-gradient-to-r from-blue-500/15 via-white/5 to-violet-500/15 blur-3xl" />
          <div className="relative z-10 space-y-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-[0_0_40px_rgba(90,140,255,0.22)]">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Convert every application into a premium story.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Generate polished cover letters crafted for your target company and role, powered by AI, resume insight, and enterprise-grade presentation.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild className="h-12 px-7 text-base">
                <a href="#generator">
                  Launch AI Generator
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-7 text-base">
                <a href="#features">View Features</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
