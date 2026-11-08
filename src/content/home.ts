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

export const homePoles = {
    // En-tête réécrit le 08/11/2026 à la demande d'Amadou (structure surtitre / titre sur 2 lignes / une phrase),
    // formulation originale — remplace l'en-tête initial de [07-ACC-3] ; docs/07 mis à jour.
    eyebrow: "Nos expertises",
    titleLines: ["Vos outils, en ligne", "et dans vos locaux."],
    intro: "Cinq pôles qui se complètent : vendre en ligne, organiser vos opérations, fidéliser vos clients, connecter et équiper vos locaux. Commencez par celui qui répond à votre besoin du moment.",
    linkLabel: "Voir le pôle",
    cards: [
        {
            title: "Sites web & e-commerce",
            need: "Être trouvé, inspirer confiance et vendre en ligne.",
            services: ["Création et refonte de sites", "Boutiques en ligne", "Migration de plateforme"],
            href: "/expertises/web-ecommerce",
            icon: "fas fa-store",
        },
        {
            title: "Applications & gestion d'entreprise",
            need: "Organiser vos opérations sans tableurs éparpillés.",
            services: ["Applications métier", "Applications web et PWA", "CRM, ERP et intégrations"],
            href: "/expertises/applications-crm-erp",
            icon: "fas fa-cogs",
        },
        {
            title: "Email marketing & fidélisation",
            need: "Garder le contact avec vos clients et les faire revenir.",
            services: ["Campagnes", "Scénarios automatiques", "Segmentation et mesure"],
            href: "/expertises/email-marketing",
            icon: "fas fa-envelope-open-text",
        },
        {
            title: "Réseaux informatiques & câblage",
            need: "Une connexion fiable dans tous vos locaux.",
            services: ["Câblage", "Wi-Fi", "Équipements réseau"],
            href: "/expertises/reseaux-cablage",
            icon: "fas fa-network-wired",
        },
        {
            title: "Téléphonie VoIP & vidéosurveillance",
            need: "Être joignable et garder un œil sur vos locaux.",
            services: ["Standard téléphonique sur IP", "Caméras", "Accès à distance"],
            href: "/expertises/telephonie-videosurveillance",
            icon: "fas fa-video",
        },
    ],
};
