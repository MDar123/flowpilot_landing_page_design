// Shimmer button in the style of 21st.dev "Shimmer Button" (Magic UI):
// a light travels around the border while a sheen sweeps across the surface.
import { cn } from "@/lib/utils";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function ShimmerButton({ className, children, variant = "primary", ...props }: Props) {
  if (variant === "ghost") {
    return (
      <a
        className={cn(
          "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-px text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)] transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400",
        className,
      )}
      {...props}
    >
      {/* travelling border light */}
      <span
        aria-hidden
        className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_90deg,transparent_0%,#22d3ee_10%,transparent_20%,transparent_50%,#a78bfa_60%,transparent_70%)]"
      />
      <span className="relative inline-flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-violet-500 to-indigo-600 px-6">
        {/* sweeping sheen */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </span>
    </a>
  );
}
