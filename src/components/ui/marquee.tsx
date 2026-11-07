// Infinite marquee in the style of 21st.dev marquee components
// (pause on hover, reverse direction, repeated tracks).
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
  duration?: string;
  className?: string;
};

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  repeat = 2,
  duration = "45s",
  className,
}: Props) {
  return (
    <div
      style={{ "--duration": duration, "--gap": "1rem" } as React.CSSProperties}
      className={cn("group flex gap-[var(--gap)] overflow-hidden", className)}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
