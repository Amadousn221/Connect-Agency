import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { PROJETS } from "@/content/projects";

export default function ProjectsPreview() {
  return (
    <section className="border-t border-cw-border py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="● RÉALISATIONS"
            title="Quelques projets récents que vous reconnaîtrez peut-être."
            action={{ label: "Voir tous les projets →", href: "/realisations" }}
          />
        </Reveal>

        <div className="mt-10">
          <ProjectsGrid projets={PROJETS.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}
