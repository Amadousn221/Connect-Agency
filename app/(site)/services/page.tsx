import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CtaBand from "@/components/sections/CtaBand";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Sites web & e-commerce, logiciels sur mesure, IA & automatisation, CRM/ERP, marketing et conseil : nos six piliers d'expertise.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="NOS SERVICES"
        h1="Six piliers, une seule équipe."
        chapo="Du site web à l'intégration de vos outils de vente, on couvre tout ce dont votre entreprise a besoin pour grandir en ligne."
        ctas={[{ label: "Demander une soumission", href: "/nous-joindre" }]}
      />

      <section className="pb-24">
        <div className="container grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">{s.pilier}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.chapo}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Découvrir
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
