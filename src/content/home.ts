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
    intro: "Trois familles, cinq pôles qui se complètent : vendre en ligne, organiser vos opérations, fidéliser vos clients, connecter et équiper vos locaux. Commencez par celui qui répond à votre besoin du moment.",
    linkLabel: "Voir le pôle",
    cards: [
        {
            title: "Sites web & e-commerce",
            need: "Être trouvé, inspirer confiance et vendre en ligne.",
            services: ["Création et refonte de sites", "Boutiques en ligne", "Migration de plateforme"],
            href: "/expertises/web-ecommerce",
            family: "Digitalisation",
            icon: "fal fa-store",
        },
        {
            title: "Applications & gestion d'entreprise",
            need: "Organiser vos opérations sans tableurs éparpillés.",
            services: ["Applications métier", "Applications web et PWA", "CRM, ERP et intégrations"],
            href: "/expertises/applications-crm-erp",
            family: "Digitalisation",
            icon: "fal fa-cogs",
        },
        {
            title: "Marketing digital",
            need: "Attirer, garder le contact avec vos clients et automatiser ce qui se répète.",
            services: ["Email marketing", "Fidélisation", "Segmentation et mesure", "Automatisation Shopify, Klaviyo…"],
            href: "/expertises/marketing-digital",
            family: "Marketing",
            icon: "fal fa-bullhorn",
        },
        {
            title: "Réseaux informatiques & câblage",
            need: "Une connexion fiable dans tous vos locaux.",
            services: ["Câblage", "Wi-Fi", "Équipements réseau"],
            href: "/expertises/reseaux-cablage",
            family: "Infrastructure",
            icon: "fal fa-network-wired",
        },
        {
            title: "Téléphonie VoIP & vidéosurveillance",
            need: "Être joignable et garder un œil sur vos locaux.",
            services: ["Standard téléphonique sur IP", "Caméras", "Accès à distance"],
            href: "/expertises/telephonie-videosurveillance",
            family: "Infrastructure",
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
