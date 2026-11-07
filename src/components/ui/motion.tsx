"use client";

// Shared scroll / entrance animations built on Motion (motion.dev).
// Everything respects the visitor's "reduce motion" setting via <MotionProvider>.
import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  type Variants,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

type Tag = "div" | "ul" | "dl" | "li" | "article" | "p" | "span" | "figure";

/** Fades + lifts its children into view once, when scrolled into the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  onLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  /** animate immediately on page load instead of on scroll */
  onLoad?: boolean;
}) {
  const Comp = motion[as] as typeof motion.div;
  const trigger = onLoad
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -12% 0px" } };
  return (
    <Comp
      className={className}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...(fadeUp.show as object), transition: { duration: 0.8, ease: EASE, delay } },
      }}
    >
      {children}
    </Comp>
  );
}

/** Parent that reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  as = "div",
  gap = 0.1,
  delay = 0,
  onLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  gap?: number;
  delay?: number;
  onLoad?: boolean;
}) {
  const Comp = motion[as] as typeof motion.div;
  const trigger = onLoad
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <Comp
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>
  );
}

/** Counts a stat like "250+", "98%" or "7 days" up from 0 when it scrolls into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(match ? 0 : value);

  useEffect(() => {
    if (!inView || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {match ? suffix : ""}
    </span>
  );
}

/**
 * A bar chart whose bars grow up one after another when it scrolls into view.
 * The in-view trigger sits on the container: bars start at zero height, so
 * they can't be observed themselves.
 */
export function GrowBars({
  values,
  className,
  barClassName,
}: {
  values: number[];
  className?: string;
  barClassName?: string;
}) {
  return (
    <motion.div
      className={className}
      // don't follow the parent card's "hidden"/"show" labels; run on our own trigger
      inherit={false}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
    >
      {values.map((h, i) => (
        <motion.div
          key={i}
          className={barClassName}
          style={{ height: `${h}%`, originY: 1 }}
          variants={{
            hidden: { scaleY: 0 },
            show: { scaleY: 1, transition: { duration: 0.9, ease: EASE } },
          }}
        />
      ))}
    </motion.div>
  );
}

/** Scales and fades a block in (used for the orbit and the CTA card). */
export function ScaleIn({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Pops a chat bubble in after a delay, once in view. */
export function Pop({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      inherit={false}
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay }}
    >
      {children}
    </motion.div>
  );
}
