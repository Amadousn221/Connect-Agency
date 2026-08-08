import type { ServiceContent } from "@/content/services/_types";
import { PROCESSUS_PAR_DEFAUT } from "@/content/services/_shared";
import ServiceHero from "./ServiceHero";
import TrustBar from "./TrustBar";
import ProblemSolution from "./ProblemSolution";
import ProcessSteps from "./ProcessSteps";
import CapabilityGrid from "./CapabilityGrid";
import ReasonsList from "./ReasonsList";
import SectorGrid from "./SectorGrid";
import RelatedLinks from "./RelatedLinks";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

/**
 * Gabarit data-driven des pages de service. Une section ne se rend que si son
 * champ est présent dans le contenu — socle obligatoire : Hero, Trust,
 * ProblemSolution, Capacités, FAQ, CTA. Le reste (Stats, Process, Reasons,
 * Secteurs) est optionnel selon la richesse du pilier.
 */
export default function ServiceTemplate({ content }: { content: ServiceContent }) {
  return (
    <>
      <ServiceHero eyebrow={content.eyebrow} h1={content.h1} chapo={content.chapo} parent={content.parent} />

      <TrustBar trustLine={content.trustLine} />

      <ProblemSolution titre={content.probleme.titre} corps={content.probleme.corps} />

      {content.stats && content.stats.length > 0 && (
        <Stats
          stats={content.stats.map((s) => ({
            valeur: `${s.value}${s.suffix ?? ""}`,
            label: s.label,
            description: s.description,
          }))}
        />
      )}

      <ProcessSteps steps={content.process ?? PROCESSUS_PAR_DEFAUT} />

      <CapabilityGrid capacites={content.capacites} pilier={content.pilier} star={content.star} />

      {content.raisons && content.raisons.length > 0 && <ReasonsList raisons={content.raisons} />}

      {content.secteurs && <SectorGrid />}

      <Faq items={content.faq} titre="Questions fréquentes." />

      <RelatedLinks links={content.pagesLiees} />

      <CtaBand />
    </>
  );
}
