import type { Stat } from "@/types/content";

export default function Stats({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-border py-16 sm:py-20">
      <div className="container">
        <p className="eyebrow">● EN CHIFFRES</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Les chiffres derrière notre travail.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-semibold tracking-tight text-primary">{s.valeur}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
