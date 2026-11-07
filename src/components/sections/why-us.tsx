"use client";

// Why choose us — cards use the 21st.dev "Glowing Effect" border (Aceternity),
// laid out in the same grid as its demo.
import { BadgeCheck, Clock3, Headphones, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionHeading } from "@/components/sections/section-heading";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

const stats = [
  { value: "250+", label: "Workflows launched" },
  { value: "20h", label: "Saved per team, weekly" },
  { value: "7 days", label: "Average time to go live" },
  { value: "98%", label: "Client retention" },
];

const reasons: { icon: LucideIcon; title: string; description: string; area: string }[] = [
  {
    icon: Rocket,
    title: "Live in 7 days, not 7 months",
    description: "A focused sprint: audit, build, test and launch your first automations within a week.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: Clock3,
    title: "ROI you can measure",
    description: "Every build comes with a time-saved and cost-saved report, so you see the payback.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: BadgeCheck,
    title: "Tool-agnostic experts",
    description:
      "Make, Zapier, n8n or GoHighLevel — we choose what fits your budget and scale, not what we resell.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description: "Least-privilege access, encrypted credentials and full documentation you own.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: Headphones,
    title: "A team that stays with you",
    description: "Monitoring, fixes and improvements every month — a real person replies within hours.",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Why choose us"
        title={
          <>
            Automation that <span className="text-gradient">actually ships</span>
          </>
        }
        description="No endless strategy decks. We build, measure and improve — and you own everything we create."
      />

      <Reveal className="mx-auto mt-14 max-w-6xl">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white tabular-nums sm:text-4xl">
                <CountUp value={s.value} className="text-gradient" />
              </dd>
              <p className="mt-2 text-xs text-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>

      <Stagger
        as="ul"
        gap={0.1}
        className="mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2"
      >
        {reasons.map(({ icon: Icon, title, description, area }) => (
          <StaggerItem as="li" key={title} className={`min-h-[13rem] list-none ${area}`}>
            <div className="relative h-full rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-card p-6 shadow-[0_0_27px_0_rgba(45,45,45,0.3)]">
                <div className="w-fit rounded-lg border border-white/10 bg-white/[0.03] p-2 text-violet-200">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-balance text-white md:text-2xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">{description}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
