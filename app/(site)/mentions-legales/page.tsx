import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Connect Web.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <p className="eyebrow">INFORMATIONS LÉGALES</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">Mentions légales</h1>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">Éditeur du site</h2>
            <p className="mt-2">
              {SITE.nom} — {SITE.baseline}. {/* TODO (client) : forme juridique, numéro NINEA/RCCM, capital social */}
            </p>
            <p className="mt-1">Adresse : {SITE.coordonnees.adresse}</p>
            <p className="mt-1">
              Contact :{" "}
              <a href={`mailto:${SITE.coordonnees.email}`} className="text-primary hover:underline">
                {SITE.coordonnees.email}
              </a>{" "}
              — {SITE.coordonnees.telephone}
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Directeur de la publication</h2>
            <p className="mt-2">
              {/* TODO (client) : nom du responsable de la publication */}À renseigner.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Hébergement</h2>
            <p className="mt-2">
              {/* TODO (client) : confirmer l'hébergeur final (ex. Vercel Inc.) */}
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, code, identité de marque)
              est la propriété de {SITE.nom}, sauf mention contraire, et ne peut être reproduit sans
              autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Droit applicable</h2>
            <p className="mt-2">
              Les présentes mentions légales sont soumises au droit sénégalais.
            </p>
          </div>

          <p className="text-xs italic">
            Ce document est fourni à titre indicatif et doit être validé par un professionnel du droit
            avant mise en ligne définitive.
          </p>
        </div>
      </div>
    </section>
  );
}
