"use client";

import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  secteurs: string[];
  active: string;
  onChange: (filtre: string) => void;
  /** Nombre total de projets (affiché sur la puce « Tous »). */
  total: number;
}

/** Puces de filtre par secteur — reprise du bloc `.filters` de la maquette. */
export default function ProjectFilters({ secteurs, active, onChange, total }: ProjectFiltersProps) {
  const chipClass = (isActive: boolean) =>
    cn(
      "min-h-11 rounded-full border px-4 py-2 text-[0.86rem] transition-colors duration-200",
      isActive
        ? "border-primary bg-[var(--color-accent-subtle)] text-primary"
        : "border-border text-muted-foreground hover:border-[var(--color-border-strong)] hover:text-foreground"
    );

  return (
    <div role="group" aria-label="Filtrer par secteur" className="mb-9 flex flex-wrap gap-[0.55rem]">
      <button type="button" aria-pressed={active === "all"} onClick={() => onChange("all")} className={chipClass(active === "all")}>
        Tous <span className="ml-[0.35rem] font-[family-name:var(--font-mono)] text-[0.78rem] text-[var(--color-text-subtle)]">{total}</span>
      </button>

      {secteurs.map((secteur) => (
        <button
          key={secteur}
          type="button"
          aria-pressed={active === secteur}
          onClick={() => onChange(secteur)}
          className={chipClass(active === secteur)}
        >
          {secteur}
        </button>
      ))}
    </div>
  );
}
