// Référentiel de navigation Connect Web — source : docs/05 §3, docs/07 §1 (en-tête), docs/12 D40 et D42.
// Toute modification des pôles ou des routes doit être répercutée dans docs/03–07, 10, 11, 12 et TASKS.md.
// Les quatre menus déroulants du header sont générés depuis expertises.ts (source unique) : libellé court du pôle,
// cinq sous-services, lien de bas de menu. Tant que les pages de pôle n'existent pas, les liens mènent à la section
// « Nos expertises » de l'accueil (jamais à une page inexistante).
import { expertises, poleMenuHref, subServiceHref } from "./expertises";

export interface NavLink {
    label: string;
    href: string;
}

export interface NavPole {
    id: string;
    label: string;
    items: NavLink[];
    all: NavLink;
}

export const navPoles: NavPole[] = expertises.map((expertise) => ({
    id: expertise.id,
    label: expertise.menuLabel,
    items: expertise.subServices.map((subService) => ({
        label: subService.title,
        href: subServiceHref(expertise, subService),
    })),
    all: { label: expertise.menuAllLabel, href: poleMenuHref(expertise) },
}));

// docs/05 §2 : la page Réalisations n'apparaît dans le menu qu'avec au moins 2 cas autorisés (published: true).
// Aucun cas n'est autorisé à ce jour (docs/08) : lien masqué.
export const SHOW_REALISATIONS = false;

// Pages qui n'existent pas encore : leurs entrées pointent vers une section de l'accueil (liens valides).
// Passer à true pour chaque page au fur et à mesure de sa création (CW-043, CW-044).
const pageReady = { agence: false, contact: false };
const overview = "/#nos-expertises";

export const mainLinks: NavLink[] = [
    ...(SHOW_REALISATIONS ? [{ label: "Réalisations", href: "/realisations" }] : []),
    { label: "L'agence", href: pageReady.agence ? "/agence" : "/#agence" },
    { label: "Contact", href: pageReady.contact ? "/contact" : overview },
];

export const primaryCta: NavLink = { label: "Parlons de votre projet", href: pageReady.contact ? "/contact" : overview };
