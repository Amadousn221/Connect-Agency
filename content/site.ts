import type { Stat } from "@/types/content";

/**
 * Configuration centrale du site — coordonnées, réseaux, textes globaux.
 * TODO (client) : remplacer les valeurs marquées "à confirmer" par les vraies
 * données Connect Web avant mise en ligne. Aucun chiffre n'est inventé —
 * voir `stats` plus bas : le tableau reste vide tant qu'aucune vraie
 * statistique n'a été fournie (cf. débrief : "ne pas inventer de chiffres").
 */
export const SITE = {
  nom: "Connect Web",
  baseline: "Agence digitale",
  baselineLongue:
    "Nous concevons les outils numériques qui font vendre votre entreprise.",

  coordonnees: {
    telephone: "+221 00 000 00 00", // TODO (client) : numéro réel
    telephoneHref: "tel:+22100000000",
    email: "bonjour@connectweb.sn", // TODO (client) : email réel
    adresse: "Dakar, Sénégal", // TODO (client) : adresse complète
  },

  reseaux: [
    { plateforme: "LinkedIn", url: "" }, // TODO (client)
    { plateforme: "Instagram", url: "" }, // TODO (client)
    { plateforme: "Facebook", url: "" }, // TODO (client)
  ],

  prenomContact: "Notre équipe", // TODO (client) : prénom de la personne qui répond

  ctaPrimaire: "Demander une soumission",
  ctaSecondaire: "Nos réalisations",

  /**
   * Statistiques réelles à afficher en section "chiffres". Vide par défaut :
   * on n'affiche pas de faux chiffre. Ajouter ici une fois les vraies
   * données disponibles, ex. :
   * { valeur: "12+", label: "PROJETS", description: "Projets réalisés depuis 2023." }
   */
  stats: [] as Stat[],
} as const;

export const SECTEURS = [
  "Commerce & distribution",
  "PME & services professionnels",
  "E-commerce & vente au détail",
  "Industrie & manufacture",
  "Santé & cliniques",
  "Éducation & formation",
  "Organisations & associations",
  "Secteur public & institutionnel",
];

export const PROCESSUS_STANDARD = [
  {
    etape: "Étape 1",
    titre: "Découverte & stratégie",
    description: "On comprend votre activité et vos objectifs, puis on propose un plan d'action clair.",
  },
  {
    etape: "Étape 2",
    titre: "Design & développement",
    description: "On conçoit et on construit, en vous montrant l'avancement à chaque étape.",
  },
  {
    etape: "Étape 3",
    titre: "Lancement & suivi",
    description: "On met en ligne, on forme votre équipe, et on reste disponible pour la suite.",
  },
];

export const CAPACITES_SECONDAIRES = [
  "Contenu & rédaction",
  "Sites web accessibles",
  "Design adaptatif",
  "Optimisation de la vitesse",
  "Entretien & maintenance",
];

export const POURQUOI_NOUS_CHOISIR = [
  {
    titre: "On commence par ce qui compte vraiment",
    description: "Objectifs d'abord, technique ensuite.",
  },
  {
    titre: "Vous gardez le contrôle",
    description: "Vos accès, vos comptes, votre contenu vous appartiennent.",
  },
  {
    titre: "Conçu pour durer",
    description: "Des bases web propres qui vieillissent bien.",
  },
  {
    titre: "Une communication claire",
    description: "Un interlocuteur, pas un labyrinthe.",
  },
  {
    titre: "Une seule équipe, moins de bouts qui traînent",
    description: "Design, dev, marketing et intégrations au même endroit.",
  },
  {
    titre: "Une expertise rare en accessibilité",
    description: "Des sites utilisables par tout le monde.",
  },
];

export const FAQ_GLOBALE = [
  {
    question: "Est-ce qu'une refonte nuit à mon référencement Google ?",
    reponse:
      "Non, si elle est faite correctement. On préserve la structure de vos URLs, on met en place les redirections 301, et on conserve votre contenu qui performe. Bien menée, une refonte améliore souvent le référencement grâce à un site plus rapide, mieux structuré et adapté au mobile.",
  },
  {
    question: "Faites-vous des sites multilingues (français / anglais) ?",
    reponse:
      "Oui. On construit des sites bilingues ou multilingues dès le départ, avec une gestion propre des langues et du référencement pour chacune. Utile si vous visez au-delà du Sénégal, en Afrique de l'Ouest ou à l'international.",
  },
  {
    question: "Pouvez-vous m'aider avec la protection des données personnelles ?",
    reponse:
      "Oui. On met en place les bases (bandeau cookies, formulaires conformes, politique de confidentialité) en tenant compte de la réglementation sénégalaise sur les données personnelles (loi n°2008-12 et Commission de protection des données personnelles – CDP). Pour la validation juridique finale, on vous recommande de faire relire la politique par un juriste.",
  },
  {
    question: "Combien de temps prend un projet ?",
    reponse:
      "Ça dépend du périmètre. Un site vitrine part souvent de quelques semaines ; une plateforme sur mesure ou une intégration CRM/ERP demande plus. On vous donne un calendrier clair dès le devis.",
  },
  {
    question: "Est-ce que le site m'appartient ?",
    reponse:
      "Oui, entièrement. Le code, le contenu, le nom de domaine et tous les comptes vous appartiennent. Pas de dépendance : vous gardez le contrôle, même si un jour vous travaillez avec quelqu'un d'autre.",
  },
  {
    question: "Vous occupez-vous de l'hébergement ?",
    reponse:
      "Oui. On peut gérer l'hébergement et le nom de domaine pour vous, ou travailler avec votre infrastructure existante. On choisit un hébergement rapide et fiable adapté à votre audience.",
  },
  {
    question: "Qu'est-ce qui se passe après la livraison ?",
    reponse:
      "On ne disparaît pas. On propose des forfaits d'entretien et d'évolution (mises à jour, sécurité, sauvegardes, améliorations). Vous gardez un interlocuteur pour la suite.",
  },
  {
    question: "Faites-vous aussi le marketing ?",
    reponse:
      "Oui. Au-delà du site, on peut gérer votre visibilité : SEO, Google Ads, réseaux sociaux, email. Et surtout, on connecte tout ça à votre CRM pour que chaque prospect soit suivi.",
  },
  {
    question: "Avec qui travaillez-vous habituellement ?",
    reponse:
      "Des PME, des commerces, des e-commerçants et des entreprises B2B/B2C, principalement au Sénégal et en Afrique de l'Ouest. Notre mission : rendre le digital et l'IA accessibles à tous, pas seulement aux grands groupes.",
  },
];

/** Index (0-based) des questions retenues pour l'accordéon de l'accueil. */
export const FAQ_ACCUEIL_INDEX = [0, 3, 4, 7];
