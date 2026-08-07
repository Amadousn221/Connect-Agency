export interface Cta {
  label: string;
  href: string;
  /** Ouvre la modale de contact au lieu de naviguer (bouton `data-open-modal` de la maquette). */
  modal?: boolean;
}

export interface Stat {
  valeur: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  etape: string;
  titre: string;
  description: string;
}

export interface Capacite {
  titre: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  reponse: string;
}

export interface RelatedService {
  slug: string;
  titre: string;
}

export interface SubService {
  slug: string;
  h1: string;
  chapo: string;
}

export interface ServiceContent {
  slug: string;
  pilier: string;
  eyebrow: string;
  h1: string;
  chapo: string;
  heroCtas: Cta[];
  probleme: {
    titre: string;
    corps: string;
  };
  capacites: Capacite[];
  sousServices?: SubService[];
  raisonsMisesEnAvant?: string[];
  faq: FaqItem[];
  pagesLiees: RelatedService[];
  seo: {
    title: string;
    description: string;
  };
}

export interface Projet {
  slug: string;
  nom: string;
  secteur: string;
  resume: string;
  resultats: string[];
  services: string[];
  lien?: string;
  publie: boolean;
}

export interface Client {
  nom: string;
  visible: boolean;
}
