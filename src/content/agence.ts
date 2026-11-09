// Page « Qui sommes-nous » (/agence) — demandée par Amadou le 09/11/2026.
// Architecture reprise de sa capture de référence (bandeau, présentation + image, deux cartes, contact, grille de
// questions sur fond sombre avec une image, foire aux questions, bloc contact + visuel, bandeau de logos) ; textes
// originaux rédigés à partir de ses mots-clés : solutions digitales pour entreprises, PME, tourisme, hôtellerie,
// restauration ; résoudre les problèmes de digitalisation ; rendre le digital accessible à toutes les entreprises.
// Volontairement absent (non fourni, ne pas inventer) : date de création, équipe, partenariats ou certifications,
// adresse et carte, chiffres, clients cités. Liens : uniquement vers des pages existantes ou WhatsApp.
import { whatsapp } from "./contact";

const whatsappHref = `https://wa.me/${whatsapp.number}`;

export interface AgenceLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface AgenceQuestion {
    id: string;
    question: string;
    answer: string;
    link: AgenceLink;
}

export const agencePage = {
    meta: {
        title: "Qui sommes-nous",
        description:
            "Connect Web est une agence de solutions digitales pour les entreprises, les PME et les acteurs du tourisme, de l'hôtellerie et de la restauration. Mission, vision et façon de travailler.",
    },

    head: {
        eyebrow: "Qui sommes-nous",
        title: "Une agence de solutions digitales pour les entreprises",
        subtitle: "PME, tourisme, hôtellerie, restauration : des outils numériques adaptés à votre activité.",
    },

    intro: {
        eyebrow: "Solutions digitales pour entreprises",
        title: "Le digital, à la portée de chaque entreprise",
        paragraphs: [
            "Connect Web accompagne les entreprises, les PME et les acteurs du tourisme, de l'hôtellerie et de la restauration dans leur transformation numérique. Nous partons des difficultés concrètes de votre activité : demandes qui se perdent, tâches répétées à la main, outils qui ne communiquent pas, clients difficiles à atteindre. Puis nous mettons en place la solution qui y répond.",
            "Nous avons créé Connect Web avec une conviction : le numérique ne doit pas être réservé aux grandes structures. Un commerce, un hôtel, un restaurant ou une PME en croissance doit pouvoir s'appuyer sur des outils clairs, adaptés à sa taille et que ses équipes savent utiliser.",
        ],
        cta: { label: "Découvrir nos expertises", href: "/#nos-expertises" } as AgenceLink,
        image: {
            src: "/assets/img/cw/accueil-methode-collaboration.jpg",
            alt: "Une équipe travaille ensemble devant plusieurs écrans d'ordinateur",
            width: 1000,
            height: 563,
        },
    },

    pillars: [
        {
            id: "mission",
            title: "Notre mission",
            text: "Résoudre les problèmes de digitalisation des entreprises en leur apportant des solutions concrètes : un site qui présente et qui vend, des outils qui simplifient la gestion, des services connectés entre eux. Chaque solution part d'un besoin identifié et doit être utilisable au quotidien par vos équipes.",
            link: { label: "Voir nos expertises", href: "/#nos-expertises" } as AgenceLink,
        },
        {
            id: "vision",
            title: "Notre vision",
            text: "Des entreprises pour qui le digital n'est plus un obstacle, mais un outil de travail ordinaire. Des PME, des hôtels et des restaurants qui gèrent leurs réservations, leurs commandes et leur relation client avec aisance, à une échelle et à un rythme qui leur conviennent.",
            link: { label: "Comprendre la digitalisation", href: "/expertises/digitalisation" } as AgenceLink,
        },
    ],

    reach: {
        title: "Nous joindre",
        label: "WhatsApp",
        display: whatsapp.display,
        href: whatsappHref,
    },

    questionsSection: {
        title: "Connect Web en huit questions",
        subtitle: "Nos objectifs, nos secteurs et notre façon de travailler.",
        // Visuel inséré dans la grille, entre la 7e et la 8e question (comme sur la capture de référence).
        image: {
            src: "/assets/img/cw/hero-digitalisation.jpg",
            alt: "Une personne consulte un téléphone tout en travaillant sur un ordinateur portable",
            width: 1000,
            height: 668,
        },
        imageAfter: 7,
    },

    questions: [
        {
            id: "objectifs",
            question: "Quels objectifs poursuit Connect Web ?",
            answer: "Rendre le digital accessible aux entreprises de toutes tailles, résoudre des problèmes concrets plutôt que vendre des outils, et laisser chaque client autonome sur ce qui lui est livré.",
            link: { label: "Lire notre mission", href: "#mission" },
        },
        {
            id: "problemes",
            question: "Quels problèmes de digitalisation résolvons-nous ?",
            answer: "Informations dispersées, saisies en double, demandes clients sans suivi, absence de présence en ligne ou site qui n'apporte rien : nous identifions ce qui freine votre activité avant de proposer une solution.",
            link: { label: "Découvrir la digitalisation", href: "/expertises/digitalisation" },
        },
        {
            id: "solutions",
            question: "Quelles solutions proposons-nous ?",
            answer: "Sites internet et boutiques en ligne, applications web et mobiles, CRM, ERP et applications métiers, marketing digital, ainsi que réseaux et équipements informatiques pour vos locaux.",
            link: { label: "Voir nos expertises", href: "/#nos-expertises" },
        },
        {
            id: "secteurs",
            question: "Pourquoi le tourisme, l'hôtellerie et la restauration ?",
            answer: "Réservations, menus, commandes, avis clients, stocks : ces métiers combinent accueil du public et gestion quotidienne intense. Des outils bien choisis libèrent du temps pour ce qui compte, le service.",
            link: { label: "Parler de votre établissement", href: whatsappHref, external: true },
        },
        {
            id: "pme",
            question: "Une petite entreprise peut-elle se digitaliser ?",
            answer: "Oui, en avançant par étapes. Nous commençons par le besoin le plus utile, comme être trouvé en ligne, recevoir des demandes ou suivre ses clients, puis nous faisons évoluer les outils avec votre activité.",
            link: { label: "Lire nos conseils", href: "/blog" },
        },
        {
            id: "methode",
            question: "Comment se déroule un projet avec nous ?",
            answer: "Échange et cadrage, proposition détaillée, réalisation avec des points de suivi, puis prise en main. À chaque étape, vous savez ce qui est fait et ce qui reste à décider.",
            link: { label: "Démarrer un échange", href: whatsappHref, external: true },
        },
        {
            id: "budget",
            question: "Combien coûte un projet digital ?",
            answer: "Le budget dépend du périmètre : pages, fonctionnalités, contenus à produire, accompagnement après la livraison. Nous établissons une proposition à partir de votre besoin réel.",
            link: { label: "Lire le guide budget", href: "/blog/prix-site-internet-senegal" },
        },
        {
            id: "apres",
            question: "Que se passe-t-il après la mise en ligne ?",
            answer: "Selon le projet, une formation, une documentation et un suivi, définis ensemble avant le démarrage. L'objectif : que votre équipe sache utiliser et faire évoluer ce qu'elle reçoit.",
            link: { label: "Nous poser une question", href: whatsappHref, external: true },
        },
    ] as AgenceQuestion[],

    faq: {
        title: "Questions fréquentes",
    },

    // Bloc « Siège social » + carte (même disposition que la référence d'Amadou du 09/11/2026 : photo assombrie à gauche,
    // carte à droite). Emplacement fourni par Amadou le 09/11/2026 : G49, à côté de la Mairie de Grand Yoff, Dakar, coordonnées GPS 14.740219, -17.459670.
    contact: {
        officeLabel: "Siège social",
        officeLines: ["G49, à côté de la Mairie de Grand Yoff", "Dakar, Sénégal"],
        label: "WhatsApp",
        display: whatsapp.display,
        href: whatsappHref,
        image: {
            src: "/assets/img/cw/digitalisation-activite-outils.jpg",
            width: 1000,
            height: 668,
        },
        map: {
            title: "Carte : Connect Web à Grand Yoff, Dakar",
            src: "https://www.google.com/maps?q=14.740219,-17.459670&z=16&output=embed",
            link: "https://www.google.com/maps/search/?api=1&query=14.740219%2C-17.459670",
            linkLabel: "Ouvrir dans Google Maps",
        },
    },

    // Formulaire de contact avant le pied de page — base visuelle : /contact-us de la template (ContactV1), version
    // compacte demandée par Amadou le 09/11/2026. Seul canal public fourni : WhatsApp (pas d'email, d'adresse ni de fixe).
    contactForm: {
        title: "Nous contacter",
        text: "Présentez votre activité et ce que vous souhaitez améliorer. Nous revenons vers vous pour en discuter.",
        items: [
            { icon: "fab fa-whatsapp", title: "WhatsApp", value: whatsapp.display, href: whatsappHref },
            { icon: "fas fa-comments", title: "Premier échange", value: "Nous étudions votre besoin avant de vous proposer une solution." },
        ],
        formEyebrow: "Une question ?",
        formTitle: "Envoyez-nous un message",
    },
};
