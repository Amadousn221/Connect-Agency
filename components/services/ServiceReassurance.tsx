"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import type { ReassuranceItem } from "@/content/services/_types";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

/**
 * Bande de réassurance contextuelle — remplace le bandeau de logos clients
 * sur les pages service : 4 promesses concrètes propres au pilier, pas de
 * logo, pas de défilement.
 */
export default function ServiceReassurance({ items }: { items: ReassuranceItem[] }) {
  return (
    <section className="section--sm">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={item.titre} data-reveal="" variants={staggerItem()}>
                <span className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="mb-1.5 text-foreground">{item.titre}</h3>
                <p className="text-[0.9rem] text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
