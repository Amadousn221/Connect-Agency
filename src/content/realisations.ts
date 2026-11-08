// Réalisations — source : docs/08 (fiche type §2, règles de publication §3, seuil §4) et docs/07 [07-ACC-5].
// Règle : seules les entrées `published: true` (autorisation écrite de l'organisation concernée, rôle exact
// d'Amadou, résultats sourcés) peuvent apparaître sur le site. Aucune n'est autorisée à ce jour (Q06 ouverte) :
// la section de l'accueil est donc masquée en production (seuil de 2 cas, D26).
// Ne jamais renseigner ici un client, un résultat, un chiffre ou une image sans autorisation et source.

export interface Realisation {
    slug: string;
    title: string;
    // Libellé du pôle concerné (voir expertises.ts).
    category: string;
    // Une ou deux phrases factuelles : contexte, rôle exact, livrable. Mention « projet en cours » si non livré.
    summary: string;
    status: "livré" | "en cours";
    // Chemin d'une image autorisée (droits vérifiés) ; sans image, la carte affiche un fond aux couleurs du thème.
    image?: string;
    published: boolean;
    // La page de détail /realisations/[slug] n'existe pas encore : pas de lien tant que cette valeur est false.
    pageReady: boolean;
}

export const realisations: Realisation[] = [];

export const realisationsSection = {
    // [07-ACC-5] — bloc [VALIDATION] dans docs/07.
    eyebrow: "Réalisations",
    title: "Des projets suivis de près",
    intro: "Pour chaque réalisation, nous précisons le contexte, notre rôle exact et ce qui a été livré.",
    linkLabel: "Lire le cas",
    // Seuil de publication de la section (D26).
    minPublished: 2,
};

// Aperçu de mise en page UNIQUEMENT en développement local : contenu neutre et fictif, affiché avec un bandeau
// explicite. Absent de la version de production (voir HomeRealisations).
export const previewRealisations: Realisation[] = [
    {
        slug: "apercu-1",
        title: "Titre du projet (exemple)",
        category: "Développement Web & E-⁠commerce",
        summary: "Exemple de texte : contexte du projet, rôle exact de Connect Web et ce qui a été livré.",
        status: "livré",
        published: false,
        pageReady: false,
    },
    {
        slug: "apercu-2",
        title: "Titre du projet (exemple)",
        category: "Digitalisation & Solutions Métiers",
        summary: "Exemple de texte : contexte du projet, rôle exact de Connect Web et ce qui a été livré.",
        status: "en cours",
        published: false,
        pageReady: false,
    },
    {
        slug: "apercu-3",
        title: "Titre du projet (exemple)",
        category: "Marketing Digital & Automatisation",
        summary: "Exemple de texte : contexte du projet, rôle exact de Connect Web et ce qui a été livré.",
        status: "livré",
        published: false,
        pageReady: false,
    },
];

// Décision d'Amadou du 08/11/2026 (D44), malgré la recommandation contraire : tant qu'aucun cas n'est autorisé, les
// cartes d'exemple (titres « (exemple) », images génériques) sont aussi visibles en production. Mettre à false pour
// masquer la section en production jusqu'à la publication d'un vrai cas (au moins `minPublished`).
export const SHOW_EXAMPLES_IN_PRODUCTION = true;
