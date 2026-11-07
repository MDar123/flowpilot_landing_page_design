// Footer with an oversized brand wordmark, in the style of 21st.dev "Footer with Suite" (scrollxui).
import { Github, Heart, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Logo } from "@/components/sections/logo";
import { Reveal } from "@/components/ui/motion";

const columns = [
  {
    title: "Services",
    links: ["AI agents", "Workflow automation", "CRM automation", "Integrations", "Dashboards"],
  },
  { title: "Platforms", links: ["Make.com", "Zapier", "n8n", "GoHighLevel"] },
  { title: "Company", links: ["About", "Case studies", "Careers", "Contact"] },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X / Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] px-4 pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-12">
        <div className="col-span-2 sm:col-span-3 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/55">
            AI automation agency helping businesses run on autopilot with Make, Zapier, n8n and
            GoHighLevel.
          </p>
          <a
            href="mailto:hello@flowpilot.ai"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Mail className="size-4 text-violet-300" />
            hello@flowpilot.ai
          </a>
          <div className="mt-6 flex gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-violet-400/50 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/55 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reveal
        as="p"
        className="pointer-events-none mt-16 bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-center font-display text-[15vw] leading-[0.8] font-bold tracking-tight text-transparent select-none lg:text-[11.5rem]"
      >
        <span aria-hidden>FLOWPILOT</span>
      </Reveal>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-6 text-xs text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} FlowPilot AI. All rights reserved.</p>
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
          <span className="inline-flex items-center gap-1">
            Made with
            <Heart className="size-3.5 animate-pulse fill-pink-500 text-pink-500" aria-label="love" />
            for FlowPilot
          </span>
          <span aria-hidden className="text-white/20">|</span>
          <span>
            Developed by{" "}
            <a
              href="https://mujtabadar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 underline decoration-violet-400/50 underline-offset-4 transition hover:text-white hover:decoration-violet-400"
            >
              Mujtaba Dar
            </a>
          </span>
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
