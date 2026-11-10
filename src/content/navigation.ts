// Référentiel de navigation Connect Web — source : docs/05 §3, docs/07 §1 (en-tête), docs/12 D40 et D42.
// Toute modification des pôles ou des routes doit être répercutée dans docs/03–07, 10, 11, 12 et TASKS.md.
// Les quatre menus déroulants du header sont générés depuis expertises.ts (source unique) : libellé court du pôle,
// cinq sous-services, lien de bas de menu. Tant que les pages de pôle n'existent pas, les liens mènent à la section
// « Nos expertises » de l'accueil (jamais à une page inexistante).
import { whatsapp } from "./contact";
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

// Sous-menus des pôles rétablis le 09/11/2026 (pages de services créées) : chaque pôle ouvre la liste de ses services,
// avec un lien direct vers la page du service quand elle existe. Passer à false pour revenir à de simples liens.
export const SHOW_SUBMENUS = true;

// docs/05 §2 : le lien Réalisations n'apparaît dans le menu qu'avec au moins 2 cas publiés (published: true dans
// realisations.ts) ; 10 le sont depuis le 09/11/2026. Le lien mène à la page /realisations (créée le 09/11/2026,
// base /project-3 de la template). Intitulé « Réalisations » (terme français déjà utilisé
// partout sur le site) plutôt que « Portfolio ».
export const SHOW_REALISATIONS = true;

// Pages qui n'existent pas encore : leurs entrées pointent vers une section de l'accueil (liens valides).
// Passer à true pour chaque page au fur et à mesure de sa création (CW-043, CW-044).
const pageReady = { agence: true, contact: true };
const overview = "/#nos-expertises";

export const blogLink: NavLink = { label: "Blog", href: "/blog" };

export const mainLinks: NavLink[] = [
    ...(SHOW_REALISATIONS ? [{ label: "Réalisations", href: "/realisations" }] : []),
    { label: "L'agence", href: pageReady.agence ? "/agence" : "/#agence" },
    blogLink,
    { label: "Contact", href: pageReady.contact ? "/contact" : overview },
];

export const primaryCta: NavLink = { label: "Parlons de votre projet", href: pageReady.contact ? "/contact" : overview };

// En-tête : « Contact » n'est plus une entrée de menu mais un bouton à côté du bouton principal. Aucune page Contact
// n'existe encore : le bouton ouvre WhatsApp (seul canal de contact fourni, content/contact.ts). Le pied de page
// continue d'utiliser mainLinks.
export const headerLinks: NavLink[] = mainLinks.filter((link) => link.label !== "Contact");
export const contactCta = {
    label: "Contact",
    href: `https://wa.me/${whatsapp.number}`,
    ariaLabel: `Contact par WhatsApp au ${whatsapp.display} (nouvel onglet)`,
};

// En-tête : « L'agence » est un menu déroulant (demande d'Amadou du 09/11/2026) qui regroupe « Qui sommes-nous »
// et Contact ; « Blog » est une entrée de menu à part. Le bouton Contact à côté du bouton principal a été
// retiré. Contact ouvre WhatsApp (nouvel onglet), seul canal fourni. Le pied de page continue d'utiliser mainLinks.
export interface AgenceItem extends NavLink {
    external?: boolean;
    ariaLabel?: string;
}

export const agenceMenu = {
    id: "agence",
    label: "L'agence",
    items: [
        { label: "Qui sommes-nous", href: pageReady.agence ? "/agence" : "/#agence" },
        { label: "Notre équipe", href: "/equipe" },
        { label: "Contact", href: pageReady.contact ? "/contact" : contactCta.href, external: !pageReady.contact, ariaLabel: pageReady.contact ? undefined : contactCta.ariaLabel },
    ] as AgenceItem[],
};
