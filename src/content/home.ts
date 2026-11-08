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

// « Nos expertises » : trois familles regroupant les 5 pôles (décision D39 d'Amadou, 08/11/2026).
// Les services détaillés sont dans homeServices : pas de doublon entre les deux sections.
export const homeFamilies = {
    // Surtitre ajouté pour reprendre la structure de la maquette (absent de docs/07) — à valider.
    eyebrow: "Nos expertises",
    titleLines: ["Vos outils, en ligne", "et dans vos locaux."],
    intro: "Trois familles d'expertise pour vendre, vous organiser, rester en contact avec vos clients et équiper vos locaux. Chacune regroupe des pôles détaillés.",
    linkLabel: "Voir les pôles",
    cards: [
        {
            title: "Digitalisation",
            need: "Être trouvé, vendre en ligne et organiser vos opérations : sites, boutiques, applications, CRM et ERP.",
            poles: [
                { label: "Sites web & e-commerce", href: "/expertises/web-ecommerce" },
                { label: "Applications & gestion d'entreprise", href: "/expertises/applications-crm-erp" },
            ],
            href: "/expertises#digitalisation",
            icon: "fal fa-laptop-code",
        },
        {
            title: "Marketing",
            need: "Garder le contact avec vos clients et automatiser ce qui se répète : emails, fidélisation, automatisations.",
            poles: [{ label: "Marketing digital", href: "/expertises/marketing-digital" }],
            href: "/expertises#marketing",
            icon: "fal fa-bullhorn",
        },
        {
            title: "Infrastructure",
            need: "Équiper vos locaux : une connexion fiable, des appels qui aboutissent, des espaces surveillés.",
            poles: [
                { label: "Réseaux informatiques & câblage", href: "/expertises/reseaux-cablage" },
                { label: "Téléphonie VoIP & vidéosurveillance", href: "/expertises/telephonie-videosurveillance" },
            ],
            href: "/expertises#infrastructure",
            icon: "fal fa-server",
        },
    ],
};

// « Nos services » : un service par carte, comme la maquette de référence d'Amadou (capture du 08/11/2026).
// Descriptions rédigées à partir de docs/04 (problème traité et prestation). Liens vers la page du pôle, à l'ancre
// du service. Les outils cités (Shopify, Klaviyo) restent à confirmer (Q21).
export const homeServices = {
    eyebrow: "Nos services",
    title: "Ce que nous réalisons pour vous",
    intro: "Du site à la caméra : chaque service est détaillé sur la page de son pôle, avec ce que vous recevez, ce qui n'est pas inclus et la façon de démarrer.",
    linkLabel: "En savoir plus",
    // Les services marqués featured s'affichent d'abord ; les autres apparaissent avec le bouton ci-dessous.
    // Choix initial : sites, boutique, application sur mesure, CRM/ERP, email marketing (pages prioritaires de docs/05).
    moreLabel: "Voir plus de services",
    lessLabel: "Voir moins",
    cards: [
        {
            title: "Création et refonte de sites",
            text: "Un site clair, facile à mettre à jour, qui se trouve sur internet et vous apporte des contacts.",
            href: "/expertises/web-ecommerce#sites",
            featured: true,
            icon: "fal fa-globe",
        },
        {
            title: "Boutique en ligne",
            text: "Catalogue, paiements, livraisons et commandes réunis au même endroit, avec migration depuis votre plateforme actuelle si besoin.",
            href: "/expertises/web-ecommerce#ecommerce",
            featured: true,
            icon: "fal fa-shopping-cart",
        },
        {
            title: "Application métier sur mesure",
            text: "Un outil conçu pour votre façon de travailler : fini les ressaisies entre tableurs et messageries.",
            href: "/expertises/applications-crm-erp#applications-metier",
            featured: true,
            icon: "fal fa-database",
        },
        {
            title: "Application web et PWA",
            text: "Un outil accessible depuis tous vos appareils, que l'on peut installer sur l'écran d'accueil du téléphone.",
            href: "/expertises/applications-crm-erp#pwa",
            icon: "fal fa-mobile",
        },
        {
            title: "CRM, ERP et intégrations",
            text: "Clients, stock, ventes et facturation dans un logiciel adapté, relié à votre site ou à votre boutique.",
            href: "/expertises/applications-crm-erp#crm-erp",
            featured: true,
            icon: "fal fa-users-cog",
        },
        {
            title: "Email marketing et fidélisation",
            text: "Campagnes et relances au bon moment, à partir d'une base de contacts propre et consentie.",
            href: "/expertises/marketing-digital#email-fidelisation",
            featured: true,
            icon: "fal fa-envelope-open-text",
        },
        {
            title: "Automatisation",
            text: "Des envois et des tâches qui se déclenchent seuls, dans vos outils, par exemple Shopify et Klaviyo.",
            href: "/expertises/marketing-digital#automatisation",
            icon: "fal fa-sync-alt",
        },
        {
            title: "Réseaux informatiques et câblage",
            text: "Un Wi-Fi qui couvre tous vos espaces et un câblage propre, documenté, à partir d'une visite de vos locaux.",
            href: "/expertises/reseaux-cablage",
            icon: "fal fa-network-wired",
        },
        {
            title: "Vidéosurveillance",
            text: "Des caméras bien placées, des images consultables à distance et un accès sécurisé remis à votre nom.",
            href: "/expertises/telephonie-videosurveillance#videosurveillance",
            icon: "fal fa-video",
        },
        {
            title: "Téléphonie VoIP",
            text: "Un standard téléphonique sur internet, des transferts d'appels et des postes utilisables à distance.",
            href: "/expertises/telephonie-videosurveillance#voip",
            icon: "fal fa-phone-office",
        },
    ],
};

export const homeSituations = {
    // Surtitre et phrase d'intro ajoutés pour reprendre la structure de la maquette choisie par Amadou
    // (absents de docs/07, rédaction originale) — à valider.
    eyebrow: "Vos situations",
    // [07-ACC-4]
    title: "Votre situation ressemble-t-elle à l'une de celles-ci ?",
    intro: "Décrivez ce qui vous gêne au quotidien : nous vous orientons vers le pôle qui y répond.",
    linkLabel: "Voir le pôle",
    cards: [
        {
            title: "Vendre",
            problem: "Vos commandes arrivent par messages, appels et réseaux sociaux.",
            text: "Une boutique en ligne centralise le catalogue, les paiements et les livraisons, et vous laisse plus de temps pour vendre.",
            pole: "Sites web & e-commerce",
            href: "/expertises/web-ecommerce",
            icon: "fal fa-shopping-bag",
        },
        {
            title: "Organiser",
            problem: "Le stock, les réservations ou les devis vivent dans plusieurs fichiers.",
            text: "Un logiciel bien configuré ou une application conçue pour vous évite les ressaisies et donne une vue claire de l'activité.",
            pole: "Applications & gestion d'entreprise",
            href: "/expertises/applications-crm-erp",
            icon: "fal fa-tasks",
        },
        {
            title: "Fidéliser",
            problem: "Vos clients achètent une fois, puis vous n'avez plus de nouvelles.",
            text: "Des emails utiles, envoyés au bon moment et en partie automatisés, entretiennent la relation sans y passer vos journées.",
            pole: "Marketing digital",
            href: "/expertises/marketing-digital",
            icon: "fal fa-heart",
        },
        {
            title: "Connecter",
            problem: "Le Wi-Fi décroche et plus personne ne sait ce qui est branché où.",
            text: "Un réseau étudié pour vos locaux, câblé proprement et documenté, règle le problème à la source.",
            pole: "Réseaux informatiques & câblage",
            href: "/expertises/reseaux-cablage",
            icon: "fal fa-wifi",
        },
        {
            title: "Sécuriser et joindre",
            problem: "Des appels se perdent et vos locaux ne sont pas surveillés.",
            text: "Un standard téléphonique sur internet et des caméras consultables à distance vous rendent joignable et rassuré.",
            pole: "Téléphonie VoIP & vidéosurveillance",
            href: "/expertises/telephonie-videosurveillance",
            icon: "fal fa-shield-check",
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
