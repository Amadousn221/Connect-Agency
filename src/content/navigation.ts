// Référentiel de navigation Connect Web — source : docs/05 §3, docs/07 §1 (en-tête), CLAUDE.md.
// Toute modification des pôles ou des routes doit être répercutée dans docs/03–07, 10, 11, 12 et TASKS.md.
import { expertises } from "./expertises";

export interface NavLink {
    label: string;
    href: string;
}

// Les 4 pôles viennent de expertises.ts (source unique, décision D40).
export const poles: NavLink[] = expertises.map((expertise) => ({ label: expertise.shortTitle, href: expertise.href }));

export const allExpertises: NavLink = { label: "Toutes nos expertises", href: "/expertises" };

// docs/05 §2 : la page Réalisations n'apparaît dans le menu qu'avec au moins 2 cas autorisés (published: true).
// Aucun cas n'est autorisé à ce jour (docs/08) : lien masqué.
export const SHOW_REALISATIONS = false;

export const mainLinks: NavLink[] = [
    ...(SHOW_REALISATIONS ? [{ label: "Réalisations", href: "/realisations" }] : []),
    { label: "L'agence", href: "/agence" },
    { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = { label: "Parlons de votre projet", href: "/contact" };
