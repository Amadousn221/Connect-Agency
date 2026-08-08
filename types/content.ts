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

export interface FaqItem {
  question: string;
  reponse: string;
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
  /** Ordre d'affichage dans la grille. */
  ordre?: number;
  /** Capture cadrée à fournir : /realisations/<slug>.jpg. Tant qu'absente, on rend le dégradé placeholder. */
  couverture?: string;
  /** Dégradé de couverture provisoire (repris de la maquette), en attendant le visuel réel. */
  gradient?: string;
}

export interface Client {
  nom: string;
  visible: boolean;
}
