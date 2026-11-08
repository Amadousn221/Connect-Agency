// L'équipe — source : docs/07 [07-ACC-2], [07-ACC-7], docs/12 D12, D17 et Q15 (ouverte).
// Règle : ne publier que des personnes réelles, avec leur accord, leur fonction exacte et une photo fournie ;
// aucun partenaire technique n'est nommé sans accord (D12). Seul le fondateur est documenté à ce jour.
// Ne jamais ajouter ici un nom, une fonction, une photo ou un réseau social non fournis et autorisés.

export interface TeamLink {
    network: "linkedin" | "facebook" | "x" | "instagram";
    url: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    // Photo fournie et autorisée (chemin sous /public). Sans photo : initiales sur fond aux couleurs du thème.
    photo?: string;
    // Réseaux sociaux : uniquement des comptes réels fournis par la personne.
    links?: TeamLink[];
    published: boolean;
}

export const members: TeamMember[] = [
    {
        id: "amadou-diallo",
        name: "Amadou Diallo",
        // Fonction : « fondée par Amadou Diallo » (docs/07, meta description de l'agence) ; titre exact à confirmer.
        role: "Fondateur de Connect Web",
        published: true,
    },
];

export const teamSection = {
    eyebrow: "L'équipe",
    // Un seul membre publié : on ne parle pas d'« équipe ». Textes tirés de [07-ACC-2].
    solo: {
        title: "Un interlocuteur, du cadrage à la prise en main",
        intro: "La personne qui comprend votre besoin suit votre projet.",
    },
    // Deux membres publiés ou plus. Organisation mixte : D12.
    team: {
        title: "Les personnes qui travaillent sur vos projets",
        intro: "Chaque projet est suivi par un interlocuteur identifié. Pour les installations sur site, des partenaires techniques peuvent intervenir : Connect Web reste votre interlocuteur.",
    },
};

// Aperçu de mise en page UNIQUEMENT en développement local : personnes fictives, bandeau explicite, absent de
// la version de production (voir HomeTeam).
export const previewMembers: TeamMember[] = [
    { id: "apercu-1", name: "Prénom Nom (exemple)", role: "Fonction (exemple)", published: false },
    { id: "apercu-2", name: "Prénom Nom (exemple)", role: "Fonction (exemple)", published: false },
    { id: "apercu-3", name: "Prénom Nom (exemple)", role: "Fonction (exemple)", published: false },
    { id: "apercu-4", name: "Prénom Nom (exemple)", role: "Fonction (exemple)", published: false },
];
