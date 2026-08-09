import Image from "next/image";
import Link from "next/link";
import type { Projet } from "@/types/content";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projets: Projet[];
  emptyMessage?: string;
}

export default function ProjectsGrid({ projets, emptyMessage }: ProjectsGridProps) {
  if (projets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-cw-border bg-cw-subtle px-8 py-16 text-center">
        <p className="text-cw-muted">
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
    <Stagger delayChildren={0.06} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projets.map((p) => {
        const Wrapper = p.lien ? "a" : "div";
        return (
          <StaggerItem key={p.slug}>
            <article className="group overflow-hidden rounded-xl border border-cw-border bg-cw-elevated transition-colors duration-300 hover:border-cw-border-strong">
              <Wrapper
                {...(p.lien ? { href: p.lien, target: "_blank", rel: "noreferrer noopener" } : {})}
                className="relative block aspect-[16/10] overflow-hidden bg-cw-inset"
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.nom}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,var(--cw-glow-1),transparent_60%)] opacity-40"
                  />
                )}

                {p.logo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={p.logo} alt="" width={96} height={96} className="drop-shadow-lg" />
                  </div>
                )}

                {p.lien && (
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center bg-black/0 opacity-0",
                      "transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100"
                    )}
                  >
                    <span className="btn-primary">Voir le projet</span>
                  </div>
                )}
              </Wrapper>

              <div className="p-6">
                <p className="text-cw-sm font-semibold uppercase tracking-wider text-cw-subtletext">
                  {p.secteur}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-cw-text">{p.nom}</h3>
                <p className="mt-2 text-sm text-cw-muted">{p.resume}</p>
                {p.resultats.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {p.resultats.map((r) => (
                      <li key={r} className="text-sm text-cw-text/80">
                        · {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
