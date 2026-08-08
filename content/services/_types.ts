import type { IconKey } from "@/lib/icons";
import type { FaqItem } from "@/types/content";

export type { FaqItem };

export interface Cta {
  label: string;
  href: string;
  /** Ouvre la modale de contact au lieu de naviguer. */
  modal?: boolean;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface ProcessItem {
  titre: string;
  description: string;
  icon: IconKey;
}

export interface CapaciteItem {
  titre: string;
  description: string;
  icon: IconKey;
}

export interface RaisonItem {
  titre: string;
  description: string;
  icon: IconKey;
}

export interface RelatedLink {
  label: string;
  href: string;
  desc: string;
  icon: IconKey;
}

export interface ReassuranceItem {
  titre: string;
  description: string;
  icon: IconKey;
}

export interface ServiceContent {
  slug: string;
  /** Libellé court (nav, footer, formulaire, e-mails) — distinct du H1 marketing. */
  pilier: string;
  eyebrow: string;
  /** Mot-clé entouré de `**…**` → rendu en accent. */
  h1: string;
  chapo: string;
  /** Sous-page → breadcrumb + JSON-LD BreadcrumbList. `href` = chemin du parent. */
  parent?: { label: string; href: string };

  /** 4 items de réassurance ciblés (remplacent le bandeau de logos sur les pages service).
   *  Absent sur une sous-page → hérite de ceux du pilier parent (cf. `ServiceTemplate`). */
  reassurance?: ReassuranceItem[];

  probleme: { titre: string; corps: string };

  stats?: StatItem[];

  /** 3 étapes. Si absent, `ServiceTemplate` applique le processus standard. */
  process?: ProcessItem[];

  /** 6–9 items, icône obligatoire. */
  capacites: CapaciteItem[];

  raisons?: RaisonItem[];

  /** Active la grille des secteurs transversaux (liste globale, cf. `_shared.ts`). */
  secteurs?: boolean;

  /** 5–8 questions. */
  faq: FaqItem[];

  /** 3 cartes « pour aller plus loin ». */
  pagesLiees: RelatedLink[];

  seo: { title: string; description: string };

  /** Pilier phare — mise en avant visuelle (bordure accent). */
  star?: boolean;
}
