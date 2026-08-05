import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";
import type { ServiceContent, SubService } from "@/types/content";

interface SubServicePageTemplateProps {
  parent: ServiceContent;
  sub: SubService;
}

export default function SubServicePageTemplate({ parent, sub }: SubServicePageTemplateProps) {
  return (
    <>
      <Hero
        eyebrow={parent.eyebrow}
        h1={sub.h1}
        chapo={sub.chapo}
        ctas={[
          { label: "Demander une soumission", href: "/nous-joindre" },
          { label: "Voir nos réalisations", href: "/realisations" },
        ]}
      />

      <Capabilities capacites={parent.capacites} titre={`Nos services — ${parent.pilier}`} />
      <Faq items={parent.faq.slice(0, 4)} titre="Questions fréquentes." />

      <section className="pb-4">
        <div className="container">
          <Link href={`/services/${parent.slug}`} className="text-sm font-medium text-primary hover:underline">
            ← Retour à {parent.pilier}
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
