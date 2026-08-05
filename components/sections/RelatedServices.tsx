import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedService } from "@/types/content";

export default function RelatedServices({ services }: { services: RelatedService[] }) {
  if (services.length === 0) return null;

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● POUR ALLER PLUS LOIN</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Services connexes.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="font-medium text-foreground">{s.titre}</span>
              <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
