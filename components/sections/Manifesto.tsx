import { MANIFESTE } from "@/content/home";

export default function Manifesto() {
  return (
    <section className="border-y border-border bg-[var(--color-bg-subtle)] py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{MANIFESTE.eyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {MANIFESTE.titre}
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            {MANIFESTE.paragraphes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {MANIFESTE.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
