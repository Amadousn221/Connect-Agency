"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/components/layout/ContactModalProvider";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

/** Découpe `**mot**` en span accent — seule syntaxe supportée dans les H1 de service. */
function renderAccent(h1: string) {
  const parts = h1.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (!match) return part;
    return (
      <span key={i} className="text-primary">
        {match[1]}
      </span>
    );
  });
}

interface ServiceHeroProps {
  eyebrow: string;
  h1: string;
  chapo: string;
  parent?: { label: string; href: string };
}

/**
 * Hero des pages de service — halos + grain repris du socle, cascade
 * d'apparition (fil d'Ariane → eyebrow → H1 → chapô → CTA), stagger 0.08 s.
 */
export default function ServiceHero({ eyebrow, h1, chapo, parent }: ServiceHeroProps) {
  const { open } = useContactModal();

  return (
    <section className="relative isolate overflow-hidden pt-[clamp(40px,5.5vw,64px)] pb-[clamp(56px,8vw,100px)]">
      <div className="glow pointer-events-none absolute -top-[240px] -left-[160px] h-[460px] w-[460px] bg-[var(--glow-1)]" aria-hidden="true" />
      <div className="glow pointer-events-none absolute -top-[140px] -right-[120px] h-[360px] w-[360px] bg-[var(--glow-2)]" aria-hidden="true" />

      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.08)} className="container relative max-w-[46rem]">
        {parent && (
          <motion.nav
            data-reveal=""
            variants={staggerItem()}
            aria-label="Fil d'Ariane"
            className="mb-4 flex items-center gap-1.5 text-[0.82rem] text-muted-foreground"
          >
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <Link href={parent.href} className="transition-colors hover:text-foreground">
              {parent.label}
            </Link>
          </motion.nav>
        )}

        <motion.p data-reveal="" variants={staggerItem()} className="eyebrow">
          {eyebrow}
        </motion.p>
        <motion.h1 data-reveal="" variants={staggerItem()} className="mt-[0.85rem] mb-[0.75rem] max-w-[20ch] text-foreground">
          {renderAccent(h1)}
        </motion.h1>
        <motion.p data-reveal="" variants={staggerItem()} className="lead max-w-[58ch]">
          {chapo}
        </motion.p>

        <motion.div data-reveal="" variants={staggerItem()} className="mt-7 flex flex-wrap gap-[0.7rem]">
          <button type="button" onClick={open} className="btn-primary">
            Demander une soumission
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
          <Link href="/realisations" className="btn-outline">
            Voir nos réalisations
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
