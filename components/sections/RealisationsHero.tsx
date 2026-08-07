"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/components/layout/ContactModalProvider";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

/**
 * Hero court de la page Réalisations — reprise du `.hero` de la maquette :
 * aligné à gauche, padding réduit, halos remontés. Le CTA ouvre la modale de
 * contact partagée.
 */
export default function RealisationsHero() {
  const { open } = useContactModal();

  return (
    <section className="relative isolate overflow-hidden pt-[clamp(32px,4vw,52px)] pb-[clamp(28px,3.5vw,40px)]">
      <div className="glow pointer-events-none absolute -top-[240px] -left-[180px] h-[460px] w-[460px] bg-[var(--glow-1)]" aria-hidden="true" />
      <div className="glow pointer-events-none absolute -top-[160px] -right-[140px] h-[360px] w-[360px] bg-[var(--glow-2)]" aria-hidden="true" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.08)}
        className="container relative max-w-[46rem]"
      >
        <motion.p data-reveal="" variants={staggerItem()} className="eyebrow">
          Réalisations
        </motion.p>
        <motion.h1 data-reveal="" variants={staggerItem()} className="mt-[0.85rem] mb-[0.75rem] max-w-[18ch] text-foreground">
          Des projets qui <span className="text-primary">tournent</span>, pour de vraies entreprises.
        </motion.h1>
        <motion.p data-reveal="" variants={staggerItem()} className="lead max-w-[56ch]">
          Quelques projets récents réalisés pour des entreprises de différents secteurs, au Sénégal et en Afrique de
          l&apos;Ouest. Notre site ne montre qu&apos;une partie de notre travail — contactez-nous et on vous présentera
          d&apos;autres exemples proches du vôtre.
        </motion.p>
        <motion.div data-reveal="" variants={staggerItem()} className="mt-6">
          <button type="button" onClick={open} className="btn-primary">
            Parlons de votre projet
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
