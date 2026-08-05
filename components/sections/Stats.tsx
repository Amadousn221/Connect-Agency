import type { Stat } from "@/types/content";

export default function Stats({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) return null;

  return (
    <section className="border-y border-border py-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="container">
        <p className="eyebrow">● EN CHIFFRES</p>
        <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
          Les chiffres derrière notre travail.
        </h2>

        <div className="mt-10 grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="py-6 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">{s.valeur}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
