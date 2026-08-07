import Image from "next/image";
import { Eye, ArrowUpRight } from "lucide-react";
import type { Projet } from "@/types/content";
import { SERVICE_TAG, lienConfirme } from "@/content/projects";

/**
 * Carte projet — reprise du bloc `.project` de la maquette.
 * Tant que `couverture` n'a pas de fichier réel, on rend le dégradé
 * placeholder + le nom centré. Dès qu'une vraie capture est fournie, la carte
 * bascule automatiquement sur `next/image`.
 */
export default function ProjectCard({ projet }: { projet: Projet }) {
  const tags = Array.from(new Set(projet.services.map((s) => SERVICE_TAG[s] ?? s)));
  const showLink = lienConfirme(projet.lien);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)] [box-shadow:var(--shadow-sm)] dark:[box-shadow:none]">
      <div className="relative grid aspect-[16/11] place-items-center overflow-hidden border-b border-border">
        {projet.couverture ? (
          <Image
            src={projet.couverture}
            alt={`Aperçu du site ${projet.nom} — ${projet.secteur}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="object-cover transition-transform duration-[450ms] ease-out group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[450ms] ease-out group-hover:scale-105"
            style={{ background: projet.gradient }}
          />
        )}

        {!projet.couverture && (
          <span className="relative px-4 text-center font-[family-name:var(--font-display)] text-[1.15rem] font-bold tracking-[0.02em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
            {projet.nom}
          </span>
        )}

        {!projet.publie && (
          <span className="absolute top-3 left-3 z-[2] rounded-full border border-dashed border-border bg-[var(--navbar-bg)] px-[0.55rem] py-[0.3rem] font-[family-name:var(--font-mono)] text-[0.64rem] tracking-[0.1em] text-[var(--color-text-subtle)] uppercase">
            À venir
          </span>
        )}

        {/* Aperçu de l'étude de cas (route dédiée — phase ultérieure). */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] grid place-items-center bg-[rgba(7,12,17,0.55)] opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
        >
          <span className="btn-primary min-h-10 px-[1.05rem] text-[0.86rem]">
            Voir le projet
            <Eye className="size-[15px]" />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-[0.55rem] p-[1.15rem_1.25rem_1.3rem]">
        <small className="font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.08em] text-primary uppercase">
          {projet.secteur}
        </small>
        <h3 className="text-[1.12rem] text-foreground">{projet.nom}</h3>
        <p className="text-[0.9rem] text-muted-foreground">{projet.resume}</p>

        {projet.resultats.length > 0 && (
          <ul className="flex flex-col gap-1">
            {projet.resultats.map((r) => (
              <li key={r} className="text-[0.85rem] text-foreground/80">
                · {r}
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="mt-[0.15rem] flex flex-wrap gap-[0.35rem]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-[0.55rem] py-[0.2rem] text-[0.72rem] text-[var(--color-text-subtle)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {showLink && (
          <div className="mt-auto pt-[0.4rem]">
            <a
              href={projet.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-10 w-full px-[1.05rem] text-[0.86rem]"
            >
              Voir le site
              <ArrowUpRight className="size-[14px]" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
