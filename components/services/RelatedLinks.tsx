"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { RelatedLink } from "@/content/services/_types";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="section border-t border-border">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Pour aller plus loin</p>
          <h2 className="text-foreground">Services connexes.</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {links.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <motion.div key={link.href} data-reveal="" variants={staggerItem()}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-foreground">{link.label}</h3>
                    <p className="text-[0.88rem] text-muted-foreground">{link.desc}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary">
                    Découvrir
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
