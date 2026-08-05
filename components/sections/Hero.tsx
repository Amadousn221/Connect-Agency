"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Globe, Sparkles, Boxes, TrendingUp } from "lucide-react";
import type { Cta } from "@/types/content";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, EASE } from "@/components/motion/Reveal";

interface HeroProps {
  eyebrow: string;
  h1: ReactNode;
  chapo: string;
  ctas: Cta[];
}

const HERO_PILLARS = [
  { icon: Globe, label: "Sites & plateformes" },
  { icon: Sparkles, label: "IA & automatisation" },
  { icon: Boxes, label: "CRM & ERP" },
  { icon: TrendingUp, label: "Marketing" },
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero({ eyebrow, h1, chapo, ctas }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[40rem] bg-[radial-gradient(55%_55%_at_25%_10%,color-mix(in_oklch,var(--primary),transparent_84%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] h-[28rem] w-[28rem] bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklch,var(--accent),transparent_88%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="container relative py-16 sm:py-20 lg:flex lg:min-h-[88vh] lg:items-center lg:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
          className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-10"
        >
          <div className="text-center lg:text-left">
            <motion.p variants={staggerItem(reduceMotion ?? false)} className="eyebrow justify-center lg:justify-start">
              {eyebrow}
            </motion.p>
            <motion.h1
              variants={staggerItem(reduceMotion ?? false)}
              className="mt-5 text-balance text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground"
            >
              {h1}
            </motion.h1>
            <motion.p
              variants={staggerItem(reduceMotion ?? false)}
              className="mx-auto mt-6 max-w-xl text-balance text-[clamp(1.05rem,1.4vw,1.3rem)] text-muted-foreground lg:mx-0"
            >
              {chapo}
            </motion.p>

            <motion.div
              variants={staggerItem(reduceMotion ?? false)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              {ctas.map((cta, i) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={cn("min-h-11 justify-center", i === 0 ? "btn-primary" : "btn-outline")}
                >
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerItem(reduceMotion ?? false)}
            style={reduceMotion ? undefined : { y: parallaxY }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HERO_PILLARS.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: EASE } }}
                  className={cn(
                    "group rounded-2xl border border-border bg-card p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary),transparent_60%),0_12px_32px_-12px_color-mix(in_oklch,var(--primary),transparent_60%)]",
                    i % 2 === 1 && "lg:translate-y-6"
                  )}
                >
                  <Icon className="size-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
