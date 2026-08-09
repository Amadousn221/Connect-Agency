import HomeHero from "@/components/sections/HomeHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import BentoServices from "@/components/sections/BentoServices";
import Manifeste from "@/components/sections/Manifeste";
import ConversationBlock from "@/components/sections/ConversationBlock";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import StatsRow from "@/components/sections/StatsRow";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqShort from "@/components/sections/FaqShort";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/json-ld";
import { SITE, FAQ_GLOBALE, FAQ_ACCUEIL_INDEX } from "@/content/site";

export default function HomePage() {
  const faqAccueil = FAQ_ACCUEIL_INDEX.map((i) => FAQ_GLOBALE[i]);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqAccueil)} />

      <HomeHero />
      <LogoMarquee />
      <BentoServices />
      <Manifeste />
      <ConversationBlock />
      <ProjectsPreview />
      <StatsRow stats={SITE.stats} />
      <ProcessSteps />
      <FaqShort />
      <CtaBand />
    </>
  );
}
