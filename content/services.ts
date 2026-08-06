import type { ServiceContent } from "@/types/content";

export const SERVICES: ServiceContent[] = [
  {
    slug: "sites-web-ecommerce",
    pilier: "Sites web & e-commerce",
    eyebrow: "SITES WEB & E-COMMERCE",
    h1: "Conception et développement de sites web à Dakar et partout au Sénégal.",
    chapo:
      "Que ce soit pour un premier site ou une refonte complète, nous concevons des sites qui continuent de générer des résultats bien après leur mise en ligne.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Pourquoi un beau site ne donne pas toujours de résultats.",
      corps:
        "Un site peut être superbe sans générer une seule demande. Ce qui fait la différence, c'est un objectif clair et une exécution au service de cet objectif. On part de votre but commercial, puis on conçoit chaque page pour y répondre : clarté, vitesse, et un chemin évident vers le contact ou l'achat.",
    },
    capacites: [
      { titre: "Sites WordPress" },
      { titre: "Refonte sans perte de référencement" },
      { titre: "Boutiques Shopify & WooCommerce" },
      { titre: "Design adaptatif" },
      { titre: "Optimisation de la vitesse" },
      { titre: "Sites accessibles" },
      { titre: "Contenu & rédaction" },
      { titre: "Entretien & évolution" },
    ],
    sousServices: [
      {
        slug: "sites-wordpress",
        h1: "Des sites WordPress solides, faciles à faire évoluer.",
        chapo:
          "Un CMS que votre équipe maîtrise, sans dépendre de personne pour changer un texte ou une image.",
      },
      {
        slug: "refonte-de-site",
        h1: "Une refonte qui garde le référencement que vous avez bâti.",
        chapo:
          "On modernise votre site sans perdre votre positionnement Google : audit, migration propre, redirections, et un design qui vous ressemble enfin.",
      },
      {
        slug: "boutique-en-ligne",
        h1: "Une boutique en ligne conçue pour vendre, partout.",
        chapo:
          "Shopify, WooCommerce ou sur mesure — on connecte paiement, livraison, stock et CRM pour que la vente tourne toute seule.",
      },
    ],
    faq: [
      {
        question: "Est-ce qu'une refonte nuit à mon référencement Google ?",
        reponse:
          "Non, si elle est faite correctement : redirections 301, structure préservée, contenu conservé. Bien menée, une refonte améliore souvent le référencement.",
      },
      {
        question: "Combien de temps prend la conception d'un site ?",
        reponse:
          "Un site vitrine part souvent de quelques semaines ; une boutique en ligne ou un site sur mesure demande plus. On vous donne un calendrier clair dès le devis.",
      },
      {
        question: "Est-ce que je pourrai modifier le contenu moi-même ?",
        reponse:
          "Oui. On construit sur des CMS que votre équipe peut administrer (WordPress, Shopify) et on vous forme à l'essentiel : textes, images, produits.",
      },
      {
        question: "Travaillez-vous avec Shopify et WooCommerce ?",
        reponse:
          "Oui, selon vos besoins de gestion, de volume et de budget. On vous recommande la plateforme la plus adaptée plutôt qu'une seule solution par défaut.",
      },
      {
        question: "Le site sera-t-il rapide sur mobile ?",
        reponse:
          "C'est un prérequis, pas une option. Chaque site est conçu et testé mobile-first, avec une attention particulière à la vitesse de chargement.",
      },
      {
        question: "Que se passe-t-il après la mise en ligne ?",
        reponse:
          "On propose des forfaits d'entretien (mises à jour, sécurité, sauvegardes) et d'évolution. Vous gardez un interlocuteur pour la suite.",
      },
    ],
    pagesLiees: [
      { slug: "crm-erp-integrations", titre: "CRM, ERP & intégrations" },
      { slug: "marketing-generation-prospects", titre: "Marketing & génération de prospects" },
      { slug: "conseil-strategie", titre: "Conseil & stratégie" },
    ],
    seo: {
      title: "Sites web & e-commerce à Dakar",
      description:
        "Conception et développement de sites web performants : WordPress, refonte sans perte de référencement, boutiques Shopify et WooCommerce.",
    },
  },
  {
    slug: "logiciels-applications-web",
    pilier: "Logiciels & applications web",
    eyebrow: "LOGICIELS & APPLICATIONS WEB",
    h1: "Logiciels et applications web sur mesure.",
    chapo:
      "Applications métier, portails clients, outils internes et API — développés autour de vos processus réels, pas l'inverse.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Les solutions toutes faites finissent par vous bloquer.",
      corps:
        "Elles vous mènent jusqu'à un certain point, puis vous forcent à vous adapter à elles. On conçoit un outil sur mesure qui épouse votre façon de travailler, grandit avec vous et automatise ce qui vous coûte du temps.",
    },
    capacites: [
      { titre: "Applications web sur mesure" },
      { titre: "Portails & espaces clients" },
      { titre: "Outils internes" },
      { titre: "Développement d'API" },
      { titre: "Intégrations de systèmes" },
      { titre: "Bases de données" },
      { titre: "Maintenance & évolution" },
    ],
    faq: [
      {
        question: "Comment savoir si j'ai besoin d'un outil sur mesure plutôt qu'un logiciel du marché ?",
        reponse:
          "Si vos processus sont spécifiques, ou si vous jonglez déjà entre plusieurs outils qui ne se parlent pas, un outil sur mesure devient souvent plus rentable qu'un empilement de solutions génériques.",
      },
      {
        question: "Le code et les données m'appartiennent-ils ?",
        reponse:
          "Oui, entièrement. Vous gardez l'accès au code source, à l'hébergement et à vos données.",
      },
      {
        question: "Travaillez-vous avec nos outils existants ?",
        reponse:
          "Oui. On conçoit chaque application pour s'intégrer à votre écosystème (CRM, ERP, paiement, authentification) plutôt que de créer un silo de plus.",
      },
      {
        question: "Comment se déroule le suivi après le lancement ?",
        reponse:
          "On propose un forfait de maintenance et d'évolution pour corriger, sécuriser et faire grandir l'outil au fil de vos besoins.",
      },
      {
        question: "Pouvez-vous reprendre une application existante ?",
        reponse:
          "Oui. On audite d'abord le code et l'architecture en place, puis on propose un plan de reprise ou de refonte progressive selon l'état du projet.",
      },
    ],
    pagesLiees: [
      { slug: "ia-automatisation", titre: "IA & automatisation" },
      { slug: "crm-erp-integrations", titre: "CRM, ERP & intégrations" },
      { slug: "conseil-strategie", titre: "Conseil & stratégie" },
    ],
    seo: {
      title: "Logiciels & applications web sur mesure",
      description:
        "Applications métier, portails clients, outils internes et API développés autour de vos processus réels.",
    },
  },
  {
    slug: "ia-automatisation",
    pilier: "IA & automatisation",
    eyebrow: "IA & AUTOMATISATION",
    h1: "Intelligence artificielle et automatisation.",
    chapo:
      "Automatisez les tâches qui ralentissent votre équipe : réceptionniste IA, bots d'assistance et flux de travail automatisés. L'IA au service de résultats concrets.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Votre équipe fait à la main ce qu'une machine ferait en une seconde.",
      corps:
        "On identifie les tâches répétitives qui grignotent vos journées, puis on met en place des automatisations et des agents IA qui les traitent — de façon fiable, 24 h/24, sans jamais oublier une relance.",
    },
    capacites: [
      { titre: "Réceptionniste IA" },
      { titre: "Assistance client IA" },
      { titre: "Automatisation des flux de travail" },
      { titre: "Outils IA sur mesure" },
      { titre: "Intégrations de systèmes" },
      { titre: "Conseil & stratégie IA" },
    ],
    faq: [
      {
        question: "Par où commencer avec l'IA quand on n'a jamais essayé ?",
        reponse:
          "On commence toujours par identifier une ou deux tâches répétitives à fort volume — réponse aux appels, relances, tri de demandes — et on automatise celle-là en premier, pour un résultat mesurable rapidement.",
      },
      {
        question: "Un réceptionniste IA peut-il remplacer complètement mon équipe ?",
        reponse:
          "Non, ce n'est pas l'objectif. Il traite les demandes simples et répétitives, en dehors des heures ou en renfort, et transfère à une personne dès que la demande le justifie.",
      },
      {
        question: "L'automatisation fonctionne-t-elle avec nos outils actuels ?",
        reponse:
          "Dans la majorité des cas, oui. On connecte l'automatisation à votre CRM, votre messagerie ou vos outils métier existants plutôt que de vous en imposer de nouveaux.",
      },
      {
        question: "Est-ce fiable, ou est-ce que ça va répondre n'importe quoi ?",
        reponse:
          "Chaque agent est cadré avec des règles claires et des limites précises sur ce qu'il peut dire ou faire, avec un relais humain systématique pour les cas hors périmètre.",
      },
      {
        question: "Combien de temps avant de voir un résultat ?",
        reponse:
          "Ça dépend de la complexité du flux automatisé. On priorise toujours le gain le plus rapide à obtenir en premier.",
      },
    ],
    pagesLiees: [
      { slug: "crm-erp-integrations", titre: "CRM, ERP & intégrations" },
      { slug: "logiciels-applications-web", titre: "Logiciels & applications web" },
      { slug: "marketing-generation-prospects", titre: "Marketing & génération de prospects" },
    ],
    seo: {
      title: "IA & automatisation",
      description:
        "Réceptionniste IA, assistance client IA et automatisation des flux de travail pour libérer votre équipe des tâches répétitives.",
    },
  },
  {
    slug: "crm-erp-integrations",
    pilier: "CRM, ERP & intégrations",
    eyebrow: "CRM, ERP & INTÉGRATIONS",
    h1: "Vos outils, enfin connectés en un seul système de vente.",
    chapo:
      "Odoo, HubSpot, Mailchimp, Klaviyo — on relie votre site, votre boutique, votre CRM et votre gestion pour que l'information circule et que rien ne se perde.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Un lead ici, un devis là, un client ailleurs — et des ventes qui filent.",
      corps:
        "Quand vos outils ne se parlent pas, l'information se perd et le travail se dédouble. On centralise : chaque contact, chaque commande, chaque relance au bon endroit, automatiquement. Vous arrêtez de ressaisir ; vos outils travaillent ensemble.",
    },
    capacites: [
      { titre: "Mise en place & configuration HubSpot (CRM)" },
      { titre: "Déploiement Odoo (ERP)" },
      { titre: "Automatisation email Mailchimp / Klaviyo" },
      { titre: "Connexion site ↔ boutique ↔ CRM ↔ ERP" },
      { titre: "Migration de données" },
      { titre: "Formation des équipes" },
    ],
    raisonsMisesEnAvant: [
      "Une source unique de vérité",
      "Moins de saisie, moins d'erreurs",
      "Des relances qui ne s'oublient plus",
      "Une vue claire sur vos ventes",
    ],
    faq: [
      {
        question: "Faut-il choisir entre HubSpot et Odoo ?",
        reponse:
          "Non, ils répondent à des besoins différents : HubSpot pour la relation client et les ventes, Odoo pour la gestion (stock, facturation, opérations). On les connecte souvent ensemble.",
      },
      {
        question: "On a déjà des données dans un tableur, est-ce récupérable ?",
        reponse:
          "Oui. La migration de données fait partie de la mise en place : on nettoie et on importe vos contacts, produits ou historiques existants.",
      },
      {
        question: "Combien de temps prend une intégration CRM/ERP ?",
        reponse:
          "Plus qu'un site vitrine : ça dépend du nombre d'outils à connecter et du volume de données. On vous donne un calendrier précis après l'audit initial.",
      },
      {
        question: "Est-ce que mon équipe va devoir tout réapprendre ?",
        reponse:
          "On prévoit une formation adaptée à vos équipes, et on privilégie des configurations simples plutôt que de multiplier les fonctionnalités inutilisées.",
      },
      {
        question: "Que se passe-t-il si un des outils tombe en panne ou change de version ?",
        reponse:
          "Les intégrations sont documentées et maintenues dans le cadre de nos forfaits de suivi, pour éviter qu'une mise à jour casse la connexion entre vos outils.",
      },
      {
        question: "Peut-on commencer petit et étendre plus tard ?",
        reponse:
          "Oui, c'est même l'approche qu'on recommande : connecter d'abord ce qui a le plus d'impact, puis élargir le système au fil de vos besoins.",
      },
    ],
    pagesLiees: [
      { slug: "boutique-en-ligne", titre: "Boutique en ligne" },
      { slug: "ia-automatisation", titre: "IA & automatisation" },
      { slug: "marketing-generation-prospects", titre: "Marketing & génération de prospects" },
    ],
    seo: {
      title: "CRM, ERP & intégrations — HubSpot, Odoo, Mailchimp",
      description:
        "Connectez site, boutique, CRM et ERP en un seul système de vente : HubSpot, Odoo, Mailchimp et Klaviyo.",
    },
  },
  {
    slug: "marketing-generation-prospects",
    pilier: "Marketing & génération de prospects",
    eyebrow: "MARKETING & GÉNÉRATION DE PROSPECTS",
    h1: "Marketing et génération de prospects.",
    chapo:
      "SEO, campagnes Google Ads, réseaux sociaux et emailing de masse qui génèrent de vrais prospects et de vraies conversions. Chaque franc compte.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Un beau site que personne ne trouve, ça ne sert à rien.",
      corps:
        "On travaille votre visibilité exactement là où vos clients cherchent, puis on transforme ce trafic en prospects mesurables. Chaque franc investi est suivi et justifié.",
    },
    capacites: [
      { titre: "SEO" },
      { titre: "Google Ads (SEA)" },
      { titre: "Gestion des réseaux sociaux" },
      { titre: "Email marketing" },
      { titre: "Stratégie de contenu" },
      { titre: "Analyses & rapports" },
    ],
    faq: [
      {
        question: "Combien de temps avant de voir des résultats en SEO ?",
        reponse:
          "Le SEO est un travail de fond : les premiers effets se voient généralement après quelques mois, contrairement aux campagnes Google Ads qui génèrent du trafic dès leur lancement.",
      },
      {
        question: "Quel budget prévoir pour Google Ads ?",
        reponse:
          "Ça dépend de votre secteur et de vos objectifs. On construit une stratégie avec un budget test, puis on ajuste selon les résultats mesurés.",
      },
      {
        question: "Gérez-vous nos réseaux sociaux au quotidien ?",
        reponse:
          "Oui, selon la formule choisie : création de contenu, publication, et suivi des performances.",
      },
      {
        question: "Comment savoir si les campagnes fonctionnent ?",
        reponse:
          "On met en place un suivi connecté à votre CRM pour voir non seulement le trafic généré, mais les prospects et ventes qui en découlent.",
      },
      {
        question: "Est-ce que le marketing est connecté à mon CRM ?",
        reponse:
          "Oui, c'est l'un de nos points forts : chaque prospect généré est automatiquement suivi dans votre CRM, sans ressaisie manuelle.",
      },
    ],
    pagesLiees: [
      { slug: "conseil-strategie", titre: "Conseil & stratégie" },
      { slug: "crm-erp-integrations", titre: "CRM, ERP & intégrations" },
      { slug: "sites-web-ecommerce", titre: "Sites web & e-commerce" },
    ],
    seo: {
      title: "Marketing & génération de prospects",
      description:
        "SEO, Google Ads, réseaux sociaux et email marketing pour générer de vrais prospects et de vraies conversions.",
    },
  },
  {
    slug: "conseil-strategie",
    pilier: "Conseil & stratégie",
    eyebrow: "CONSEIL & STRATÉGIE",
    h1: "Conseil & stratégie.",
    chapo:
      "Vous ne savez pas par où commencer ? Nous analysons votre entreprise et vous proposons un plan d'action, classé par priorité selon les actions à plus fort impact.",
    heroCtas: [
      { label: "Demander une soumission", href: "/nous-joindre" },
      { label: "Voir nos réalisations", href: "/realisations" },
    ],
    probleme: {
      titre: "Beaucoup de possibilités, peu de clarté.",
      corps:
        "On audite votre situation sans complaisance, on priorise ce qui aura le plus d'impact, et on vous remet une feuille de route actionnable — que vous la réalisiez avec nous ou non.",
    },
    capacites: [
      { titre: "Audit de marketing digital" },
      { titre: "Audit de site web" },
      { titre: "Audit de marque" },
      { titre: "Stratégie d'entreprise" },
      { titre: "Accompagnement RFP" },
      { titre: "Recommandations technologiques" },
    ],
    faq: [
      {
        question: "Suis-je obligé de vous confier le projet après l'audit ?",
        reponse:
          "Non. La feuille de route vous appartient, que vous la réalisiez avec nous, avec une autre équipe, ou en interne.",
      },
      {
        question: "Combien de temps prend un audit ?",
        reponse:
          "Ça dépend du périmètre (site seul, marque, stratégie globale). On vous communique un délai précis dès le cadrage.",
      },
      {
        question: "Qu'est-ce qu'on reçoit concrètement à la fin ?",
        reponse:
          "Un document clair : constats, priorités classées par impact, et recommandations actionnables — pas un rapport théorique de 50 pages.",
      },
      {
        question: "Faites-vous de l'accompagnement pour répondre à un appel d'offres ?",
        reponse:
          "Oui, on peut vous aider à structurer une réponse technique et à cadrer les recommandations technologiques associées.",
      },
      {
        question: "Le conseil s'adresse-t-il aussi aux petites structures ?",
        reponse:
          "Oui. Notre mission est de rendre le digital et l'IA accessibles à toutes les tailles d'entreprise, pas seulement aux grands groupes.",
      },
    ],
    pagesLiees: [
      { slug: "marketing-generation-prospects", titre: "Marketing & génération de prospects" },
      { slug: "sites-web-ecommerce", titre: "Sites web & e-commerce" },
      { slug: "logiciels-applications-web", titre: "Logiciels & applications web" },
    ],
    seo: {
      title: "Conseil & stratégie digitale",
      description:
        "Audits de marketing digital, de site web et de marque, stratégie d'entreprise et recommandations technologiques.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getSubServicePath(parentSlug: string, subSlug: string) {
  return `/services/${parentSlug}/${subSlug}`;
}
