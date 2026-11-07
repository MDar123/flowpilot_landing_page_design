# FlowPilot — AI Automation Landing Page

A dark, animated SaaS landing page for **FlowPilot**, an AI automation agency that builds AI agents and workflows on **Make.com, Zapier, n8n and GoHighLevel**.

## Sections

- **Hero** — Three.js animated dot-wave background (21st.dev *AI Hero Background*), shimmer CTA buttons
- **Tools** — orbiting integration logos around the FlowPilot mark
- **Services** — bento grid with an animated AI chat and a growing chart
- **Why choose us** — count-up stats and cards with a cursor-following glowing border (21st.dev *Glowing Effect*)
- **Testimonials** — two-row infinite marquee
- **CTA** and **Footer** — glowing call-to-action and an oversized wordmark

Scroll-reveal and entrance animations use [Motion](https://motion.dev) and respect the visitor's *reduce motion* setting.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Three.js · Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

- Replace the placeholder testimonials and stats in `src/components/sections/`
- Add the official GoHighLevel logo to `public/logos/` (currently an "HL" text mark)
- Set `metadataBase` in `src/app/layout.tsx` to the live domain so social previews resolve

---

Made with ♥ for FlowPilot · Developed by [Mujtaba Dar](https://mujtabadar.vercel.app/)
