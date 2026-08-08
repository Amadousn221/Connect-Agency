"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import type { RaisonItem } from "@/content/services/_types";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

export default function ReasonsList({ raisons }: { raisons: RaisonItem[] }) {
  return (
    <section className="section section--subtle">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Pourquoi ce système</p>
          <h2 className="text-foreground">Ce que ça change concrètement.</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {raisons.map((r) => {
            const Icon = getIcon(r.icon);
            return (
              <motion.div key={r.titre} data-reveal="" variants={staggerItem()}>
                <span className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="mb-1.5 text-foreground">{r.titre}</h3>
                <p className="text-[0.9rem] text-muted-foreground">{r.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
