import type { ServiceContent } from "./_types";

const content: ServiceContent = {
  slug: "refonte-de-site",
  pilier: "Refonte de site",
  eyebrow: "Refonte de site",
  h1: "Une refonte qui garde le **référencement** que vous avez bâti.",
  chapo:
    "On modernise votre site sans perdre votre positionnement Google : audit, migration propre, redirections, et un design qui vous ressemble enfin.",
  parent: { label: "Sites web & e-commerce", href: "/services/sites-web-ecommerce" },
  trustLine: "Un site modernisé, sans repartir à zéro sur Google.",
  probleme: {
    titre: "Un vieux site qui freine, une refonte qui fait peur.",
    corps:
      "Beaucoup d'entreprises retardent leur refonte par crainte de perdre leur trafic ou leur positionnement. C'est une crainte légitime — mais évitable. Une refonte bien menée part d'un audit complet de l'existant, préserve ce qui fonctionne, et corrige le reste.",
  },
  capacites: [
    {
      titre: "Audit du site existant",
      description: "On cartographie pages, trafic et positionnement avant de toucher quoi que ce soit.",
      icon: "Search",
    },
    {
      titre: "Redirections 301",
      description: "Chaque URL qui change est redirigée proprement pour ne perdre ni visiteur ni positionnement.",
      icon: "RefreshCw",
    },
    {
      titre: "Migration de contenu",
      description: "Textes, images et pages qui performent sont conservés et réintégrés au nouveau design.",
      icon: "ArrowRightLeft",
    },
    {
      titre: "Design actualisé",
      description: "Un site qui vous ressemble enfin, sans perdre ce qui faisait sa force.",
      icon: "PenLine",
    },
    {
      titre: "Optimisation de la vitesse",
      description: "L'occasion de corriger ce qui ralentissait l'ancien site.",
      icon: "Gauge",
    },
    {
      titre: "Suivi post-lancement",
      description: "On surveille le positionnement dans les semaines qui suivent la mise en ligne.",
      icon: "LineChart",
    },
  ],
  faq: [
    {
      question: "Une refonte nuit-elle à mon référencement Google ?",
      reponse:
        "Non, si elle est faite correctement. On préserve la structure des URLs, on met en place des redirections 301 et on conserve le contenu qui performe. Bien menée, une refonte améliore souvent le référencement grâce à un site plus rapide et mieux structuré.",
    },
    {
      question: "Puis-je perdre mon trafic pendant la transition ?",
      reponse:
        "Le risque existe si la migration est mal préparée. C'est pour ça qu'on audite d'abord l'existant et qu'on planifie chaque redirection avant la bascule.",
    },
    {
      question: "Faut-il refaire tout le contenu ?",
      reponse:
        "Non. On garde ce qui fonctionne déjà (contenu, positionnement) et on améliore le reste : design, vitesse, parcours de conversion.",
    },
    {
      question: "Combien de temps prend une refonte ?",
      reponse:
        "Ça dépend de la taille du site. On vous donne un calendrier précis après l'audit initial, avec une bascule planifiée pour limiter l'impact.",
    },
    {
      question: "Que devient mon ancien site pendant les travaux ?",
      reponse:
        "Il reste en ligne et fonctionnel jusqu'à la bascule finale, préparée pour être la plus rapide et transparente possible.",
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
      label: "Sites WordPress",
      href: "/services/sites-web-ecommerce/sites-wordpress",
      desc: "Un CMS que votre équipe maîtrise, sans dépendre de personne.",
      icon: "Globe",
    },
    {
      label: "Marketing & prospects",
      href: "/services/marketing-generation-prospects",
      desc: "Une fois le site refait, on peut aussi travailler sa visibilité.",
      icon: "Target",
    },
  ],
  seo: {
    title: "Refonte de site web à Dakar",
    description: "Modernisez votre site sans perdre votre positionnement Google : audit, redirections 301 et migration propre.",
  },
};

export default content;
