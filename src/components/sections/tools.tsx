// Integrations orbit, in the style of 21st.dev "Logo Orbit" / "Integrations Orbit Section".
import { Calendar, Database, Mail, MessageCircle, Sheet, Slack } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { SectionHeading } from "@/components/sections/section-heading";
import { ToolMark, tools } from "@/components/ui/tool-logos";
import { ScaleIn, Stagger, StaggerItem } from "@/components/ui/motion";

const innerIcons = [Mail, MessageCircle, Calendar, Database, Sheet, Slack];

function Ring({
  size,
  duration,
  reverse,
  children,
}: {
  size: number;
  duration: string;
  reverse?: boolean;
  children: React.ReactNode[];
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
      style={{ width: size, height: size }}
    >
      <div
        className={reverse ? "absolute inset-0 animate-orbit-reverse" : "absolute inset-0 animate-orbit"}
        style={{ "--orbit-duration": duration } as React.CSSProperties}
      >
        {children.map((child, i) => {
          const angle = (360 / children.length) * i;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(-${size / 2}px) rotate(-${angle}deg)` }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                {/* counter-spin so logos stay upright */}
                <div
                  className={reverse ? "animate-orbit" : "animate-orbit-reverse"}
                  style={{ "--orbit-duration": duration } as React.CSSProperties}
                >
                  {child}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Tools() {
  return (
    <section id="tools" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            className="lg:mx-0 lg:text-left"
            eyebrow="Our automation stack"
            title={
              <>
                Four platforms. <span className="text-gradient">One seamless system.</span>
              </>
            }
            description="We pick the right tool for each job and wire them together, so your apps, CRM and AI agents work as one."
          />
          <Stagger as="ul" gap={0.08} className="mt-10 grid gap-3 sm:grid-cols-2">
            {tools.map((t) => (
              <StaggerItem
                as="li"
                key={t.name}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                <ToolMark name={t.name} src={t.src} className="size-11 shrink-0 rounded-xl" />
                <div>
                  <p className="font-display font-semibold text-white">{t.name}</p>
                  <p className="mt-1 text-sm text-white/55">{t.blurb}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <ScaleIn className="relative order-1 mx-auto aspect-square w-full max-w-[460px] lg:order-2">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,transparent_60%)]" />
          <div className="absolute inset-0 origin-center scale-[0.72] sm:scale-100">
            <Ring size={440} duration="40s">
              {tools.map((t) => (
                <ToolMark key={t.name} name={t.name} src={t.src} />
              ))}
            </Ring>
            <Ring size={260} duration="28s" reverse>
              {innerIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-[#0d0d14] text-violet-300"
                >
                  <Icon className="size-4" />
                </div>
              ))}
            </Ring>
            <div className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] shadow-[0_0_80px_-10px_rgba(139,92,246,0.9)]">
              <span className="absolute inset-0 animate-ping rounded-[1.5rem] bg-violet-500/30 [animation-duration:3s]" />
              <BrandMark size={96} title="FlowPilot" className="relative" />
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
