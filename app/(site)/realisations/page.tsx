import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CtaBand from "@/components/sections/CtaBand";
import { PROJETS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description: "Découvrez des exemples de projets récents réalisés par Connect Web pour des organisations de différents secteurs.",
};

export default function RealisationsPage() {
  return (
    <>
      <Hero
        eyebrow="● RÉALISATIONS"
        h1="Nos réalisations."
        chapo="Découvrez quelques exemples de projets récents réalisés pour des organisations de différents secteurs. Vous ne trouvez pas exactement ce que vous cherchez ? Contactez-nous et nous vous présenterons d'autres exemples."
        ctas={[{ label: "Parlons-en", href: "/nous-joindre" }]}
      />

      <section className="pb-24">
        <div className="container">
          <ProjectsGrid projets={PROJETS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
