// Blog — aucun article réel à ce jour : la section de l'accueil est masquée en production.
// Règle : seuls les articles `published: true` (texte original relu, auteur réel, image libre de droits) s'affichent.
// Ne jamais ajouter ici un article, un auteur, une date ou une image non fournis.

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    // Date ISO (AAAA-MM-JJ).
    date: string;
    image?: string;
    published: boolean;
    // La page /blog/[slug] n'existe pas encore : pas de lien tant que cette valeur est false.
    pageReady: boolean;
}

export const posts: BlogPost[] = [];

export const blogSection = {
    eyebrow: "Blog",
    // Titre demandé par Amadou le 08/11/2026 (reprend celui de la section équipe retirée) — à valider.
    title: "Les personnes qui travaillent sur vos projets",
    minPublished: 1,
};

// Aperçu de mise en page UNIQUEMENT en développement local (bandeau explicite, absent en production).
export const previewPosts: BlogPost[] = [1, 2, 3].map((n) => ({
    slug: `apercu-${n}`,
    title: "Titre d'article (exemple)",
    author: "Auteur (exemple)",
    date: "2026-01-01",
    image: `/assets/img/blog/${n}.jpg`,
    published: false,
    pageReady: false,
}));
