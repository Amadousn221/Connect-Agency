import { expertises } from "@/content/expertises";

// Textes de l'accueil — source : docs/07 [07-ACC-*]. Ne pas réécrire sans le signaler.

export const homeHero = {
    // Quatre slides, un par pôle (lot de refinement du 08/11/2026, textes fournis par Amadou).
    // `pole` référence l'id d'un pôle de expertises.ts : le lien du bouton suit `pageReady`.
    slides: [
        {
            pole: "developpement-web",
            image: "/assets/img/cw/hero-developpement-web.jpg",
            eyebrow: "Développement Web & E-commerce",
            title: "Des solutions web pensées pour développer votre activité",
            text: "Nous concevons des sites internet, des boutiques e-commerce et des applications web adaptés à vos objectifs. Des expériences digitales performantes et évolutives pour valoriser votre entreprise, attirer des clients et vendre en ligne.",
            cta: "Découvrir nos solutions web",
        },
        {
            pole: "digitalisation",
            image: "/assets/img/cw/hero-digitalisation.jpg",
            eyebrow: "Digitalisation & Solutions Métiers",
            title: "Simplifiez votre gestion avec des outils adaptés à votre métier",
            text: "CRM, ERP, applications métiers et automatisations : nous connectons vos outils et optimisons vos processus pour vous aider à mieux organiser votre activité, suivre vos opérations et gagner du temps au quotidien.",
            cta: "Découvrir nos solutions métiers",
        },
        {
            pole: "infrastructure-it",
            image: "/assets/img/cw/hero-infrastructure-it.jpg",
            eyebrow: "Infrastructure & Solutions IT",
            title: "Des infrastructures fiables pour accompagner votre activité",
            text: "Réseaux informatiques, câblage, équipements IT, serveurs et solutions de sécurité : nous vous accompagnons dans la mise en place d'environnements professionnels connectés et adaptés à vos besoins techniques.",
            cta: "Découvrir nos solutions IT",
        },
        {
            pole: "marketing-digital",
            image: "/assets/img/cw/hero-marketing-digital.jpg",
            eyebrow: "Marketing Digital & Automatisation",
            title: "Développez votre visibilité et fidélisez vos clients",
            text: "Du référencement naturel aux campagnes marketing, en passant par l'emailing et l'automatisation, nous mettons en place des actions adaptées à votre audience pour attirer, convertir et fidéliser vos clients.",
            cta: "Découvrir nos solutions marketing",
        },
    ],
    secondaryCta: { label: "Parlons de votre projet", href: "/contact" },
    // Les images de démo Tekni sont des gabarits gris : fond en dégradé du thème tant qu'aucun visuel n'est fourni.
    backgroundImage: null as string | null,
};

export const homeAgency = {
    // Texte fourni par Amadou le 08/11/2026 (remplace la version précédente), repris tel quel.
    eyebrow: "L'agence",
    // Titre en deux temps : la 2e ligne est en dégradé bleu.
    titleLines: ["Une expertise digitale complète", "pour développer votre activité."],
    paragraphs: [
        "Connect Web accompagne les PME, entrepreneurs et organisations dans leurs projets numériques. Nous réunissons développement web et mobile, solutions métiers, marketing digital et infrastructure IT avec un seul interlocuteur pour coordonner l'ensemble.",
        "Nous partons de vos besoins pour concevoir des outils adaptés à votre activité, simplifier votre quotidien et vous aider à toucher de nouveaux clients.",
    ],
    points: [
        { title: "Développer votre présence en ligne", text: "sites web et boutiques e-commerce." },
        { title: "Créer vos applications web et mobiles", text: "des solutions sur mesure pour vos équipes et vos clients." },
        { title: "Simplifier votre gestion", text: "CRM, ERP et applications métiers." },
        { title: "Attirer et fidéliser vos clients", text: "SEO, emailing et automatisation." },
        { title: "Connecter vos équipes", text: "réseaux, équipements et solutions IT." },
    ],
    // Photo fournie par Amadou (dossier Images/hero), droits à confirmer avant publication.
    image: { src: "/assets/img/cw/accueil-agence-echange.jpg", alt: "Des professionnels échangent devant des écrans de travail", width: 1000, height: 667 },
};

// « Ce que nous réalisons pour vous » : 6 services, un par carte, comme la maquette de référence d'Amadou
// (capture du 08/11/2026). Sélection faite pour couvrir les 4 pôles de D40 (docs/12) ; à ajuster par Amadou.
// Descriptions rédigées à partir de docs/04 (problème traité et prestation). Chaque carte renvoie à la page de son
// pôle (ancre du sous-service) quand elle existe (pageReady dans expertises.ts), sinon à la section « Nos expertises »
// de l'accueil : jamais à une page inexistante.
export const homeServices = {
    eyebrow: "Nos services",
    title: "Ce que nous réalisons pour vous",
    intro: "Du site internet au réseau de vos locaux, voici ce que nous réalisons pour vous.",
    // Six services et leurs cinq sous-services : texte fourni par Amadou le 08/11/2026, repris tel quel (remplace les
    // cartes courtes précédentes). Capacités à confirmer avant publication (docs/12 Q22) : applications mobiles iOS et
    // Android, plateformes SaaS, sauvegarde et protection des données, outils nommés (WooCommerce, Shopify).
    cards: [
        {
            title: "Sites web & e-commerce",
            text: "Présentez votre entreprise et vendez en ligne avec un site adapté à votre image.",
            items: ["Sites vitrines et institutionnels", "Boutiques WooCommerce", "Boutiques Shopify", "Landing pages", "Refonte de sites web"],
            icon: "fal fa-globe",
        },
        {
            title: "Applications web sur mesure",
            text: "Simplifiez le travail de vos équipes avec une application web conçue autour de vos besoins : espace client, outils internes.",
            items: ["Applications métiers", "Plateformes SaaS", "Portails et espaces clients", "Plateformes de réservation", "Tableaux de bord personnalisés"],
            icon: "fal fa-browser",
        },
        {
            title: "Applications mobiles",
            text: "Mettez vos services à portée de main avec une application adaptée aux habitudes de vos utilisateurs, sur leur smartphone.",
            items: [
                "Applications iOS et Android",
                "Applications de vente en ligne",
                "Applications de réservation",
                "Applications internes pour vos équipes",
                "Maintenance et évolution des applications",
            ],
            icon: "fal fa-mobile",
        },
        {
            title: "CRM & ERP",
            text: "Pilotez votre activité avec des logiciels qui regroupent vos informations. Nous adaptons votre CRM ou ERP à vos méthodes.",
            items: [
                "Gestion des contacts et suivi commercial",
                "Devis, facturation et paiements",
                "Gestion des stocks et des achats",
                "Suivi des projets et des équipes",
                "Connexion entre vos logiciels",
            ],
            icon: "fal fa-users-cog",
        },
        {
            title: "Stratégie & Acquisition",
            // Titre et description fournis par Amadou le 08/11/2026. ATTENTION : ce sont les mots exacts du site de référence
            // Forge (benchmark) et la gestion des réseaux sociaux n'est pas un service acquis (docs/12 D13, Q22) : à réécrire
            // avant toute publication. Les 5 sous-services sont ceux du pôle Marketing (docs/12 D42).
            text: "Campagnes publicitaires, SEO performant et gestion des réseaux sociaux pour maximiser votre visibilité.",
            items: [
                "Stratégie marketing digital",
                "Référencement naturel (SEO)",
                "Email marketing & CRM marketing",
                "Marketing automation",
                "Publicité digitale & acquisition",
            ],
            icon: "fal fa-bullhorn",
        },
        {
            title: "Réseaux informatiques & solutions IT",
            text: "Un environnement informatique adapté à vos usages et à vos locaux. Nous installons vos équipements et entretenons votre réseau.",
            items: [
                "Installation de réseaux et Wi-Fi",
                "Câblage informatique",
                "Installation et configuration des équipements",
                "Sauvegarde et protection des données",
                "Maintenance et assistance informatique",
            ],
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
    // Photo fournie par Amadou (dossier Images/hero), droits à confirmer avant publication.
    image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Deux personnes examinent ensemble un écran de code", width: 1000, height: 563 },
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
export const expertiseCards: Record<string, { cardTitle: string; photo: string; items: string[] }> = {
    "developpement-web": {
        cardTitle: "Développement web",
        photo: "/assets/img/cw/hero-developpement-web.jpg",
        items: ["Sites internet professionnels", "Sites e-commerce", "Shopify & WooCommerce", "Applications web & PWA", "Refonte & maintenance"],
    },
    digitalisation: {
        cardTitle: "Digitalisation",
        photo: "/assets/img/cw/hero-digitalisation.jpg",
        items: ["CRM & gestion client", "ERP & gestion d'entreprise", "Applications métiers", "Automatisation des processus", "Intégration de solutions digitales"],
    },
    "marketing-digital": {
        cardTitle: "Marketing digital",
        photo: "/assets/img/cw/hero-marketing-digital.jpg",
        items: ["Stratégie marketing digital", "Référencement naturel SEO", "Email marketing & CRM", "Marketing automation", "Publicité digitale & acquisition"],
    },
    "infrastructure-it": {
        cardTitle: "Infrastructure IT",
        photo: "/assets/img/cw/hero-infrastructure-it.jpg",
        items: ["Réseaux & câblage", "Installation d'équipements IT", "Hébergement & serveurs", "Téléphonie IP", "Vidéosurveillance & contrôle d'accès"],
    },
};
