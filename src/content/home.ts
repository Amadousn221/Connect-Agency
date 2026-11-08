import { expertises } from "@/content/expertises";

// Textes de l'accueil — source : docs/07 [07-ACC-*]. Ne pas réécrire sans le signaler.

export const homeHero = {
    // Quatre slides, un par pôle (lot de refinement du 08/11/2026, textes fournis par Amadou).
    // `pole` référence l'id d'un pôle de expertises.ts : le lien du bouton suit `pageReady`.
    slides: [
        {
            pole: "developpement-web",
            eyebrow: "Développement Web & E-commerce",
            title: "Des solutions web pensées pour développer votre activité",
            text: "Nous concevons des sites internet, des boutiques e-commerce et des applications web adaptés à vos objectifs. Des expériences digitales performantes et évolutives pour valoriser votre entreprise, attirer des clients et vendre en ligne.",
            cta: "Découvrir nos solutions web",
        },
        {
            pole: "digitalisation",
            eyebrow: "Digitalisation & Solutions Métiers",
            title: "Simplifiez votre gestion avec des outils adaptés à votre métier",
            text: "CRM, ERP, applications métiers et automatisations : nous connectons vos outils et optimisons vos processus pour vous aider à mieux organiser votre activité, suivre vos opérations et gagner du temps au quotidien.",
            cta: "Découvrir nos solutions métiers",
        },
        {
            pole: "marketing-digital",
            eyebrow: "Marketing Digital & Automatisation",
            title: "Développez votre visibilité et fidélisez vos clients",
            text: "Du référencement naturel aux campagnes marketing, en passant par l'emailing et l'automatisation, nous mettons en place des actions adaptées à votre audience pour attirer, convertir et fidéliser vos clients.",
            cta: "Découvrir nos solutions marketing",
        },
        {
            pole: "infrastructure-it",
            eyebrow: "Infrastructure & Solutions IT",
            title: "Des infrastructures fiables pour accompagner votre activité",
            text: "Réseaux informatiques, câblage, équipements IT, serveurs et solutions de sécurité : nous vous accompagnons dans la mise en place d'environnements professionnels connectés et adaptés à vos besoins techniques.",
            cta: "Découvrir nos solutions IT",
        },
    ],
    secondaryCta: { label: "Parlons de votre projet", href: "/contact" },
    // Les images de démo Tekni sont des gabarits gris : fond en dégradé du thème tant qu'aucun visuel n'est fourni.
    backgroundImage: null as string | null,
};

export const homeAgency = {
    // Nouvelle orientation (08/11/2026) : l'agence et les problèmes de ses clients, sans le parcours du fondateur
    // (réservé à la page /agence).
    eyebrow: "L'agence",
    title: "Une agence digitale qui comprend vos enjeux",
    paragraphs: [
        "Connect Web accompagne les entreprises, PME, entrepreneurs et organisations dans la création de leurs outils digitaux et l'amélioration de leurs activités. Nous associons développement web, solutions métiers, marketing digital et infrastructures informatiques pour répondre à des besoins concrets.",
        "Manque de visibilité, difficultés à vendre en ligne, outils qui ne communiquent pas ou tâches répétitives : nous analysons vos problématiques pour concevoir des solutions simples à utiliser, adaptées à votre fonctionnement et capables d'évoluer avec votre activité.",
    ],
    listTitle: "Concrètement, nous vous aidons à :",
    points: [
        { title: "Développer votre présence en ligne", text: "Sites web et e-commerce." },
        { title: "Simplifier votre gestion", text: "CRM, ERP et applications métiers." },
        { title: "Attirer et fidéliser vos clients", text: "SEO, emailing et automatisation." },
        { title: "Connecter votre environnement de travail", text: "Réseaux, équipements et solutions IT." },
    ],
    // Page /agence pas encore créée : lien vers la section « Pourquoi choisir Connect Web ? » de l'accueil (valide).
    link: { label: "Découvrir Connect Web", href: "/#pourquoi-titre" },
    // Gabarit gris de la template (783×900). Besoin visuel : photo réelle de travail ou d'équipe, autorisée,
    // format portrait ~4:5, sans logo tiers.
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
    // Sous-services et technologies fournis par Amadou le 08/11/2026. Outils nommés (Shopify, WooCommerce, Odoo,
    // Klaviyo, Brevo) : liste des outils maîtrisés à confirmer avant publication (docs/12 Q21).
    cards: [
        {
            title: "Création de sites internet",
            text: "Nous créons des sites professionnels modernes, rapides et adaptés à votre activité pour renforcer votre image, présenter vos offres et faciliter la prise de contact avec vos clients.",
            items: ["Sites vitrines & corporate", "Sites institutionnels", "Sites tourisme & voyages", "WordPress & développement sur mesure", "Refonte & maintenance web"],
            pole: "developpement-web",
            anchor: "sites",
            icon: "fal fa-globe",
        },
        {
            title: "Création de sites e-commerce",
            text: "Nous concevons des boutiques en ligne adaptées à votre catalogue et à vos clients, avec les fonctionnalités essentielles pour vendre, gérer vos commandes et développer votre activité.",
            items: ["Shopify", "WooCommerce", "Marketplaces & catalogues connectés", "Paiement & livraison", "Optimisation des boutiques en ligne"],
            pole: "developpement-web",
            anchor: "ecommerce",
            icon: "fal fa-shopping-cart",
        },
        {
            title: "Applications métiers sur mesure",
            text: "Nous développons des applications adaptées aux processus de votre entreprise pour centraliser les informations, améliorer le suivi des opérations et simplifier le travail quotidien.",
            items: ["Applications web & PWA", "Outils de gestion interne", "Réservations & planification", "Tableaux de bord métiers", "API & intégrations"],
            pole: "digitalisation",
            anchor: "applications-metiers",
            icon: "fal fa-database",
        },
        {
            title: "CRM & ERP",
            text: "Nous vous accompagnons dans la mise en place d'outils de gestion pour centraliser vos données, suivre vos clients et mieux piloter les opérations de votre entreprise.",
            items: ["Odoo ERP", "CRM & suivi commercial", "Gestion des ventes & stocks", "Facturation & processus métiers", "Intégration et automatisation"],
            pole: "digitalisation",
            anchor: "crm-erp",
            icon: "fal fa-users-cog",
        },
        {
            title: "Email marketing & automatisation",
            text: "Nous créons des parcours de communication et des automatisations pour garder le contact avec vos clients, développer leur engagement et améliorer votre fidélisation.",
            items: ["Klaviyo & Brevo", "Campagnes email & newsletters", "Segmentation des contacts", "Relances & scénarios automatisés", "Analyse des performances"],
            pole: "marketing-digital",
            anchor: "email-automatisation",
            icon: "fal fa-envelope-open-text",
        },
        {
            title: "Réseaux informatiques & solutions IT",
            text: "Nous accompagnons les organisations dans la mise en place de leurs équipements et infrastructures informatiques pour faciliter la connectivité et sécuriser leurs environnements de travail.",
            items: ["Réseaux LAN & Wi-Fi", "Câblage informatique", "Installation d'équipements IT", "Serveurs & téléphonie IP", "Vidéosurveillance & contrôle d'accès"],
            pole: "infrastructure-it",
            anchor: "reseaux-cablage",
            icon: "fal fa-network-wired",
        },
    ],
};

export const homeMethod = {
    title: "Comment nous travaillons",
    intro: "Chaque projet commence par une bonne compréhension de vos besoins. Nous avançons étape par étape, avec des échanges clairs, des livrables définis et un accompagnement adapté à votre organisation.",
    rolePrefix: "Votre rôle :",
    steps: [
        {
            title: "Échange et cadrage",
            text: "Nous prenons le temps de comprendre votre activité, vos objectifs et les difficultés que vous souhaitez résoudre. Cet échange nous permet de définir le besoin réel et les priorités du projet.",
            role: "partager vos attentes, vos outils existants et les informations utiles.",
        },
        {
            title: "Proposition",
            text: "Nous préparons une proposition adaptée à vos besoins, avec un périmètre clair, les fonctionnalités prévues, les grandes étapes et les conditions de réalisation.",
            role: "examiner la proposition et valider les orientations du projet.",
        },
        {
            title: "Réalisation et recette",
            text: "Nous concevons et développons votre solution progressivement. Des points de suivi et des tests permettent de vérifier que le résultat correspond aux besoins définis.",
            role: "tester les fonctionnalités, partager vos observations et valider les livrables.",
        },
        {
            title: "Prise en main et suivi",
            text: "Nous vous accompagnons dans la mise en service et la prise en main de votre solution. Selon le projet, nous prévoyons une documentation, une formation et un suivi adapté.",
            role: "désigner les utilisateurs concernés et organiser la prise en main.",
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

// Cartes de « Nos expertises » (accueil) : titre court et sous-services affichés sur la carte, fournis par Amadou le
// 08/11/2026. Les libellés du menu (expertises.ts) ne changent pas ; les noms complets des pôles restent dans
// expertises.ts. Clé = id du pôle.
export const expertiseCards: Record<string, { cardTitle: string; items: string[] }> = {
    "developpement-web": {
        cardTitle: "Développement web",
        items: ["Sites internet professionnels", "Sites e-commerce", "Shopify & WooCommerce", "Applications web & PWA", "Refonte & maintenance"],
    },
    digitalisation: {
        cardTitle: "Digitalisation",
        items: ["CRM & gestion client", "ERP & gestion d'entreprise", "Applications métiers", "Automatisation des processus", "Intégration de solutions digitales"],
    },
    "marketing-digital": {
        cardTitle: "Marketing digital",
        items: ["Stratégie marketing digital", "Référencement naturel SEO", "Email marketing & CRM", "Marketing automation", "Publicité digitale & acquisition"],
    },
    "infrastructure-it": {
        cardTitle: "Infrastructure IT",
        items: ["Réseaux & câblage", "Installation d'équipements IT", "Hébergement & serveurs", "Téléphonie IP", "Vidéosurveillance & contrôle d'accès"],
    },
};
