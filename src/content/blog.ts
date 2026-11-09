// Blog — trois articles fournis par Amadou (pack « blog-connect-web-version-longue », 09/11/2026), données dans
// blog-articles.json (textes HTML, sommaire, références). Règle : seuls les articles `published: true` s'affichent.
// Ne jamais ajouter ici un article, un auteur, une date ou une image non fournis : le pack ne donne ni auteur ni date
// de publication (champs absents, non inventés) ; la fiche et les cartes les masquent tant qu'ils ne sont pas renseignés.
import articleData from "./blog-articles.json";
import { whatsapp } from "./contact";

// Domaine de production (projet Vercel connect-agency) : canonical et image de partage.
export const SITE_URL = "https://connect-web.tech";

// Indexation des pages du blog. Tant que l'accueil est en noindex (docs, 09/11/2026), le blog l'est aussi.
// Passer à true au moment de la mise en ligne définitive, après relecture éditoriale et contrôle des liens.
export const BLOG_INDEXABLE = false;

// Catégories du blog (liste fournie par Amadou le 08/11/2026) : toutes au même niveau, sans parent ni sous-catégorie.
// Intitulés exacts ; `slug` = intitulé en minuscules, sans accents, avec des tirets (voir slugify).
// Attribution : renseigner `category` (un slug de cette liste) sur l'article ; TypeScript refuse un slug inconnu.
// Il n'existe pas d'interface d'administration (pas de CMS, décision de cadrage) : les articles sont dans ce fichier.
export const blogCategories = [
    { name: "Site internet", slug: "site-internet" },
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
    // Corps de l'article en HTML (titres h2/h3, paragraphes, listes) : contenu du dépôt, jamais saisi par un visiteur.
    bodyHtml?: string;
    title: string;
    seoTitle?: string;
    description?: string;
    excerpt?: string;
    // Auteur réel et date de publication : à renseigner par Amadou (absents du pack, jamais inventés).
    author?: string;
    // Date ISO (AAAA-MM-JJ).
    date?: string;
    // Durée de lecture estimée (200 mots par minute, fournie par le pack).
    readingTime?: number;
    image?: string;
    imageAlt?: string;
    toc?: { label: string; id: string }[];
    cta?: string;
    source?: { title: string; url: string };
    published: boolean;
    // La page /blog/[slug] n'existe pas encore : pas de lien tant que cette valeur est false.
    pageReady: boolean;
}

const categoryByName = (name: string): BlogCategorySlug => {
    const category = blogCategories.find((item) => item.name === name);
    if (!category) throw new Error(`Catégorie inconnue dans blog-articles.json : ${name}`);
    return category.slug;
};

export const posts: BlogPost[] = articleData.map((article) => ({
    slug: article.slug,
    category: categoryByName(article.category),
    title: article.title,
    seoTitle: article.seoTitle,
    description: article.description,
    excerpt: article.excerpt,
    readingTime: article.readingTimeMinutes,
    image: `/assets/img/blog/${article.slug}.jpg`,
    imageAlt: article.imageAlt,
    toc: article.toc,
    cta: article.cta,
    source: { title: article.sourceTitle, url: article.sourceUrl },
    bodyHtml: article.bodyHtml,
    published: true,
    pageReady: true,
}));

export const getPost = (slug: string) => posts.find((post) => post.slug === slug && post.published && post.pageReady);

// Bouton d'appel à l'action des articles : aucune page /contact n'existe encore (voir content/navigation.ts), le
// bouton ouvre donc WhatsApp (seul canal fourni, content/contact.ts) avec un message qui rappelle l'article lu.
export const articleCtaHref = (post: BlogPost) =>
    `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(`Bonjour, j'ai lu votre article « ${post.title} » et je souhaite en discuter.`)}`;

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

// Nombre d'articles publiés par catégorie (colonne latérale des articles).
export const getCategoryCounts = () =>
    blogCategories
        .map((category) => ({ ...category, count: posts.filter((post) => post.published && post.category === category.slug).length }))
        .filter((category) => category.count > 0);

export const formatPostDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
