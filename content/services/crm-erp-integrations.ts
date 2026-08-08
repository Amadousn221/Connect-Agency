import type { ServiceContent } from "./_types";

const content: ServiceContent = {
  slug: "crm-erp-integrations",
  pilier: "CRM, ERP & intégrations",
  eyebrow: "CRM, ERP & intégrations",
  h1: "Vos outils, enfin **connectés** en un seul système de vente.",
  chapo:
    "Odoo, HubSpot, Mailchimp, Klaviyo — on relie votre site, votre boutique, votre CRM et votre gestion pour que l'information circule et que rien ne se perde.",
  trustLine: "Vos outils de vente, enfin connectés entre eux.",
  star: true,
  probleme: {
    titre: "Un lead ici, un devis là, un client ailleurs — et des ventes qui filent.",
    corps:
      "Quand vos outils ne se parlent pas, l'information se perd et le travail se dédouble. On centralise : chaque contact, chaque commande, chaque relance au bon endroit, automatiquement. Vous arrêtez de ressaisir ; vos outils travaillent ensemble.",
  },
  capacites: [
    {
      titre: "Mise en place HubSpot (CRM)",
      description: "Configuration complète pour centraliser contacts, opportunités et suivi commercial.",
      icon: "Contact",
    },
    {
      titre: "Déploiement Odoo (ERP)",
      description: "Stock, facturation et opérations gérés dans un seul système, connecté au reste.",
      icon: "Boxes",
    },
    {
      titre: "Automatisation email Mailchimp / Klaviyo",
      description: "Des séquences qui relancent et fidélisent automatiquement, sans intervention manuelle.",
      icon: "Mail",
    },
    {
      titre: "Connexion site ↔ boutique ↔ CRM ↔ ERP",
      description: "Chaque commande et chaque contact circulent entre vos outils sans ressaisie.",
      icon: "Network",
    },
    {
      titre: "Migration de données",
      description: "On nettoie et on importe vos contacts, produits ou historiques déjà existants.",
      icon: "ArrowRightLeft",
    },
    {
      titre: "Formation des équipes",
      description: "Une prise en main adaptée à vos équipes, sans multiplier les fonctionnalités inutiles.",
      icon: "GraduationCap",
    },
  ],
  raisons: [
    {
      titre: "Une source unique de vérité",
      description: "Chaque information n'existe qu'à un seul endroit, toujours à jour.",
      icon: "Database",
    },
    {
      titre: "Moins de saisie, moins d'erreurs",
      description: "Ce qui circule automatiquement n'a plus besoin d'être retapé, ni vérifié deux fois.",
      icon: "CheckCheck",
    },
    {
      titre: "Des relances qui ne s'oublient plus",
      description: "Chaque prospect suit un parcours défini, sans dépendre de la mémoire de quelqu'un.",
      icon: "BellRing",
    },
    {
      titre: "Une vue claire sur vos ventes",
      description: "Un tableau de bord unique plutôt que des chiffres éparpillés entre plusieurs outils.",
      icon: "LineChart",
    },
  ],
  faq: [
    {
      question: "Faut-il choisir entre HubSpot et Odoo ?",
      reponse:
        "Non, ils répondent à des besoins différents : HubSpot pour la relation client et les ventes, Odoo pour la gestion (stock, facturation, opérations). On les connecte souvent ensemble.",
    },
    {
      question: "On a déjà des données dans un tableur, est-ce récupérable ?",
      reponse: "Oui. La migration de données fait partie de la mise en place : on nettoie et on importe vos contacts, produits ou historiques existants.",
    },
    {
      question: "Combien de temps prend une intégration CRM/ERP ?",
      reponse:
        "Plus qu'un site vitrine : ça dépend du nombre d'outils à connecter et du volume de données. On vous donne un calendrier précis après l'audit initial.",
    },
    {
      question: "Est-ce que mon équipe va devoir tout réapprendre ?",
      reponse: "On prévoit une formation adaptée à vos équipes, et on privilégie des configurations simples plutôt que de multiplier les fonctionnalités inutilisées.",
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
    {
      label: "Boutique en ligne",
      href: "/services/sites-web-ecommerce/boutique-en-ligne",
      desc: "Connectez votre boutique directement à votre CRM et votre ERP.",
      icon: "ShoppingCart",
    },
    {
      label: "IA & automatisation",
      href: "/services/ia-automatisation",
      desc: "Automatisez ce qui circule entre vos outils une fois connectés.",
      icon: "Sparkles",
    },
    {
      label: "Marketing & prospects",
      href: "/services/marketing-generation-prospects",
      desc: "Suivez chaque prospect généré directement dans votre CRM.",
      icon: "Target",
    },
  ],
  seo: {
    title: "CRM, ERP & intégrations — HubSpot, Odoo, Mailchimp",
    description: "Connectez site, boutique, CRM et ERP en un seul système de vente : HubSpot, Odoo, Mailchimp et Klaviyo.",
  },
};

export default content;
