import { PROCESSUS_STANDARD } from "@/content/site";

export default function ProcessSteps({
  titre = "Comment se déroule un projet avec nous",
}: {
  titre?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● NOTRE PROCESSUS</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {titre}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PROCESSUS_STANDARD.map((step) => (
            <div key={step.etape} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{step.etape}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.titre}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
