import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const stats = [
  { value: "10K+", label: "Cover Letters Generated" },
  { value: "95%", label: "Faster Applications" },
  { value: "4.9/5", label: "Professional Satisfaction" },
  { value: "ATS", label: "Optimized Output" },
];

export function StatsSection() {
  return (
    <section className="px-4 py-20">
      <SectionHeading
        eyebrow="Performance Metrics"
        title="Enterprise results from every interaction"
        description="Validated, polished, and trusted — the AI experience is engineered for high-volume candidate workflows and premium hiring teams."
      />
      <Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-[1.5rem] border border-white/10 bg-[#071126]/85 p-8 text-center shadow-[0_24px_80px_rgba(10,18,45,0.24)]"
            >
              <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">{item.value}</p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
