import type { ServiceContent } from "./_types";

const content: ServiceContent = {
  slug: "boutique-en-ligne",
  pilier: "Boutique en ligne",
  eyebrow: "Boutique en ligne",
  h1: "Une boutique en ligne conçue pour **vendre**, partout.",
  chapo:
    "Shopify, WooCommerce ou sur mesure — on connecte paiement, livraison, stock et CRM pour que la vente tourne toute seule.",
  parent: { label: "Sites web & e-commerce", href: "/services/sites-web-ecommerce" },
  probleme: {
    titre: "Une boutique qui existe, mais qui ne vend pas toute seule.",
    corps:
      "Ouvrir une boutique en ligne, c'est facile. La faire vendre sans intervention manuelle constante, beaucoup moins. Le vrai travail est dans les connexions : paiement fiable, stock à jour, livraison suivie, et un CRM qui garde une trace de chaque client.",
  },
  capacites: [
    {
      titre: "Catalogue produits",
      description: "Fiches produits claires, catégories filtrables, recherche efficace même sur un grand catalogue.",
      icon: "ShoppingCart",
    },
    {
      titre: "Paiement en ligne",
      description: "Carte bancaire, Wave, Orange Money : les moyens de paiement que vos clients utilisent vraiment.",
      icon: "Webhook",
    },
    {
      titre: "Gestion des stocks",
      description: "Un inventaire à jour pour ne jamais vendre ce que vous n'avez plus.",
      icon: "Database",
    },
    {
      titre: "Livraison & suivi",
      description: "Options de livraison configurées et suivi de commande pour rassurer l'acheteur.",
      icon: "ArrowRightLeft",
    },
    {
      titre: "Connexion au CRM",
      description: "Chaque commande alimente automatiquement votre CRM, sans ressaisie.",
      icon: "Network",
    },
    {
      titre: "Design adaptatif",
      description: "Un parcours d'achat fluide, du mobile au desktop.",
      icon: "Smartphone",
    },
  ],
  faq: [
    {
      question: "Shopify ou WooCommerce, quelle plateforme choisir ?",
      reponse:
        "Ça dépend de vos besoins de gestion, de volume et de budget. On vous recommande la plateforme la plus adaptée à votre situation plutôt qu'une seule solution par défaut.",
    },
    {
      question: "Quels moyens de paiement peut-on proposer ?",
      reponse:
        "Carte bancaire, Wave, Orange Money et d'autres selon vos besoins. On configure ceux que vos clients utilisent réellement.",
    },
    {
      question: "La boutique peut-elle se connecter à mon CRM ou mon ERP ?",
      reponse:
        "Oui, c'est même recommandé : chaque commande et chaque client alimentent automatiquement votre système de vente, sans ressaisie manuelle.",
    },
    {
      question: "Puis-je gérer mon catalogue moi-même ?",
      reponse:
        "Oui. On vous forme à l'ajout et la modification de produits, catégories et promotions en toute autonomie.",
    },
    {
      question: "Combien de temps prend la mise en place d'une boutique ?",
      reponse:
        "Ça dépend de la taille du catalogue et des intégrations nécessaires (paiement, livraison, CRM). On vous donne un calendrier précis dès le devis.",
    },
  ],
  pagesLiees: [
    {
      label: "Sites web & e-commerce",
      href: "/services/sites-web-ecommerce",
      desc: "Retrouvez l'ensemble de notre offre de conception de sites web.",
      icon: "Globe",
    },
    {
      label: "CRM, ERP & intégrations",
      href: "/services/crm-erp-integrations",
      desc: "Connectez votre boutique à un vrai système de vente.",
      icon: "Network",
    },
    {
      label: "Marketing & prospects",
      href: "/services/marketing-generation-prospects",
      desc: "Générez du trafic qualifié vers votre nouvelle boutique.",
      icon: "Target",
    },
  ],
  seo: {
    title: "Boutique en ligne — e-commerce à Dakar",
    description: "Création de boutiques en ligne Shopify, WooCommerce ou sur mesure : paiement, livraison, stock et CRM connectés.",
  },
};

export default content;
