import { BrainCircuit, FileSearch, LockKeyhole, MessageSquareText, PenLine, Workflow } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const features = [
  {
    icon: BrainCircuit,
    title: "Gemini AI Generation",
    text: "Prompt-engineered cover letters tailored to company, role, experience level, skills, and resume context.",
  },
  {
    icon: FileSearch,
    title: "Resume PDF Intelligence",
    text: "Secure drag-and-drop PDF parsing that extracts resume content and feeds it into every letter.",
  },
  {
    icon: MessageSquareText,
    title: "Tone Intelligence",
    text: "Switch between confident, executive, warm, analytical, and creative modes with a single tap.",
  },
  {
    icon: PenLine,
    title: "Markdown Output",
    text: "Review editor-ready cover letters with clean formatting, copy, and export options.",
  },
  {
    icon: Workflow,
    title: "Enterprise Workflow",
    text: "Validated fields, polished focus states, and a premium productivity interface for high-volume use.",
  },
  {
    icon: LockKeyhole,
    title: "Key-Safe Architecture",
    text: "Gemini keys stay in environment variables and are never hard-coded into the application.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-24">
      <SectionHeading
        eyebrow="Platform Capabilities"
        title="Premium features built for serious career acceleration"
        description="A modern SaaS flow with resume awareness, tone control, intelligent output, and enterprise-grade interface polish."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title}>
            <div className="glass-panel group h-full rounded-[1.75rem] border border-white/10 bg-[#071126]/85 p-7 shadow-[0_35px_90px_rgba(1,9,32,0.18)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/12 text-blue-200 ring-1 ring-blue-300/20 transition group-hover:bg-blue-500/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.text}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-300/30 via-white/10 to-transparent" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Module {String(index + 1).padStart(2, "0")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
