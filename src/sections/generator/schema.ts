import { z } from "zod";

export const generatorSchema = z.object({
  candidateName: z.string().min(2, "Enter your full name."),
  jobRole: z.string().min(2, "Enter the target role."),
  targetCompany: z.string().min(2, "Enter the company name."),
  skills: z.string().min(20, "Add at least 20 characters describing your strengths."),
  experienceLevel: z.string().min(1, "Select experience level."),
  tone: z.string().min(1, "Select a tone."),
});

export type GeneratorFormValues = z.infer<typeof generatorSchema>;
