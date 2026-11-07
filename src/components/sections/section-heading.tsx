import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "@/components/ui/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <Stagger gap={0.1} className={cn("mx-auto max-w-2xl text-center", className)}>
      <StaggerItem>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-violet-300">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-400 opacity-60" />
            <span className="relative size-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]" />
          </span>
          {eyebrow}
        </p>
      </StaggerItem>
      <StaggerItem>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </h2>
      </StaggerItem>
      {description && (
        <StaggerItem as="p" className="mt-4 text-base text-pretty text-white/60 sm:text-lg">
          {description}
        </StaggerItem>
      )}
    </Stagger>
  );
}
