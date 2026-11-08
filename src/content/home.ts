import { expertises } from "@/content/expertises";

// Textes de l'accueil — source : docs/07 [07-ACC-*]. Ne pas réécrire sans le signaler.

export const homeHero = {
    // [07-ACC-1]
    eyebrow: "Agence digitale et solutions informatiques",
    title: "Des sites, des outils de gestion et des installations pensés pour votre façon de travailler",
    text: "Connect Web accompagne les commerces, les PME et les organisations qui veulent vendre en ligne, travailler sans ressaisies, garder le lien avec leurs clients et équiper leurs locaux. Nous partons de votre activité — vos commandes, vos clients, vos équipes — avant de choisir un outil.",
    primaryCta: { label: "Parlons de votre projet", href: "/contact" },
    secondaryCta: { label: "Découvrir nos expertises", href: "/expertises" },
    // Les images de démo Tekni sont des gabarits gris (ex. « 1900x1004 ») : fond en dégradé du thème
    // tant qu'aucun visuel Connect Web n'est fourni. Renseigner un chemin pour afficher une image.
    backgroundImage: null as string | null,
};

export const homeAgency = {
    // Surtitre ajouté pour reprendre la structure de AboutV1 (non présent dans docs/07) — à valider.
    eyebrow: "L'agence",
    // [07-ACC-7] — bloc [VALIDATION] dans docs/07.
    title: "Une agence qui connaît le quotidien de ses clients",
    // [07-ACC-7] sans « basé à {{VILLE_ADRESSE}} » tant que Q07 n'est pas réglée.
    text: "Connect Web est dirigée par Amadou Diallo, développeur web. Avant de concevoir des outils pour d'autres, il a géré l'activité en ligne d'une marque : migration de la boutique, catalogue, réassorts, service client, campagnes email. Cette expérience guide chaque projet : un outil n'est utile que s'il simplifie le travail de ceux qui l'utilisent.",
    // [07-ACC-2] Repères, présentés dans l'accordéon de AboutV1.
    points: [
        {
            title: "Expérience terrain du e-commerce",
            text: "Catalogue, commandes, service client et emailing gérés au quotidien.",
        },
        {
            title: "Un interlocuteur, du cadrage à la prise en main",
            text: "La personne qui comprend votre besoin suit votre projet.",
        },
        {
            title: "Des outils que vous savez utiliser",
            text: "Chaque livraison comprend une prise en main et une documentation.",
        },
        {
            title: "Le bon outil, pas le plus complexe",
            text: "Nous vérifions si un logiciel existant suffit avant de proposer du sur mesure.",
        },
    ],
    link: { label: "Découvrir l'agence", href: "/agence" },
    // Gabarit gris de la template (783×900) en attendant la photo d'Amadou (docs/06 §1 section 7).
    image: { src: "/assets/img/about/1.jpg", alt: "", width: 783, height: 900 },
};

// « Ce que nous réalisons pour vous » : 6 services, un par carte, comme la maquette de référence d'Amadou
// (capture du 08/11/2026). Sélection faite pour couvrir les 4 pôles de D40 (docs/12) ; à ajuster par Amadou.
// Descriptions rédigées à partir de docs/04 (problème traité et prestation). Chaque carte renvoie à la page de son
// pôle (ancre du sous-service) quand elle existe (pageReady dans expertises.ts), sinon à la section « Nos expertises »
// de l'accueil : jamais à une page inexistante.
export const homeServices = {
    eyebrow: "Nos services",
    title: "Ce que nous réalisons pour vous",
    intro: "Une sélection de nos services, du site internet au réseau de vos locaux. Chacun est détaillé sur la page de son pôle : ce que vous recevez, ce qui n'est pas inclus et la façon de démarrer.",
    linkLabel: "En savoir plus",
    cards: [
        {
            title: "Création de sites internet",
            text: "Un site clair, facile à mettre à jour, qui se trouve sur internet et vous apporte des contacts.",
            pole: "developpement-web",
            anchor: "sites",
            icon: "fal fa-globe",
        },
        {
            title: "Création de sites e-commerce",
            text: "Catalogue, paiements, livraisons et commandes réunis au même endroit, avec migration depuis votre plateforme actuelle si besoin.",
            pole: "developpement-web",
            anchor: "ecommerce",
            icon: "fal fa-shopping-cart",
        },
        {
            title: "Applications métiers sur mesure",
            text: "Un outil conçu pour votre façon de travailler : fini les ressaisies entre tableurs et messageries.",
            pole: "digitalisation",
            anchor: "applications-metiers",
            icon: "fal fa-database",
        },
        {
            title: "CRM & ERP",
            text: "Clients, stock, ventes et facturation dans un logiciel adapté, relié à votre site ou à votre boutique.",
            pole: "digitalisation",
            anchor: "crm-erp",
            icon: "fal fa-users-cog",
        },
        {
            title: "Email marketing & automatisation",
            text: "Campagnes et relances au bon moment, avec des envois qui se déclenchent seuls dans vos outils.",
            pole: "marketing-digital",
            anchor: "email-automatisation",
            icon: "fal fa-envelope-open-text",
        },
        {
            title: "Réseaux informatiques & câblage",
            text: "Un Wi-Fi qui couvre tous vos espaces et un câblage propre, documenté, à partir d'une visite de vos locaux.",
            pole: "infrastructure-it",
            anchor: "reseaux-cablage",
            icon: "fal fa-network-wired",
        },
    ],
};

export const homeMethod = {
    // [07-ACC-6]
    title: "Comment nous travaillons",
    // Phrase d'intro ajoutée pour reprendre la structure de la maquette choisie (absente de docs/07,
    // rédaction originale) — à valider.
    intro: "Chaque projet suit les mêmes quatre étapes, avec à chaque fois ce que nous attendons de vous : vous savez où vous en êtes et ce qui reste à faire.",
    rolePrefix: "Votre rôle :",
    steps: [
        {
            title: "Échange et cadrage",
            text: "Vous nous présentez votre activité et ce qui bloque. Nous posons les questions qui permettent de cerner le vrai besoin.",
            role: "partager l'existant (outils, documents, exemples).",
        },
        {
            title: "Proposition",
            text: "Vous recevez une proposition écrite : périmètre, livrables, étapes, conditions et devis. Rien ne démarre sans votre accord.",
            role: "valider ou ajuster.",
        },
        {
            title: "Réalisation et recette",
            text: "Nous avançons par étapes et vous montrons le travail en cours. Avant la livraison, vous testez sur des cas réels.",
            role: "tester et faire vos retours.",
        },
        {
            title: "Prise en main et suivi",
            text: "Formation, documentation et accès à votre nom. Le suivi après livraison est défini dès la proposition.",
            role: "désigner les personnes à former.",
        },
    ],
    // Gabarit gris de la template (800×1038) en attendant un visuel Connect Web.
    image: { src: "/assets/img/illustration/10.png", alt: "", width: 800, height: 1038 },
};

// « Pourquoi Connect Web ? » — source : docs/03 §2 (proposition de valeur, bénéfices 1 à 4) ; docs/03 « Ce que
// Connect Web ne dit pas » respecté : pas de 24/7, de délai, de chiffre ni de superlatif. Le titre et les formulations
// sont originaux ; à valider par Amadou (docs/07 n'a pas encore de bloc dédié).
export const homeWhy = {
    title: "Pourquoi choisir Connect Web ?",
    points: [
        {
            title: "Comprendre avant de construire",
            text: "Chaque projet commence par l'étude de vos commandes, de vos clients et des tâches que vous répétez, avant de choisir un outil.",
        },
        {
            title: "Des outils qui se parlent",
            text: "Site, boutique, CRM, emailing et outils internes sont connectés plutôt qu'empilés, pour éviter les ressaisies.",
        },
        {
            title: "Autonomie après la livraison",
            text: "Formation, documentation et interfaces administrables : vous savez utiliser ce que vous recevez.",
        },
        {
            title: "Un interlocuteur pour le digital et les locaux",
            text: "Nous coordonnons le digital et les installations, réalisées seul ou avec des partenaires techniques.",
        },
    ],
    // Mot décoratif en filigrane du modèle de la template (« Technology »).
    watermark: "Connect Web",
};

// Section « Nos chiffres » — chiffres fournis par Amadou le 08/11/2026 (30+ projets, 18+ clients) : à justifier
// dans docs/08 avant publication. L'expérience n'est pas confirmée : `value: null` masque l'indicateur.
// Le nombre de pôles est calculé depuis expertises.ts pour rester cohérent avec « Nos expertises ».
export const homeStats = {
    eyebrow: "Nos chiffres",
    title: "Des réalisations concrètes, une expertise au service de vos projets",
    text: "Derrière chaque projet, il y a un besoin, un objectif et une solution adaptée. Découvrez quelques chiffres qui illustrent notre expérience et les collaborations que nous avons développées auprès des entreprises et organisations.",
    items: [
        { id: "projets", icon: "briefcase", value: 30 as number | null, suffix: "+", label: "Projets réalisés" },
        { id: "clients", icon: "users", value: 18 as number | null, suffix: "+", label: "Clients accompagnés" },
        { id: "poles", icon: "layers", value: expertises.length as number | null, suffix: "", label: "Pôles d'expertise" },
        // À CONFIRMER : renseigner le nombre d'années (ex. 5) pour afficher « N+ années d'expérience ».
        { id: "experience", icon: "calendar", value: null as number | null, suffix: "+", label: "Années d'expérience" },
    ],
};
