/* eslint-disable @next/next/no-img-element */
// Brand marks for the automation stack. Zapier, Make and n8n come from
// Simple Icons (simpleicons.org). GoHighLevel isn't in Simple Icons or svgl,
// so it's a text mark until the official logo file is added to /public/logos.
import { cn } from "@/lib/utils";

export const tools = [
  { name: "Make", src: "/logos/make.svg", blurb: "Visual scenarios for complex, multi-step flows." },
  { name: "Zapier", src: "/logos/zapier.svg", blurb: "7,000+ app connections, live in minutes." },
  { name: "n8n", src: "/logos/n8n.svg", blurb: "Self-hosted AI agents and custom code nodes." },
  { name: "GoHighLevel", src: null, blurb: "CRM, pipelines, SMS and booking — on autopilot." },
] as const;

export function ToolMark({
  name,
  src,
  className,
}: {
  name: string;
  src: string | null;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/20",
        className,
      )}
      title={name}
    >
      {src ? (
        <img src={src} alt={`${name} logo`} className="size-7" />
      ) : (
        <span
          aria-label="GoHighLevel"
          className="font-display text-[13px] font-bold leading-none tracking-tight text-[#155EEF]"
        >
          HL
        </span>
      )}
    </div>
  );
}
