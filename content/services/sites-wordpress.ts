import type { ServiceContent } from "./_types";

const content: ServiceContent = {
  slug: "sites-wordpress",
  pilier: "Sites WordPress",
  eyebrow: "Sites WordPress",
  h1: "Des sites WordPress solides, faciles à faire **évoluer**.",
  chapo: "Un CMS que votre équipe maîtrise, sans dépendre de personne pour changer un texte ou une image.",
  parent: { label: "Sites web & e-commerce", href: "/services/sites-web-ecommerce" },
  trustLine: "Un CMS que votre équipe garde en main, dès le premier jour.",
  probleme: {
    titre: "WordPress mal construit, WordPress qui devient un fardeau.",
    corps:
      "Un site WordPress peut être rapide, sûr et simple à gérer — ou lent, fragile et impossible à toucher sans casser quelque chose. La différence tient à la structure : thème sur mesure, plugins choisis avec parcimonie, et une administration pensée pour votre équipe, pas pour un développeur.",
  },
  capacites: [
    {
      titre: "Thème sur mesure",
      description: "Un design qui vous ressemble, construit proprement plutôt qu'empilé sur un thème générique.",
      icon: "Globe",
    },
    {
      titre: "Interface d'administration simplifiée",
      description: "Votre équipe modifie textes, images et pages sans avoir besoin d'un développeur.",
      icon: "Settings2",
    },
    {
      titre: "Sécurité & sauvegardes",
      description: "Mises à jour surveillées et sauvegardes régulières pour un site fiable dans la durée.",
      icon: "Wrench",
    },
    {
      titre: "Optimisation de la vitesse",
      description: "Un WordPress bien construit charge vite — c'est un critère de conception, pas un correctif.",
      icon: "Gauge",
    },
    {
      titre: "Formation de votre équipe",
      description: "On vous montre l'essentiel : publier, modifier, ajouter du contenu en autonomie.",
      icon: "GraduationCap",
    },
    {
      titre: "Entretien & évolution",
      description: "Un forfait de suivi pour faire grandir le site au rythme de votre activité.",
      icon: "Wrench",
    },
  ],
  faq: [
    {
      question: "WordPress est-il fiable pour un site professionnel ?",
      reponse:
        "Oui, à condition d'être bien construit : thème propre, plugins limités et à jour, hébergement adapté. C'est le CMS le plus utilisé au monde, avec un écosystème mature.",
    },
    {
      question: "Pourrai-je modifier le contenu moi-même ?",
      reponse:
        "Oui, c'est l'objectif. On construit une interface d'administration simple et on forme votre équipe à l'essentiel : textes, images, pages.",
    },
    {
      question: "Que se passe-t-il si un plugin casse le site ?",
      reponse:
        "On limite volontairement le nombre de plugins et on privilégie des solutions éprouvées. Un forfait d'entretien permet aussi d'intervenir rapidement en cas de souci.",
    },
    {
      question: "Peut-on migrer un site WordPress existant ?",
      reponse:
        "Oui. On audite d'abord le site en place (thème, plugins, contenu) puis on propose une migration propre, avec redirections si nécessaire.",
    },
    {
      question: "Combien de temps prend un site WordPress ?",
      reponse:
        "Un site vitrine se conçoit souvent en quelques semaines. On vous donne un calendrier précis dès le cadrage du projet.",
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
      label: "Refonte de site",
      href: "/services/sites-web-ecommerce/refonte-de-site",
      desc: "Modernisez un site existant sans perdre le référencement bâti.",
      icon: "RefreshCw",
    },
    {
      label: "Boutique en ligne",
      href: "/services/sites-web-ecommerce/boutique-en-ligne",
      desc: "Une boutique conçue pour vendre, avec paiement et livraison connectés.",
      icon: "ShoppingCart",
    },
  ],
  seo: {
    title: "Sites WordPress à Dakar",
    description: "Développement de sites web WordPress solides, sécurisés et faciles à faire évoluer par votre équipe.",
  },
};

export default content;
