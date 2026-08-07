import type { Projet } from "@/types/content";

/**
 * Réalisations de Connect Web. On n'invente pas de projets (cf. débrief §8 :
 * "Portfolio réel") : tant que `publie` n'est pas `true`, l'entrée reste un
 * emplacement réservé affiché avec le badge « Projet à fournir » (repris de
 * la maquette v2). Ajouter le nom du client, le résumé et les résultats une
 * fois les informations et l'autorisation obtenues, puis passer `publie` à
 * `true`.
 */
export const PROJETS: Projet[] = [
  {
    slug: "projet-a-fournir-1",
    nom: "Nom du client",
    secteur: "Commerce & distribution",
    resume: "",
    resultats: [],
    services: [],
    publie: false,
  },
  {
    slug: "projet-a-fournir-2",
    nom: "Nom du client",
    secteur: "Santé & bien-être",
    resume: "",
    resultats: [],
    services: [],
    publie: false,
  },
  {
    slug: "projet-a-fournir-3",
    nom: "Nom du client",
    secteur: "PME & services",
    resume: "",
    resultats: [],
    services: [],
    publie: false,
  },
];
