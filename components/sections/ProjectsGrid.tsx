"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Projet } from "@/types/content";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

interface ProjectsGridProps {
  projets: Projet[];
  emptyMessage?: string;
}

export default function ProjectsGrid({ projets, emptyMessage }: ProjectsGridProps) {
  const reduceMotion = useReducedMotion();

  if (projets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-[var(--color-bg-subtle)] px-6 py-16 text-center sm:px-8">
        <p className="text-muted-foreground">
          {emptyMessage ??
            "Nos réalisations arrivent bientôt. En attendant, contactez-nous : on vous montre volontiers des exemples de projets."}
        </p>
        <Link href="/nous-joindre" className="btn-primary mt-6 inline-flex min-h-11 justify-center">
          Nous joindre
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer(0.1)}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projets.map((p, i) => {
        const isPlaceholder = !p.publie;
        return (
          <motion.article
            key={p.slug}
            data-reveal="" variants={staggerItem()}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-200 hover:border-[var(--color-border-strong)]"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border bg-[var(--color-bg-subtle)]">
              {p.couverture ? (
                <Image
                  src={p.couverture}
                  alt={`Aperçu du site ${p.nom} — ${p.secteur}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(135deg,color-mix(in srgb,var(--brand-petrol) 55%,transparent),color-mix(in srgb,var(--brand-accent-raw) 35%,transparent))"
                        : i % 3 === 1
                          ? "linear-gradient(135deg,color-mix(in srgb,var(--brand-accent-raw) 45%,transparent),color-mix(in srgb,var(--brand-petrol) 40%,transparent))"
                          : "linear-gradient(160deg,color-mix(in srgb,var(--brand-petrol) 60%,transparent),color-mix(in srgb,var(--brand-accent-raw) 28%,transparent))",
                  }}
                />
              )}
              {isPlaceholder && (
                <span className="relative rounded-full border border-dashed border-[var(--color-border-strong)] bg-[var(--navbar-bg)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                  Projet à fournir
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.secteur}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{p.nom}</h3>
              {p.resume && <p className="mt-2 text-sm text-muted-foreground">{p.resume}</p>}
              {p.resultats.length > 0 && (
                <ul className="mt-4 flex flex-col gap-1.5">
                  {p.resultats.map((r) => (
                    <li key={r} className="text-sm text-foreground/80">
                      · {r}
                    </li>
                  ))}
                </ul>
              )}
              {p.lien && (
                <a
                  href={p.lien}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
