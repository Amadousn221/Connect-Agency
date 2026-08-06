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
          { label: "Parlez-nous de votre projet", href: "/nous-joindre" },
          { label: SITE.ctaSecondaire, href: "/realisations" },
        ]}
        meta={["Réponse sous 24 h", "Devis gratuit", "Vos accès vous appartiennent"]}
      />

      <LogoMarquee />
      <BentoServices />
      <Manifesto />
      <ConversationCta />

      <section className="border-t border-border py-[clamp(4rem,10vw,8rem)]">
        <div className="container">
          <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">RÉALISATIONS</p>
              <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
                Quelques projets récents que vous reconnaîtrez peut-être.
              </h2>
            </div>
            <Link href="/realisations" className="btn-outline min-h-11 w-full justify-center sm:w-auto">
              Voir tous les projets →
            </Link>
          </Reveal>

          <div className="mt-10">
            <ProjectsGrid projets={PROJETS.slice(0, 6)} />
          </div>
        </div>
      </section>

      <Stats stats={SITE.stats} />
      <ProcessSteps />
      <Faq items={faqAccueil} />
      <CtaBand />
    </>
  );
}
