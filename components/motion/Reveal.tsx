"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

/**
 * Équivalent de la classe `.reveal` + IntersectionObserver de la maquette :
 * opacity 0 → 1 et y 16 → 0, 0.5 s ease-out, une seule fois, marge -60px.
 *
 * Le respect de `prefers-reduced-motion` est traité en CSS (`[data-reveal]`
 * dans globals.css) et non en JS : brancher le rendu sur `useReducedMotion()`
 * produirait un HTML serveur différent du client, et l'`opacity: 0` posé au
 * SSR resterait figé après hydratation.
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function staggerItem(): Variants {
  return {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
}

export { EASE };
