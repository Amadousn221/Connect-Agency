export interface MegaLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaColonne {
  titre: string;
  liens: MegaLink[];
  /** Liens secondaires indentés sous le lien principal (colonne « Web & e-commerce »). */
  sousLiens?: MegaLink[];
}

export const MEGA_MENU: {
  colonnes: MegaColonne[];
  encart: { titre: string; corps: string; cta: MegaLink };
} = {
  colonnes: [
    {
      titre: "Web & e-commerce",
      liens: [
        {
          label: "Sites web & e-commerce",
          href: "/services/sites-web-ecommerce",
          description: "Le pilier complet",
        },
      ],
      sousLiens: [
        { label: "Sites WordPress", href: "/services/sites-web-ecommerce/sites-wordpress" },
        { label: "Refonte de site", href: "/services/sites-web-ecommerce/refonte-de-site" },
        { label: "Boutique en ligne", href: "/services/sites-web-ecommerce/boutique-en-ligne" },
      ],
    },
    {
      titre: "Produits & IA",
      liens: [
        {
          label: "Logiciels & applications web",
          href: "/services/logiciels-applications-web",
          description: "Sur mesure, autour de vos processus",
        },
        {
          label: "IA & automatisation",
          href: "/services/ia-automatisation",
          description: "Réceptionniste IA, agents, flux",
        },
        {
          label: "CRM, ERP & intégrations",
          href: "/services/crm-erp-integrations",
          description: "Odoo, HubSpot, Mailchimp, Klaviyo",
        },
      ],
    },
    {
      titre: "Croissance",
      liens: [
        {
          label: "Marketing & prospects",
          href: "/services/marketing-generation-prospects",
          description: "SEO, Ads, réseaux, email",
        },
        {
          label: "Conseil & stratégie",
          href: "/services/conseil-strategie",
          description: "Audits et feuille de route",
        },
      ],
    },
  ],
  encart: {
    titre: "Pas sûr de ce qu'il vous faut ?",
    corps: "Commençons par un audit gratuit.",
    cta: { label: "Nous joindre", href: "/nous-joindre" },
  },
};

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos réalisations", href: "/realisations" },
  { label: "Nous joindre", href: "/nous-joindre" },
];

export const FOOTER_LEGAL = [
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
];
