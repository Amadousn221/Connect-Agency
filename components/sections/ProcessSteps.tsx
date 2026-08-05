"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Palette, Rocket, type LucideIcon } from "lucide-react";
import { PROCESSUS_STANDARD } from "@/content/site";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

const ICONS: LucideIcon[] = [Search, Palette, Rocket];

export default function ProcessSteps({
  titre = "Comment se déroule un projet avec nous",
}: {
  titre?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <p className="eyebrow">● NOTRE PROCESSUS</p>
        <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
          {titre}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.12)}
          className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-[16.5%] top-9 hidden border-t border-dashed border-border sm:block"
          />

          {PROCESSUS_STANDARD.map((step, i) => {
            const Icon = ICONS[i] ?? Search;
            return (
              <motion.div
                key={step.etape}
                variants={staggerItem(reduceMotion ?? false)}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card text-primary">
                    <Icon className="size-4" />
                    {i < PROCESSUS_STANDARD.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 border-l border-dashed border-border sm:hidden"
                      />
                    )}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{step.etape}</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
