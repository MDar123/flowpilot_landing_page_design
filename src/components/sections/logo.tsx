import { BrandMark } from "@/components/ui/brand-mark";

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark size={32} className="drop-shadow-[0_0_14px_rgba(139,92,246,0.55)]" />
      <span className="font-display text-[17px] font-bold tracking-[0.08em] text-white">
        FLOWPILOT
      </span>
    </span>
  );
}
