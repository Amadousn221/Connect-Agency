"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const CHART_HEIGHTS = [38, 52, 44, 66, 86, 74, 58];

/**
 * Mosaïque de 3 aperçus d'interface (tableau de bord, boutique, CRM) —
 * reprise de la maquette v2. Parallax souris uniquement ≥ 980 px et hors
 * `prefers-reduced-motion`.
 */
export default function HeroMosaic() {
  const reduceMotion = useReducedMotion();
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const mosaic = mosaicRef.current;
    if (!mosaic) return;
    const mq = window.matchMedia("(min-width: 980px)");

    const onMove = (e: MouseEvent) => {
      const r = mosaic.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mosaic.querySelectorAll<HTMLElement>("[data-depth]").forEach((frame) => {
        const depth = Number(frame.dataset.depth);
        frame.style.transform = `translate3d(${-x * depth}px,${-y * depth}px,0) rotateY(${-x * 3}deg) rotateX(${y * 3}deg)`;
      });
    };
    const onLeave = () => {
      mosaic.querySelectorAll<HTMLElement>("[data-depth]").forEach((frame) => {
        frame.style.transform = "";
      });
    };

    if (!mq.matches) return;
    mosaic.addEventListener("mousemove", onMove);
    mosaic.addEventListener("mouseleave", onLeave);
    return () => {
      mosaic.removeEventListener("mousemove", onMove);
      mosaic.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={mosaicRef}
      aria-hidden="true"
      className="grid grid-cols-2 gap-3 sm:gap-3.5"
      style={{ perspective: "1200px" }}
    >
      {/* aperçu tableau de bord */}
      <div
        data-depth="10"
        className="col-span-2 overflow-hidden rounded-[var(--radius-md)] border border-border bg-card shadow-[var(--shadow-md)] transition-transform duration-[400ms] ease-out"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-[var(--color-bg-subtle)] px-2.5 py-2">
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <em className="ml-1.5 font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.08em] text-muted-foreground uppercase not-italic">
            Tableau de bord
          </em>
        </div>
        <div className="grid gap-2.5 p-3">
          <div className="grid grid-cols-3 gap-2">
            {["+38 %", "124", "9 j"].map((v) => (
              <div key={v} className="grid gap-1 rounded-[6px] border border-border bg-[var(--color-bg-subtle)] px-2 py-1.5">
                <b className="font-[family-name:var(--font-display)] text-[0.85rem] leading-none">{v}</b>
                <span className="h-1 w-[70%] rounded-full bg-[var(--color-border-strong)]" />
              </div>
            ))}
          </div>
          <div className="flex h-[74px] items-end gap-1.5 pt-0.5">
            {CHART_HEIGHTS.map((h, i) => (
              <i
                key={i}
                className="flex-1 rounded-t-[3px]"
                style={{
                  height: `${h}%`,
                  background: i >= 4 ? "var(--brand-accent-raw)" : "var(--brand-petrol)",
                  opacity: i === 4 ? 1 : i === 5 ? 0.85 : 0.55,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* aperçu boutique */}
      <div
        data-depth="18"
        className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-card shadow-[var(--shadow-md)] transition-transform duration-[400ms] ease-out"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-[var(--color-bg-subtle)] px-2.5 py-2">
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <em className="ml-1.5 font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.08em] text-muted-foreground uppercase not-italic">
            Boutique
          </em>
        </div>
        <div className="grid gap-2.5 p-3">
          <div
            className="h-[52px] rounded-[6px]"
            style={{ background: "linear-gradient(130deg,var(--brand-petrol),var(--brand-accent-raw))" }}
          />
          <span className="h-1 w-[70%] rounded-full bg-[var(--color-border-strong)]" />
          <div className="flex items-center justify-between gap-2">
            <span className="h-1 w-[45%] rounded-full bg-[var(--color-border-strong)]" />
            <span className="rounded-full bg-[var(--color-accent-subtle)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.6rem] text-primary">
              12 500 F
            </span>
          </div>
        </div>
      </div>

      {/* aperçu CRM */}
      <div
        data-depth="26"
        className="mt-5 overflow-hidden rounded-[var(--radius-md)] border border-border bg-card shadow-[var(--shadow-md)] transition-transform duration-[400ms] ease-out"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-[var(--color-bg-subtle)] px-2.5 py-2">
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <i className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <em className="ml-1.5 font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.08em] text-muted-foreground uppercase not-italic">
            CRM
          </em>
        </div>
        <div className="grid gap-2 p-3">
          {[
            { color: "var(--brand-petrol)", w: "70%" },
            { color: "var(--brand-accent-raw)", w: "85%" },
            { color: "var(--brand-petrol)", w: "45%" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <u className="size-4 shrink-0 rounded-full no-underline" style={{ background: row.color }} />
              <span className="h-[5px] flex-1 rounded-[3px] bg-[var(--color-border-strong)]" style={{ maxWidth: row.w }} />
              <span className="size-[7px] shrink-0 rounded-full" style={{ background: "var(--brand-accent-raw)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
