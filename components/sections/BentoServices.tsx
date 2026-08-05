import Link from "next/link";
import { ArrowRight, Boxes, Globe, Megaphone, Code2, Sparkles, Compass, type LucideIcon } from "lucide-react";
import { HOME_BENTO } from "@/content/home";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "/services/crm-erp-integrations": Boxes,
  "/services/sites-web-ecommerce": Globe,
  "/services/marketing-generation-prospects": Megaphone,
  "/services/logiciels-applications-web": Code2,
  "/services/ia-automatisation": Sparkles,
  "/services/conseil-strategie": Compass,
};

export default function BentoServices() {
  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <p className="eyebrow">● NOS SERVICES</p>
        <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
          Ce que nous faisons.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {HOME_BENTO.map((card, i) => {
            const Icon = ICONS[card.href] ?? Globe;
            const mesh =
              i % 2 === 0
                ? "radial-gradient(120%_100%_at_100%_0%,color-mix(in_oklch,var(--primary),transparent_92%),transparent_60%)"
                : "radial-gradient(120%_100%_at_100%_0%,color-mix(in_oklch,var(--accent),transparent_92%),transparent_60%)";

            return (
              <Link
                key={card.href}
                href={card.href}
                style={{ animationDelay: `${i * 60}ms`, backgroundImage: mesh }}
                className={cn(
                  "group relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 fill-mode-both",
                  "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary),transparent_65%),0_16px_40px_-16px_color-mix(in_oklch,var(--primary),transparent_55%)]",
                  card.taille === "lg" ? "sm:col-span-2 lg:col-span-6 lg:min-h-[220px]" : "lg:col-span-3",
                  card.accent && "border-primary/25"
                )}
              >
                <div>
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{card.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.corps}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
