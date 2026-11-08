// Les 4 pôles d'expertise de Connect Web — source unique (décision D40 d'Amadou, 08/11/2026 ; docs/12, docs/03).
// Utilisée par la section « Nos expertises » de l'accueil et par le menu. Les descriptions de sous-services sont
// conservées ici pour les futures pages de pôle ; la carte de l'accueil n'affiche que leurs titres.
//
// Statut des capacités (à confirmer avant publication, voir docs/12 Q22) :
// - Infrastructure : catalogue proposé, modalités d'exécution et partenaires à confirmer ; ne pas présenter comme
//   des réalisations démontrées.
// - Marketing : SEO et publicité (Google Ads, Meta Ads) sont ajoutés à la demande d'Amadou ; le dossier ne documente
//   pas encore d'expérience sur ces deux services.
// - Sites spécialisés par secteur (tourisme, hôtellerie, restauration…) : aucune réalisation documentée à ce jour.

export interface SubService {
    title: string;
    description: string;
}

export interface Expertise {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    subServices: SubService[];
    targets: string;
    // Classes Font Awesome Light du thème (équivalents de Code2, Workflow, Megaphone, Server).
    icon: string;
    // Route de la page de pôle. Tant que la page n'existe pas, pageReady reste false : le bouton pointe alors vers la
    // liste des services de l'accueil (lien valide) et non vers une page inexistante.
    href: string;
    pageReady: boolean;
}

export const expertisesSectionAnchor = "/#nos-services";

export const expertises: Expertise[] = [
    {
        id: "developpement-web",
        number: "01",
        title: "Développement Web & E-⁠commerce",
        shortTitle: "Développement web & e-commerce",
        description:
            "Nous concevons des sites internet, des boutiques en ligne et des plateformes web sur mesure pour aider les entreprises à développer leur présence digitale, valoriser leurs services et générer de nouvelles opportunités commerciales.",
        subServices: [
            {
                title: "Création de sites internet",
                description: "Sites vitrines, institutionnels et corporate, adaptés aux PME, entreprises, associations et organisations.",
            },
            {
                title: "Création de sites e-commerce",
                description: "Boutiques en ligne avec Shopify, WooCommerce et solutions personnalisées.",
            },
            {
                title: "Développement d'applications web & PWA",
                description: "Applications métiers accessibles depuis un navigateur, compatibles mobile et desktop.",
            },
            {
                title: "Sites spécialisés par secteur",
                description: "Solutions pour le tourisme, les agences de voyages, l'hôtellerie, la restauration et les entreprises de services.",
            },
            {
                title: "Refonte, maintenance & optimisation web",
                description: "Modernisation, performance, responsive design, sécurité et évolution des plateformes existantes.",
            },
        ],
        targets: "Entreprises, PME, entrepreneurs, commerces, agences de voyages, acteurs du tourisme, hôtels, restaurants, ONG et associations.",
        icon: "fal fa-code",
        href: "/expertises/developpement-web",
        pageReady: false,
    },
    {
        id: "digitalisation",
        number: "02",
        title: "Digitalisation & Solutions Métiers",
        shortTitle: "Digitalisation & solutions métiers",
        description:
            "Nous aidons les entreprises à structurer leurs opérations, centraliser leurs informations et automatiser leurs processus grâce à des outils numériques adaptés à leur activité.",
        subServices: [
            {
                title: "CRM & gestion de la relation client",
                description: "Centralisation des contacts, suivi commercial, opportunités et gestion des interactions clients.",
            },
            {
                title: "ERP & gestion d'entreprise",
                description: "Mise en place et personnalisation de solutions comme Odoo pour les ventes, stocks, achats et opérations.",
            },
            {
                title: "Applications métiers sur mesure",
                description: "Outils de gestion interne, tableaux de bord, gestion des équipes, réservations et workflows.",
            },
            {
                title: "Automatisation des processus",
                description: "Connexion d'outils, automatisation des tâches répétitives et synchronisation des données via API, webhooks et workflows.",
            },
            {
                title: "Intégration & accompagnement digital",
                description: "Connexion des logiciels existants, migration de données, formation et accompagnement à l'adoption des outils.",
            },
        ],
        targets: "Entreprises, PME, structures avec des équipes et des opérations à organiser.",
        icon: "fal fa-project-diagram",
        href: "/expertises/digitalisation",
        pageReady: false,
    },
    {
        id: "marketing-digital",
        number: "03",
        title: "Marketing Digital & Automatisation",
        shortTitle: "Marketing digital & automatisation",
        description:
            "Nous accompagnons les marques et les entreprises dans le développement de leur visibilité, l'acquisition de nouveaux clients et la fidélisation grâce à des stratégies marketing mesurables.",
        subServices: [
            {
                title: "Stratégie marketing digital",
                description: "Positionnement, plan d'action, identification des audiences et définition des objectifs.",
            },
            {
                title: "Référencement naturel (SEO)",
                description: "Optimisation des sites et contenus pour améliorer leur visibilité sur les moteurs de recherche.",
            },
            {
                title: "Email marketing & CRM marketing",
                description: "Campagnes, newsletters, segmentation, scénarios de fidélisation et solutions comme Klaviyo ou Brevo.",
            },
            {
                title: "Marketing automation",
                description: "Séquences automatiques, relances clients, récupération de paniers abandonnés et parcours de conversion.",
            },
            {
                title: "Campagnes publicitaires & acquisition",
                description: "Accompagnement sur Google Ads et Meta Ads, création de campagnes, suivi des conversions et analyse des performances.",
            },
        ],
        targets: "Marques, commerces en ligne, entreprises, associations.",
        icon: "fal fa-bullhorn",
        href: "/expertises/marketing-digital",
        pageReady: false,
    },
    {
        id: "infrastructure-it",
        number: "04",
        title: "Infrastructure & Solutions IT",
        shortTitle: "Infrastructure & solutions IT",
        description:
            "Nous accompagnons les entreprises dans la mise en place et l'amélioration de leurs infrastructures informatiques pour disposer d'environnements de travail connectés, fiables et sécurisés.",
        subServices: [
            {
                title: "Réseaux informatiques & câblage",
                description: "Installation et organisation des réseaux LAN, Wi-Fi et câblage structuré.",
            },
            {
                title: "Installation & configuration d'équipements IT",
                description: "Postes de travail, routeurs, switchs, périphériques et équipements réseau.",
            },
            {
                title: "Hébergement, serveurs & cloud",
                description: "Configuration, déploiement, administration et maintenance des environnements d'hébergement.",
            },
            {
                title: "Téléphonie IP & communication d'entreprise",
                description: "Solutions VoIP, standard téléphonique et communication interne.",
            },
            {
                title: "Vidéosurveillance & contrôle d'accès",
                description: "Solutions de surveillance et de sécurisation des locaux professionnels.",
            },
        ],
        targets: "Entreprises disposant de locaux professionnels : bureaux, commerces, hôtels, restaurants.",
        icon: "fal fa-server",
        href: "/expertises/infrastructure-it",
        pageReady: false,
    },
];

export const expertisesSection = {
    eyebrow: "Nos expertises",
    title: "Quatre pôles d'expertise pour accompagner votre transformation digitale",
    intro: "Du développement web à la digitalisation de vos opérations, en passant par le marketing digital et les infrastructures IT, Connect Web vous accompagne avec des solutions adaptées aux besoins de votre entreprise.",
    linkLabel: "Découvrir nos services",
    subServicesLabel: "Sous-services",
};

// Destination du bouton : la page du pôle si elle existe, sinon la liste des services de l'accueil.
export const expertiseHref = (expertise: Expertise): string => (expertise.pageReady ? expertise.href : expertisesSectionAnchor);
