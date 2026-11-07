// Services bento grid, in the style of 21st.dev "Bento Grid" (kokonutd).
import {
  BarChart3,
  Bot,
  CheckCircle2,
  MailCheck,
  Plug,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";
import { GrowBars, Pop, Stagger, StaggerItem } from "@/components/ui/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  className?: string;
  visual?: React.ReactNode;
};

function ChatVisual() {
  return (
    <div className="mt-6 space-y-2.5 text-sm">
      <Pop delay={0.4} className="ml-auto w-fit max-w-[80%] origin-bottom-right rounded-2xl rounded-br-md bg-white/[0.07] px-4 py-2 text-white/80">
        Hi! Do you have any slots this Friday?
      </Pop>
      <Pop delay={1.1} className="flex origin-bottom-left items-end gap-2">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400">
          <Bot className="size-3.5 text-white" />
        </span>
        <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-md bg-violet-500/20 px-4 py-2 text-violet-100 ring-1 ring-violet-400/30">
          Yes — 11:00 or 15:30. I&apos;ve sent a booking link to your WhatsApp ✅
        </div>
      </Pop>
    </div>
  );
}

function ChartVisual() {
  const bars = [38, 52, 45, 63, 58, 74, 69, 88, 81, 96];
  return (
    <GrowBars
      values={bars}
      className="mt-6 flex h-28 items-end gap-2"
      barClassName="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/40 to-cyan-400/80"
    />
  );
}

const services: Service[] = [
  {
    icon: Bot,
    title: "AI agents & chatbots",
    description:
      "Trained on your business, they reply to leads on your website, WhatsApp and Instagram in seconds — and book calls for you, day or night.",
    tags: ["GPT", "WhatsApp", "Web chat"],
    className: "md:col-span-2",
    visual: <ChatVisual />,
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Repetitive tasks turned into reliable flows on Make, Zapier or n8n — from onboarding to invoicing.",
    tags: ["Make", "Zapier", "n8n"],
  },
  {
    icon: Target,
    title: "CRM & lead automation",
    description:
      "GoHighLevel pipelines that capture, score and nurture every lead automatically.",
    tags: ["GoHighLevel", "Pipelines"],
  },
  {
    icon: MailCheck,
    title: "Smart follow-ups",
    description:
      "AI-written email and SMS sequences that follow up at the right moment, every time.",
    tags: ["Email", "SMS"],
  },
  {
    icon: Plug,
    title: "Integrations & data sync",
    description:
      "Your forms, sheets, CRM and tools finally talking to each other — no more copy-paste.",
    tags: ["APIs", "Webhooks"],
  },
  {
    icon: BarChart3,
    title: "Live reporting dashboards",
    description:
      "Leads, revenue and team activity pulled into one dashboard that updates itself, with weekly AI summaries sent to your inbox.",
    tags: ["Dashboards", "AI summaries"],
    className: "md:col-span-3",
    visual: <ChartVisual />,
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <SectionHeading
        eyebrow="What we automate"
        title={
          <>
            Services built to <span className="text-gradient">save you time</span>
          </>
        }
        description="From a single workflow to a fully automated business — we design it, build it and keep it running."
      />

      <Stagger gap={0.09} className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description, tags, className, visual }) => (
          <StaggerItem
            as="article"
            key={title}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.45)] sm:p-8",
              className,
            )}
          >
            <div className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-violet-200">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/60"
                  >
                    <CheckCircle2 className="size-3 text-cyan-300" />
                    {tag}
                  </li>
                ))}
              </ul>
              {visual}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
