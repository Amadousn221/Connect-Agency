import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/motion/Reveal";
import { getIcon } from "@/lib/icons";
import { PILIERS } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Sites web & e-commerce, logiciels sur mesure, IA & automatisation, CRM/ERP, marketing et conseil : nos six piliers d'expertise.",
};

const PILIER_ICON: Record<string, ReturnType<typeof getIcon>> = {
  "sites-web-ecommerce": getIcon("Globe"),
  "logiciels-applications-web": getIcon("Code2"),
  "ia-automatisation": getIcon("Sparkles"),
  "crm-erp-integrations": getIcon("Network"),
  "marketing-generation-prospects": getIcon("Target"),
  "conseil-strategie": getIcon("Compass"),
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Nos services"
        h1="Six piliers, une seule équipe."
        chapo="Du site web à l'intégration de vos outils de vente, on couvre tout ce dont votre entreprise a besoin pour grandir en ligne."
        ctas={[{ label: "Demander une soumission", href: "/nous-joindre", modal: true }]}
      />

      <section className="section pt-0">
        <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILIERS.map((s) => {
            const Icon = PILIER_ICON[s.slug] ?? getIcon("Globe");
            return (
              <Reveal key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={
                    "group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-[clamp(1.3rem,2.2vw,1.85rem)] transition-[transform,border-color,box-shadow] duration-[220ms] hover:-translate-y-[2px] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]" +
                    (s.star ? " border-[color-mix(in_srgb,var(--brand-accent-raw)_45%,transparent)]" : "")
                  }
                >
                  {s.star && (
                    <span className="absolute top-4 right-4 rounded-full bg-[var(--color-accent-subtle)] px-[0.5rem] py-[0.25rem] font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.1em] text-primary uppercase">
                      Pilier phare
                    </span>
                  )}
                  <div>
                    <span className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-[var(--color-accent-subtle)] text-primary">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <h2 className="mb-2 text-foreground">{s.pilier}</h2>
                    <p className="text-[0.9rem] text-muted-foreground">{s.chapo}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Découvrir
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
