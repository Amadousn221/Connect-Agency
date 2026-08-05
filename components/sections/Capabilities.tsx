import { Check } from "lucide-react";
import type { Capacite } from "@/types/content";

interface CapabilitiesProps {
  titre?: string;
  capacites: Capacite[];
}

export default function Capabilities({ titre = "Ce que nous faisons pour vous", capacites }: CapabilitiesProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● NOS SERVICES</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {titre}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capacites.map((c) => (
            <div key={c.titre} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">{c.titre}</p>
                {c.description && <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
