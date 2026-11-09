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
        // Fonction indiquée par Amadou le 09/11/2026 : « Digital Project Manager ».
        role: "Digital Project Manager",
        // Photo fournie par Amadou le 09/11/2026 (carré 900 x 900).
        photo: "/assets/img/cw/equipe-amadou-diallo.jpg",
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

// Page « Notre équipe » (/equipe) — disposition de la référence d'Amadou (09/11/2026) : bandeau, titre + sous-titre,
// cartes à photo (composant Team One de la template), puis siège social + carte. Un seul membre publié : aucune
// formulation du type « équipe de spécialistes ».
export const teamPage = {
    meta: {
        title: "Notre équipe | Connect Web",
        description: "Rencontrez la personne qui suit vos projets chez Connect Web, agence de solutions digitales à Dakar.",
    },
    head: {
        eyebrow: "L'agence",
        title: "Notre équipe",
        subtitle: "Un interlocuteur identifié suit votre projet, du premier échange à la prise en main.",
    },
    section: {
        title: "Connect Web",
        subtitle: "Les personnes qui conduisent vos projets de digitalisation.",
    },
};
