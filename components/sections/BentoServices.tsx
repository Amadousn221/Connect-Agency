"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Blocks, Globe, TrendingUp, Code2, Sparkles, Lightbulb, type LucideIcon } from "lucide-react";
import { HOME_BENTO } from "@/content/home";
import { cn } from "@/lib/utils";
import Reveal, { staggerContainer, staggerItem } from "@/components/motion/Reveal";

const MotionLink = motion.create(Link);

const ICONS: Record<string, LucideIcon> = {
  "/services/crm-erp-integrations": Blocks,
  "/services/marketing-generation-prospects": TrendingUp,
  "/services/sites-web-ecommerce": Globe,
  "/services/logiciels-applications-web": Code2,
  "/services/ia-automatisation": Sparkles,
  "/services/conseil-strategie": Lightbulb,
};

export default function BentoServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section pt-0 section--subtle" id="services">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Nos services</p>
          <h2 className="text-foreground">Ce que nous faisons.</h2>
          <p className="text-muted-foreground">
            Six piliers, une seule équipe. On peut n&apos;en activer qu&apos;un — ou les connecter tous en un système
            de vente cohérent.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOME_BENTO.map((card, i) => {
            const Icon = ICONS[card.href] ?? Globe;
            const glow = i % 2 === 0 ? "var(--glow-1)" : "var(--glow-2)";

            return (
              <MotionLink
                key={card.href}
                href={card.href}
                data-reveal="" variants={staggerItem()}
                whileHover={reduceMotion ? undefined : { scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "group relative flex min-h-[236px] flex-col gap-2.5 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200",
                  "hover:border-[var(--color-border-strong)]",
                  card.star && "border-[color-mix(in_srgb,var(--brand-accent-raw)_45%,transparent)]"
                )}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[35%] -bottom-[55%] size-[230px] rounded-full opacity-[var(--glow-alpha)] blur-[55px] transition-transform duration-[400ms] group-hover:scale-115"
                  style={{ background: glow }}
                />

                {card.star && (
                  <span className="absolute top-4 right-4 rounded-full bg-[var(--color-accent-subtle)] px-2 py-1 font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.1em] text-primary uppercase">
                    Pilier phare
                  </span>
                )}

                <span className="relative flex size-9 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                  <Icon className="size-[18px]" />
                </span>
                <h3 className="relative text-lg font-semibold text-foreground">{card.titre}</h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">{card.corps}</p>
                <span className="relative mt-auto inline-flex items-center gap-1.5 pt-3.5 text-sm font-medium text-primary">
                  En savoir plus
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </MotionLink>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
