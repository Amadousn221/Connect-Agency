import { SECTEURS } from "@/content/site";

export default function Sectors() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● SECTEURS</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          On connaît votre milieu.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {SECTEURS.map((secteur) => (
            <span
              key={secteur}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90"
            >
              {secteur}
            </span>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground">
          Vous ne voyez pas votre secteur ?{" "}
          <a href="/nous-joindre" className="font-medium text-primary hover:underline">
            On a probablement déjà fait quelque chose qui s&apos;en rapproche. Parlons-en →
          </a>
        </p>
      </div>
    </section>
  );
}
