import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("mx-auto max-w-3xl text-center", className)}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}
