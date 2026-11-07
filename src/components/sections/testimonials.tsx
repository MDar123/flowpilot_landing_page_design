// Two-row testimonials marquee, in the style of 21st.dev "Testimonials Marquee" (shadcnspace).
// NOTE: these are placeholder testimonials — replace with real client quotes before launch.
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Dental Studio",
    quote: "The AI receptionist books more appointments than our front desk did. We stopped missing after-hours leads completely.",
  },
  {
    name: "Omar Siddiqui",
    role: "COO, Northline Logistics",
    quote: "They rebuilt our order-to-invoice process in n8n. What took 3 people a full day now runs on its own in minutes.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Lead, Brightside Realty",
    quote: "Our GoHighLevel pipeline finally works. Every lead gets a follow-up within 60 seconds — conversions are up 34%.",
  },
  {
    name: "Daniel Okafor",
    role: "Owner, FitForge Gyms",
    quote: "Membership sign-ups, reminders and payments all sync automatically. I got my evenings back.",
  },
  {
    name: "Ayesha Khan",
    role: "Head of Ops, Craftly Commerce",
    quote: "FlowPilot connected Shopify, our sheets and WhatsApp with Make. Order confirmations are instant now.",
  },
  {
    name: "Lucas Romero",
    role: "Agency Owner, Pixel & Pine",
    quote: "We white-label their Zapier builds for our clients. Reliable, documented and always on time.",
  },
  {
    name: "Hannah Lee",
    role: "Director, Lumen Coaching",
    quote: "The weekly AI summary of our pipeline is the first email I open every Monday. Incredibly useful.",
  },
  {
    name: "Bilal Ahmed",
    role: "CEO, Swift Clinics",
    quote: "Fast, honest and genuinely technical. They talked us out of tools we didn't need and saved us money.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function Card({ name, role, quote }: (typeof testimonials)[number]) {
  return (
    <figure className="w-[300px] shrink-0 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-colors duration-300 hover:border-violet-400/30 sm:w-[360px]">
      <div className="flex gap-0.5 text-amber-300" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-white/75">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/70 to-cyan-400/70 text-sm font-semibold text-white">
          {initials(name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-white">{name}</span>
          <span className="block text-xs text-white/50">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const first = testimonials.slice(0, 4);
  const second = testimonials.slice(4);
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <SectionHeading
        className="px-4"
        eyebrow="Testimonials"
        title={
          <>
            Loved by teams who <span className="text-gradient">hate busywork</span>
          </>
        }
        description="Businesses of every size use FlowPilot to win back time and never drop a lead."
      />

      <Reveal delay={0.15} className="relative mt-16 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Marquee duration="50s">
          {first.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee duration="55s" reverse>
          {second.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
