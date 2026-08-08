"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

interface ProblemSolutionProps {
  titre: string;
  corps: string;
}

/**
 * Section « problème → solution », fond `--color-bg-subtle` pour rompre le
 * rythme. Visuel latéral : motif mesh abstrait aux couleurs de la marque
 * (jamais de photo de stock), léger parallax au scroll sur desktop.
 */
export default function ProblemSolution({ titre, corps }: ProblemSolutionProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -24, reduceMotion ? 0 : 24]);

  return (
    <section className="section section--subtle">
      <div className="container grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-14">
        <Reveal>
          <h2 className="max-w-[18ch] text-foreground">{titre}</h2>
          <p className="lead mt-5 max-w-[60ch]">{corps}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            ref={ref}
            style={{ y }}
            aria-hidden="true"
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-border"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 15% 10%, color-mix(in srgb, var(--brand-petrol) 55%, transparent), transparent 60%)," +
                  "radial-gradient(100% 80% at 90% 85%, color-mix(in srgb, var(--brand-accent-raw) 45%, transparent), transparent 55%)," +
                  "var(--card)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)," +
                  "linear-gradient(90deg, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
