// Blog — aucun article réel à ce jour : la section de l'accueil est masquée en production.
// Règle : seuls les articles `published: true` (texte original relu, auteur réel, image libre de droits) s'affichent.
// Ne jamais ajouter ici un article, un auteur, une date ou une image non fournis.

// Catégories du blog (liste fournie par Amadou le 08/11/2026) : toutes au même niveau, sans parent ni sous-catégorie.
// Intitulés exacts ; `slug` = intitulé en minuscules, sans accents, avec des tirets (voir slugify).
// Attribution : renseigner `category` (un slug de cette liste) sur l'article ; TypeScript refuse un slug inconnu.
// Il n'existe pas d'interface d'administration (pas de CMS, décision de cadrage) : les articles sont dans ce fichier.
export const blogCategories = [
    { name: "Création de sites web", slug: "creation-de-sites-web" },
    { name: "E-commerce", slug: "e-commerce" },
    { name: "Applications web", slug: "applications-web" },
    { name: "Applications mobiles", slug: "applications-mobiles" },
    { name: "CRM", slug: "crm" },
    { name: "ERP", slug: "erp" },
    { name: "Référencement SEO", slug: "referencement-seo" },
    { name: "Email marketing", slug: "email-marketing" },
    { name: "Intelligence artificielle", slug: "intelligence-artificielle" },
    { name: "Automatisation", slug: "automatisation" },
    { name: "Réseaux informatiques", slug: "reseaux-informatiques" },
    { name: "Cybersécurité", slug: "cybersecurite" },
    { name: "Maintenance informatique", slug: "maintenance-informatique" },
] as const;

export type BlogCategorySlug = (typeof blogCategories)[number]["slug"];

// Génère un slug : minuscules, sans accents, tirets entre les mots.
export const slugify = (text: string): string =>
    text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const getCategory = (slug: string) => blogCategories.find((category) => category.slug === slug);

export interface BlogPost {
    slug: string;
    // Une seule catégorie par article (slug de blogCategories).
    category: BlogCategorySlug;
    // Corps de l'article, un paragraphe par entrée (page /blog/[slug]).
    body?: string[];
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
    category: (["creation-de-sites-web", "e-commerce", "crm"] as const)[n - 1],
    published: false,
    pageReady: false,
}));

// Décision d'Amadou du 08/11/2026 (D44), malgré la recommandation contraire : tant qu'aucun article n'est publié, les
// cartes d'exemple (titres « (exemple) », images génériques) sont aussi visibles en production. Mettre à false pour
// masquer la section en production jusqu'à la publication d'un vrai article.
export const SHOW_EXAMPLES_IN_PRODUCTION = true;

// Articles à afficher sur les pages du blog : publiés ; à défaut, exemples (mêmes règles que la section de l'accueil, D44).
export const getBlogPosts = () => {
    const published = posts.filter((post) => post.published);
    const showExamples = published.length < blogSection.minPublished && (process.env.NODE_ENV === "development" || SHOW_EXAMPLES_IN_PRODUCTION);
    const items = published.length >= blogSection.minPublished ? published : showExamples ? previewPosts : [];
    return { items, hasPublished: published.length > 0, isPreview: showExamples && process.env.NODE_ENV === "development" };
};

export const formatPostDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
