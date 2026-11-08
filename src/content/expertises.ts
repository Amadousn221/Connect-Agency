// Les 4 pôles d'expertise de Connect Web — source unique (décisions D40 et D42 d'Amadou, 08/11/2026 ; docs/12, docs/03).
// Utilisée par la section « Nos expertises » de l'accueil ET par le menu du header : un seul libellé par
// sous-service, aligné sur la liste fournie par Amadou pour le menu (la dernière instruction prévaut).
// Les descriptions sont conservées ici pour les futures pages de pôle ; la carte de l'accueil n'affiche que les titres.
//
// Statut des capacités (à confirmer avant publication, voir docs/12 Q22) :
// - Infrastructure : catalogue proposé, modalités d'exécution et partenaires à confirmer ; ne pas présenter comme
//   des réalisations démontrées.
// - Marketing : SEO et publicité (Google Ads, Meta Ads) sont ajoutés à la demande d'Amadou ; le dossier ne documente
//   pas encore d'expérience sur ces deux services.
// - Les pages et contenus peuvent s'adresser au tourisme, aux agences de voyages, à l'hôtellerie et à la restauration :
//   aucune réalisation documentée dans ces secteurs à ce jour.

export interface SubService {
    // Libellé unique, utilisé dans le menu et sur les cartes.
    title: string;
    // Ancre prévue sur la page du pôle (/expertises/<pôle>#<slug>) quand elle existera.
    slug: string;
    description: string;
}

export interface Expertise {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    // Libellé court volontaire du header (« Développement », « Digitalisation », « Marketing », « Infrastructure »).
    menuLabel: string;
    // Lien de bas de menu (« Voir tous nos services de développement »…).
    menuAllLabel: string;
    description: string;
    subServices: SubService[];
    targets: string;
    // Classes Font Awesome Light du thème (équivalents de Code2, Workflow, Megaphone, Server).
    icon: string;
    // Route de la page de pôle. Tant que la page n'existe pas, pageReady reste false : les liens pointent alors vers
    // une section existante de l'accueil (lien valide) et non vers une page inexistante.
    href: string;
    pageReady: boolean;
}

export const expertises: Expertise[] = [
    {
        id: "developpement-web",
        number: "01",
        title: "Développement Web & E-⁠commerce",
        shortTitle: "Développement web & e-commerce",
        menuLabel: "Développement",
        menuAllLabel: "Voir tous nos services de développement",
        description:
            "Nous concevons des sites internet, des boutiques en ligne et des plateformes web sur mesure pour aider les entreprises à développer leur présence digitale, valoriser leurs services et générer de nouvelles opportunités commerciales.",
        subServices: [
            {
                title: "Création de sites internet",
                slug: "sites-internet",
                description: "Sites vitrines, institutionnels et corporate, adaptés aux PME, entreprises, associations et organisations.",
            },
            {
                title: "Création de sites e-commerce",
                slug: "sites-ecommerce",
                description: "Boutiques en ligne : catalogue, paiements, livraison et gestion des commandes.",
            },
            {
                title: "Shopify & WooCommerce",
                slug: "shopify-woocommerce",
                description: "Boutiques sur Shopify ou WooCommerce selon l'activité, avec migration depuis une autre plateforme si besoin.",
            },
            {
                title: "Applications web & PWA",
                slug: "applications-web-pwa",
                description: "Applications métiers accessibles depuis un navigateur, compatibles mobile et desktop.",
            },
            {
                title: "Refonte & maintenance web",
                slug: "refonte-maintenance",
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
        menuLabel: "Digitalisation",
        menuAllLabel: "Découvrir nos solutions métiers",
        description:
            "Nous aidons les entreprises à structurer leurs opérations, centraliser leurs informations et automatiser leurs processus grâce à des outils numériques adaptés à leur activité.",
        subServices: [
            {
                title: "CRM & gestion de la relation client",
                slug: "crm",
                description: "Centralisation des contacts, suivi commercial, opportunités et gestion des interactions clients.",
            },
            {
                title: "ERP & gestion d'entreprise",
                slug: "erp",
                description: "Mise en place et personnalisation de solutions comme Odoo pour les ventes, stocks, achats et opérations.",
            },
            {
                title: "Applications métiers sur mesure",
                slug: "applications-metiers",
                description: "Outils de gestion interne, tableaux de bord, gestion des équipes, réservations et workflows.",
            },
            {
                title: "Automatisation des processus",
                slug: "automatisation-processus",
                description: "Connexion d'outils, automatisation des tâches répétitives et synchronisation des données via API, webhooks et workflows.",
            },
            {
                title: "Intégration & accompagnement digital",
                slug: "integration-accompagnement",
                description: "Connexion des logiciels existants, migration de données, formation et accompagnement à l'adoption des outils.",
            },
        ],
        targets: "Entreprises, PME, structures avec des équipes et des opérations à organiser.",
        icon: "fal fa-project-diagram",
        href: "/expertises/digitalisation",
        pageReady: false,
    },
    {
        id: "infrastructure-it",
        number: "03",
        title: "Infrastructure & Solutions IT",
        shortTitle: "Infrastructure & solutions IT",
        menuLabel: "Infrastructure",
        menuAllLabel: "Découvrir nos solutions IT",
        description:
            "Nous accompagnons les entreprises dans la mise en place et l'amélioration de leurs infrastructures informatiques pour disposer d'environnements de travail connectés, fiables et sécurisés.",
        subServices: [
            {
                title: "Réseaux informatiques & câblage",
                slug: "reseaux-cablage",
                description: "Installation et organisation des réseaux LAN, Wi-Fi et câblage structuré.",
            },
            {
                title: "Installation & configuration IT",
                slug: "installation-configuration-it",
                description: "Postes de travail, routeurs, switchs, périphériques et équipements réseau.",
            },
            {
                title: "Hébergement, serveurs & cloud",
                slug: "hebergement-serveurs-cloud",
                description: "Configuration, déploiement, administration et maintenance des environnements d'hébergement.",
            },
            {
                title: "Téléphonie IP",
                slug: "telephonie-ip",
                description: "Solutions VoIP, standard téléphonique et communication interne.",
            },
            {
                title: "Vidéosurveillance & contrôle d'accès",
                slug: "videosurveillance-controle-acces",
                description: "Solutions de surveillance et de sécurisation des locaux professionnels.",
            },
        ],
        targets: "Entreprises disposant de locaux professionnels : bureaux, commerces, hôtels, restaurants.",
        icon: "fal fa-server",
        href: "/expertises/infrastructure-it",
        pageReady: false,
    },
    {
        id: "marketing-digital",
        number: "04",
        title: "Marketing Digital & Automatisation",
        shortTitle: "Marketing digital & automatisation",
        menuLabel: "Marketing",
        menuAllLabel: "Découvrir nos solutions marketing",
        description:
            "Nous accompagnons les marques et les entreprises dans le développement de leur visibilité, l'acquisition de nouveaux clients et la fidélisation grâce à des stratégies marketing mesurables.",
        subServices: [
            {
                title: "Stratégie marketing digital",
                slug: "strategie",
                description: "Positionnement, plan d'action, identification des audiences et définition des objectifs.",
            },
            {
                title: "Référencement naturel (SEO)",
                slug: "seo",
                description: "Optimisation des sites et contenus pour améliorer leur visibilité sur les moteurs de recherche.",
            },
            {
                title: "Email marketing & CRM marketing",
                slug: "email-crm-marketing",
                description: "Campagnes, newsletters, segmentation, scénarios de fidélisation et solutions comme Klaviyo ou Brevo.",
            },
            {
                title: "Marketing automation",
                slug: "marketing-automation",
                description: "Séquences automatiques, relances clients, récupération de paniers abandonnés et parcours de conversion.",
            },
            {
                title: "Publicité digitale & acquisition",
                slug: "publicite-acquisition",
                description: "Accompagnement sur Google Ads et Meta Ads, création de campagnes, suivi des conversions et analyse des performances.",
            },
        ],
        targets: "Marques, commerces en ligne, entreprises, associations.",
        icon: "fal fa-bullhorn",
        href: "/expertises/marketing-digital",
        pageReady: false,
    },
];

export const expertisesSection = {
    eyebrow: "Nos expertises",
    title: "Quatre pôles pour votre transformation digitale",
    intro: "Du développement web à la digitalisation de vos opérations, en passant par le marketing digital et les infrastructures IT, Connect Web vous accompagne avec des solutions adaptées aux besoins de votre entreprise.",
    linkLabel: "Découvrir nos services",
    subServicesLabel: "Sous-services",
};

// Sections de l'accueil qui servent de destination provisoire (liens valides tant que les pages de pôle n'existent pas).
export const expertisesSectionAnchor = "/#nos-services";
export const expertisesOverviewAnchor = "/#nos-expertises";

// Destination du bouton de la carte : la page du pôle si elle existe, sinon la liste des services de l'accueil.
export const expertiseHref = (expertise: Expertise): string => (expertise.pageReady ? expertise.href : expertisesSectionAnchor);

// Destination d'un lien de menu : la page du pôle (ou de son sous-service) si elle existe, sinon la section
// « Nos expertises » de l'accueil. Jamais une page inexistante.
export const poleMenuHref = (expertise: Expertise): string => (expertise.pageReady ? expertise.href : expertisesOverviewAnchor);
export const subServiceHref = (expertise: Expertise, subService: SubService): string =>
    expertise.pageReady ? `${expertise.href}#${subService.slug}` : expertisesOverviewAnchor;
