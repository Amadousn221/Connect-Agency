import Link from "next/link";
import {
  Megaphone,
  Globe,
  Code2,
  Workflow,
  Sparkles,
  Compass,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HOME_BENTO } from "@/content/home";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "/services/marketing-generation-prospects": Megaphone,
  "/services/sites-web-ecommerce": Globe,
  "/services/logiciels-applications-web": Code2,
  "/services/crm-erp-integrations": Workflow,
  "/services/ia-automatisation": Sparkles,
  "/services/conseil-strategie": Compass,
};

// The 2 "large" cards (Sites web, CRM/ERP) are pulled to the front visually
// so they land side by side on their own row, with the 4 "medium" cards
// filling the row below — explicit order beats grid-auto-flow: dense here,
// which produced an uneven CRM/ERP card (short instead of tall) because
// nothing else shared its second spanned row.
const ORDER: Record<string, string> = {
  "/services/sites-web-ecommerce": "lg:order-1",
  "/services/crm-erp-integrations": "lg:order-2",
  "/services/marketing-generation-prospects": "lg:order-3",
  "/services/logiciels-applications-web": "lg:order-4",
  "/services/ia-automatisation": "lg:order-5",
  "/services/conseil-strategie": "lg:order-6",
};

const MESH: Record<string, string> = {
  "/services/marketing-generation-prospects": "bg-[radial-gradient(120%_100%_at_0%_0%,var(--cw-glow-2),transparent_60%)]",
  "/services/sites-web-ecommerce": "bg-[radial-gradient(120%_100%_at_100%_0%,var(--cw-glow-1),transparent_55%)]",
  "/services/logiciels-applications-web": "bg-[radial-gradient(120%_100%_at_0%_100%,var(--cw-glow-2),transparent_60%)]",
  "/services/crm-erp-integrations": "bg-[radial-gradient(140%_100%_at_100%_0%,var(--cw-accent),transparent_55%)]",
  "/services/ia-automatisation": "bg-[radial-gradient(120%_100%_at_100%_100%,var(--cw-glow-1),transparent_60%)]",
  "/services/conseil-strategie": "bg-[radial-gradient(120%_100%_at_0%_0%,var(--cw-accent),transparent_60%)]",
};

export default function BentoServices() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="● NOS SERVICES" title="Ce que nous faisons." />

        <Stagger
          delayChildren={0.06}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
        >
          {HOME_BENTO.map((card) => {
            const Icon = ICONS[card.href] ?? Globe;
            return (
              <StaggerItem
                key={card.href}
                className={cn(card.taille === "lg" ? "lg:col-span-6" : "lg:col-span-3", ORDER[card.href])}
              >
                <Link
                  href={card.href}
                  className={cn(
                    "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-cw-border bg-cw-elevated p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cw-border-strong",
                    card.taille === "lg" ? "min-h-44 lg:min-h-64" : "min-h-44"
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cn("pointer-events-none absolute inset-0 opacity-[0.08]", MESH[card.href])}
                  />

                  <div className="relative">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-cw-subtle text-cw-accent">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-cw-h3 font-semibold text-cw-text">
                      {card.titre}
                    </h3>
                    <p className="mt-2 text-sm leading-[var(--cw-lh-body)] text-cw-muted">
                      {card.corps}
                    </p>
                  </div>

                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cw-accent">
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_40px_-8px_var(--cw-accent)] transition-opacity duration-300 group-hover:opacity-30"
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
