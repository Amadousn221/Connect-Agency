// Logos de la section « Nos chiffres » — aucun logo autorisé à ce jour : la grille est masquée en production.
// Règle (docs/12 D12, docs/08) : n'afficher que des clients ou partenaires réels ayant donné leur accord écrit,
// avec un logo fourni (chemin sous /public). Ne jamais renseigner un nom ou un logo non autorisé.

export interface PartnerLogo {
    name: string;
    logo: string;
    published: boolean;
}

export const partners: PartnerLogo[] = [];

// Aperçu de mise en page UNIQUEMENT en développement local : logos de démonstration du template (marques tierces,
// sans lien avec Connect Web), bandeau explicite, absents en production.
export const previewPartners: PartnerLogo[] = [1, 2, 7, 4, 5, 6].map((n) => ({
    name: "Logo (exemple)",
    logo: `/assets/img/logo/${n}.png`,
    published: false,
}));

export const MIN_PARTNERS = 3;
