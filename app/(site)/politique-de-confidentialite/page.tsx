import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de Connect Web.",
};

const SECTIONS = [
  {
    titre: "Qu'est-ce qu'une donnée personnelle ?",
    corps:
      "Une donnée personnelle est toute information permettant d'identifier, directement ou indirectement, une personne physique (nom, e-mail, numéro de téléphone, adresse IP, etc.).",
  },
  {
    titre: "Données collectées et finalités",
    corps:
      "Nous collectons les données que vous nous transmettez volontairement via le formulaire de contact du site (nom, e-mail, téléphone, service souhaité, message), dans le but de répondre à votre demande. Nous pouvons également collecter des données de navigation à des fins d'analyse de fréquentation (cookies analytics).",
  },
  {
    titre: "Outils tiers utilisés",
    corps:
      "Dans le cadre de notre activité, nous utilisons les services suivants, susceptibles de traiter vos données : HubSpot (gestion de la relation client), Resend (envoi d'e-mails transactionnels) et Vercel (hébergement du site). Un outil d'analyse d'audience peut également être utilisé.",
  },
  {
    titre: "Hébergement et transferts hors du Sénégal",
    corps:
      "Le site est hébergé sur l'infrastructure de Vercel, dont les serveurs peuvent être situés hors du Sénégal. Les outils tiers mentionnés ci-dessus peuvent également traiter des données en dehors du territoire sénégalais, dans le respect des garanties prévues par la réglementation applicable.",
  },
  {
    titre: "Durée de conservation",
    corps:
      "Les données transmises via le formulaire de contact sont conservées pour la durée nécessaire au traitement de votre demande et à la relation commerciale qui pourrait en découler, puis supprimées ou archivées conformément à la réglementation en vigueur.",
  },
  {
    titre: "Vos droits",
    corps:
      "Conformément à la loi n°2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel, vous disposez d'un droit d'accès, de rectification, de suppression de vos données, ainsi que d'un droit de retrait de votre consentement. Vous pouvez également introduire une réclamation auprès de la Commission de protection des données personnelles (CDP) du Sénégal.",
  },
  {
    titre: "Responsable du traitement",
    corps: `${SITE.nom}, ${SITE.coordonnees.adresse}. Pour exercer vos droits, contactez-nous à l'adresse ${SITE.coordonnees.email}.`,
  },
  {
    titre: "Mises à jour",
    corps:
      "Cette politique de confidentialité peut être mise à jour périodiquement. La date de dernière mise à jour figure en bas de cette page.",
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <p className="eyebrow">● VIE PRIVÉE</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Cette page décrit comment {SITE.nom} collecte, utilise et protège vos données personnelles,
          conformément à la réglementation sénégalaise applicable.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {SECTIONS.map((s) => (
            <div key={s.titre}>
              <h2 className="text-base font-semibold text-foreground">{s.titre}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.corps}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs italic text-muted-foreground">
          Ce document est fourni à titre indicatif et doit être relu et validé par un juriste avant mise
          en ligne définitive. Dernière mise à jour : à définir.
        </p>
      </div>
    </section>
  );
}
