# AI-COVER-LETTER-GENERATOR
# AI Cover Letter Generator

An enterprise-style AI SaaS frontend for generating professional, resume-aware cover letters. The app lets users enter candidate details, upload a resume PDF, generate an AI-powered cover letter, preview markdown output, copy the result, and export it.

## Overview

AI Cover Letter Generator is built as a polished React + Vite SaaS application with a premium dark interface, responsive layouts, glassmorphism panels, animated UI, validated forms, local PDF parsing, and AI generation support.

The current page includes:

- Premium glassmorphism navbar
- Cinematic hero section
- Trust and stats section
- Feature cards
- Main AI generator dashboard
- Modern footer

The testimonials section and final CTA section were intentionally removed based on later project feedback.

## Tech Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN-style UI primitives
- Lucide React Icons
- React Hook Form
- Zod validation
- Sonner toast notifications
- React Markdown
- PDF.js
- clsx
- tailwind-merge
- Express proxy server

## Features

- Candidate detail form with validation
- Job role and target company inputs
- Skills and achievements textarea
- Experience level selector
- Tone selector
- Drag-and-drop PDF resume upload
- Local browser-based PDF text extraction
- Extracted resume text preview
- AI prompt generation using candidate, job, tone, and resume data
- AI-generated cover letter output
- Markdown rendering
- Animated typing effect
- Loading skeleton state
- Copy to clipboard
- Markdown export
- Toast success and error feedback
- Responsive desktop, tablet, and mobile layout

## AI Providers

The app supports two AI paths:

1. `apifreellm` through the included Express proxy
2. Gemini fallback through the browser environment variable

The default provider is controlled by:

```env
VITE_AI_PROVIDER=apifreellm
```

### APIFreeLLM Proxy

For `apifreellm`, the frontend calls:

```txt
/api/chat
```

The Express server forwards the request to:

```txt
https://apifreellm.com/api/v1/chat
```

This keeps the server API key out of frontend code.

### Gemini Fallback

If `VITE_AI_PROVIDER` is set to `gemini`, the app uses:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Important: do not commit real API keys.

## Environment Setup

Create a `.env` file in the project root.

For APIFreeLLM:

```env
VITE_AI_PROVIDER=apifreellm
AI_API_KEY=your_apifreellm_api_key
```

For Gemini:

```env
VITE_AI_PROVIDER=gemini
VITE_GEMINI_API_KEY=your_gemini_api_key
```

An example file is included at:

```txt
.env.example
```

## Installation

Install dependencies:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```bash
npm.cmd install
```

## Development

Run only the Vite frontend:

```bash
npm run dev
```

Run the Express proxy and Vite frontend together:

```bash
npm run dev:proxy
```

The Vite app usually runs at:

```txt
http://localhost:5173
```

The Express server runs at:

```txt
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Serve the built app with the Express server:

```bash
npm run serve
```

## Render Deployment

This project includes `render.yaml` for Render web service deployment.

Recommended Render settings:

```txt
Environment: Node
Build Command: npm ci && npm run build
Start Command: npm start
```

Required environment variables in Render:

```env
VITE_AI_PROVIDER=apifreellm
AI_API_KEY=your_apifreellm_api_key
```

Optional Gemini fallback:

```env
VITE_AI_PROVIDER=gemini
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Important deployment notes:

- Commit and push `server.js`; Render starts the app with `node server.js`.
- Do not set the build command to only `yarn` or `npm install`; the Vite app must be built with `npm run build`.
- Keep one package manager lockfile. This project uses `package-lock.json`, so npm commands are recommended.
- If Render shows `Cannot find module '/opt/render/project/src/server.js'`, the deployed GitHub commit does not contain `server.js` or Render is deploying an older commit.
- Add `AI_API_KEY` in Render environment variables before using the AI generator endpoint.

## Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```txt
src/
  components/
    animations/
    dashboard/
    forms/
    layout/
    shared/
    ui/
  constants/
  hooks/
  lib/
  pages/
  sections/
    features/
    footer/
    generator/
    hero/
    testimonials/
  services/
  styles/
```

## Important Files

- `src/pages/LandingPage.tsx` - page composition
- `src/sections/hero/HeroSection.tsx` - hero experience
- `src/sections/generator/GeneratorSection.tsx` - main generator dashboard
- `src/components/forms/ResumeUpload.tsx` - PDF upload and parsing UI
- `src/components/dashboard/OutputPanel.tsx` - markdown output, copy, export, loading states
- `src/services/gemini.ts` - AI provider integration
- `src/services/promptBuilder.ts` - cover letter prompt construction
- `src/services/parser.ts` - PDF.js resume text extraction
- `server.js` - Express API proxy and static production server

## Validation

The generator form uses Zod through React Hook Form. Required fields include:

- Candidate name
- Job role
- Target company
- Skills
- Experience level
- Tone

## Security Notes

- Real API keys must live in `.env` or deployment environment variables.
- `.env` files are ignored by Git.
- The APIFreeLLM key is read by `server.js` as `AI_API_KEY`.
- Gemini is available as a browser-side fallback using `VITE_GEMINI_API_KEY`.
- Never hard-code secrets into source files.

## Build Status

The project has been verified with:

```bash
npm.cmd run build
```

Vite may warn that some chunks are larger than 500 KB because PDF.js includes a large worker bundle. This is expected for local PDF parsing.
