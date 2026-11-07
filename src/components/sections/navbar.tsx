"use client";

// Glass pill navbar, in the spirit of 21st.dev "Elevate Navbar".
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Logo } from "@/components/sections/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },
  { href: "#why-us", label: "Why us" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 animate-[nav-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both] px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-5 backdrop-blur-xl transition-colors",
          scrolled ? "border-white/10 bg-black/60" : "border-white/[0.06] bg-white/[0.03]",
        )}
      >
        <a href="#top" aria-label="FlowPilot home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ShimmerButton href="#contact" className="h-10">
            Book a call
          </ShimmerButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full text-white/80 hover:bg-white/[0.06] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-2 max-w-5xl origin-top rounded-3xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/[0.06]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ShimmerButton href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">
            Book a call
          </ShimmerButton>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
