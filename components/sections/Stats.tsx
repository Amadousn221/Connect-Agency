"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { Stat } from "@/types/content";
import Reveal from "@/components/motion/Reveal";

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  // Évite un mismatch d'hydratation : useReducedMotion() ne peut être fiable
  // qu'après le montage côté client (indisponible pendant le rendu serveur).
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!match || !isInView || reduceMotion) return;
    const target = parseFloat(match[1].replace(",", "."));
    const decimals = match[1].includes(".") || match[1].includes(",") ? 1 : 0;

    const controls = animate(0, target, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, reduceMotion]);

  if (!match) {
    return (
      <p ref={ref} className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
        {value}
      </p>
    );
  }

  const suffix = match[2];
  const reduced = mounted && reduceMotion;
  const shown = reduced || isInView ? (reduced ? match[1] : display) : 0;

  return (
    <p ref={ref} className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
      {shown}
      {suffix}
    </p>
  );
}

export default function Stats({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-border py-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="container">
        <p className="eyebrow">EN CHIFFRES</p>
        <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
          Les chiffres derrière notre travail.
        </h2>

        <Reveal className="mt-10 grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="py-6 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
              <CountUp value={s.valeur} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
