import { motion, useReducedMotion } from "framer-motion";
import React, { type ComponentProps, type ReactNode } from "react";

/**
 * Shared motion primitives for the marketing (landing) page.
 *
 * Entrances use two components: `Reveal` for content that scrolls into view
 * and `AnimatedContainer` for headlines/hero copy. Hovers are a single, subtle
 * lift with a normal 200ms ease-out transition (no long durations, no delays).
 */

// Gentle ease-out curve shared by hovers.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Consistent hover lift for cards (no rotateX/Y/Z tilt), 200ms ease-out.
export const cardHover = { y: -6 } as const;
export const cardHoverTransition = { duration: 0.2, ease: EASE_OUT } as const;

/**
 * Scroll-into-view reveal. Content rises up from below with a soft blur
 * that resolves as it settles. Respects the user's reduced-motion setting.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Headline / hero entry. Settles gently down from above with a soft blur,
 * a calmer counterpart to Reveal for titles and above-the-fold copy.
 */
export function AnimatedContainer({
  children,
  delay = 0.1,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
