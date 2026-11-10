// Pages de services — disposition des captures « page à faire » d'Amadou (09/11/2026), contenus originaux Connect Web.
// Un seul gabarit (components/services/ServicePage.tsx) pour toutes ces pages ; chaque page est une entrée de données.
// Règles : aucun forfait, prix, délai ni garantie (non établis) ; aucune référence client inventée (les réalisations
// affichées viennent de realisations.ts, entrées published: true) ; les questions de la FAQ décrivent des principes
// généraux, pas des engagements. Statut : textes PROPOSÉS par Claude, à relire par Amadou avant publication.
import { whatsapp } from "./contact";

export const waLink = (message?: string) =>
    `https://wa.me/${whatsapp.number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export interface ServiceImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface ServiceBand {
    id?: string;
    // dark : fond bleu marine ; light : fond gris bleuté très clair.
    tone: "dark" | "light";
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image?: ServiceImage;
    // Côté de l'image (texte de l'autre côté).
    imageSide?: "left" | "right";
    cta?: { label: string; href: string; external?: boolean };
}

export interface ServiceFaqItem {
    id: string;
    question: string;
    answer: string;
}

export interface ServicePageData {
    canonical: string;
    meta: { title: string; description: string };
    head: { eyebrow: string; title: string; subtitle: string; parent?: { label: string; href: string } };
    intro: {
        eyebrow: string;
        title: string;
        paragraphs: string[];
        bullets?: string[];
        cta: { label: string; href: string; external?: boolean };
        image: ServiceImage;
    };
    // Trois repères sous l'introduction (remplace les vignettes de la référence).
    points?: { icon: string; title: string; text: string }[];
    // Remplace les « forfaits » de la référence : aucun prix, aucun forfait.
    approach?: {
        eyebrow: string;
        title: string;
        intro: string;
        columns: { title: string; items: string[] }[];
        note: string;
        cta: { label: string; href: string; external?: boolean };
    };
    services?: { eyebrow: string; title: string; intro: string; items: { slug: string; title: string; description: string; href?: string }[] };
    bands?: ServiceBand[];
    realisations?: { title: string; intro: string; max: number };
    faq?: { title: string; subtitle: string; listTitle: string; items: ServiceFaqItem[] };
}

export const developpementWebPage: ServicePageData = {
    canonical: "/expertises/developpement-web",
    meta: {
        title: "Développement web & e-commerce | Connect Web",
        description:
            "Sites internet, boutiques en ligne, applications web et refonte : Connect Web conçoit votre présence en ligne à Dakar, du cadrage à la prise en main.",
    },
    head: {
        eyebrow: "Nos expertises",
        title: "Développement web & e-commerce",
        subtitle: "Sites, boutiques en ligne et applications web pensés pour présenter votre activité et recevoir des demandes.",
    },
    intro: {
        eyebrow: "Votre présence en ligne",
        title: "Un site qui présente votre activité, une boutique qui vend",
        paragraphs: [
            "Votre site est souvent le premier endroit où un client vous découvre. Nous le concevons à partir de votre activité : ce que vous proposez, à qui vous vous adressez et ce que vos visiteurs doivent pouvoir faire en quelques clics, par exemple vous écrire, réserver ou commander.",
            "Selon votre besoin, nous créons un site internet, une boutique en ligne ou une application web, sur ordinateur comme sur téléphone. Nous vous expliquons chaque choix en termes simples, puis nous vous aidons à prendre le site en main.",
        ],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite parler de mon projet de site ou de boutique en ligne."), external: true },
        image: {
            src: "/assets/img/cw/pourquoi-poste-de-travail.jpg",
            alt: "Une développeuse travaille sur un ordinateur portable et une tablette",
            width: 1200,
            height: 800,
        },
    },
    points: [
        { icon: "fal fa-browser", title: "Sites internet", text: "Sites vitrines et institutionnels pour présenter votre entreprise, vos services et vos contacts." },
        { icon: "fal fa-shopping-bag", title: "Boutiques en ligne", text: "Catalogue, paiement et suivi des commandes, sur Shopify ou WooCommerce selon votre activité." },
        { icon: "fal fa-mobile-alt", title: "Applications web", text: "Outils accessibles depuis un navigateur, utilisables sur téléphone comme sur ordinateur." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Ce que comprend votre projet",
        intro: "Chaque projet est cadré avant d'être chiffré : pas de formule toute faite, mais une proposition détaillée à partir de votre besoin.",
        columns: [
            {
                title: "Cadrage",
                items: ["Échange sur votre activité", "Objectifs et public visé", "Contenus et pages à prévoir", "Proposition détaillée"],
            },
            {
                title: "Conception et réalisation",
                items: ["Maquette à valider", "Version pour téléphone et ordinateur", "Formulaire de contact ou boutique", "Points de suivi réguliers"],
            },
            {
                title: "Mise en ligne et prise en main",
                items: ["Tests avant la mise en ligne", "Nom de domaine et hébergement", "Prise en main de votre site", "Accompagnement après la livraison"],
            },
        ],
        note: "Les tarifs sont établis après un premier échange sur votre projet.",
        cta: { label: "Parler de mon projet", href: waLink("Bonjour Connect Web, je voudrais un devis pour mon projet web."), external: true },
    },
    services: {
        eyebrow: "Nos services web",
        title: "Cinq façons d'avancer sur le web",
        intro: "Choisissez le service qui correspond à votre situation : créer, vendre en ligne, développer un outil ou améliorer un site existant.",
        items: [
            { slug: "sites-internet", href: "/expertises/developpement-web/sites-internet", title: "Création de sites internet", description: "Sites vitrines, institutionnels et corporate, adaptés aux PME, entreprises, associations et organisations." },
            { slug: "sites-ecommerce", href: "/expertises/developpement-web/sites-ecommerce", title: "Création de sites e-commerce", description: "Boutiques en ligne : catalogue, paiements, livraison et gestion des commandes." },
            { slug: "shopify-woocommerce", href: "/expertises/developpement-web/shopify-woocommerce", title: "Shopify & WooCommerce", description: "Boutiques sur Shopify ou WooCommerce selon l'activité, avec migration depuis une autre plateforme si besoin." },
            { slug: "applications-web-pwa", href: "/expertises/developpement-web/applications-web-pwa", title: "Applications web & PWA", description: "Applications métiers accessibles depuis un navigateur, compatibles mobile et ordinateur. Une PWA est un site qui s'utilise comme une application sur le téléphone." },
            { slug: "refonte-maintenance", href: "/expertises/developpement-web/refonte-maintenance", title: "Refonte & maintenance web", description: "Modernisation, performance, affichage sur mobile, sécurité et évolution des plateformes existantes." },
        ],
    },
    bands: [
        {
            id: "boutique",
            tone: "dark",
            eyebrow: "Vendre en ligne",
            title: "Shopify ou WooCommerce : le bon outil selon votre activité",
            paragraphs: [
                "Shopify et WooCommerce permettent tous deux de présenter un catalogue, d'encaisser des paiements et de suivre les commandes. Le meilleur choix dépend de votre volume de produits, de votre façon de livrer et de vos habitudes de travail.",
                "Nous comparons les deux avec vous avant de décider, puis nous configurons la boutique et, si vous en avez déjà une, nous préparons la migration de vos produits.",
            ],
            image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Une équipe examine du code sur plusieurs écrans", width: 1000, height: 563 },
            imageSide: "left",
            cta: { label: "Parler de ma boutique", href: waLink("Bonjour Connect Web, je veux lancer ou migrer une boutique en ligne."), external: true },
        },
        {
            id: "prise-en-main",
            tone: "light",
            eyebrow: "Facile à tenir à jour",
            title: "Un site que vous savez utiliser",
            paragraphs: [
                "Un site utile est un site à jour. À la livraison, nous vous montrons comment modifier un texte, ajouter une image ou suivre les demandes reçues, pour que vous ne dépendiez pas de nous pour les gestes simples du quotidien.",
                "Pour les évolutions plus larges, nous restons disponibles : nouvelles pages, nouvelles fonctions, corrections et suivi.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Une personne consulte un tableau de bord sur son ordinateur", width: 1000, height: 668 },
            imageSide: "right",
            cta: { label: "En discuter avec nous", href: waLink("Bonjour Connect Web, j'aimerais en savoir plus sur la prise en main d'un site."), external: true },
        },
        {
            id: "visibilite",
            tone: "dark",
            eyebrow: "Être trouvé en ligne",
            title: "Un site pensé pour être trouvé",
            paragraphs: [
                "Un site n'attire des clients que s'ils peuvent le trouver. Dès la conception, nous soignons la structure des pages, les titres, la vitesse d'affichage et l'affichage sur téléphone, qui comptent pour le référencement naturel.",
                "Pour aller plus loin, notre pôle marketing digital accompagne le référencement et la publicité en ligne.",
            ],
            image: { src: "/assets/img/cw/hero-marketing-digital.jpg", alt: "Analyse de la visibilité d'un site sur un ordinateur", width: 1200, height: 800 },
            imageSide: "left",
            cta: { label: "Découvrir le marketing digital", href: "/expertises/marketing-digital" },
        },
    ],
    realisations: {
        title: "Quelques sites présentés dans nos réalisations",
        intro: "Des sites et des boutiques en ligne que vous pouvez consulter en ligne.",
        max: 3,
    },
    faq: {
        title: "Vos questions sur la création de site web",
        subtitle: "Les questions que se posent le plus souvent les entreprises avant de se lancer.",
        listTitle: "Foire aux questions",
        items: [
            {
                id: "reseau-social",
                question: "Pourquoi un site web plutôt qu'une page de réseau social ?",
                answer: "Une page de réseau social est utile pour échanger avec votre public, mais vous dépendez de la plateforme et de ses règles. Votre site vous appartient : vous y présentez votre activité comme vous le souhaitez et vous pouvez y recevoir des demandes, des réservations ou des commandes.",
            },
            {
                id: "contenu",
                question: "Quel contenu faut-il prévoir pour mon site ?",
                answer: "Cela dépend de votre objectif. En général : une présentation de votre activité, la liste de vos services ou produits, des photos de qualité et vos moyens de contact. Nous vous aidons à organiser ces éléments et à identifier ce qui manque.",
            },
            {
                id: "google",
                question: "Mon site sera-t-il visible sur Google ?",
                answer: "Nous construisons le site pour qu'il soit bien compris par les moteurs de recherche : pages structurées, titres clairs, affichage rapide et adapté au téléphone. Le positionnement dépend ensuite de nombreux facteurs, et aucune place ne peut être garantie.",
            },
            {
                id: "domaine",
                question: "Comment choisir mon nom de domaine ?",
                answer: "Choisissez un nom court, facile à retenir et proche du nom de votre activité, puis vérifiez sa disponibilité avant de l'adopter. Nous vous conseillons et nous pouvons nous charger de la réservation.",
            },
            {
                id: "securite",
                question: "Comment la sécurité de mon site est-elle prise en compte ?",
                answer: "Un site doit être servi en HTTPS, rester à jour et être hébergé chez un prestataire fiable. Nous prévoyons ces points à la mise en ligne et nous pouvons assurer leur suivi dans le cadre d'une maintenance.",
            },
            {
                id: "mobile",
                question: "Qu'est-ce qu'un site adapté au téléphone ?",
                answer: "C'est un site qui ajuste automatiquement sa présentation à la taille de l'écran : téléphone, tablette ou ordinateur. Aujourd'hui, une grande partie des visiteurs arrivent depuis leur téléphone, c'est donc un point essentiel.",
            },
            {
                id: "langues",
                question: "Mon site peut-il être en plusieurs langues ?",
                answer: "Oui. Un site peut proposer plusieurs langues, par exemple le français et l'anglais. Il faut alors prévoir la traduction des contenus et leur mise à jour dans chaque langue ; nous en parlons au moment du cadrage.",
            },
            {
                id: "boutique",
                question: "Boutique en ligne : quel outil choisir ?",
                answer: "Shopify et WooCommerce répondent à des besoins différents. Nous regardons avec vous le nombre de produits, les moyens de paiement et de livraison utilisés, puis nous recommandons l'outil le plus adapté à votre activité.",
            },
        ],
    },
};

export const sitesInternetPage: ServicePageData = {
    canonical: "/expertises/developpement-web/sites-internet",
    meta: {
        title: "Création de sites internet | Connect Web",
        description:
            "Sites vitrines, institutionnels et associatifs : Connect Web crée le site qui présente votre activité et vous permet de recevoir des demandes, à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Création de sites internet",
        subtitle: "Un site clair, adapté au téléphone, qui présente votre activité et facilite le contact.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Site vitrine et institutionnel",
        title: "Un site qui reflète votre activité et votre image",
        paragraphs: [
            "Votre site est la vitrine de votre entreprise, ouverte à toute heure. Il présente ce que vous faites, rassure vos futurs clients et leur donne un moyen simple de vous contacter, que vous soyez une PME, un commerce, un hôtel, un restaurant ou une association.",
            "Nous partons de votre activité pour décider des pages, des contenus et des fonctions utiles. Vous savez à chaque étape ce que nous faisons et pourquoi, et vous gardez la main sur vos contenus.",
        ],
        bullets: ["Site vitrine pour présenter vos services", "Site institutionnel ou corporate", "Site d'association ou d'organisation", "Page de réservation ou de demande de devis"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite créer un site internet pour mon activité."), external: true },
        image: {
            src: "/assets/img/cw/accueil-agence-echange.jpg",
            alt: "Un échange autour d'un projet de site internet",
            width: 1200,
            height: 800,
        },
    },
    points: [
        { icon: "fal fa-store-alt", title: "Site vitrine", text: "Pour présenter votre activité, vos services et vos coordonnées de façon claire et professionnelle." },
        { icon: "fal fa-building", title: "Site institutionnel", text: "Pour une entreprise ou une organisation qui veut exposer son histoire, ses équipes et ses références." },
        { icon: "fal fa-hands-helping", title: "Site associatif", text: "Pour faire connaître vos actions, informer vos membres et recevoir des messages ou des inscriptions." },
    ],
    approach: {
        eyebrow: "Votre projet de site",
        title: "Ce que comprend la création de votre site",
        intro: "Nous construisons le site en trois temps, avec une validation de votre part avant de passer à l'étape suivante.",
        columns: [
            {
                title: "Contenu et structure",
                items: ["Choix des pages et du plan du site", "Rédaction ou relecture des textes", "Sélection des photos et visuels", "Parcours pour vous contacter"],
            },
            {
                title: "Design et développement",
                items: ["Maquette aux couleurs de votre marque", "Affichage sur téléphone, tablette et ordinateur", "Formulaire de contact", "Bases du référencement naturel"],
            },
            {
                title: "Publication et suivi",
                items: ["Tests avant la mise en ligne", "Nom de domaine et hébergement", "Prise en main pour mettre à jour vos contenus", "Accompagnement après la livraison"],
            },
        ],
        note: "Le budget est établi après un échange sur vos besoins, sans formule toute faite.",
        cta: { label: "Demander une proposition", href: waLink("Bonjour Connect Web, je voudrais une proposition pour la création de mon site internet."), external: true },
    },
    bands: [
        {
            id: "site-vitrine",
            tone: "dark",
            eyebrow: "Site vitrine",
            title: "Qu'est-ce qu'un site vitrine ?",
            paragraphs: [
                "Un site vitrine sert à présenter une entreprise, un produit ou un service : qui vous êtes, ce que vous proposez, où et comment vous joindre. Il informe vos visiteurs, mais ne permet pas, en général, d'acheter directement en ligne.",
                "C'est souvent le premier site d'une entreprise : simple à comprendre, rapide à mettre en place et facile à faire évoluer vers une boutique ou une application si votre activité grandit.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Un professionnel consulte un site sur son ordinateur", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "budget",
            tone: "light",
            eyebrow: "Votre budget",
            title: "Quel budget prévoir pour un site ?",
            paragraphs: [
                "Le coût dépend du nombre de pages, des contenus à produire, des fonctions souhaitées (formulaire, réservation, plusieurs langues) et du niveau de personnalisation du design.",
                "Plutôt qu'une formule unique, nous préparons une proposition détaillée à partir de votre besoin réel, afin que vous sachiez exactement ce qui est inclus avant de vous engager.",
            ],
            image: { src: "/assets/img/cw/pourquoi-poste-de-travail.jpg", alt: "Un poste de travail avec un ordinateur et des documents", width: 1200, height: 800 },
            imageSide: "right",
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, quel budget prévoir pour un site vitrine ?"), external: true },
        },
        {
            id: "campagne",
            tone: "dark",
            eyebrow: "Pour une campagne",
            title: "Une seule page pour un seul objectif",
            paragraphs: [
                "Pour présenter une offre, un événement ou un lancement, une page d'atterrissage (landing page) concentre le message sur une action : vous écrire, réserver ou s'inscrire.",
                "Nous la concevons pour qu'elle soit claire, rapide à charger et facile à mesurer.",
            ],
            cta: { label: "Découvrir la landing page", href: "/expertises/developpement-web/landing-page" },
        },
    ],
    realisations: {
        title: "Quelques sites présentés dans nos réalisations",
        intro: "Des sites que vous pouvez consulter en ligne.",
        max: 3,
    },
    faq: {
        title: "Vos questions sur la création de site internet",
        subtitle: "Présenter votre entreprise en ligne, simplement.",
        listTitle: "Foire aux questions",
        items: [
            {
                id: "vitrine",
                question: "Qu'est-ce qu'un site vitrine ?",
                answer: "C'est un site qui présente votre entreprise, vos produits ou vos services et vos coordonnées. Il informe vos visiteurs et les invite à vous contacter, sans passer de commande en ligne.",
            },
            {
                id: "vitrine-ou-boutique",
                question: "Quelle différence entre un site vitrine et une boutique en ligne ?",
                answer: "Le site vitrine présente votre activité ; la boutique en ligne permet en plus de choisir des produits, de payer et de suivre une commande. Vous pouvez commencer par un site vitrine et ajouter une boutique plus tard.",
            },
            {
                id: "avantages",
                question: "Quels sont les avantages d'un site internet ?",
                answer: "Il rend votre activité visible à toute heure, rassure vos clients, regroupe vos informations au même endroit et vous permet de recevoir des demandes sans dépendre d'un réseau social.",
            },
            {
                id: "pages",
                question: "Combien de pages faut-il prévoir ?",
                answer: "Cela dépend de votre activité. Un site simple peut tenir en quelques pages : accueil, services, à propos et contact. Nous définissons le plan du site avec vous, selon ce que vos clients cherchent.",
            },
            {
                id: "modifier",
                question: "Pourrai-je modifier mon site moi-même ?",
                answer: "Nous prévoyons la prise en main à la livraison pour les gestes simples, comme modifier un texte ou ajouter une image. Pour les changements plus importants, nous restons disponibles.",
            },
            {
                id: "delai",
                question: "Combien de temps faut-il pour créer un site ?",
                answer: "Le délai dépend de la taille du site et de la rapidité avec laquelle les contenus sont validés. Nous établissons un calendrier clair avec vous au moment du cadrage.",
            },
            {
                id: "contenus",
                question: "Qui fournit les textes et les photos ?",
                answer: "Vous pouvez fournir vos contenus, ou nous aider à les rédiger et à les organiser. Des photos de qualité font une vraie différence : nous vous indiquons celles qui sont utiles.",
            },
            {
                id: "apres",
                question: "Que se passe-t-il après la mise en ligne ?",
                answer: "Nous vérifions que tout fonctionne, vous aidons à prendre le site en main et restons disponibles pour les corrections et les évolutions, dans le cadre d'une maintenance si vous le souhaitez.",
            },
        ],
    },
};

export const sitesEcommercePage: ServicePageData = {
    canonical: "/expertises/developpement-web/sites-ecommerce",
    meta: {
        title: "Création de sites e-commerce | Connect Web",
        description:
            "Boutique en ligne avec catalogue, paiement, livraison et gestion des commandes : Connect Web crée votre site e-commerce sur Shopify ou WooCommerce, à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Création de sites e-commerce",
        subtitle: "Une boutique en ligne claire, qui présente vos produits et simplifie la commande pour vos clients.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Votre boutique en ligne",
        title: "Vendez vos produits en ligne, simplement",
        paragraphs: [
            "Une boutique en ligne permet à vos clients de parcourir votre catalogue, de choisir leurs produits et de commander à tout moment. Nous la concevons à l'image de votre marque, avec un parcours d'achat simple sur téléphone comme sur ordinateur.",
            "Nous nous occupons de la mise en place : présentation des produits, paiement, livraison et suivi des commandes. Nous vous montrons ensuite comment gérer votre boutique au quotidien, sans dépendre de nous pour ajouter un produit ou traiter une commande.",
        ],
        bullets: ["Catalogue de produits et collections", "Panier et paiement en ligne", "Options de livraison", "Suivi et gestion des commandes"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite créer une boutique en ligne."), external: true },
        image: {
            src: "/assets/img/cw/accueil-methode-collaboration.jpg",
            alt: "Une équipe prépare le lancement d'une boutique en ligne",
            width: 1000,
            height: 563,
        },
    },
    points: [
        { icon: "fal fa-th-large", title: "Catalogue clair", text: "Vos produits organisés par catégories, avec des fiches détaillées et de belles photos." },
        { icon: "fal fa-credit-card", title: "Paiement et livraison", text: "Les moyens de paiement et de livraison adaptés à votre clientèle et à votre organisation." },
        { icon: "fal fa-clipboard-list", title: "Gestion des commandes", text: "Un suivi simple des commandes, des stocks et des clients depuis un espace d'administration." },
    ],
    approach: {
        eyebrow: "Votre projet de boutique",
        title: "Ce que comprend la création de votre boutique",
        intro: "Nous avançons étape par étape, en validant chaque point avec vous avant le lancement.",
        columns: [
            {
                title: "Catalogue et design",
                items: ["Structure des catégories", "Fiches produits", "Design aux couleurs de votre marque", "Affichage sur téléphone"],
            },
            {
                title: "Paiement, livraison et sécurité",
                items: ["Configuration des moyens de paiement", "Options et tarifs de livraison", "Connexion sécurisée (HTTPS)", "Pages légales de la boutique"],
            },
            {
                title: "Lancement et prise en main",
                items: ["Tests d'une commande de bout en bout", "Ajout de vos premiers produits", "Formation à la gestion de la boutique", "Accompagnement après le lancement"],
            },
        ],
        note: "Le budget est établi après un échange sur vos produits et votre façon de vendre.",
        cta: { label: "Demander une proposition", href: waLink("Bonjour Connect Web, je voudrais une proposition pour ma boutique en ligne."), external: true },
    },
    bands: [
        {
            id: "choix-outil",
            tone: "dark",
            eyebrow: "Shopify ou WooCommerce",
            title: "Le bon outil pour votre boutique",
            paragraphs: [
                "Shopify est une solution complète, simple à prendre en main. WooCommerce s'appuie sur un site WordPress et offre une grande liberté de personnalisation. Chacun a ses atouts selon votre volume de produits, votre budget et vos habitudes de travail.",
                "Nous regardons votre activité avec vous, puis nous recommandons l'outil le plus adapté et nous le configurons.",
            ],
            image: { src: "/assets/img/cw/hero-developpement-web.jpg", alt: "Une boutique en ligne consultée sur un ordinateur portable", width: 1200, height: 800 },
            imageSide: "left",
        },
        {
            id: "budget",
            tone: "light",
            eyebrow: "Votre budget",
            title: "Quel budget prévoir pour une boutique en ligne ?",
            paragraphs: [
                "Le coût dépend du nombre de produits, des moyens de paiement et de livraison, du niveau de personnalisation du design et des fonctions souhaitées, comme un compte client ou plusieurs langues.",
                "Nous établissons une proposition détaillée après avoir compris votre besoin, pour que vous sachiez ce qui est inclus avant de vous engager.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Un professionnel prépare le budget de sa boutique en ligne", width: 1000, height: 668 },
            imageSide: "right",
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, quel budget prévoir pour une boutique en ligne ?"), external: true },
        },
        {
            id: "personnaliser",
            tone: "dark",
            eyebrow: "Personnalisation",
            title: "Une boutique qui vous ressemble",
            paragraphs: [
                "Nous adaptons le design de la boutique à votre marque : couleurs, polices, photos et mise en page de l'accueil et des fiches produits.",
                "Nous ajoutons ensuite les fonctions utiles à votre activité, comme des filtres, des codes promotionnels ou une page dédiée à une collection, sans surcharger la boutique.",
            ],
            cta: { label: "Parler de ma boutique", href: waLink("Bonjour Connect Web, je veux personnaliser ma boutique en ligne."), external: true },
        },
    ],
    realisations: {
        title: "Quelques boutiques présentées dans nos réalisations",
        intro: "Des sites que vous pouvez consulter en ligne.",
        max: 3,
    },
    faq: {
        title: "Vos questions sur la boutique en ligne",
        subtitle: "Ce qu'il faut savoir avant de vendre en ligne.",
        listTitle: "Foire aux questions",
        items: [
            {
                id: "outil",
                question: "Shopify ou WooCommerce : lequel choisir ?",
                answer: "Les deux conviennent pour vendre en ligne. Shopify est plus simple à gérer au quotidien ; WooCommerce offre plus de liberté de personnalisation. Nous comparons les deux avec vous selon votre activité avant de décider.",
            },
            {
                id: "paiement",
                question: "Quels moyens de paiement puis-je proposer ?",
                answer: "Les moyens disponibles dépendent de l'outil choisi et du pays de vos clients. Nous vérifions avec vous ceux qui sont réellement utilisables pour votre activité avant de configurer la boutique.",
            },
            {
                id: "livraison",
                question: "Comment gérer la livraison ?",
                answer: "Nous paramétrons les options de livraison qui correspondent à votre organisation : zones, tarifs, retrait en magasin. Les commandes arrivent ensuite avec les informations utiles pour les préparer.",
            },
            {
                id: "migration",
                question: "Puis-je reprendre ma boutique existante ?",
                answer: "Oui, dans la plupart des cas. Nous préparons la migration de vos produits et de vos clients depuis votre ancienne plateforme et nous vérifions le résultat avant la mise en ligne.",
            },
            {
                id: "produits",
                question: "Combien de produits puis-je vendre ?",
                answer: "Il n'y a pas de limite fixe imposée par Connect Web : cela dépend de l'outil et de la formule choisie. Nous organisons le catalogue pour qu'il reste simple à parcourir, même avec beaucoup de produits.",
            },
            {
                id: "ajouter",
                question: "Pourrai-je ajouter mes produits moi-même ?",
                answer: "Oui. Nous vous formons à l'ajout de produits, à la modification des prix et au traitement des commandes, pour que vous soyez autonome au quotidien.",
            },
            {
                id: "mobile",
                question: "Ma boutique sera-t-elle adaptée au téléphone ?",
                answer: "Oui, c'est un point essentiel : une grande partie des achats se fait depuis un téléphone. Nous concevons le parcours d'achat pour qu'il reste simple sur un petit écran.",
            },
            {
                id: "securite",
                question: "Les paiements sont-ils sécurisés ?",
                answer: "La boutique est servie en connexion sécurisée (HTTPS) et les paiements passent par des services spécialisés, qui gèrent les données bancaires à la place de votre site.",
            },
        ],
    },
};

export const marketingPage: ServicePageData = {
    canonical: "/expertises/marketing-digital",
    meta: {
        title: "Marketing digital & automatisation | Connect Web",
        description:
            "Stratégie, référencement, email marketing, automatisation et publicité en ligne : Connect Web accompagne votre visibilité et l'acquisition de clients à Dakar.",
    },
    head: {
        eyebrow: "Nos expertises",
        title: "Marketing digital & automatisation",
        subtitle: "Se faire connaître, attirer de nouveaux clients et les fidéliser, avec des actions que l'on peut suivre.",
    },
    intro: {
        eyebrow: "Visibilité et clients",
        title: "Des actions marketing simples à suivre",
        paragraphs: [
            "Être en ligne ne suffit pas : encore faut-il être trouvé et donner envie de revenir. Nous vous aidons à définir vos objectifs, à choisir les actions utiles à votre activité et à suivre ce qu'elles apportent.",
            "Selon votre besoin, nous travaillons sur votre positionnement, votre référencement, vos emails, vos relances automatiques et votre publicité en ligne. Chaque action est expliquée, mesurée et ajustée avec vous.",
        ],
        bullets: ["Stratégie marketing digital", "Référencement naturel (SEO)", "Email marketing et CRM marketing", "Marketing automation", "Publicité digitale et acquisition"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite en savoir plus sur le marketing digital."), external: true },
        image: { src: "/assets/img/cw/hero-marketing-digital.jpg", alt: "Suivi des résultats marketing sur un ordinateur", width: 1200, height: 800 },
    },
    services: {
        eyebrow: "Nos services marketing",
        title: "Cinq leviers pour développer votre visibilité",
        intro: "Choisissez le levier qui correspond à votre priorité du moment ; nous les combinons si votre projet le demande.",
        items: [
            { slug: "strategie", title: "Stratégie marketing digital", description: "Positionnement, plan d'action, identification des audiences et définition des objectifs." },
            { slug: "seo", href: "/expertises/marketing-digital/seo", title: "Référencement naturel (SEO)", description: "Optimisation des sites et contenus pour améliorer leur visibilité sur les moteurs de recherche." },
            { slug: "email-crm-marketing", title: "Email marketing & CRM marketing", description: "Campagnes, newsletters, segmentation, scénarios de fidélisation et solutions comme Klaviyo ou Brevo." },
            { slug: "marketing-automation", title: "Marketing automation", description: "Séquences automatiques, relances clients, récupération de paniers abandonnés et parcours de conversion." },
            { slug: "publicite-acquisition", title: "Publicité digitale & acquisition", description: "Accompagnement sur Google Ads et Meta Ads, création de campagnes, suivi des conversions et analyse des performances." },
        ],
    },
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Des actions choisies, mesurées, ajustées",
        intro: "Nous commençons par vos objectifs, pas par les outils.",
        columns: [
            { title: "Définir", items: ["Objectifs et public visé", "État de votre visibilité actuelle", "Choix des priorités", "Plan d'action"] },
            { title: "Mettre en œuvre", items: ["Mise en place des outils", "Création des contenus et campagnes", "Automatisations utiles", "Tests avant lancement"] },
            { title: "Suivre", items: ["Indicateurs simples à lire", "Points réguliers avec vous", "Ajustements", "Bilan"] },
        ],
        note: "Aucun résultat ne peut être garanti à l'avance. Le budget est établi après un échange sur vos objectifs.",
        cta: { label: "Demander un échange", href: waLink("Bonjour Connect Web, je voudrais un échange sur le marketing digital."), external: true },
    },
    bands: [
        {
            id: "automation",
            tone: "dark",
            eyebrow: "Automatisation",
            title: "Gagner du temps sur les relances et les envois",
            paragraphs: [
                "Un message de bienvenue, une relance après un devis, un rappel de panier abandonné : ces envois peuvent partir automatiquement, au bon moment, avec un texte que vous avez validé.",
                "Nous choisissons avec vous l'outil adapté, par exemple Brevo ou Klaviyo, et nous réglons les scénarios.",
            ],
            image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Préparation d'un scénario d'envoi automatique", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "mesure",
            tone: "light",
            eyebrow: "Mesure",
            title: "Savoir ce qui apporte des demandes",
            paragraphs: [
                "Chaque action est suivie : visites, formulaires reçus, messages, ouvertures d'emails. Nous vous présentons les chiffres de façon lisible et nous décidons ensemble de ce qu'il faut garder ou arrêter.",
                "Les chiffres affichés sont ceux de vos propres campagnes, jamais des promesses.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, comment suivre mes actions marketing ?"), external: true },
        },
    ],
    faq: {
        title: "Vos questions sur le marketing digital",
        subtitle: "Mieux comprendre les leviers.",
        listTitle: "Foire aux questions",
        items: [
            { id: "definition", question: "Qu'est-ce que le marketing digital ?", answer: "L'ensemble des actions en ligne qui vous font connaître et attirent des clients : site, référencement, emails, réseaux sociaux, publicité." },
            { id: "choix", question: "Par quoi commencer ?", answer: "Par vos objectifs et l'état de votre site. Nous recommandons ensuite une ou deux actions prioritaires." },
            { id: "seo-pub", question: "Référencement ou publicité ?", answer: "Le référencement agit dans la durée, la publicité plus vite mais tant qu'elle est payée. Les deux peuvent se compléter." },
            { id: "email", question: "L'email marketing est-il encore utile ?", answer: "Oui, pour garder le lien avec vos clients, à condition d'envoyer des messages utiles à des personnes qui ont accepté de les recevoir." },
            { id: "automation", question: "Qu'est-ce que l'automatisation ?", answer: "Des envois ou des actions qui se déclenchent seuls selon le comportement d'un contact, par exemple après une inscription." },
            { id: "pub", question: "Gérez-vous les campagnes publicitaires ?", answer: "Nous accompagnons la création et le suivi de campagnes sur des plateformes comme Google et Meta. Le budget publicitaire est payé directement par vous à la plateforme." },
            { id: "resultats", question: "Quels résultats puis-je attendre ?", answer: "Nous ne les promettons pas à l'avance. Nous fixons des indicateurs avec vous et nous mesurons." },
            { id: "cout", question: "Comment est établi le budget ?", answer: "Après un échange sur vos objectifs. Il est détaillé dans la proposition." },
        ],
    },
};

export const shopifyWoocommercePage: ServicePageData = {
    canonical: "/expertises/developpement-web/shopify-woocommerce",
    meta: {
        title: "Boutique Shopify & WooCommerce | Connect Web",
        description:
            "Boutique en ligne sur Shopify ou WooCommerce : choix de l'outil, configuration, migration et prise en main. Connect Web vous accompagne à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Shopify & WooCommerce",
        subtitle: "Choisir, configurer et lancer votre boutique sur la plateforme adaptée à votre activité.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Votre boutique en ligne",
        title: "La bonne plateforme pour vendre en ligne",
        paragraphs: [
            "Shopify et WooCommerce sont deux solutions reconnues pour vendre en ligne. Elles ne répondent pas aux mêmes besoins : la première est clés en main, la seconde s'intègre à un site WordPress et se personnalise davantage.",
            "Nous vous aidons à choisir, puis nous configurons votre boutique : catalogue, paiement, livraison et pages essentielles. Si vous vendez déjà ailleurs, nous préparons la migration de vos produits.",
        ],
        bullets: ["Comparaison Shopify / WooCommerce selon votre activité", "Configuration de la boutique et des paiements", "Migration depuis une autre plateforme", "Prise en main de la gestion quotidienne"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite une boutique Shopify ou WooCommerce."), external: true },
        image: { src: "/assets/img/cw/hero-developpement-web.jpg", alt: "Une boutique en ligne affichée sur un ordinateur portable", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-shopping-bag", title: "Shopify", text: "Une plateforme complète : hébergement, paiement et administration réunis, simples à prendre en main." },
        { icon: "fal fa-cubes", title: "WooCommerce", text: "Une extension de WordPress très flexible, adaptée aux boutiques qui demandent une personnalisation poussée." },
        { icon: "fal fa-exchange-alt", title: "Migration", text: "Reprise de vos produits, catégories et clients depuis votre ancienne boutique, avec vérification avant la mise en ligne." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "De la comparaison au lancement",
        intro: "Nous commençons par comprendre votre activité avant de recommander un outil, pas l'inverse.",
        columns: [
            { title: "Choisir", items: ["Analyse de vos produits et de votre façon de vendre", "Comparaison des deux outils", "Recommandation argumentée", "Proposition détaillée"] },
            { title: "Configurer", items: ["Installation et design de la boutique", "Fiches produits et catégories", "Paiement, livraison et pages légales", "Tests d'une commande complète"] },
            { title: "Lancer et gérer", items: ["Mise en ligne", "Formation à la gestion des produits et commandes", "Suivi après le lancement", "Évolutions selon votre croissance"] },
        ],
        note: "Le budget est établi après un échange sur votre catalogue et vos besoins.",
        cta: { label: "Demander une proposition", href: waLink("Bonjour Connect Web, je voudrais une proposition pour ma boutique en ligne."), external: true },
    },
    bands: [
        {
            id: "shopify",
            tone: "dark",
            eyebrow: "Shopify",
            title: "Une boutique prête à vendre, simple à gérer",
            paragraphs: [
                "Shopify regroupe l'hébergement, la sécurité, le paiement et l'administration de votre boutique. Vous gérez vos produits, vos stocks et vos commandes depuis un tableau de bord clair, sans vous occuper de la technique.",
                "Nous personnalisons le thème à votre marque, installons les applications utiles et vous formons pour que vous soyez autonome au quotidien.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Gestion d'une boutique en ligne sur un ordinateur", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "woocommerce",
            tone: "light",
            eyebrow: "WooCommerce",
            title: "Une boutique sur mesure, intégrée à votre site",
            paragraphs: [
                "WooCommerce ajoute une boutique à un site WordPress. Il convient bien lorsque vous voulez un site riche en contenu, des fonctions particulières ou une grande liberté sur le design et les extensions.",
                "Cette liberté demande un suivi technique : mises à jour, sécurité et hébergement. Nous vous accompagnons sur ces points, dans le cadre d'une maintenance si vous le souhaitez.",
            ],
            image: { src: "/assets/img/cw/pourquoi-poste-de-travail.jpg", alt: "Un poste de travail pour gérer un site WordPress", width: 1200, height: 800 },
            imageSide: "right",
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, Shopify ou WooCommerce pour mon activité ?"), external: true },
        },
        {
            id: "migration",
            tone: "dark",
            eyebrow: "Changer de plateforme",
            title: "Reprendre votre boutique sans repartir de zéro",
            paragraphs: [
                "Si votre boutique existe déjà, nous préparons le transfert de vos produits, de vos catégories et de vos clients vers la nouvelle plateforme, puis nous vérifions le résultat avant de basculer.",
                "L'objectif : que vos clients retrouvent leur boutique sans interruption inutile.",
            ],
            cta: { label: "Parler de ma migration", href: waLink("Bonjour Connect Web, je veux migrer ma boutique en ligne."), external: true },
        },
    ],
    realisations: { title: "Quelques boutiques présentées dans nos réalisations", intro: "Des sites que vous pouvez consulter en ligne.", max: 3 },
    faq: {
        title: "Vos questions sur Shopify et WooCommerce",
        subtitle: "Votre boutique en ligne, étape par étape.",
        listTitle: "Foire aux questions",
        items: [
            { id: "shopify", question: "Qu'est-ce que Shopify ?", answer: "Shopify est une plateforme de commerce en ligne qui permet de créer une boutique pour vendre des produits physiques ou numériques, avec hébergement, paiement et administration inclus." },
            { id: "woocommerce", question: "Qu'est-ce que WooCommerce ?", answer: "WooCommerce est une extension de WordPress qui transforme un site en boutique en ligne. Elle offre beaucoup de liberté de personnalisation et demande un suivi technique régulier." },
            { id: "difference", question: "Quelle est la différence entre les deux ?", answer: "Shopify est plus simple à gérer et se charge de la technique. WooCommerce est plus flexible mais demande de s'occuper de l'hébergement, des mises à jour et de la sécurité." },
            { id: "ajouter", question: "Comment ajouter des produits à ma boutique ?", answer: "Depuis l'administration, vous créez une fiche avec le nom, la description, les photos, le prix et les options. Nous vous montrons comment faire lors de la prise en main." },
            { id: "expedition", question: "Comment gérer les expéditions ?", answer: "Les deux outils permettent de définir des zones et des tarifs de livraison, et d'imprimer ou de suivre les commandes. Nous paramétrons ce qui correspond à votre organisation." },
            { id: "personnalisation", question: "Puis-je personnaliser l'apparence de ma boutique ?", answer: "Oui. Les deux outils proposent des thèmes personnalisables : couleurs, polices, images et mise en page. Nous adaptons le design à votre marque." },
            { id: "numerique", question: "Puis-je vendre des produits numériques ?", answer: "Oui, par exemple des livres électroniques ou des fichiers à télécharger. Nous configurons la livraison automatique des fichiers après l'achat." },
            { id: "couts", question: "Quels sont les coûts d'une boutique en ligne ?", answer: "Il faut prévoir la création, l'abonnement ou l'hébergement, les extensions éventuelles et les frais de paiement. Les montants dépendent de l'offre choisie : nous les détaillons dans la proposition." },
        ],
    },
};

export const landingPage: ServicePageData = {
    canonical: "/expertises/developpement-web/landing-page",
    meta: {
        title: "Création de landing page | Connect Web",
        description:
            "Une page d'atterrissage claire pour présenter une offre, un événement ou un lancement et recevoir des demandes. Connect Web conçoit votre landing page à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Landing page",
        subtitle: "Une page unique, centrée sur une action, pour présenter une offre et recevoir des demandes.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Page d'atterrissage",
        title: "Une page conçue pour déclencher une action",
        paragraphs: [
            "Une landing page est une page web créée pour un objectif précis : demander un devis, réserver, s'inscrire à un événement, télécharger un document. Tout y est organisé pour amener le visiteur à cette action.",
            "Elle convient à un lancement, une promotion saisonnière, une offre d'hôtel ou de restaurant, ou une campagne de publicité. Nous la rédigeons et la concevons avec vous, puis nous la rendons simple à mesurer.",
        ],
        bullets: ["Message clair et un seul appel à l'action", "Affichage rapide sur téléphone", "Formulaire ou bouton WhatsApp", "Suivi des visites et des demandes"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite une landing page pour mon offre."), external: true },
        image: { src: "/assets/img/cw/accueil-agence-echange.jpg", alt: "Un échange autour d'une page de présentation d'offre", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-bullseye", title: "Un objectif unique", text: "Chaque élément de la page sert l'action attendue, sans distraction." },
        { icon: "fal fa-mobile-alt", title: "Pensée pour le téléphone", text: "La plupart des visiteurs arrivent depuis un mobile : la page se lit et se remplit facilement." },
        { icon: "fal fa-chart-line", title: "Facile à mesurer", text: "Nous prévoyons le suivi des visites et des demandes pour voir ce qui fonctionne." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "De l'idée à la page en ligne",
        intro: "Une landing page réussie commence par un objectif clair et un message simple.",
        columns: [
            { title: "Message", items: ["Définition de l'objectif", "Public visé", "Rédaction du texte et de l'appel à l'action", "Choix des visuels"] },
            { title: "Conception", items: ["Maquette claire à valider", "Affichage sur téléphone et ordinateur", "Formulaire ou lien WhatsApp", "Bases du référencement"] },
            { title: "Mise en ligne et suivi", items: ["Tests avant la publication", "Suivi des visites et des demandes", "Ajustements du message", "Lien avec vos campagnes"] },
        ],
        note: "Le budget est établi après un échange sur votre offre et votre objectif.",
        cta: { label: "Demander une proposition", href: waLink("Bonjour Connect Web, je voudrais une proposition pour une landing page."), external: true },
    },
    bands: [
        {
            id: "avantages",
            tone: "dark",
            eyebrow: "Pourquoi une landing page",
            title: "Les avantages d'une page dédiée",
            paragraphs: [
                "Contrairement à un site complet, une landing page ne propose qu'un chemin : le visiteur lit l'offre et agit. Cette simplicité améliore souvent la clarté du message et facilite le suivi des résultats d'une campagne.",
                "Elle peut aussi être référencée par les moteurs de recherche si son contenu est soigné.",
            ],
            image: { src: "/assets/img/cw/hero-marketing-digital.jpg", alt: "Suivi des résultats d'une campagne sur un ordinateur", width: 1200, height: 800 },
            imageSide: "left",
        },
        {
            id: "definition",
            tone: "light",
            eyebrow: "En bref",
            title: "Qu'est-ce qu'une landing page ?",
            paragraphs: [
                "C'est une page créée pour un objectif marketing ou commercial précis. Elle présente une offre ou un contenu et invite le visiteur à réaliser une action : cliquer sur un bouton, remplir un formulaire ou vous écrire.",
                "Elle peut être indépendante ou faire partie de votre site, selon l'usage.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, j'ai une question sur les landing pages."), external: true },
        },
    ],
    realisations: { title: "Quelques sites présentés dans nos réalisations", intro: "Des sites que vous pouvez consulter en ligne.", max: 3 },
    faq: {
        title: "Vos questions sur les landing pages",
        subtitle: "Une page web pour présenter une offre.",
        listTitle: "Foire aux questions",
        items: [
            { id: "definition", question: "Qu'est-ce qu'une landing page ?", answer: "Une page web conçue pour inciter le visiteur à prendre une action précise : remplir un formulaire, vous écrire ou réserver." },
            { id: "elements", question: "Quels sont les éléments clés d'une landing page ?", answer: "Un titre accrocheur, une description claire de l'offre, des éléments de confiance, un visuel utile et un appel à l'action visible, avec un parcours simple." },
            { id: "temps", question: "Combien de temps un visiteur passe-t-il sur la page ?", answer: "Peu de temps : le message principal doit être compris en quelques secondes. Nous le rédigeons donc de façon courte et claire." },
            { id: "campagne", question: "Comment l'intégrer à une campagne marketing ?", answer: "Nous prévoyons un lien dédié pour chaque campagne afin de suivre d'où viennent les visiteurs et combien passent à l'action." },
            { id: "mesure", question: "Comment mesurer son efficacité ?", answer: "En suivant le nombre de visites, le nombre de demandes reçues et la part de visiteurs qui passent à l'action, avec des outils de mesure d'audience." },
            { id: "referencement", question: "Peut-on l'optimiser pour les moteurs de recherche ?", answer: "Oui : titres clairs, contenu utile, bonne vitesse d'affichage et adaptation au mobile aident la page à être comprise par les moteurs de recherche." },
            { id: "langues", question: "Peut-on la proposer en plusieurs langues ?", answer: "Oui. Une version dans chaque langue permet de s'adresser à un public plus large ; il faut prévoir la traduction et la mise à jour des textes." },
            { id: "site", question: "Landing page ou site complet : que choisir ?", answer: "La landing page convient à une offre ou une campagne précise. Le site complet convient pour présenter toute l'activité. Les deux peuvent se compléter." },
        ],
    },
};

export const seoPage: ServicePageData = {
    canonical: "/expertises/marketing-digital/seo",
    meta: {
        title: "Référencement naturel (SEO) | Connect Web",
        description:
            "Le référencement naturel (SEO) aide votre site à être mieux compris et trouvé sur les moteurs de recherche. Connect Web vous accompagne à Dakar.",
    },
    head: {
        eyebrow: "Marketing digital & automatisation",
        title: "Référencement naturel (SEO)",
        subtitle: "Aider votre site à être mieux compris et trouvé sur les moteurs de recherche.",
        parent: { label: "Marketing digital & automatisation", href: "/expertises/marketing-digital" },
    },
    intro: {
        eyebrow: "Le SEO",
        title: "Être trouvé quand vos clients vous cherchent",
        paragraphs: [
            "Le SEO (Search Engine Optimization) regroupe les pratiques qui aident un site à apparaître dans les résultats des moteurs de recherche, comme Google ou Bing, lorsqu'une personne cherche un produit ou un service. Il agit sur la structure du site, la qualité des contenus, la vitesse d'affichage et la confiance qu'inspire le site.",
            "Le référencement naturel demande du temps et aucun classement ne peut être promis. Nous regardons d'abord où en est votre site, puis nous vous proposons des actions priorisées et nous suivons leur effet.",
        ],
        bullets: ["Audit du site et des pages importantes", "Choix des mots-clés utiles à votre activité", "Optimisation technique et affichage mobile", "Création et amélioration de contenus"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je voudrais améliorer le référencement de mon site."), external: true },
        image: { src: "/assets/img/cw/hero-marketing-digital.jpg", alt: "Analyse du référencement d'un site sur un ordinateur portable", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-search", title: "Comprendre vos clients", text: "Nous identifions les mots et les questions que vos clients tapent réellement quand ils cherchent ce que vous proposez." },
        { icon: "fal fa-cogs", title: "Corriger la technique", text: "Structure, vitesse, affichage mobile et balises : un site bien construit est plus facile à comprendre pour les moteurs." },
        { icon: "fal fa-pen-alt", title: "Produire des contenus utiles", text: "Des pages qui répondent à de vraies questions, rédigées pour vos visiteurs avant tout." },
    ],
    services: {
        eyebrow: "Nos services SEO",
        title: "Deux interventions complémentaires",
        intro: "Vous pouvez commencer par un diagnostic, ou travailler directement sur vos contenus.",
        items: [
            { slug: "audit", href: "/expertises/marketing-digital/seo/audit", title: "Audit SEO", description: "Un état des lieux du site : technique, contenus, mots-clés et priorités d'amélioration." },
            { slug: "contenu", href: "/expertises/marketing-digital/seo/contenu", title: "Contenu optimisé pour le SEO", description: "Rédaction et amélioration de pages et d'articles utiles, structurés pour répondre aux recherches de vos clients." },
        ],
    },
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Du diagnostic au suivi",
        intro: "Le référencement est un travail progressif : nous avançons par étapes et nous mesurons.",
        columns: [
            { title: "Diagnostiquer", items: ["État du site et des pages clés", "Analyse des recherches de vos clients", "Repérage des points bloquants", "Liste d'actions priorisées"] },
            { title: "Optimiser", items: ["Corrections techniques", "Structure des pages et des titres", "Contenus nouveaux ou améliorés", "Liens internes cohérents"] },
            { title: "Suivre", items: ["Mise en place des outils de mesure", "Suivi des visites et des demandes", "Ajustements réguliers", "Points d'étape avec vous"] },
        ],
        note: "Aucun classement ne peut être garanti : les moteurs de recherche décident seuls. Le budget est établi après un échange sur votre site.",
        cta: { label: "Demander un échange", href: waLink("Bonjour Connect Web, je voudrais un échange sur le référencement de mon site."), external: true },
    },
    bands: [
        {
            id: "pourquoi",
            tone: "dark",
            eyebrow: "Pourquoi le SEO",
            title: "Une visibilité qui s'installe dans la durée",
            paragraphs: [
                "Quand vos pages répondent bien aux recherches de vos clients, elles peuvent être découvertes sans que vous payiez à chaque visite. C'est un travail de fond qui complète la publicité en ligne et les réseaux sociaux.",
                "Un site mieux référencé est aussi, le plus souvent, un site plus clair et plus rapide pour tous ses visiteurs.",
            ],
            image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Équipe qui travaille sur la visibilité d'un site", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "limites",
            tone: "light",
            eyebrow: "Ce qu'il faut savoir",
            title: "Un travail de patience, sans promesse de résultat",
            paragraphs: [
                "Les effets du référencement naturel se voient en général au bout de plusieurs semaines ou de plusieurs mois, et dépendent de la concurrence et de l'état du site. Nous vous disons franchement ce qui est réaliste pour votre cas.",
                "Nous n'utilisons pas de techniques interdites par les moteurs de recherche : elles peuvent faire disparaître un site des résultats.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, j'ai une question sur le SEO."), external: true },
        },
    ],
    faq: {
        title: "Vos questions sur le SEO",
        subtitle: "Comprendre le référencement naturel.",
        listTitle: "Foire aux questions",
        items: [
            { id: "definition", question: "Qu'est-ce que le SEO ?", answer: "L'ensemble des pratiques qui aident un site à apparaître dans les résultats naturels des moteurs de recherche, sans payer pour chaque clic." },
            { id: "delai", question: "Combien de temps faut-il pour voir des résultats ?", answer: "Cela dépend du site et de la concurrence. Les effets se mesurent en général sur plusieurs semaines ou plusieurs mois, et nous ne pouvons pas donner de date." },
            { id: "garantie", question: "Pouvez-vous garantir une première place ?", answer: "Non. Personne ne peut le faire honnêtement : seuls les moteurs de recherche décident du classement. Nous améliorons ce que nous contrôlons." },
            { id: "mots-cles", question: "Que sont les mots-clés ?", answer: "Les mots et expressions que les gens tapent pour chercher un produit ou un service. Nous les choisissons selon votre activité et votre public." },
            { id: "mobile", question: "L'affichage sur téléphone compte-t-il ?", answer: "Oui. Beaucoup de recherches se font sur mobile, et un site mal adapté est moins bien compris et moins agréable à utiliser." },
            { id: "contenu", question: "Pourquoi les contenus sont-ils importants ?", answer: "Parce que les moteurs de recherche cherchent des pages qui répondent clairement aux questions des internautes." },
            { id: "seo-sea", question: "Quelle différence avec la publicité en ligne ?", answer: "La publicité apporte des visites tant que vous payez. Le SEO demande du temps mais peut apporter des visites durables. Les deux se combinent." },
            { id: "debut", question: "Par où commencer ?", answer: "Par un audit : il permet de savoir ce qui bloque et de décider des actions à mener en priorité." },
        ],
    },
};

export const seoAuditPage: ServicePageData = {
    canonical: "/expertises/marketing-digital/seo/audit",
    meta: {
        title: "Audit SEO | Connect Web",
        description:
            "L'audit SEO établit un état des lieux de votre site : technique, contenus et mots-clés, avec des priorités d'amélioration claires. Connect Web, Dakar.",
    },
    head: {
        eyebrow: "Référencement naturel (SEO)",
        title: "Audit SEO",
        subtitle: "Un état des lieux clair de votre site et une liste d'actions classées par priorité.",
        parent: { label: "Référencement naturel (SEO)", href: "/expertises/marketing-digital/seo" },
    },
    intro: {
        eyebrow: "Le diagnostic",
        title: "Savoir ce qui freine votre visibilité",
        paragraphs: [
            "L'audit SEO examine votre site comme un moteur de recherche le ferait, puis comme un visiteur : structure, vitesse, affichage mobile, qualité des textes et cohérence avec ce que vos clients recherchent.",
            "Vous recevez un document lisible par un dirigeant non technique, qui explique les constats et propose des actions classées par priorité, avec ce qui peut être fait vite et ce qui demande plus de travail.",
        ],
        bullets: ["Analyse technique du site", "Analyse des contenus et des titres", "Étude des mots-clés de votre activité", "Plan d'action priorisé"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite un audit SEO de mon site."), external: true },
        image: { src: "/assets/img/cw/hero-marketing-digital.jpg", alt: "Analyse d'un site sur un écran d'ordinateur", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-wrench", title: "Technique", text: "Vitesse, affichage mobile, structure des pages, liens cassés et balises." },
        { icon: "fal fa-file-alt", title: "Contenus", text: "Clarté des textes, titres, doublons et pages qui répondent peu aux recherches." },
        { icon: "fal fa-list-ol", title: "Priorités", text: "Les actions classées de la plus utile à la moins urgente, pour savoir par où commencer." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Déroulé de l'audit",
        intro: "Un audit utile se termine toujours par des décisions concrètes.",
        columns: [
            { title: "Cadrer", items: ["Compréhension de votre activité", "Définition de vos objectifs", "Accès au site et aux statistiques si disponibles", "Choix des pages à examiner"] },
            { title: "Analyser", items: ["Examen technique", "Examen des contenus", "Recherche de mots-clés", "Regard sur les concurrents locaux"] },
            { title: "Restituer", items: ["Document de synthèse en français", "Plan d'action priorisé", "Échange pour répondre à vos questions", "Suite possible : mise en œuvre"] },
        ],
        note: "Le budget est établi après un échange sur la taille et l'état de votre site.",
        cta: { label: "Demander un audit", href: waLink("Bonjour Connect Web, je voudrais un audit SEO."), external: true },
    },
    bands: [
        {
            id: "contenu-audit",
            tone: "dark",
            eyebrow: "Ce que contient l'audit",
            title: "Un document pensé pour décider",
            paragraphs: [
                "Chaque constat est expliqué simplement : ce que nous avons observé, pourquoi cela compte et ce que nous recommandons. Vous n'avez pas besoin de connaître le vocabulaire technique.",
                "Vous pouvez ensuite mettre les actions en œuvre vous-même, avec votre prestataire actuel, ou avec nous.",
            ],
            image: { src: "/assets/img/cw/accueil-agence-echange.jpg", alt: "Présentation des conclusions d'un audit", width: 1200, height: 800 },
            imageSide: "right",
        },
    ],
    faq: {
        title: "Vos questions sur l'audit SEO",
        subtitle: "Comprendre le diagnostic de votre site.",
        listTitle: "Foire aux questions",
        items: [
            { id: "definition", question: "Qu'est-ce qu'un audit SEO ?", answer: "Un état des lieux de votre site du point de vue du référencement : ce qui fonctionne, ce qui bloque et ce qu'il faut améliorer en premier." },
            { id: "quand", question: "Quand faire un audit ?", answer: "Avant une refonte, quand le site reçoit peu de visites, après un changement important, ou simplement pour faire le point." },
            { id: "contenu", question: "Que contient le rapport ?", answer: "Les constats techniques et éditoriaux, les mots-clés pertinents pour votre activité et une liste d'actions classées par priorité." },
            { id: "outils", question: "Comment analysez-vous le site ?", answer: "Avec des outils d'analyse reconnus et une relecture humaine des pages. Les outils précis dépendent du site." },
            { id: "acces", question: "De quoi avez-vous besoin ?", answer: "De l'adresse du site, de vos objectifs et, si possible, d'un accès à vos statistiques de visites." },
            { id: "resultat", question: "L'audit améliore-t-il le classement ?", answer: "L'audit lui-même n'agit pas : ce sont les actions mises en œuvre ensuite qui peuvent améliorer la visibilité, sans garantie de classement." },
            { id: "suite", question: "Faut-il travailler avec vous ensuite ?", answer: "Non. Le plan d'action vous appartient. Nous pouvons vous aider à l'appliquer si vous le souhaitez." },
            { id: "budget", question: "Combien coûte un audit ?", answer: "Cela dépend de la taille du site et de l'étendue de l'analyse. Nous l'indiquons dans la proposition après un échange." },
        ],
    },
};

export const seoContenuPage: ServicePageData = {
    canonical: "/expertises/marketing-digital/seo/contenu",
    meta: {
        title: "Contenu optimisé pour le SEO | Connect Web",
        description:
            "Rédaction et amélioration de pages et d'articles utiles à vos clients et compris par les moteurs de recherche. Connect Web, Dakar.",
    },
    head: {
        eyebrow: "Référencement naturel (SEO)",
        title: "Contenu optimisé pour le SEO",
        subtitle: "Des textes utiles à vos clients, structurés pour être bien compris par les moteurs de recherche.",
        parent: { label: "Référencement naturel (SEO)", href: "/expertises/marketing-digital/seo" },
    },
    intro: {
        eyebrow: "Le contenu",
        title: "Des pages qui répondent aux vraies questions",
        paragraphs: [
            "Un bon contenu répond clairement à ce que cherche le visiteur. Nous rédigeons ou améliorons vos pages de services, vos articles et vos fiches produits, en pensant d'abord à vos lecteurs, puis à la façon dont les moteurs de recherche lisent une page.",
            "Chaque texte est écrit à partir de votre activité réelle. Nous ne produisons pas de contenu générique ni de texte copié ailleurs.",
        ],
        bullets: ["Pages de services et fiches produits", "Articles de blog", "Titres, descriptions et structure des pages", "Relecture et mise à jour de textes existants"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite des contenus optimisés pour mon site."), external: true },
        image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Rédaction d'un contenu avec un client", width: 1000, height: 668 },
    },
    points: [
        { icon: "fal fa-user-check", title: "Pour vos lecteurs", text: "Un langage clair, des exemples concrets et une réponse directe aux questions fréquentes." },
        { icon: "fal fa-heading", title: "Bien structuré", text: "Titres, sous-titres et paragraphes organisés pour faciliter la lecture et la compréhension." },
        { icon: "fal fa-sync", title: "Mis à jour", text: "Des contenus que l'on peut revoir et compléter avec le temps." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "De l'idée au texte publié",
        intro: "Nous travaillons à partir de ce que vous savez de votre métier.",
        columns: [
            { title: "Préparer", items: ["Échange sur votre activité", "Choix des sujets et des mots-clés", "Plan de chaque page", "Validation du plan"] },
            { title: "Rédiger", items: ["Texte original en français", "Titres et descriptions", "Appels à l'action clairs", "Relecture"] },
            { title: "Publier et suivre", items: ["Mise en ligne ou remise des textes", "Liens avec le reste du site", "Suivi des visites", "Mises à jour"] },
        ],
        note: "Le budget est établi après un échange sur le volume et le type de contenus.",
        cta: { label: "Demander une proposition", href: waLink("Bonjour Connect Web, je voudrais une proposition pour mes contenus."), external: true },
    },
    bands: [
        {
            id: "qualite",
            tone: "dark",
            eyebrow: "Notre exigence",
            title: "Des textes fiables, signés de votre expérience",
            paragraphs: [
                "Nous vérifions les informations avec vous avant publication. Nous n'inventons ni chiffres, ni témoignages, ni références : un contenu crédible repose sur des faits que vous pouvez soutenir.",
                "Le but n'est pas de remplir une page de mots-clés, mais de donner une réponse utile à celui qui vous cherche.",
            ],
            image: { src: "/assets/img/cw/pourquoi-poste-de-travail.jpg", alt: "Relecture d'un contenu sur un poste de travail", width: 1200, height: 800 },
            imageSide: "left",
        },
    ],
    faq: {
        title: "Vos questions sur les contenus SEO",
        subtitle: "Écrire pour vos clients et pour les moteurs de recherche.",
        listTitle: "Foire aux questions",
        items: [
            { id: "definition", question: "Qu'est-ce qu'un contenu optimisé ?", answer: "Un texte qui répond clairement à une recherche, avec des titres, une structure et un vocabulaire adaptés, sans artifice." },
            { id: "mots-cles", question: "Faut-il répéter les mots-clés ?", answer: "Non. Les répéter trop nuit à la lecture. Nous les utilisons naturellement, là où ils ont du sens." },
            { id: "longueur", question: "Quelle doit être la longueur d'un texte ?", answer: "Celle qu'il faut pour répondre à la question. Il n'y a pas de longueur idéale universelle." },
            { id: "blog", question: "Un blog est-il utile ?", answer: "Il peut l'être s'il répond à des questions de vos clients et si vous pouvez l'alimenter régulièrement." },
            { id: "existant", question: "Pouvez-vous améliorer mes textes actuels ?", answer: "Oui. Nous relisons vos pages, corrigeons leur structure et complétons ce qui manque." },
            { id: "langue", question: "Dans quelle langue écrivez-vous ?", answer: "En français. D'autres langues sont à voir selon le projet." },
            { id: "ia", question: "Utilisez-vous des textes générés automatiquement ?", answer: "Nous rédigeons et relisons chaque texte à partir de vos informations, et nous les validons avec vous avant publication." },
            { id: "resultat", question: "Les contenus garantissent-ils un meilleur classement ?", answer: "Non. Ils améliorent les chances d'être bien compris et trouvé, sans pouvoir promettre un classement." },
        ],
    },
};

export const refonteMaintenancePage: ServicePageData = {
    canonical: "/expertises/developpement-web/refonte-maintenance",
    meta: {
        title: "Refonte et maintenance de site web | Connect Web",
        description:
            "Moderniser un site existant et le garder à jour, sécurisé et rapide : refonte, mises à jour et suivi par Connect Web à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Refonte & maintenance de site web",
        subtitle: "Moderniser votre site, puis le garder à jour, sécurisé et rapide.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Votre site existant",
        title: "Un site qui vieillit a besoin de soin",
        paragraphs: [
            "Un site peut devenir lent, difficile à utiliser sur téléphone ou exposé à des failles faute de mises à jour. Nous examinons votre site actuel, puis nous vous proposons soit une refonte, soit des améliorations ciblées.",
            "Après la mise en ligne, une maintenance régulière évite les mauvaises surprises : mises à jour, sauvegardes, surveillance et petites modifications de contenu.",
        ],
        bullets: ["Examen du site existant", "Refonte du design et de la structure", "Mises à jour et sécurité", "Sauvegardes et modifications de contenu"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite refondre ou maintenir mon site."), external: true },
        image: { src: "/assets/img/cw/hero-developpement-web.jpg", alt: "Mise à jour d'un site web sur un ordinateur portable", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-paint-roller", title: "Refonte", text: "Un nouveau design et une meilleure structure, en conservant ce qui fonctionne déjà." },
        { icon: "fal fa-shield-alt", title: "Sécurité", text: "Mises à jour des outils et surveillance pour limiter les risques." },
        { icon: "fal fa-life-ring", title: "Suivi", text: "Une personne à contacter quand vous avez besoin de modifier ou de corriger quelque chose." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Refaire puis entretenir",
        intro: "Nous évitons de tout reconstruire quand ce n'est pas nécessaire.",
        columns: [
            { title: "Examiner", items: ["Revue du site et de son hébergement", "Retour des visiteurs si disponible", "Contenus à conserver", "Recommandation : améliorer ou refondre"] },
            { title: "Refondre", items: ["Nouvelle maquette à valider", "Reprise des contenus utiles", "Redirections pour conserver votre référencement", "Tests avant mise en ligne"] },
            { title: "Maintenir", items: ["Mises à jour régulières", "Sauvegardes", "Corrections et petites évolutions", "Point de suivi avec vous"] },
        ],
        note: "Les modalités de maintenance sont définies avec vous. Le budget est établi après un échange sur votre site.",
        cta: { label: "Demander un échange", href: waLink("Bonjour Connect Web, je voudrais un échange sur la refonte ou la maintenance de mon site."), external: true },
    },
    bands: [
        {
            id: "refonte",
            tone: "dark",
            eyebrow: "Refonte",
            title: "Repartir sur de bonnes bases sans perdre vos acquis",
            paragraphs: [
                "Lors d'une refonte, nous gardons les contenus et les adresses qui comptent pour votre référencement, et nous prévoyons les redirections nécessaires. Vos visiteurs retrouvent ce qu'ils cherchent.",
                "Nous améliorons aussi la vitesse, l'affichage sur mobile et la clarté des parcours.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Nouvelle maquette de site web", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "maintenance",
            tone: "light",
            eyebrow: "Maintenance",
            title: "Un site en bon état, mois après mois",
            paragraphs: [
                "Un site oublié finit par poser problème : composants périmés, failles de sécurité, pages qui ne s'affichent plus. La maintenance consiste à le surveiller et à le tenir à jour.",
                "Elle peut aussi inclure vos petites modifications : texte, image, nouvelle page ou produit.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, je voudrais une maintenance pour mon site."), external: true },
        },
    ],
    realisations: { title: "Quelques sites présentés dans nos réalisations", intro: "Des sites que vous pouvez consulter en ligne.", max: 3 },
    faq: {
        title: "Vos questions sur la refonte et la maintenance",
        subtitle: "Garder un site à jour.",
        listTitle: "Foire aux questions",
        items: [
            { id: "refonte", question: "Quand faut-il refondre un site ?", answer: "Quand il est lent, difficile à utiliser sur mobile, ne reflète plus votre activité ou ne se met plus à jour facilement." },
            { id: "maintenance", question: "Qu'est-ce que la maintenance d'un site ?", answer: "Le suivi régulier du site : mises à jour, sauvegardes, surveillance et corrections." },
            { id: "securite", question: "Pourquoi les mises à jour sont-elles importantes ?", answer: "Elles corrigent des failles connues. Un site non mis à jour est plus exposé aux attaques." },
            { id: "sauvegarde", question: "Mon site est-il sauvegardé ?", answer: "Cela dépend de votre hébergement. Nous vérifions ce point et prévoyons une sauvegarde adaptée." },
            { id: "contenus", question: "Mes contenus actuels seront-ils conservés ?", answer: "Ceux qui sont utiles, oui. Nous décidons avec vous de ce qui est repris, réécrit ou supprimé." },
            { id: "referencement", question: "Une refonte risque-t-elle de faire perdre ma visibilité ?", answer: "Elle peut, si elle est mal préparée. Nous prévoyons les redirections et vérifions les pages importantes." },
            { id: "plateforme", question: "Travaillez-vous sur un site fait par quelqu'un d'autre ?", answer: "Oui, après avoir examiné sa technologie et ses accès. Nous vous disons ce qui est faisable." },
            { id: "cout", question: "Combien cela coûte-t-il ?", answer: "Cela dépend de l'état du site et de l'étendue du travail. Nous l'indiquons dans la proposition." },
        ],
    },
};

export const applicationsWebPage: ServicePageData = {
    canonical: "/expertises/developpement-web/applications-web-pwa",
    meta: {
        title: "Applications web et PWA | Connect Web",
        description:
            "Applications web et PWA pour digitaliser vos processus : suivi, réservations, espaces clients. Connect Web conçoit des outils adaptés à votre activité à Dakar.",
    },
    head: {
        eyebrow: "Développement web & e-commerce",
        title: "Applications web & PWA",
        subtitle: "Des outils en ligne adaptés à votre façon de travailler, utilisables sur ordinateur comme sur téléphone.",
        parent: { label: "Développement web & e-commerce", href: "/expertises/developpement-web" },
    },
    intro: {
        eyebrow: "Vos outils",
        title: "Une application pensée pour vos usages",
        paragraphs: [
            "Une application web est un outil utilisable depuis un navigateur : espace client, suivi de commandes, gestion de réservations, tableau de bord interne. Elle remplace des fichiers dispersés et des échanges manuels.",
            "Une PWA est une application web qui peut s'installer sur l'écran d'accueil d'un téléphone et se comporter comme une application classique, sans passer par une boutique d'applications.",
        ],
        bullets: ["Espaces clients et tableaux de bord", "Suivi, réservations et demandes", "Installation possible sur téléphone (PWA)", "Intégration avec vos outils existants selon le cas"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, j'ai un projet d'application web."), external: true },
        image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Une application web utilisée sur un ordinateur", width: 1000, height: 668 },
    },
    points: [
        { icon: "fal fa-tasks", title: "Des usages concrets", text: "Nous partons de la tâche à faciliter, pas d'une liste de fonctionnalités." },
        { icon: "fal fa-mobile-alt", title: "Sur tous les écrans", text: "Utilisable sur ordinateur, tablette et téléphone." },
        { icon: "fal fa-plug", title: "Reliée à l'existant", text: "Connexion possible à vos outils, selon leurs possibilités." },
    ],
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Cadrer, construire, faire évoluer",
        intro: "Nous construisons par étapes pour que vous voyiez avancer le projet.",
        columns: [
            { title: "Cadrer", items: ["Compréhension de vos processus", "Liste des fonctions utiles", "Définition d'une première version", "Maquettes à valider"] },
            { title: "Construire", items: ["Développement par étapes", "Démonstrations régulières", "Tests avec vos données", "Corrections"] },
            { title: "Lancer et faire évoluer", items: ["Mise en ligne", "Formation des utilisateurs", "Suivi après le lancement", "Nouvelles fonctions selon vos retours"] },
        ],
        note: "Le budget est établi après cadrage du besoin. Nous commençons par une première version utile.",
        cta: { label: "Parler de mon projet", href: waLink("Bonjour Connect Web, je voudrais parler d'une application pour mon activité."), external: true },
    },
    bands: [
        {
            id: "pwa",
            tone: "dark",
            eyebrow: "PWA",
            title: "Une application qui s'installe sans boutique d'applications",
            paragraphs: [
                "Une PWA se visite comme un site, puis peut être ajoutée à l'écran d'accueil du téléphone. Elle peut afficher certaines informations même avec une connexion faible.",
                "Elle convient bien quand vous voulez toucher vos utilisateurs sur mobile sans développer une application distincte pour chaque système. Les possibilités exactes dépendent du téléphone utilisé.",
            ],
            image: { src: "/assets/img/cw/hero-developpement-web.jpg", alt: "Une application web sur un téléphone", width: 1200, height: 800 },
            imageSide: "left",
        },
        {
            id: "integration",
            tone: "light",
            eyebrow: "Intégration et sur mesure",
            title: "Se connecter à vos outils ou construire à part",
            paragraphs: [
                "Si vous utilisez déjà un CRM ou un ERP, nous pouvons relier l'application à ces outils lorsqu'ils le permettent. C'est de l'intégration.",
                "Si votre besoin n'est couvert par aucun outil existant, nous développons sur mesure. Nous vous disons clairement dans quel cas vous êtes.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, intégration ou développement sur mesure ?"), external: true },
        },
    ],
    realisations: { title: "Quelques projets présentés dans nos réalisations", intro: "Des projets dont nous précisons le rôle et le statut.", max: 3 },
    faq: {
        title: "Vos questions sur les applications web",
        subtitle: "Comprendre ce qu'une application peut faire pour vous.",
        listTitle: "Foire aux questions",
        items: [
            { id: "web", question: "Qu'est-ce qu'une application web ?", answer: "Un outil accessible depuis un navigateur, sans installation obligatoire, qui permet de gérer une activité ou d'offrir un service." },
            { id: "pwa", question: "Qu'est-ce qu'une PWA ?", answer: "Une application web qui peut s'installer sur l'écran d'accueil d'un téléphone et se comporter comme une application classique." },
            { id: "site", question: "Quelle différence avec un site internet ?", answer: "Un site présente de l'information. Une application permet d'agir : se connecter, saisir, suivre, réserver." },
            { id: "mobile", question: "Fonctionne-t-elle sur téléphone ?", answer: "Oui, elle est conçue pour s'adapter aux écrans d'ordinateur, de tablette et de téléphone." },
            { id: "securite", question: "Mes données sont-elles protégées ?", answer: "Nous mettons en place des accès par compte et des pratiques de sécurité usuelles. Le niveau dépend de la sensibilité des données et est discuté au cadrage." },
            { id: "existant", question: "Peut-elle se connecter à mes outils actuels ?", answer: "Souvent, si ces outils proposent une connexion. Nous le vérifions avant de nous engager." },
            { id: "evolution", question: "Peut-on ajouter des fonctions plus tard ?", answer: "Oui. Nous préférons démarrer par une première version utile, puis la faire évoluer." },
            { id: "cout", question: "Comment est établi le budget ?", answer: "Après cadrage, en fonction des fonctions retenues. Nous le détaillons dans la proposition." },
        ],
    },
};

// Pôle « Infrastructure & solutions IT » (capture « autre »). Statut : catalogue proposé ; modalités d'exécution et
// partenaires à confirmer (expertises.ts, docs/12 Q22). Ne pas présenter comme des réalisations démontrées.
export const infrastructurePage: ServicePageData = {
    canonical: "/expertises/infrastructure-it",
    meta: {
        title: "Infrastructure & solutions IT | Connect Web",
        description:
            "Réseaux, câblage, hébergement, téléphonie IP et vidéosurveillance : Connect Web accompagne la mise en place de l'informatique de votre entreprise à Dakar.",
    },
    head: {
        eyebrow: "Nos expertises",
        title: "Infrastructure & solutions IT",
        subtitle: "Des environnements de travail connectés, fiables et sécurisés pour vos équipes.",
    },
    intro: {
        eyebrow: "Votre informatique",
        title: "Un réseau et des équipements qui fonctionnent au quotidien",
        paragraphs: [
            "Un réseau instable, des postes mal configurés ou un hébergement mal suivi ralentissent toute l'activité. Nous vous aidons à mettre en place et à améliorer l'informatique de vos locaux, qu'il s'agisse de bureaux, de commerces, d'hôtels ou de restaurants.",
            "Nous commençons par comprendre votre fonctionnement et vos contraintes, puis nous vous proposons une solution adaptée. Les modalités d'intervention sur site sont précisées avec vous au moment du cadrage.",
        ],
        bullets: ["Réseaux informatiques et câblage", "Installation et configuration IT", "Hébergement, serveurs et cloud", "Téléphonie IP", "Vidéosurveillance et contrôle d'accès"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite parler de l'infrastructure informatique de mon entreprise."), external: true },
        image: { src: "/assets/img/cw/hero-infrastructure-it.jpg", alt: "Équipements réseau dans une salle informatique", width: 1200, height: 800 },
    },
    services: {
        eyebrow: "Nos services IT",
        title: "Cinq domaines pour équiper vos locaux",
        intro: "Du câblage à la sécurité des locaux, nous vous aidons à choisir ce qui est utile à votre activité.",
        items: [
            { slug: "reseaux-cablage", title: "Réseaux informatiques & câblage", description: "Installation et organisation des réseaux LAN, Wi-Fi et câblage structuré." },
            { slug: "installation-configuration-it", title: "Installation & configuration IT", description: "Postes de travail, routeurs, switchs, périphériques et équipements réseau." },
            { slug: "hebergement-serveurs-cloud", title: "Hébergement, serveurs & cloud", description: "Configuration, déploiement, administration et maintenance des environnements d'hébergement." },
            { slug: "telephonie-ip", title: "Téléphonie IP", description: "Solutions VoIP, standard téléphonique et communication interne." },
            { slug: "videosurveillance-controle-acces", title: "Vidéosurveillance & contrôle d'accès", description: "Solutions de surveillance et de sécurisation des locaux professionnels." },
        ],
    },
    approach: {
        eyebrow: "Notre façon de travailler",
        title: "Comprendre vos locaux avant de proposer",
        intro: "Chaque lieu a ses contraintes : taille, usages, équipements existants.",
        columns: [
            { title: "Analyser", items: ["Échange sur votre fonctionnement", "Visite ou description des lieux", "Inventaire de l'existant", "Priorités"] },
            { title: "Proposer", items: ["Solution adaptée à vos usages", "Liste des équipements", "Étapes d'installation", "Validation avec vous"] },
            { title: "Installer et suivre", items: ["Mise en place et tests", "Documentation simple", "Prise en main par vos équipes", "Suivi après installation"] },
        ],
        note: "Les modalités d'intervention sur site sont précisées avec vous au cadrage. Le budget est établi après analyse.",
        cta: { label: "Demander un échange", href: waLink("Bonjour Connect Web, je voudrais un échange sur l'infrastructure IT de mon entreprise."), external: true },
    },
    bands: [
        {
            id: "reseau",
            tone: "dark",
            eyebrow: "Réseau",
            title: "Une connexion stable pour toute l'équipe",
            paragraphs: [
                "Un bon réseau commence par une bonne organisation : emplacement des bornes Wi-Fi, câblage, séparation des usages. Nous l'étudions avec vous pour éviter les zones sans connexion et les ralentissements.",
                "Nous documentons ce qui est installé pour que la maintenance soit simple ensuite.",
            ],
            image: { src: "/assets/img/cw/hero-infrastructure-it.jpg", alt: "Équipements réseau installés", width: 1200, height: 800 },
            imageSide: "left",
        },
        {
            id: "securite",
            tone: "light",
            eyebrow: "Sécurité",
            title: "Protéger vos locaux et vos données",
            paragraphs: [
                "Sauvegardes, accès réservés, vidéosurveillance, contrôle d'accès : nous vous aidons à choisir les mesures qui correspondent à vos risques réels, sans surdimensionner.",
                "Selon le cas, nous pouvons travailler avec des partenaires pour certaines installations ; cela serait précisé au cadrage.",
            ],
            cta: { label: "En parler avec nous", href: waLink("Bonjour Connect Web, je voudrais sécuriser mes locaux et mon réseau."), external: true },
        },
    ],
    faq: {
        title: "Vos questions sur l'infrastructure IT",
        subtitle: "Équiper et sécuriser vos locaux.",
        listTitle: "Foire aux questions",
        items: [
            { id: "reseau", question: "Que comprend un réseau d'entreprise ?", answer: "Le câblage, les équipements (routeurs, switchs, bornes Wi-Fi) et leur configuration, pour relier postes, imprimantes et services." },
            { id: "wifi", question: "Pourquoi mon Wi-Fi est-il instable ?", answer: "Souvent par un mauvais emplacement des bornes, trop d'appareils ou un équipement dépassé. Une analyse sur place permet de le dire." },
            { id: "cloud", question: "Faut-il passer au cloud ?", answer: "Pas toujours. Cela dépend de vos besoins, de votre connexion et de vos données. Nous comparons les options avec vous." },
            { id: "telephonie", question: "Qu'est-ce que la téléphonie IP ?", answer: "Des appels passés via le réseau informatique, avec standard et lignes internes, au lieu d'une installation téléphonique classique." },
            { id: "video", question: "La vidéosurveillance est-elle encadrée ?", answer: "Oui, des règles encadrent l'usage des caméras et des images. Nous les rappelons au cadrage." },
            { id: "sur-site", question: "Intervenez-vous sur site ?", answer: "Les modalités d'intervention sur site sont précisées avec vous au moment du cadrage." },
            { id: "existant", question: "Pouvez-vous reprendre une installation existante ?", answer: "Souvent oui, après un inventaire. Nous vous disons ce qui peut être conservé." },
            { id: "cout", question: "Comment est établi le budget ?", answer: "Après analyse de vos locaux et de vos besoins. Il est détaillé dans la proposition." },
        ],
    },
};

// Pôle « Digitalisation & Solutions Métiers » — refait sur le modèle de la page Développement web & e-commerce
// (demande d'Amadou du 10/11/2026). Textes REPRIS de l'ancienne page (content/digitalisation.ts : hero, « Votre activité,
// vos outils », accompagnement, FAQ) et adaptés ; les trois scénarios « En pratique » sont des exemples illustratifs,
// jamais des réalisations ni des connexions déjà actives. Les cinq cartes reprennent les sous-services du catalogue
// (ancres = slugs de expertises.ts). Statut : textes PROPOSÉS, à relire par Amadou.
export const digitalisationPageData: ServicePageData = {
    canonical: "/expertises/digitalisation",
    meta: {
        title: "Digitalisation : applications, CRM, ERP et automatisation | Connect Web",
        description:
            "Applications métiers, CRM, ERP et automatisation des processus : Connect Web construit les outils numériques adaptés à vos clients et à votre façon de travailler, à Dakar.",
    },
    head: {
        eyebrow: "Nos expertises",
        title: "Digitalisation & solutions métiers",
        subtitle: "Des outils connectés pour mieux servir vos clients, organiser votre activité et simplifier le travail de vos équipes.",
    },
    intro: {
        eyebrow: "Votre activité, vos outils",
        title: "Des solutions numériques pensées pour votre façon de travailler",
        paragraphs: [
            "Des demandes clients dispersées, des informations recopiées et des outils qui fonctionnent séparément compliquent le quotidien. La digitalisation permet de mieux organiser ces échanges et de faciliter le travail de vos équipes.",
            "Connect Web part de votre fonctionnement pour identifier les améliorations utiles. Selon vos priorités, nous développons vos applications, mettons en place vos outils de gestion ou connectons ceux que vous utilisez déjà.",
        ],
        bullets: ["Mieux présenter et vendre vos offres", "Réduire les tâches répétitives", "Centraliser les informations utiles", "Relier les outils que vous utilisez déjà"],
        cta: { label: "Nous joindre sur WhatsApp", href: waLink("Bonjour Connect Web, je souhaite digitaliser une partie de mon activité."), external: true },
        image: { src: "/assets/img/cw/hero-digitalisation.jpg", alt: "Un professionnel consulte un tableau de bord sur son ordinateur", width: 1200, height: 800 },
    },
    points: [
        { icon: "fal fa-users-cog", title: "Gestion de la relation client", text: "Un suivi clair de vos contacts, de vos demandes et de vos relances, partagé par toute l'équipe." },
        { icon: "fal fa-browser", title: "Outils sur mesure", text: "Des applications construites autour de vos processus quand aucun logiciel existant ne convient." },
        { icon: "fal fa-project-diagram", title: "Outils connectés", text: "Moins de doubles saisies : vos logiciels échangent les informations utiles entre eux." },
    ],
    services: {
        eyebrow: "Nos solutions",
        title: "Cinq services pour organiser et connecter votre activité",
        intro: "Du suivi de vos clients à l'automatisation du travail de vos équipes, choisissez le service qui correspond à votre priorité.",
        items: [
            { slug: "crm", title: "CRM & gestion de la relation client", description: "Mise en place d'un outil de suivi de vos contacts, de vos demandes et de vos relances, avec prise en main des équipes." },
            { slug: "erp", title: "ERP & gestion d'entreprise", description: "Ventes, stocks, facturation et processus métiers réunis dans un outil de gestion, par exemple Odoo, adapté à votre organisation." },
            { slug: "applications-metiers", title: "Applications métiers sur mesure", description: "Applications web et PWA développées pour vos processus : suivi, réservations, espaces utilisateurs et tableaux de bord." },
            { slug: "automatisation-processus", title: "Automatisation des processus", description: "Automatisation des tâches répétitives, circuits de validation, notifications et rapports envoyés au bon moment." },
            { slug: "integration-accompagnement", title: "Intégration & accompagnement digital", description: "Connexion de vos logiciels entre eux, reprise des données utiles, formation et accompagnement de vos équipes." },
        ],
    },
    approach: {
        eyebrow: "Notre accompagnement",
        title: "Du premier échange à la prise en main de vos outils",
        intro: "Un périmètre défini, des validations aux étapes importantes et un accompagnement adapté à votre projet.",
        columns: [
            { title: "Comprendre et concevoir", items: ["Entretien sur votre activité et vos outils actuels", "Besoin et priorités validés avec vous", "Proposition écrite : périmètre, fonctions, étapes", "Validation avant tout démarrage"] },
            { title: "Réaliser et tester", items: ["Développement ou configuration par étapes", "Points de suivi avec démonstrations", "Essais sur des cas réels", "Validation des étapes importantes"] },
            { title: "Déployer et accompagner", items: ["Mise en service", "Formation des personnes concernées", "Documentation de prise en main", "Suivi défini dans la proposition"] },
        ],
        note: "Le budget et le calendrier sont fixés dans la proposition écrite, après un échange sur votre besoin. Rien ne démarre sans votre accord.",
        cta: { label: "Demander un échange", href: waLink("Bonjour Connect Web, je voudrais un échange sur la digitalisation de mon activité."), external: true },
    },
    bands: [
        {
            id: "connexions",
            tone: "dark",
            eyebrow: "En pratique",
            title: "Moins de tâches répétitives, plus de connexions",
            paragraphs: [
                "Voici à quoi peut ressembler le lien entre vos outils. Une commande confirmée sur votre boutique met à jour votre stock, enrichit la fiche du client et peut déclencher un message de suivi une fois la livraison faite.",
                "Ce sont des scénarios illustratifs, pas des réalisations : nous imaginons ensemble le parcours adapté à votre activité, avec les outils que vous utilisez déjà.",
            ],
            image: { src: "/assets/img/cw/digitalisation-activite-outils.jpg", alt: "Outils de gestion affichés sur un ordinateur", width: 1000, height: 668 },
            imageSide: "left",
        },
        {
            id: "parcours",
            tone: "light",
            eyebrow: "Trois exemples de parcours",
            title: "Vendre, suivre ses clients, organiser ses équipes",
            paragraphs: [
                "Vendre en ligne : commande, mise à jour du stock, historique dans la fiche client, message de suivi après la livraison. Suivre ses clients : chaque demande du site est centralisée, rattachée à une fiche contact, attribuée au bon responsable, puis relancée au moment prévu.",
                "Organiser les équipes : une demande interne est attribuée à une personne, son avancement est visible de tous et un tableau de bord montre les priorités en un regard.",
            ],
            cta: { label: "Connecter mes outils", href: waLink("Bonjour Connect Web, je voudrais connecter mes outils entre eux."), external: true },
        },
        {
            id: "integration-sur-mesure",
            tone: "dark",
            eyebrow: "Bien choisir",
            title: "Intégrer un outil existant ou développer sur mesure ?",
            paragraphs: [
                "Si un CRM ou un ERP du marché répond à votre besoin, nous le mettons en place et nous le relions à vos autres outils : c'est de l'intégration. Elle limite le travail et vous fait profiter d'un logiciel éprouvé.",
                "Si votre façon de travailler n'est couverte par aucun outil, nous développons une application sur mesure. Nous vous disons clairement dans quel cas vous êtes avant de proposer quoi que ce soit.",
            ],
            image: { src: "/assets/img/cw/accueil-methode-collaboration.jpg", alt: "Échange pour choisir entre un outil existant et un développement sur mesure", width: 1000, height: 668 },
            imageSide: "right",
        },
    ],
    realisations: { title: "Quelques projets présentés dans nos réalisations", intro: "Des projets dont nous précisons le rôle et le statut.", max: 3 },
    faq: {
        title: "Vos questions sur la digitalisation",
        subtitle: "Préparer votre projet.",
        listTitle: "Foire aux questions",
        items: [
            { id: "un-service", question: "Peut-on commencer par un seul service ?", answer: "Oui. Beaucoup de projets démarrent par un site ou un outil de gestion. Nous prévoyons dès le départ comment il pourra se relier aux outils ajoutés ensuite." },
            { id: "outils", question: "Faut-il remplacer tous nos outils ?", answer: "Non. Nous partons de ce que vous utilisez déjà et gardons ce qui fonctionne. Nous ne proposons un remplacement que si un outil freine votre activité." },
            { id: "budget", question: "Quel budget prévoir ?", answer: "Il dépend du périmètre : fonctions, outils à connecter, volume de données à reprendre. Après un premier échange, vous recevez une proposition écrite avec le détail des prestations et leur prix." },
            { id: "duree", question: "Combien de temps prend un projet ?", answer: "Le calendrier dépend du périmètre et de la disponibilité de vos contenus. Il est fixé dans la proposition, étape par étape, avant le démarrage." },
            { id: "suivi", question: "Comment se passe le suivi après la livraison ?", answer: "Chaque livraison comprend une prise en main et une documentation. Le suivi (corrections, mises à jour, évolutions) est défini dans la proposition." },
            { id: "crm-erp", question: "Quelle différence entre un CRM et un ERP ?", answer: "Un CRM suit vos contacts, vos demandes et vos relances commerciales. Un ERP couvre plus largement la gestion : ventes, stocks, facturation. Nous vous aidons à choisir selon votre activité." },
            { id: "donnees", question: "Que deviennent nos données actuelles ?", answer: "Nous identifions avec vous celles qui sont utiles, puis nous préparons leur reprise dans le nouvel outil, avec une vérification avant la mise en service." },
            { id: "equipes", question: "Nos équipes seront-elles formées ?", answer: "Oui. La prise en main des personnes concernées fait partie de l'accompagnement, avec une documentation simple." },
        ],
    },
};
