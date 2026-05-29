# Project Prompts

This file records the prompts and change requests provided for the AI Cover Letter Generator project.

## Initial Build Prompt

```txt
You are an elite-level Product Designer, Senior SaaS Architect, AI Application Engineer, and Frontend Systems Specialist hired to build a REAL enterprise-grade AI SaaS platform for a premium client.

This is NOT an internship-level website.

This must look and feel like a $20,000+ production-ready AI SaaS application created by a top Silicon Valley product team.

The product name is:

AI Cover Letter Generator

The project MUST follow the Sprint 04 company document EXACTLY while dramatically elevating the UI/UX quality, frontend architecture, product polish, responsiveness, animations, SaaS experience, and visual professionalism.

CORE PRODUCT OBJECTIVE

Build a world-class AI-powered SaaS application where users can:

- Enter professional details
- Upload resume PDF
- Generate AI-powered professional cover letters
- Copy/export results
- Experience premium enterprise-grade UI/UX

The product should feel comparable to:
- OpenAI
- Notion AI
- Linear
- Vercel
- Stripe
- Framer
- Perplexity
- Arc Browser

This should NOT look like:
- a student project
- a template website
- generic Tailwind UI
- a CRUD form app

The final result must feel:
- luxurious
- intelligent
- modern
- futuristic
- trustworthy
- premium
- investor-ready
- enterprise SaaS quality

STRICT TECH STACK

Use ONLY:

- React + Vite
- Tailwind CSS
- Framer Motion
- ShadCN UI
- Lucide React Icons

Additional Libraries:
- React Hook Form
- Zod Validation
- Sonner Toast
- React Markdown
- PDF.js or pdf-parse
- clsx
- tailwind-merge

APPLICATION ARCHITECTURE

Create a scalable enterprise-level frontend architecture:

src/
 ├── components/
 │    ├── ui/
 │    ├── layout/
 │    ├── forms/
 │    ├── animations/
 │    ├── dashboard/
 │    └── shared/
 │
 ├── sections/
 │    ├── hero/
 │    ├── features/
 │    ├── generator/
 │    ├── testimonials/
 │    └── footer/
 │
 ├── services/
 │    ├── gemini.ts
 │    ├── promptBuilder.ts
 │    └── parser.ts
 │
 ├── hooks/
 ├── utils/
 ├── constants/
 ├── lib/
 ├── pages/
 ├── styles/
 └── assets/

DESIGN SYSTEM

The UI/UX must look like a premium AI startup product.

Design Philosophy:
- Minimal but visually powerful
- Enterprise-grade spacing system
- Extremely polished typography
- Premium dark SaaS aesthetic
- High-end interaction design
- Cinematic hero sections
- Strong visual hierarchy
- Sophisticated gradients
- Glassmorphism used subtly
- Elegant shadows
- Layered depth
- Floating UI elements
- Clean alignment
- Pixel-perfect spacing

VISUAL STYLE

The application must feel like:
A billion-dollar AI company platform.

Use:
- dark luxury backgrounds
- deep navy gradients
- electric blue highlights
- violet AI glow effects
- subtle animated aurora lighting
- glass cards
- soft neon borders
- smooth shadows
- elegant divider lines

TYPOGRAPHY SYSTEM

Use large cinematic hero headings, bold modern typography, clean paragraph spacing, elegant line-heights, and strong readability.

PAGE STRUCTURE

Create:
- Premium navbar
- Hero section
- Trust and stats section
- Main AI generator section
- AI functionality
- Resume PDF upload
- Testimonials section
- Final CTA section
- Footer

AI FUNCTIONALITY

Mandatory:
- Real AI integration using Google Gemini API
- Prompt engineering with candidate name, company, role, skills, tone, and resume data
- AI loading state
- Copy to clipboard
- Toast notifications

RESUME PDF UPLOAD

Implement:
- Drag-and-drop upload
- Upload animations
- File preview
- PDF parsing
- Extracted text preview

ANIMATION SYSTEM

Use Framer Motion extensively but professionally.

RESPONSIVENESS

The application must be fully mobile responsive, tablet optimized, desktop optimized, and ultra-wide compatible.

SECURITY REQUIREMENTS

Never expose API keys. Use .env.

FINAL EXPECTATION

The final output must look like a real AI SaaS company product, feel worth $20,000+, impress recruiters immediately, demonstrate elite frontend engineering, demonstrate enterprise UI/UX thinking, demonstrate advanced SaaS architecture, and stand far above normal internship submissions.
```

## Run Request

```txt
run
```

## Remove Testimonials Request

```txt
remove this from the wwebpage

[Screenshot showed the testimonials/customer signal section with testimonial cards for Maya Chen, Julian Reed, and Priya Nair.]
```

## Remove Final CTA Request

```txt
remove

[Screenshot showed the final CTA panel with the heading "Convert every application into a premium story." and buttons "Launch AI Generator" and "View Features".]
```

## Documentation Request

```txt
ADD ALL THE REQUIRED DETAILS IN THE README.MD FILE ALSO CREATE A PROMPT .MD AND GIVE ALL THE PROMPTS THAT I HAVE GIVEN TO YOU FOR THIS PROJECT
```