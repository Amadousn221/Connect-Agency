"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe, Sparkles, Boxes, TrendingUp, Check, ArrowRight } from "lucide-react";
import type { Cta } from "@/types/content";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, EASE } from "@/components/motion/Reveal";
import { useContactModal } from "@/components/layout/ContactModalProvider";
import HeroMosaic from "./HeroMosaic";

interface HeroProps {
  eyebrow: string;
  h1: ReactNode;
  chapo: string;
  ctas: Cta[];
  /** Mosaïque d'aperçus d'interface (réservée à l'accueil) */
  mosaic?: boolean;
  /** Ligne de réassurance sous les CTA (réservée à l'accueil) */
  meta?: string[];
}

const HERO_PILLARS = [
  { icon: Globe, label: "Sites & plateformes" },
  { icon: Sparkles, label: "IA & automatisation" },
  { icon: Boxes, label: "CRM & ERP" },
  { icon: TrendingUp, label: "Marketing" },
];

const NETWORK_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 760' preserveAspectRatio='xMidYMid slice'%3E%3Cg stroke='%2318516E' stroke-width='1.6' fill='none' opacity='.85'%3E%3Cpath d='M-40 520 L180 380 L420 470 L640 300 L880 400 L1120 250 L1260 330'/%3E%3Cpath d='M-40 680 L180 380'/%3E%3Cpath d='M420 470 L380 720'/%3E%3Cpath d='M640 300 L700 80'/%3E%3Cpath d='M880 400 L960 660'/%3E%3Cpath d='M1120 250 L1060 50'/%3E%3Cpath d='M180 380 L640 300'/%3E%3Cpath d='M420 470 L880 400'/%3E%3Cpath d='M640 300 L1120 250'/%3E%3C/g%3E%3Cg fill='%23F1571A'%3E%3Ccircle cx='180' cy='380' r='7'/%3E%3Ccircle cx='640' cy='300' r='9'/%3E%3Ccircle cx='1120' cy='250' r='7'/%3E%3C/g%3E%3Cg fill='%2318516E'%3E%3Ccircle cx='420' cy='470' r='6'/%3E%3Ccircle cx='880' cy='400' r='6'/%3E%3Ccircle cx='700' cy='80' r='5'/%3E%3Ccircle cx='960' cy='660' r='6'/%3E%3Ccircle cx='380' cy='720' r='5'/%3E%3C/g%3E%3C/svg%3E\")";

export default function Hero({ eyebrow, h1, chapo, ctas, mosaic = false, meta }: HeroProps) {
  const { open: openModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 40]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pt-[clamp(56px,7vw,86px)] pb-[clamp(56px,8vw,100px)]"
    >
      {mosaic ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20"
            style={{ opacity: "var(--hero-bg-alpha)", backgroundImage: NETWORK_BG, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(100deg,var(--background) 8%,color-mix(in srgb,var(--background) 72%,transparent) 46%,transparent 78%),linear-gradient(to bottom,transparent 55%,var(--background) 98%)",
            }}
          />
          <div className="glow pointer-events-none absolute -top-[280px] -left-[180px] -z-10 h-[620px] w-[620px] bg-[var(--glow-1)]" aria-hidden="true" />
          <div className="glow pointer-events-none absolute -right-[120px] -bottom-[280px] -z-10 h-[520px] w-[520px] bg-[var(--glow-2)]" aria-hidden="true" />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[40rem] bg-[radial-gradient(55%_55%_at_25%_10%,color-mix(in_oklch,var(--primary),transparent_84%),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-[28rem] w-[28rem] bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklch,var(--accent),transparent_88%),transparent_70%)]"
          />
        </>
      )}

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.08)}
        className="container relative grid items-center gap-[clamp(2.5rem,4vw,3.5rem)] min-[980px]:grid-cols-[1.05fr_1fr]"
      >
        <div>
          <motion.p data-reveal="" variants={staggerItem()} className="eyebrow">
            {eyebrow}
          </motion.p>
          <motion.h1
            data-reveal="" variants={staggerItem()}
            className="mt-4 mb-[0.85rem] max-w-[16ch] text-foreground"
          >
            {h1}
          </motion.h1>
          <motion.p data-reveal="" variants={staggerItem()} className="lead max-w-[48ch]">
            {chapo}
          </motion.p>

          <motion.div
            data-reveal="" variants={staggerItem()}
            className="mt-[1.9rem] flex flex-wrap gap-[0.7rem]"
          >
            {ctas.map((cta, i) => {
              const className = i === 0 ? "btn-primary" : "btn-outline";
              const content = (
                <>
                  {cta.label}
                  {i === 0 && <ArrowRight className="size-4" aria-hidden="true" />}
                </>
              );

              return cta.modal ? (
                <button key={cta.label} type="button" onClick={openModal} className={className}>
                  {content}
                </button>
              ) : (
                <Link key={cta.href + cta.label} href={cta.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </motion.div>

          {meta && meta.length > 0 && (
            <motion.div
              data-reveal="" variants={staggerItem()}
              className="mt-8 flex flex-wrap gap-x-[1.1rem] gap-y-2 text-[0.84rem] text-[var(--color-text-subtle)]"
            >
              {meta.map((line) => (
                <span key={line} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary" aria-hidden="true" />
                  {line}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div data-reveal="" variants={staggerItem()} style={reduceMotion ? undefined : { y: parallaxY }}>
          {mosaic ? (
            <HeroMosaic />
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HERO_PILLARS.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: EASE } }}
                  className={cn(
                    "group rounded-2xl border border-border bg-card p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]",
                    i % 2 === 1 && "lg:translate-y-6"
                  )}
                >
                  <Icon className="size-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
