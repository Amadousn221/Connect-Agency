import { POURQUOI_NOUS_CHOISIR } from "@/content/site";

export default function WhyUs() {
  return (
    <section className="border-y border-border bg-[var(--color-bg-subtle)] py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● POURQUOI NOUS</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Pourquoi les équipes nous choisissent.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POURQUOI_NOUS_CHOISIR.map((raison) => (
            <div key={raison.titre}>
              <h3 className="font-semibold text-foreground">{raison.titre}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{raison.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
