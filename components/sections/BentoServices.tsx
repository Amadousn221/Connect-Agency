import Link from "next/link";
import { HOME_BENTO } from "@/content/home";
import { cn } from "@/lib/utils";

export default function BentoServices() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">● NOS SERVICES</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ce que nous faisons.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_BENTO.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-primary/40",
                card.taille === "lg" && "lg:col-span-2",
                card.accent ? "bg-primary/[0.06]" : "bg-card"
              )}
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">{card.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.corps}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
