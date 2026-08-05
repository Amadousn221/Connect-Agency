import Link from "next/link";
import type { Projet } from "@/types/content";

interface ProjectsGridProps {
  projets: Projet[];
  emptyMessage?: string;
}

export default function ProjectsGrid({ projets, emptyMessage }: ProjectsGridProps) {
  if (projets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-[var(--color-bg-subtle)] px-8 py-16 text-center">
        <p className="text-muted-foreground">
          {emptyMessage ??
            "Nos réalisations arrivent bientôt. En attendant, contactez-nous : on vous montre volontiers des exemples de projets."}
        </p>
        <Link href="/nous-joindre" className="btn-primary mt-6 inline-flex">
          Nous joindre
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projets.map((p) => (
        <article key={p.slug} className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {p.secteur}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{p.nom}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{p.resume}</p>
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
              className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Voir le projet →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
