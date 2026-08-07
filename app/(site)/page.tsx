import Link from "next/link";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import BentoServices from "@/components/sections/BentoServices";
import Manifesto from "@/components/sections/Manifesto";
import ConversationCta from "@/components/sections/ConversationCta";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Stats from "@/components/sections/Stats";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/json-ld";
import { PROJETS } from "@/content/projects";
import { SITE, FAQ_GLOBALE, FAQ_ACCUEIL_INDEX } from "@/content/site";

export default function HomePage() {
  const faqAccueil = FAQ_ACCUEIL_INDEX.map((i) => FAQ_GLOBALE[i]);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqAccueil)} />
      <Hero
        mosaic
        eyebrow="Agence digitale — Dakar"
        h1={
          <>
            Nous concevons les <span className="text-primary">outils numériques</span> qui soutiennent votre
            entreprise.
          </>
        }
        chapo="IA, logiciels, automatisation, marketing, CRM/ERP et sites web sous un même toit. Une seule équipe qui accompagne votre projet de la conception au lancement."
        ctas={[
          { label: "Parlez-nous de votre projet", href: "/nous-joindre", modal: true },
          { label: SITE.ctaSecondaire, href: "/realisations" },
        ]}
        meta={["Réponse sous 24 h", "Devis gratuit", "Vos accès vous appartiennent"]}
      />

      <LogoMarquee />
      <BentoServices />
      <Manifesto />
      <ConversationCta />

      <section className="section pt-0" id="realisations">
        <div className="container">
          <Reveal className="mb-[clamp(2rem,3.5vw,3.25rem)] flex flex-wrap items-end justify-between gap-4">
            <div className="grid max-w-[34rem] gap-[0.85rem]">
              <p className="eyebrow">Réalisations</p>
              <h2 className="text-foreground">Quelques projets récents que vous reconnaîtrez peut-être.</h2>
            </div>
            <Link href="/realisations" className="btn-outline min-h-10 px-[1.05rem] text-[0.86rem]">
              Voir tous les projets →
            </Link>
          </Reveal>

          <ProjectsGrid projets={PROJETS.slice(0, 3)} />
        </div>
      </section>

      <Stats stats={SITE.stats} />
      <ProcessSteps />
      <Faq items={faqAccueil} />
      <CtaBand />
    </>
  );
}
