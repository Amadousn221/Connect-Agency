import type { ProcessItem } from "./_types";

/** Secteurs transversaux — mêmes libellés sur toutes les pages qui les affichent. */
export const SECTEURS_TRANSVERSAUX = [
  "Commerce & distribution",
  "PME & services",
  "E-commerce & vente au détail",
  "Industrie & manufacture",
  "Santé & bien-être",
  "Éducation & formation",
  "Organisations & associations",
  "Secteur public",
];

/** Processus par défaut, appliqué quand un pilier ne définit pas le sien. */
export const PROCESSUS_PAR_DEFAUT: ProcessItem[] = [
  {
    titre: "Découverte & stratégie",
    description: "On comprend votre activité et vos objectifs, puis on propose un plan d'action clair.",
    icon: "Compass",
  },
  {
    titre: "Design & développement",
    description: "On conçoit et on construit, en vous montrant l'avancement à chaque étape.",
    icon: "Code2",
  },
  {
    titre: "Lancement & suivi",
    description: "On met en ligne, on forme votre équipe, et on reste disponible pour la suite.",
    icon: "Rocket",
  },
];
