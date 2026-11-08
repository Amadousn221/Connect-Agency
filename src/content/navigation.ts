// Référentiel de navigation Connect Web — source : docs/05 §3, docs/07 §1 (en-tête), CLAUDE.md.
// Toute modification des pôles ou des routes doit être répercutée dans docs/03–07, 10, 11, 12 et TASKS.md.

export interface NavLink {
    label: string;
    href: string;
}

export interface NavFamily {
    id: string;
    label: string;
    poles: NavLink[];
}

// Trois familles regroupant les 5 pôles (décision D38 bis / D39 d'Amadou, 08/11/2026). Chaque pôle garde sa page.
export const families: NavFamily[] = [
    {
        id: "digitalisation",
        label: "Digitalisation",
        poles: [
            { label: "Sites web & e-commerce", href: "/expertises/web-ecommerce" },
            { label: "Applications & gestion d'entreprise", href: "/expertises/applications-crm-erp" },
        ],
    },
    {
        id: "marketing",
        label: "Marketing",
        poles: [{ label: "Marketing digital", href: "/expertises/marketing-digital" }],
    },
    {
        id: "infrastructure",
        label: "Infrastructure",
        poles: [
            { label: "Réseaux informatiques & câblage", href: "/expertises/reseaux-cablage" },
            { label: "Téléphonie VoIP & vidéosurveillance", href: "/expertises/telephonie-videosurveillance" },
        ],
    },
];

export const poles: NavLink[] = families.flatMap((family) => family.poles);

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
