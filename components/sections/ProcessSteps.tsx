"use client";

import { motion } from "framer-motion";
import { PROCESSUS_STANDARD } from "@/content/site";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

export default function ProcessSteps({
  titre = "Comment se déroule un projet avec nous.",
  eyebrow = "Le processus",
}: {
  titre?: string;
  eyebrow?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-foreground">{titre}</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.08)}
          className="grid gap-4 min-[820px]:grid-cols-3"
        >
          {PROCESSUS_STANDARD.map((step) => (
            <motion.article key={step.etape} data-reveal="" variants={staggerItem()} className="card">
              <div className="mb-[1.4rem] flex items-center gap-[0.55rem] font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--color-text-subtle)] after:h-px after:flex-1 after:bg-border after:content-['']">
                {step.etape}
              </div>
              <h3 className="mb-[0.45rem] text-foreground">{step.titre}</h3>
              <p className="text-[0.93rem] text-muted-foreground">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
