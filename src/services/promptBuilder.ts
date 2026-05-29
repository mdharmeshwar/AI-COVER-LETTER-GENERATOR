import type { GeneratorFormValues } from "@/sections/generator/schema";

type PromptInput = GeneratorFormValues & {
  resumeText?: string;
};

export function buildCoverLetterPrompt(input: PromptInput) {
  return `
You are an elite executive resume strategist and enterprise SaaS writing assistant.

Write a polished, professional cover letter for the candidate below. The letter must be:
- Specific to the target company and role
- ATS-aware without sounding keyword-stuffed
- Credible, concise, and premium
- Written in a ${input.tone.toLowerCase()} tone
- Structured with a short greeting, 3 concise body paragraphs, and a confident closing
- Output in clean markdown only

Candidate:
Name: ${input.candidateName}
Target role: ${input.jobRole}
Target company: ${input.targetCompany}
Experience level: ${input.experienceLevel}
Key skills and achievements: ${input.skills}

Resume context:
${input.resumeText?.trim() || "No resume text provided. Use the candidate details above."}

Avoid placeholders. If data is missing, write around it elegantly. Keep the letter under 450 words.
`.trim();
}
