"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import type { CapaciteItem } from "@/content/services/_types";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

interface CapabilityGridProps {
  capacites: CapaciteItem[];
  pilier: string;
  star?: boolean;
  subtle?: boolean;
}

export default function CapabilityGrid({ capacites, pilier, star = false, subtle = false }: CapabilityGridProps) {
  return (
    <section className={"section pt-0" + (subtle ? " section--subtle" : "")}>
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Nos services</p>
          <h2 className="text-foreground">Ce que nous faisons pour {pilier.toLowerCase()}.</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capacites.map((c) => {
            const Icon = getIcon(c.icon);
            return (
              <motion.article
                key={c.titre}
                data-reveal=""
                variants={staggerItem()}
                className={
                  "group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-[clamp(1.3rem,2.2vw,1.85rem)] transition-[transform,border-color,box-shadow] duration-[220ms] hover:-translate-y-[2px] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]" +
                  (star ? " border-[color-mix(in_srgb,var(--brand-accent-raw)_35%,transparent)]" : "")
                }
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 -right-6 size-28 rounded-full bg-[var(--glow-2)] opacity-0 blur-2xl transition-[opacity,transform] duration-[220ms] group-hover:scale-105 group-hover:opacity-[var(--glow-alpha)]"
                />
                <span className="relative mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary transition-colors duration-[220ms] group-hover:text-[var(--brand-accent-raw)]">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="relative mb-1.5 text-foreground">{c.titre}</h3>
                <p className="relative text-[0.9rem] text-muted-foreground">{c.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
