"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useContactModal } from "@/components/layout/ContactModalProvider";
import { SITE } from "@/content/site";

const MOSAIC = [
  { src: "/mockups/web-hero.svg", alt: "Aperçu d'une interface web" },
  { src: "/mockups/dashboard.svg", alt: "Aperçu d'un tableau de bord" },
  { src: "/mockups/mobile.svg", alt: "Aperçu d'une interface mobile" },
  { src: "/mockups/form-card.svg", alt: "Aperçu d'un formulaire" },
  { src: "/mockups/chart-card.svg", alt: "Aperçu d'un graphique de données" },
];

const FRAME_CLASS =
  "group relative overflow-hidden rounded-lg border border-cw-border bg-cw-elevated transition-transform duration-300 hover:scale-[1.02]";

export default function HomeHero() {
  const { open } = useContactModal();

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-cw-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-cw-glow-1 opacity-[0.15] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-cw-glow-2 opacity-[0.15] blur-[100px]"
      />
      <div aria-hidden="true" className="cw-grain" />

      {/* Flat stagger list: eyebrow → H1 → chapô → CTA → visuel, 0.08s. Text items pinned to
          column 1, mosaic spans column 2 — a single Stagger drives every item so the mosaic
          isn't stranded outside its trigger (nesting Stagger/StaggerItem would break that). */}
      <Stagger
        delayChildren={0.08}
        className="container relative grid gap-12 py-20 text-center sm:py-24 lg:grid-cols-[55%_45%] lg:items-center lg:gap-8 lg:py-28 lg:text-left"
      >
        <StaggerItem className="lg:col-start-1">
          <p className="eyebrow justify-center lg:justify-start">● AGENCE DIGITALE — DAKAR</p>
        </StaggerItem>

        <StaggerItem className="lg:col-start-1">
          <h1 className="text-balance text-cw-display font-display font-semibold leading-[var(--cw-lh-tight)] tracking-[var(--cw-tracking-tight)] text-cw-text">
            Nous concevons les <span className="text-cw-accent">outils numériques</span> qui
            soutiennent votre entreprise.
          </h1>
        </StaggerItem>

        <StaggerItem className="lg:col-start-1">
          <p className="mx-auto max-w-xl text-balance text-cw-lead text-cw-muted lg:mx-0">
            IA, logiciels, automatisation, marketing, CRM/ERP et sites web sous un même toit. Une
            seule équipe qui accompagne votre projet de la conception au lancement.
          </p>
        </StaggerItem>

        <StaggerItem className="lg:col-start-1">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button onClick={open} className="btn-primary w-full sm:w-auto">
              Parlez-nous de votre projet
            </button>
            <Link href="/realisations" className="btn-outline w-full sm:w-auto">
              {SITE.ctaSecondaire}
            </Link>
          </div>
        </StaggerItem>

        <StaggerItem className="lg:col-start-2 lg:row-span-4 lg:row-start-1">
          {/* Mobile — mosaïque simplifiée 2 colonnes */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <div className={`${FRAME_CLASS} col-span-2 aspect-[4/3]`}>
              <Image src={MOSAIC[0].src} alt={MOSAIC[0].alt} fill sizes="90vw" className="object-cover" priority />
            </div>
            <div className={`${FRAME_CLASS} aspect-square`}>
              <Image src={MOSAIC[1].src} alt={MOSAIC[1].alt} fill sizes="45vw" className="object-cover" />
            </div>
            <div className={`${FRAME_CLASS} aspect-square`}>
              <Image src={MOSAIC[4].src} alt={MOSAIC[4].alt} fill sizes="45vw" className="object-cover" />
            </div>
          </div>

          {/* Desktop — mosaïque asymétrique 5 frames */}
          <div className="hidden aspect-[6/5] grid-cols-3 grid-rows-3 gap-3 lg:grid">
            <div className={`${FRAME_CLASS} col-span-2 row-span-2`}>
              <Image src={MOSAIC[0].src} alt={MOSAIC[0].alt} fill sizes="30vw" className="object-cover" priority />
            </div>
            <div className={`${FRAME_CLASS} col-start-3 row-start-1`}>
              <Image src={MOSAIC[1].src} alt={MOSAIC[1].alt} fill sizes="15vw" className="object-cover" />
            </div>
            <div className={`${FRAME_CLASS} col-start-3 row-start-2 row-span-2`}>
              <Image src={MOSAIC[2].src} alt={MOSAIC[2].alt} fill sizes="15vw" className="object-cover" />
            </div>
            <div className={`${FRAME_CLASS} col-start-1 row-start-3`}>
              <Image src={MOSAIC[3].src} alt={MOSAIC[3].alt} fill sizes="15vw" className="object-cover" />
            </div>
            <div className={`${FRAME_CLASS} col-start-2 row-start-3`}>
              <Image src={MOSAIC[4].src} alt={MOSAIC[4].alt} fill sizes="15vw" className="object-cover" />
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
