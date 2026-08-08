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
        </div>
      </section>

      <CtaBand />
    </>
  );
}
