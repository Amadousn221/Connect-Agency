import type { ServiceContent } from "@/content/services/_types";
import { PROCESSUS_PAR_DEFAUT } from "@/content/services/_shared";
import { getServiceBySlug } from "@/content/services";
import ServiceHero from "./ServiceHero";
import ServiceReassurance from "./ServiceReassurance";
import ProblemSolution from "./ProblemSolution";
import ProcessSteps from "./ProcessSteps";
import CapabilityGrid from "./CapabilityGrid";
import ReasonsList from "./ReasonsList";
import SectorGrid from "./SectorGrid";
import RelatedLinks from "./RelatedLinks";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";
import SectionDivider from "@/components/ui/SectionDivider";

/**
 * Gabarit data-driven des pages de service. Une section ne se rend que si son
 * champ est présent dans le contenu — socle obligatoire : Hero, Réassurance,
 * ProblemSolution, Capacités, FAQ, CTA. Le reste (Stats, Reasons, Secteurs)
 * est optionnel selon la richesse du pilier.
 *
 * Alternance des fonds : `ProblemSolution` est fixé "subtle", `Faq` et
 * `CtaBand` sont fixés (repris de l'accueil : subtle / default). Entre les
 * deux, chaque section bascule au fil du rendu — le nombre de sections
 * optionnelles présentes (stats/raisons/secteurs) fait varier la parité, donc
 * la couleur juste avant `Faq` n'est pas toujours la bonne : un
 * `SectionDivider` comble alors la transition plutôt que de casser
 * l'alternance des deux fonds fixes.
 */
export default function ServiceTemplate({ content }: { content: ServiceContent }) {
  const parentSlug = content.parent?.href.split("/").pop();
  const parentContent = parentSlug ? getServiceBySlug(parentSlug) : undefined;
  const reassurance = content.reassurance ?? parentContent?.reassurance;

  const hasStats = Boolean(content.stats && content.stats.length > 0);
  const hasRaisons = Boolean(content.raisons && content.raisons.length > 0);
  const hasSecteurs = Boolean(content.secteurs);

  // Chaîne dynamique entre ProblemSolution ("subtle") et Faq ("subtle", fixe
  // — cf. accueil) : chaque slot présent bascule le fond, index pair =
  // "default", impair = "subtle". Le nombre de sections optionnelles
  // présentes (stats/raisons/secteurs) fait varier la parité finale : quand
  // elle tombe sur "subtle" juste avant Faq, un `SectionDivider` comble la
  // transition plutôt que de casser les fonds fixes.
  const slots = [
    ...(hasStats ? ["stats"] : []),
    "process",
    "capacites",
    ...(hasRaisons ? ["raisons"] : []),
    ...(hasSecteurs ? ["secteurs"] : []),
  ];
  const subtleOf = (name: string) => slots.indexOf(name) % 2 === 1;
  const statsSubtle = subtleOf("stats");
  const processSubtle = subtleOf("process");
  const capacitesSubtle = subtleOf("capacites");
  const raisonsSubtle = subtleOf("raisons");
  const secteursSubtle = subtleOf("secteurs");
  const needsDividerBeforeFaq = slots.length % 2 === 0;

  return (
    <>
      <ServiceHero eyebrow={content.eyebrow} h1={content.h1} chapo={content.chapo} parent={content.parent} />

      {reassurance && reassurance.length > 0 && <ServiceReassurance items={reassurance} />}

      <ProblemSolution titre={content.probleme.titre} corps={content.probleme.corps} />

      {hasStats && (
        <Stats
          subtle={statsSubtle}
          stats={content.stats!.map((s) => ({
            valeur: `${s.value}${s.suffix ?? ""}`,
            label: s.label,
            description: s.description,
          }))}
        />
      )}

      <ProcessSteps steps={content.process ?? PROCESSUS_PAR_DEFAUT} subtle={processSubtle} />

      <CapabilityGrid
        capacites={content.capacites}
        pilier={content.pilier}
        star={content.star}
        subtle={capacitesSubtle}
      />

      {hasRaisons && <ReasonsList raisons={content.raisons!} subtle={raisonsSubtle} />}

      {hasSecteurs && <SectorGrid subtle={secteursSubtle} />}

      {needsDividerBeforeFaq && <SectionDivider />}

      <Faq items={content.faq} titre="Questions fréquentes." />

      <RelatedLinks links={content.pagesLiees} />

      <CtaBand />
    </>
  );
}
