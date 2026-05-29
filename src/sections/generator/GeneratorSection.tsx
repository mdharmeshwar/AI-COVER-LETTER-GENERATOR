import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { OutputPanel } from "@/components/dashboard/OutputPanel";
import { ResumeUpload } from "@/components/forms/ResumeUpload";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { experienceLevels, toneOptions } from "@/constants/options";
import { generateWithAi } from "@/services/gemini";
import { buildCoverLetterPrompt } from "@/services/promptBuilder";
import { generatorSchema, type GeneratorFormValues } from "./schema";

const fieldError = "mt-1 text-xs text-rose-300";

export function GeneratorSection() {
  const [resumeText, setResumeText] = useState("");
  const [resumeFileName, setResumeFileName] = useState<string>();
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GeneratorFormValues>({
    resolver: zodResolver(generatorSchema),
    defaultValues: {
      candidateName: "",
      jobRole: "",
      targetCompany: "",
      skills: "",
      experienceLevel: "Mid Level",
      tone: "Confident",
    },
  });

  async function onSubmit(values: GeneratorFormValues) {
    setLoading(true);
    try {
      const prompt = buildCoverLetterPrompt({ ...values, resumeText });
      const text = await generateWithAi(prompt);
      setOutput(text);
      toast.success("Cover letter generated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Generation failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="generator" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="AI Workspace"
        title="Professional cover letters crafted from your resume and role details"
        description="A premium generation workflow with validated inputs, drag-and-drop resume parsing, Gemini AI personalization, markdown output, and fast copy/export actions."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 xl:grid-cols-[0.98fr_1.02fr]">
        <motion.form
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="glass-panel rounded-[1.75rem] border border-white/10 bg-[#071126]/80 p-6 shadow-[0_32px_120px_rgba(4,9,28,0.35)] sm:p-8"
        >
          <div className="mb-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-[#081229]/85 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-300/20">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300">Candidate Intelligence</p>
              <h3 className="text-2xl font-black text-white">Professional Details</h3>
            </div>
          </div>

          <fieldset disabled={loading} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="premium-label">Candidate Name</span>
                <input className="premium-input mt-2" placeholder="Alex Morgan" {...register("candidateName")} />
                {errors.candidateName && <p className={fieldError}>{errors.candidateName.message}</p>}
              </label>
              <label className="block">
                <span className="premium-label">Job Role</span>
                <input className="premium-input mt-2" placeholder="Senior Product Manager" {...register("jobRole")} />
                {errors.jobRole && <p className={fieldError}>{errors.jobRole.message}</p>}
              </label>
            </div>

            <label className="block">
              <span className="premium-label">Target Company</span>
              <input className="premium-input mt-2" placeholder="Vercel" {...register("targetCompany")} />
              {errors.targetCompany && <p className={fieldError}>{errors.targetCompany.message}</p>}
            </label>

            <label className="block">
              <span className="premium-label">Skills, wins, and differentiators</span>
              <textarea
                className="premium-textarea mt-2"
                placeholder="Product strategy, AI workflow design, lifecycle analytics, enterprise stakeholder management..."
                {...register("skills")}
              />
              {errors.skills && <p className={fieldError}>{errors.skills.message}</p>}
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <span className="premium-label">Experience Level</span>
                <Controller
                  control={control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <span className="premium-label">Tone Selector</span>
                <Controller
                  control={control}
                  name="tone"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div>
              <span className="premium-label">Resume Upload</span>
              <div className="mt-3">
                <ResumeUpload
                  disabled={loading}
                  resumeText={resumeText}
                  fileName={resumeFileName}
                  onParsed={({ fileName, text }) => {
                    setResumeFileName(fileName);
                    setResumeText(text);
                  }}
                  onClear={() => {
                    setResumeFileName(undefined);
                    setResumeText("");
                  }}
                />
              </div>
            </div>

            <Button type="submit" className="h-[54px] w-full text-base" disabled={loading}>
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {loading ? "Generating..." : "Generate Enterprise Cover Letter"}
            </Button>
          </fieldset>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        >
          <OutputPanel output={output} loading={loading} />
        </motion.div>
      </div>
    </section>
  );
}
