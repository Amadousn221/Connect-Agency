// Page « Digitalisation » (/expertises/digitalisation) — parcours en 8 étapes défini par Amadou le 08/11/2026 (2e version).
// Provenance des textes :
// - FOURNI : libellés, titres et textes donnés dans le brief (hero, texte + image, intro des solutions, onglets,
//   accompagnement, FAQ : questions, contact).
// - REPRIS : paragraphes et prestations des services déjà validés sur l'accueil.
// - À VALIDER : rédigés par Claude faute de texte fourni (services Applications mobiles et Automatisation, sixième prestation des cartes, détails
//   des parcours, détails des étapes, réponses de la FAQ). Aucun chiffre, prix, délai ni référence client.

export const digitalisationPage = {
    meta: {
        title: "Digitalisation : sites, applications et outils de gestion",
        description:
            "Sites web, e-commerce, applications, CRM, ERP et automatisation : Connect Web construit les outils numériques adaptés à vos clients et à votre façon de travailler.",
    },
    // 1. Hero — FOURNI
    hero: {
        eyebrow: "Digitalisation des entreprises",
        title: "Digitalisez votre activité, simplifiez le travail de vos équipes.",
        text: "Sites web, e-commerce, applications et outils de gestion : Connect Web vous accompagne pour mieux servir vos clients, organiser votre activité et connecter vos outils.",
        primary: { label: "Parlons de votre projet", href: "#contact" },
        secondary: { label: "Explorer nos solutions", href: "#services" },
        // Photo fournie par Amadou (dossier Images/hero), droits à confirmer. Décorative : aucun texte dans l'image.
        image: "/assets/img/cw/hero-digitalisation.jpg",
    },
    // 2. Texte + image — FOURNI
    about: {
        eyebrow: "Votre activité, vos outils",
        title: "Des solutions numériques pensées pour votre façon de travailler.",
        paragraphs: [
            "Des demandes clients dispersées, des informations recopiées et des outils qui fonctionnent séparément compliquent le quotidien. La digitalisation permet de mieux organiser ces échanges et de faciliter le travail de vos équipes.",
            "Connect Web part de votre fonctionnement pour identifier les améliorations utiles. Selon vos priorités, nous créons votre présence en ligne, développons vos applications ou connectons vos outils de gestion.",
        ],
        benefits: [
            { icon: "fal fa-store-alt", label: "Mieux présenter et vendre vos offres." },
            { icon: "fal fa-sync-alt", label: "Réduire les tâches répétitives." },
            { icon: "fal fa-database", label: "Centraliser les informations utiles." },
        ],
        link: { label: "Trouver la solution adaptée à mon besoin", href: "#services" },
        // Photo fournie par Amadou (dossier Images/hero), droits à confirmer. Photo d'illustration, pas un projet client.
        image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Un professionnel consulte un tableau de bord sur son ordinateur", width: 1000, height: 668 },
    },
    // 3. Services — FOURNI (titre, intro)
    services: {
        eyebrow: "Nos solutions",
        title: "Les outils pour vendre, gérer et travailler au quotidien.",
        intro: "Retrouvez les services adaptés à votre projet, de votre présence en ligne à l'organisation et à l'automatisation du travail de vos équipes.",
    },
    // 4. En pratique : module interactif (3 scénarios x 4 étapes). Textes FOURNIS par Amadou (09/11/2026).
    // Ce sont des exemples illustratifs : jamais des réalisations clients ni des connexions déjà actives.
    // Icônes : équivalents Font Awesome du thème (shopping-bag, users, workflow -> project-diagram, package -> box...).
    useCases: {
        eyebrow: "En pratique",
        titleLines: ["Moins de tâches.", "Plus de connexions."],
        intro: "Choisissez un usage et explorez ce qui se passe entre vos outils.",
        selectorLabel: "Choisir un scénario",
        stepsLabel: "Étapes du parcours",
        illustrative: "Scénario illustratif",
        stepWord: "Étape",
        next: "Étape suivante",
        restart: "Revoir le parcours",
        // Service présélectionné dans le formulaire (value de serviceOptions : « Automatisation & intégration des outils »).
        cta: {
            title: "Et si vos outils faisaient le lien ?",
            text: "Imaginons le parcours adapté à votre activité.",
            label: "Connecter mes outils",
            service: "automatisation",
            contextPrefix: "Scénario illustratif exploré",
        },
        scenarios: [
            {
                id: "vendre",
                label: "Vendre en ligne",
                icon: "fal fa-shopping-bag",
                context: "Boutique → Gestion",
                steps: [
                    {
                        short: "Commande",
                        icon: "fal fa-shopping-bag",
                        title: "Une commande, un point de départ.",
                        text: "Votre client valide son panier. Les informations utiles sont transmises aux outils de gestion.",
                        facts: [
                            { label: "Événement", value: "Commande confirmée" },
                            { label: "Données transmises", value: "Articles, quantités, client" },
                        ],
                    },
                    {
                        short: "Stock",
                        icon: "fal fa-box",
                        title: "Votre stock suit les ventes.",
                        text: "Les quantités disponibles sont ajustées à partir de la commande, sans ressaisie dans un second outil.",
                        facts: [
                            { label: "Déclencheur", value: "Commande confirmée" },
                            { label: "Action", value: "Mise à jour des quantités" },
                        ],
                    },
                    {
                        short: "Suivi client",
                        icon: "fal fa-address-card",
                        title: "Un historique au même endroit.",
                        text: "La commande rejoint la fiche client. Votre équipe retrouve les informations utiles pour répondre à ses demandes.",
                        facts: [
                            { label: "Destination", value: "Fiche client CRM" },
                            { label: "Information ajoutée", value: "Historique de commande" },
                        ],
                    },
                    {
                        short: "Après-vente",
                        icon: "fal fa-envelope",
                        title: "Le suivi continue après l\u2019achat.",
                        text: "Un message de suivi peut être envoyé selon le statut de la commande pour informer le client ou recueillir son avis.",
                        facts: [
                            { label: "Déclencheur", value: "Commande livrée" },
                            { label: "Action", value: "Message de suivi" },
                        ],
                    },
                ],
            },
            {
                id: "clients",
                label: "Suivre ses clients",
                icon: "fal fa-users",
                context: "Contact → Suivi commercial",
                steps: [
                    {
                        short: "Demande reçue",
                        icon: "fal fa-inbox",
                        title: "Chaque demande trouve sa place.",
                        text: "Les demandes issues du site sont centralisées pour que votre équipe puisse les retrouver et les traiter.",
                        facts: [
                            { label: "Source", value: "Formulaire du site" },
                            { label: "Destination", value: "Liste des demandes" },
                        ],
                    },
                    {
                        short: "Fiche contact",
                        icon: "fal fa-address-card",
                        title: "Les informations restent réunies.",
                        text: "Les coordonnées et le besoin exprimé alimentent une fiche contact dans votre CRM.",
                        facts: [
                            { label: "Données", value: "Coordonnées et besoin" },
                            { label: "Destination", value: "Fiche CRM" },
                        ],
                    },
                    {
                        short: "Attribution",
                        icon: "fal fa-user-check",
                        title: "Un interlocuteur identifié.",
                        text: "La demande est attribuée selon vos règles. La personne responsable retrouve le contexte et la prochaine action.",
                        facts: [
                            { label: "Règle", value: "Service demandé" },
                            { label: "Action", value: "Attribution au responsable" },
                        ],
                    },
                    {
                        short: "Relance",
                        icon: "fal fa-bell",
                        title: "La prochaine action reste visible.",
                        text: "Une tâche de relance rappelle au responsable de reprendre contact au moment prévu.",
                        facts: [
                            { label: "Déclencheur", value: "Date de suivi" },
                            { label: "Action", value: "Rappel au responsable" },
                        ],
                    },
                ],
            },
            {
                id: "equipes",
                label: "Organiser les équipes",
                icon: "fal fa-project-diagram",
                context: "Demande → Coordination",
                steps: [
                    {
                        short: "Demande interne",
                        icon: "fal fa-clipboard-list",
                        title: "Un besoin clairement formulé.",
                        text: "Les demandes sont regroupées dans un espace commun avec leur contexte et leur priorité.",
                        facts: [
                            { label: "Source", value: "Formulaire interne" },
                            { label: "Informations", value: "Besoin et priorité" },
                        ],
                    },
                    {
                        short: "Attribution",
                        icon: "fal fa-users",
                        title: "Chacun sait ce qui lui revient.",
                        text: "Une personne est désignée pour traiter la demande. Elle reçoit les informations nécessaires pour commencer.",
                        facts: [
                            { label: "Responsabilité", value: "Personne désignée" },
                            { label: "Action", value: "Notification d\u2019attribution" },
                        ],
                    },
                    {
                        short: "Avancement",
                        icon: "fal fa-tasks",
                        title: "Le statut est visible de tous.",
                        text: "Votre équipe suit les étapes de traitement sans multiplier les messages pour demander où en est le travail.",
                        facts: [
                            { label: "Statut", value: "En cours de traitement" },
                            { label: "Visibilité", value: "Équipe concernée" },
                        ],
                    },
                    {
                        short: "Vue d\u2019ensemble",
                        icon: "fal fa-chart-line",
                        title: "Les priorités se lisent en un regard.",
                        text: "Un tableau de bord rassemble les demandes en cours et celles qui nécessitent une action.",
                        facts: [
                            { label: "Vue", value: "Demandes par statut" },
                            { label: "Utilité", value: "Repérer les priorités" },
                        ],
                    },
                ],
            },
        ],
    },
    realisations: { title: "Des projets à découvrir concrètement." },
    // 6. Accompagnement — textes FOURNIS (titres, intro) ; descriptions et détails À VALIDER
    method: {
        eyebrow: "Notre accompagnement",
        title: "Du premier échange à la prise en main de vos outils.",
        text: "Un périmètre défini, des validations aux étapes importantes et un accompagnement adapté à votre projet.",
        labels: { do: "Ce que nous réalisons", validate: "Ce que vous validez", deliverable: "Livrable attendu" },
        steps: [
            {
                icon: "fal fa-comments",
                title: "Comprendre votre besoin",
                short: "Nous étudions votre activité, vos outils actuels et vos priorités.",
                do: "Un entretien, l'analyse de ce que vous utilisez déjà et les questions utiles sur vos clients et vos équipes.",
                validate: "Le besoin retenu et l'ordre des priorités.",
                deliverable: "Une synthèse du besoin.",
            },
            {
                icon: "fal fa-drafting-compass",
                title: "Concevoir la solution",
                short: "Nous définissons le périmètre, les fonctionnalités et les grandes étapes.",
                do: "Une proposition écrite : périmètre, fonctionnalités prévues, étapes et conditions de réalisation.",
                validate: "La proposition, avant tout démarrage.",
                deliverable: "Une proposition écrite.",
            },
            {
                icon: "fal fa-cogs",
                title: "Réaliser et tester",
                short: "Nous construisons par étapes et vous montrons l'avancement.",
                do: "Le développement par étapes, des points de suivi et des tests de la solution.",
                validate: "Les étapes importantes, après vos essais sur des cas réels.",
                deliverable: "La solution testée, prête à être mise en service.",
            },
            {
                icon: "fal fa-rocket",
                title: "Déployer et accompagner",
                short: "Nous mettons en service, formons vos équipes et assurons un suivi adapté.",
                do: "La mise en service, la prise en main de la solution et sa documentation.",
                validate: "La mise en service et les personnes à former.",
                deliverable: "Une documentation de prise en main. Le suivi après livraison est défini dans la proposition.",
            },
        ],
    },
    // 7. FAQ — questions FOURNIES, réponses À VALIDER (aucune durée ni aucun montant)
    faq: {
        title: "Les réponses pour préparer votre projet.",
        items: [
            {
                q: "Peut-on commencer par un seul service ?",
                a: "Oui. Beaucoup de projets démarrent par un site ou un outil de gestion. Nous prévoyons dès le départ comment il pourra se relier aux outils ajoutés ensuite.",
            },
            {
                q: "Faut-il remplacer tous nos outils ?",
                a: "Non. Nous partons de ce que vous utilisez déjà et gardons ce qui fonctionne. Nous ne proposons un remplacement que si un outil freine votre activité.",
            },
            {
                q: "Quel budget prévoir ?",
                a: "Il dépend du périmètre : fonctionnalités, outils à connecter, volume de données à reprendre. Après un premier échange, vous recevez une proposition écrite avec le détail des prestations et leur prix. Rien ne démarre sans votre accord.",
            },
            {
                q: "Combien de temps prend un projet ?",
                a: "Le calendrier dépend du périmètre et de la disponibilité de vos contenus. Il est fixé dans la proposition, étape par étape, avant le démarrage.",
            },
            {
                q: "Comment se passe le suivi après la livraison ?",
                a: "Chaque livraison comprend une prise en main et une documentation. Le suivi (corrections, mises à jour, évolutions) est défini dans la proposition selon vos besoins.",
            },
        ],
    },
    // 8. Contact — FOURNI
    contact: {
        title: "Parlons de ce que vous souhaitez améliorer.",
        text: "Présentez-nous votre activité et votre besoin. Que votre projet soit déjà défini ou encore à préciser, ces informations nous aideront à préparer notre échange.",
        submit: "Envoyer ma demande",
        success: "Votre demande a bien été envoyée. Merci de nous avoir présenté votre projet.",
        adviceOption: { value: "conseil", label: "J'ai besoin de conseil" },
    },
};

export interface DigitalService {
    id: string;
    title: string;
    text: string;
    items: string[];
    icon: string;
    // Action explicite de la carte (une seule par carte : elle mène au formulaire et présélectionne le service).
    ctaLabel: string;
    // Ancres supplémentaires (sous-services du pôle dans expertises.ts) pour que d'anciens liens atteignent la carte.
    extraAnchors?: string[];
}

export const digitalServices: DigitalService[] = [
    {
        // REPRIS ; 6e prestation À VALIDER
        id: "sites-web",
        title: "Création de sites web",
        text: "Nous créons des sites professionnels modernes, rapides et adaptés à votre activité pour renforcer votre image, présenter vos offres et faciliter la prise de contact avec vos clients.",
        items: ["Sites vitrines & corporate", "Sites institutionnels", "Sites tourisme & voyages", "WordPress & développement sur mesure", "Formulaires de contact & demandes en ligne", "Refonte & maintenance web"],
        icon: "fal fa-globe",
        ctaLabel: "Parler de mon site web",
    },
    {
        // REPRIS ; 6e prestation À VALIDER (migration : mentionnée dans docs/04)
        id: "e-commerce",
        title: "E-commerce",
        text: "Nous concevons des boutiques en ligne adaptées à votre catalogue et à vos clients, avec les fonctionnalités essentielles pour vendre, gérer vos commandes et développer votre activité.",
        items: ["Shopify", "WooCommerce", "Marketplaces & catalogues connectés", "Paiement & livraison", "Migration depuis une autre plateforme", "Optimisation des boutiques en ligne"],
        icon: "fal fa-shopping-cart",
        ctaLabel: "Parler de ma boutique en ligne",
    },
    {
        // REPRIS (texte du service « Applications métiers sur mesure ») ; 6e prestation À VALIDER
        id: "applications-web",
        title: "Applications web sur mesure",
        text: "Nous développons des applications adaptées aux processus de votre entreprise pour centraliser les informations, améliorer le suivi des opérations et simplifier le travail quotidien.",
        items: ["Applications web & PWA", "Outils de gestion interne", "Réservations & planification", "Espaces utilisateurs & comptes", "Tableaux de bord métiers", "API & intégrations"],
        icon: "fal fa-browser",
        ctaLabel: "Parler de mon application web",
        extraAnchors: ["applications-metiers"],
    },
    {
        // À VALIDER : aucune réalisation mobile documentée à ce jour.
        id: "applications-mobiles",
        title: "Applications mobiles",
        text: "Nous concevons des applications mobiles pour vos clients ou pour vos équipes de terrain, avec une interface claire et les fonctions dont ils se servent vraiment au quotidien.",
        items: ["Applications Android & iOS", "Applications multiplateformes", "Espaces clients & comptes utilisateurs", "Notifications", "Publication sur les stores", "Maintenance & mises à jour"],
        icon: "fal fa-mobile-alt",
        ctaLabel: "Parler de mon application mobile",
    },
    {
        // REPRIS ; 6e prestation À VALIDER
        id: "crm-erp",
        title: "CRM & ERP",
        text: "Nous vous accompagnons dans la mise en place d'outils de gestion pour centraliser vos données, suivre vos clients et mieux piloter les opérations de votre entreprise.",
        items: ["Odoo ERP", "CRM & suivi commercial", "Gestion des ventes & stocks", "Facturation & processus métiers", "Formation & prise en main des équipes", "Intégration et automatisation"],
        icon: "fal fa-users-cog",
        ctaLabel: "Parler de mes outils de gestion",
        extraAnchors: ["crm", "erp", "crm-erp"],
    },
    {
        // FOURNI (titre, texte, prestations, action) : remplace la carte « Email marketing & automatisation », dont les
        // prestations relèvent du pôle Marketing digital.
        id: "automatisation",
        title: "Automatisation & intégration des outils",
        text: "Reliez vos logiciels et automatisez les tâches répétitives pour simplifier le travail de vos équipes. Nous organisons les échanges entre vos outils afin de limiter les doubles saisies et de faciliter le suivi de votre activité.",
        items: ["Connexion entre logiciels et API", "Synchronisation des données", "Automatisation des tâches répétitives", "Circuits de validation", "Notifications et alertes automatiques", "Génération et envoi de rapports"],
        icon: "fal fa-project-diagram",
        ctaLabel: "Automatiser mes processus",
        extraAnchors: ["automatisation-processus", "integration-accompagnement"],
    },
];

// Options du champ « Service souhaité » (valeur = id du service) ; la route API refuse toute autre valeur.
export const serviceOptions = [
    ...digitalServices.map((service) => ({ value: service.id, label: service.title })),
    digitalisationPage.contact.adviceOption,
];
