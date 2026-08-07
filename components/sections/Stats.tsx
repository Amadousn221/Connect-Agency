"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/types/content";
import Reveal from "@/components/motion/Reveal";

/** Cubic ease-out, 1200 ms — identique au compteur de la maquette v2. */
const COUNT_EASE = [0.33, 1, 0.68, 1] as const;

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  /** `null` = on affiche la valeur finale (rendu serveur, et une fois l'animation terminée). */
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (!match || !isInView || reduceMotion) return;
    const target = parseFloat(match[1].replace(",", "."));
    const decimals = match[1].includes(".") || match[1].includes(",") ? 1 : 0;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: COUNT_EASE,
      onUpdate: (v) => setDisplay(Number(v.toFixed(decimals))),
      onComplete: () => setDisplay(null),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, reduceMotion]);

  const baseClass =
    "mb-2 font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.5vw,3.4rem)] leading-none font-semibold text-foreground";

  if (!match) {
    return (
      <div ref={ref} className={baseClass}>
        {value}
      </div>
    );
  }

  return (
    <div ref={ref} className={baseClass}>
      {display === null ? match[1] : display}
      <span className="text-primary">{match[2]}</span>
    </div>
  );
}

export default function Stats({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;

  return (
    <section className="section section--subtle">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">En chiffres</p>
          <h2 className="text-foreground">Les chiffres derrière notre travail.</h2>
        </Reveal>

        <Reveal className="grid gap-8 min-[760px]:grid-cols-3 min-[760px]:gap-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="min-[760px]:pr-10 min-[760px]:not-first:border-l min-[760px]:not-first:border-border min-[760px]:not-first:pl-10"
            >
              <CountUp value={s.valeur} />
              <div className="mb-1.5 font-[family-name:var(--font-mono)] text-[var(--fs-eyebrow)] tracking-[0.14em] text-primary uppercase">
                {s.label}
              </div>
              <p className="text-[0.9rem] text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
