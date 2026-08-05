import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyUs from "@/components/sections/WhyUs";
import Sectors from "@/components/sections/Sectors";
import Faq from "@/components/sections/Faq";
import RelatedServices from "@/components/sections/RelatedServices";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import type { ServiceContent } from "@/types/content";

export default function ServicePageTemplate({ content }: { content: ServiceContent }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: content.pilier, path: `/services/${content.slug}` },
        ])}
      />
      <JsonLd data={faqPageJsonLd(content.faq)} />

      <Hero eyebrow={content.eyebrow} h1={content.h1} chapo={content.chapo} ctas={content.heroCtas} />

      {content.sousServices && content.sousServices.length > 0 && (
        <section className="pb-4">
          <div className="container grid gap-4 sm:grid-cols-3">
            {content.sousServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/${content.slug}/${sub.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{sub.h1}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{sub.chapo}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  En savoir plus
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-border py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.probleme.titre}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.probleme.corps}
              </p>
            </div>

            {content.raisonsMisesEnAvant && content.raisonsMisesEnAvant.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {content.raisonsMisesEnAvant.map((raison) => (
                  <div key={raison} className="rounded-xl border border-primary/20 bg-primary/[0.06] p-4">
                    <p className="text-sm font-medium text-foreground">{raison}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Capabilities capacites={content.capacites} titre={`Nos services — ${content.pilier}`} />
      <WhyUs />
      <Sectors />
      <Faq items={content.faq} />
      <RelatedServices services={content.pagesLiees} />
      <CtaBand />
    </>
  );
}
