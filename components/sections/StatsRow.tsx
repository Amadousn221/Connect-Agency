"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Stat } from "@/types/content";

const STAT_PATTERN = /^(\D*)(\d+(?:[.,]\d+)?)(.*)$/;

function CountUpValue({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const match = raw.match(STAT_PATTERN);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : raw);

  useEffect(() => {
    if (!isInView) return;
    const m = raw.match(STAT_PATTERN);
    if (!m) return;
    const [, prefix, numberPart, suffix] = m;
    const target = parseFloat(numberPart.replace(",", "."));
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [isInView, raw]);

  return <span ref={ref}>{display}</span>;
}

/** Reste masqué tant que content/site.ts n'a pas de vraies statistiques (SITE.stats vide). */
export default function StatsRow({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-cw-border py-16 sm:py-20">
      <div className="container">
        <SectionHeader eyebrow="● EN CHIFFRES" title="Les chiffres derrière notre travail." />

        <div className="mt-10 grid divide-y divide-cw-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="py-6 text-center first:pt-0 sm:px-8 sm:py-0 sm:text-left sm:first:pl-0">
              <p className="font-display text-cw-h1 font-semibold tracking-[var(--cw-tracking-tight)] text-cw-accent">
                <CountUpValue raw={s.valeur} />
              </p>
              <p className="mt-2 text-cw-sm font-semibold uppercase tracking-wider text-cw-subtletext">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-cw-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
