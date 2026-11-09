// Réalisations — source : docs/08 (fiche type §2, règles de publication §3, seuil §4), docs/07 [07-ACC-5] et fiches
// éditoriales du 09/11/2026 (captures de l'accueil des sites publics, à 1440 × 900).
// Intégration demandée par Amadou le 09/11/2026. Les textes décrivent UNIQUEMENT ce qui est visible sur les sites ;
// ils n'affirment ni le rôle exact de Connect Web, ni un résultat. À confirmer pour chaque fiche avant publication :
// rôle et périmètre de Connect Web, période, accord d'utilisation de la marque et des visuels (docs/08 §3).
// Entrées `published: false` = exclues du site : capture inutilisable ou point de vigilance à lever (raison en commentaire).

export interface Realisation {
    slug: string;
    // Nom du client ou du site, tel qu'il apparaît sur le site public.
    client: string;
    title: string;
    // Catégorie affichée sur la carte.
    category: string;
    // Une ou deux phrases factuelles : ce qui est visible sur le site. Mention « projet en cours » si non livré.
    summary: string;
    status: "livré" | "en cours";
    // Capture du haut du site public (1000 px de large, sous /public).
    image?: string;
    // Adresse du site public : lien « Voir le site ».
    siteUrl?: string;
    published: boolean;
    // La page de détail /realisations/[slug] n'existe pas encore : pas de lien tant que cette valeur est false.
    pageReady: boolean;
}

const img = "/assets/img/realisations";

export const realisations: Realisation[] = [
    {
        slug: "atta-africa",
        client: "ATTA Africa",
        title: "Une boutique en ligne au service de l'univers ATTA Africa",
        category: "E-commerce / Mode",
        summary:
            "Collections de vêtements et accessoires présentées par de grandes photographies de campagne, avec navigation par collections, compte, panier et choix de devise.",
        status: "livré",
        image: `${img}/atta-africa.webp`,
        siteUrl: "https://atta-africa.com/",
        published: true,
        pageReady: false,
    },
    {
        slug: "linkshop",
        client: "LinkShop",
        title: "Un catalogue high-tech organisé pour trouver le bon équipement",
        category: "E-commerce / High-tech",
        summary:
            "Informatique, téléphonie, audiovisuel : une recherche centrale, un menu de catégories et une offre du moment en avant, avec les informations de livraison et d'assistance.",
        status: "livré",
        image: `${img}/linkshop.webp`,
        siteUrl: "https://linkshop.sn/",
        published: true,
        pageReady: false,
    },
    {
        slug: "marjan-bijouterie",
        client: "Marjan Bijouterie",
        title: "Une bijouterie en ligne structurée autour de ses collections",
        category: "E-commerce / Bijouterie",
        summary:
            "Bagues, colliers, bracelets, alliances : une recherche, un panier et des catégories détaillées, avec les points de contact de Dakar et Saint-Louis en haut de page.",
        status: "livré",
        image: `${img}/marjan-bijouterie.webp`,
        siteUrl: "https://www.marjanbijouterie.com/",
        published: true,
        pageReady: false,
    },
    {
        slug: "scod-vtc",
        client: "SCOD VTC",
        title: "Réserver un trajet VTC à partir d'un parcours direct",
        category: "Application web / Réservation",
        summary:
            "La recherche de trajet (départ, destination) est au cœur de l'accueil, suivie des usages : transfert aéroport, transport d'entreprise, événementiel, mise à disposition d'un chauffeur.",
        status: "livré",
        image: `${img}/scod-vtc.webp`,
        siteUrl: "https://scodvtc.com/",
        published: true,
        pageReady: false,
    },
    {
        slug: "dds-medical",
        client: "DDS Medical",
        title: "Une présence web pour présenter les produits et services de DDS Medical",
        category: "Site vitrine / Santé",
        summary:
            "Présentation d'une activité de consommables et matériels médicaux à Dakar : coordonnées en en-tête, services, mission et vision, accès direct au contact.",
        status: "livré",
        image: `${img}/dds-medical.webp`,
        siteUrl: "https://ddsmedicalsenegal.com/",
        published: true,
        pageReady: false,
    },
    {
        slug: "sunu-thiossane",
        client: "Sunu Thiossane",
        title: "Rendre les programmes éducatifs faciles à découvrir",
        category: "Site institutionnel / Éducation",
        summary:
            "Voyages d'échange culturel, camp d'été et académie accessibles depuis la navigation, pour orienter les familles et les jeunes vers les programmes et les admissions.",
        status: "livré",
        image: `${img}/sunu-thiossane.webp`,
        siteUrl: "https://sunuthiossane.org/",
        published: true,
        pageReady: false,
    },
    {
        slug: "was-africa-nss",
        client: "WAS Africa · Nous sommes la solution",
        title: "Donner de la visibilité au mouvement Nous Sommes la Solution",
        category: "Site institutionnel / Organisation",
        summary:
            "Mission du mouvement des femmes rurales africaines, programmes, actualités, galerie et contact, avec un choix de langue.",
        status: "livré",
        image: `${img}/was-africa-nss.webp`,
        siteUrl: "https://wasafrica.org/fr/",
        published: true,
        pageReady: false,
    },
    {
        slug: "njeg",
        client: "NJEG Marketplace",
        title: "Une place de marché organisée autour des boutiques et des produits",
        category: "Marketplace / E-commerce",
        summary:
            "Recherche, catégories (téléphones, informatique, maison, mode, santé, sport), nouveautés et accès aux boutiques officielles depuis une même plateforme.",
        status: "livré",
        image: `${img}/njeg.webp`,
        siteUrl: "https://www.njeg.net/",
        published: true,
        pageReady: false,
    },
    {
        slug: "cosaan-academy",
        client: "Cosaan International Academy",
        title: "Présenter l'académie, ses programmes et les admissions",
        category: "Site institutionnel / Éducation",
        summary:
            "Deux actions dès l'accueil (parcours d'admission, découverte de l'académie), puis philosophie, programmes, campus et actualités. Les visuels du site illustrent la vision de l'école.",
        status: "livré",
        image: `${img}/cosaan-academy.webp`,
        siteUrl: "https://ciadakar.org/en",
        published: true,
        pageReady: false,
    },
    {
        slug: "horeca-africa",
        client: "HORECA Africa",
        title: "Une page événementielle qui guide chaque public vers son action",
        category: "Site événementiel / Inscription",
        summary:
            "Page de l'HORECA Africa Business Week (Dakar, 27 et 28 novembre 2026) avec trois parcours : s'inscrire, exposer ou devenir partenaire, puis programme, exposants et sponsors.",
        status: "livré",
        image: `${img}/horeca-africa.webp`,
        siteUrl: "https://horecafrica.com/",
        published: true,
        pageReady: false,
    },
    // --- Non publiées (voir fiches du 09/11/2026) ---
    {
        // Capture : hero resté blanc au chargement. Refaire la capture ou obtenir un visuel validé.
        slug: "ada-voyages",
        client: "ADA Voyages",
        title: "Présenter les voyages et faciliter les demandes de réservation",
        category: "Site web / Voyage",
        summary:
            "Destinations, packages, Hajj, Umrah et colonies, avec un accès direct au contact et à l'action « Réservez ».",
        status: "livré",
        image: `${img}/ada-voyages.webp`,
        siteUrl: "https://adavoyages.net/",
        published: false,
        pageReady: false,
    },
    {
        // Capture : hero du slider resté blanc au chargement. Refaire la capture (non signalé dans la fiche).
        slug: "tamou-fishing",
        client: "Tamou Fishing International",
        title: "Présenter l'activité et les produits de Tamou Fishing",
        category: "Site vitrine / Industrie alimentaire",
        summary:
            "Histoire de l'entreprise, chaîne de valeur de l'achat à la conservation des produits halieutiques, produits et partenaires.",
        status: "livré",
        image: `${img}/tamou-fishing.webp`,
        siteUrl: "https://tamou.sn/",
        published: false,
        pageReady: false,
    },
    {
        // Point de vigilance : éléments de navigation et catégories sans rapport avec l'organisation sur la page visible.
        slug: "fahamu-africa",
        client: "Fahamu Africa",
        title: "Un site pour les programmes et publications de Fahamu Africa",
        category: "Site institutionnel / Organisation",
        summary:
            "Vision et valeurs de l'organisation, programmes, articles, galerie et contact.",
        status: "livré",
        image: `${img}/fahamu-africa.webp`,
        siteUrl: "https://fahamuafrica.org/",
        published: false,
        pageReady: false,
    },
    {
        // Point de vigilance : textes de démonstration visibles dans l'en-tête public.
        slug: "sd-group",
        client: "SD Group",
        title: "Clarifier une offre industrielle à plusieurs métiers",
        category: "Site institutionnel / Industrie",
        summary:
            "Approvisionnement technique, sourcing, logistique, import-export et maintenance industrielle, avec accès aux produits et à la demande de devis.",
        status: "livré",
        image: `${img}/sd-group.webp`,
        siteUrl: "https://sdgroup.sn/",
        published: false,
        pageReady: false,
    },
    // Fraîs'n (https://fraisn.shop/) : domaine inaccessible le 09/11/2026, aucune capture ni contenu vérifiable : non ajouté.
];

export const realisationsSection = {
    // [07-ACC-5] — bloc [VALIDATION] dans docs/07.
    eyebrow: "Réalisations",
    title: "Des projets suivis de près",
    intro: "Une sélection de sites et de plateformes en ligne de nos clients, avec ce que l'on y découvre dès l'accueil.",
    linkLabel: "Lire le cas",
    siteLinkLabel: "Voir le site",
    // Seuil de publication de la section (D26).
    minPublished: 2,
};

// Aperçu de mise en page UNIQUEMENT en développement local : contenu neutre et fictif, affiché avec un bandeau
// explicite. Absent de la version de production (voir HomeRealisations).
export const previewRealisations: Realisation[] = [
    {
        slug: "apercu-1",
        client: "Client (exemple)",
        title: "Titre du projet (exemple)",
        category: "Développement Web & E-⁠commerce",
        summary: "Exemple de texte : contexte du projet, rôle exact de Connect Web et ce qui a été livré.",
        status: "livré",
        published: false,
        pageReady: false,
    },
    {
        slug: "apercu-2",
        client: "Client (exemple)",
        title: "Titre du projet (exemple)",
        category: "Digitalisation & Solutions Métiers",
        summary: "Exemple de texte : contexte du projet, rôle exact de Connect Web et ce qui a été livré.",
        status: "en cours",
        published: false,
        pageReady: false,
    },
    {
        slug: "apercu-3",
        client: "Client (exemple)",
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
