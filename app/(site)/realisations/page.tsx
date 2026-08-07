import type { Metadata } from "next";
import RealisationsHero from "@/components/sections/RealisationsHero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { collectionPageJsonLd } from "@/lib/json-ld";
import { projetsPublies, SECTEURS_PROJETS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Quelques projets récents réalisés pour des entreprises de différents secteurs au Sénégal et en Afrique de l'Ouest.",
  openGraph: {
    title: "Nos réalisations — Connect Web",
    description:
      "Quelques projets récents réalisés pour des entreprises de différents secteurs au Sénégal et en Afrique de l'Ouest.",
    type: "website",
  },
};

export default function RealisationsPage() {
  const projets = projetsPublies();

  return (
    <>
      <JsonLd data={collectionPageJsonLd(projets)} />

      <RealisationsHero />

      <section className="section pt-0">
        <div className="container">
          <ProjectGrid projets={projets} secteurs={SECTEURS_PROJETS} />

          <p className="mt-10 rounded-[var(--radius-md)] border border-border border-l-[3px] border-l-primary bg-[var(--color-bg-subtle)] px-5 py-4 text-[0.85rem] text-muted-foreground">
            Les vignettes ci-dessus sont des placeholders colorés en attendant les captures d&apos;écran de chaque
            site. Aucun résultat chiffré n&apos;est affiché tant qu&apos;il n&apos;a pas été confirmé : mieux vaut «
            site livré » qu&apos;un chiffre invérifiable.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
