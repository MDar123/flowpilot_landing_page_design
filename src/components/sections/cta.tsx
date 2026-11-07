// Glowing CTA block, in the style of 21st.dev "CTA Section" (shadcnstore).
import { ArrowRight, CalendarCheck } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ScaleIn, Stagger, StaggerItem } from "@/components/ui/motion";

export function Cta() {
  return (
    <section id="contact" className="px-4 py-24 sm:py-32">
      <ScaleIn className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 animate-[glow-drift_12s_ease-in-out_infinite] rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 size-[28rem] animate-[glow-drift_14s_ease-in-out_infinite_reverse] rounded-full bg-cyan-500/20 blur-[120px]" />

        <Stagger gap={0.12} delay={0.2} className="relative">
          <StaggerItem
            as="span"
            className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-violet-200 backdrop-blur"
          >
            <CalendarCheck className="size-6" />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
              Ready to put your business on <span className="text-gradient">autopilot?</span>
            </h2>
          </StaggerItem>
          <StaggerItem as="p" className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
            Book a free 30-minute automation audit. We&apos;ll map your biggest time-wasters and
            show you exactly what we can automate — no strings attached.
          </StaggerItem>
          <StaggerItem className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ShimmerButton href="mailto:hello@flowpilot.ai" className="w-full sm:w-auto">
              Book my free audit
              <ArrowRight className="size-4" />
            </ShimmerButton>
            <ShimmerButton href="#services" variant="ghost" className="w-full sm:w-auto">
              Explore services
            </ShimmerButton>
          </StaggerItem>
          <StaggerItem as="p" className="mt-6 text-xs text-white/40">
            No credit card · Reply within 24 hours
          </StaggerItem>
        </Stagger>
      </ScaleIn>
    </section>
  );
}
