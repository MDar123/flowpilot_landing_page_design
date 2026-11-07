import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { AiHeroBackground } from "@/components/ui/ai-hero-background";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ToolMark, tools } from "@/components/ui/tool-logos";
import { Stagger, StaggerItem } from "@/components/ui/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-28 pb-20"
    >
      {/* 21st.dev AI Hero Background (Three.js + bloom), fades in on load */}
      <div className="absolute inset-0 animate-[hero-bg-in_2s_ease-out_both]">
        <AiHeroBackground />
      </div>
      {/* readability vignette + fade into page */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(5,5,7,0.85)_0%,rgba(5,5,7,0.4)_55%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-background" />

      <Stagger
        onLoad
        gap={0.12}
        delay={0.25}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <StaggerItem>
          <a
            href="#services"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200 backdrop-blur transition hover:border-violet-400/60"
          >
            <Sparkles className="size-3.5" />
            New: AI agents that answer leads 24/7
            <ArrowRight className="size-3.5" />
          </a>
        </StaggerItem>

        <h1 className="font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance text-white sm:text-6xl md:text-7xl">
          <StaggerItem as="span" className="block">
            Automate the busywork.
          </StaggerItem>
          <StaggerItem as="span" className="block">
            <span className="text-gradient">Scale with AI.</span>
          </StaggerItem>
        </h1>

        <StaggerItem as="p" className="mt-6 max-w-2xl text-base text-pretty text-white/65 sm:text-lg">
          FlowPilot designs and runs AI agents and automated workflows for your
          business — so leads get answered, data stays in sync and your team
          gets back 20+ hours every week.
        </StaggerItem>

        <StaggerItem className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <ShimmerButton href="#contact" className="w-full sm:w-auto">
            Book a free automation audit
            <ArrowRight className="size-4" />
          </ShimmerButton>
          <ShimmerButton href="#services" variant="ghost" className="w-full sm:w-auto">
            <PlayCircle className="size-4" />
            See what we automate
          </ShimmerButton>
        </StaggerItem>

        <StaggerItem className="mt-14 flex flex-col items-center gap-4">
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
            Built on the tools you trust
          </p>
          <div className="flex items-center gap-3">
            {tools.map((t, i) => (
              <div
                key={t.name}
                className="animate-[float_6s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * -1.5}s` }}
              >
                <ToolMark
                  name={t.name}
                  src={t.src}
                  className="size-11 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
