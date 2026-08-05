import { Compass, Layout, Rocket, type LucideIcon } from "lucide-react";
import { PROCESSUS_STANDARD } from "@/content/site";

const ICONS: LucideIcon[] = [Compass, Layout, Rocket];

export default function ProcessSteps({
  titre = "Comment se déroule un projet avec nous",
}: {
  titre?: string;
}) {
  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <p className="eyebrow">● NOTRE PROCESSUS</p>
        <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
          {titre}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PROCESSUS_STANDARD.map((step, i) => {
            const Icon = ICONS[i] ?? Compass;
            return (
              <div
                key={step.etape}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.08] text-primary">
                    <Icon className="size-4" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{step.etape}</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
