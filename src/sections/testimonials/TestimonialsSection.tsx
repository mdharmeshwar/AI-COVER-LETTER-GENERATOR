import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Maya Chen",
    role: "Senior Data Analyst",
    quote: "The output sounded like me on my best day. It translated my resume into a clear story and saved me hours per application.",
  },
  {
    name: "Julian Reed",
    role: "Product Lead",
    quote: "This feels more premium than most hiring tools. The resume-aware generation made each cover letter specific without becoming over-written.",
  },
  {
    name: "Priya Nair",
    role: "Cloud Engineer",
    quote: "I used it for enterprise roles and the tone was polished, direct, and credible. The copy/export flow is exactly what I needed.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-24">
      <SectionHeading
        eyebrow="Customer Signal"
        title="Designed for ambitious professionals"
        description="A confident, polished writing workflow that helps candidates move faster without losing their voice."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="glass-panel rounded-md p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-violet-500 text-sm font-black text-white">
                {item.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <Quote className="h-6 w-6 text-blue-300/70" />
            </div>
            <div className="mb-4 flex gap-1 text-blue-200">
              {Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm leading-7 text-slate-300">"{item.quote}"</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <h3 className="font-bold text-white">{item.name}</h3>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
