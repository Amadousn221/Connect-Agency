"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import type { ProcessItem } from "@/content/services/_types";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

/**
 * 3 étapes numérotées, cartouche à icône. Une ligne de progression se dessine
 * entre elles au scroll (`pathLength` animé) — statique en reduced-motion.
 */
export default function ProcessSteps({ steps }: { steps: ProcessItem[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Le processus</p>
          <h2 className="text-foreground">Comment se déroule un projet avec nous.</h2>
        </Reveal>

        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-9 left-[16.5%] hidden h-[2px] w-[67%] overflow-visible min-[820px]:block"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="1" x2="100%" y2="1" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="var(--primary)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut", delay: 0.15 }}
            />
          </svg>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.1)}
            className="grid gap-4 min-[820px]:grid-cols-3"
          >
            {steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.article key={step.titre} data-reveal="" variants={staggerItem()} className="card relative">
                  <span className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <p className="mb-1 font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--color-text-subtle)]">
                    Étape {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-[0.45rem] text-foreground">{step.titre}</h3>
                  <p className="text-[0.93rem] text-muted-foreground">{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
