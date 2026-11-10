// L'équipe — source : docs/07 [07-ACC-2], [07-ACC-7], docs/12 D12, D17 et Q15 (ouverte).
// Règle : ne publier que des personnes réelles, avec leur accord, leur fonction exacte et une photo fournie ;
// aucun partenaire technique n'est nommé sans accord (D12). Seul le fondateur est documenté à ce jour.
// Ne jamais ajouter ici un nom, une fonction, une photo ou un réseau social non fournis et autorisés.

export interface TeamLink {
    network: "linkedin" | "facebook" | "x" | "instagram";
    // Adresse du profil. Vide tant que le lien réel n'est pas fourni : l'icône s'affiche alors sans lien.
    url: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    // Photo fournie et autorisée (chemin sous /public). Sans photo : initiales sur fond aux couleurs du thème.
    photo?: string;
    // true tant que la photo est un avatar provisoire (texte alternatif adapté).
    photoPlaceholder?: boolean;
    // Réseaux sociaux : uniquement des comptes réels fournis par la personne.
    links?: TeamLink[];
    published: boolean;
}

// Réseaux affichés sur chaque carte (barre au survol). Les adresses réelles seront renseignées par Amadou :
// tant que `url` est vide, l'icône n'est pas cliquable (aucune adresse inventée).
const pendingLinks: TeamLink[] = [
    { network: "facebook", url: "" },
    { network: "x", url: "" },
    { network: "linkedin", url: "" },
];

export const members: TeamMember[] = [
    {
        id: "amadou-diallo",
        name: "Amadou Diallo",
        // Fonction indiquée par Amadou le 09/11/2026 : « Digital Project Manager ».
        role: "Digital Project Manager",
        // Photo fournie par Amadou le 09/11/2026 (carré 900 x 900).
        photo: "/assets/img/cw/equipe-amadou-diallo.jpg",
        links: pendingLinks,
        published: true,
    },
    {
        id: "tamsir",
        // Nom de famille non fourni (à confirmer). Fonctions indiquées par Amadou le 09/11/2026 : ingénieur réseaux,
        // le plus expérimenté, responsable du secteur réseaux, pilote l'ensemble et joue le rôle de mentor.
        name: "Tamsir",
        role: "Ingénieur réseaux et mentor",
        // Avatar provisoire (09/11/2026) : à remplacer par la photo fournie et autorisée.
        photo: "/assets/img/cw/equipe-avatar-tamsir.jpg",
        photoPlaceholder: true,
        links: pendingLinks,
        published: true,
    },
    {
        id: "cheikh-diedhiou",
        // Fonction indiquée par Amadou le 09/11/2026 : développeur full stack. Photo non fournie.
        name: "Cheikh Diedhiou",
        role: "Développeur full stack",
        // Avatar provisoire (09/11/2026) : à remplacer par la photo fournie et autorisée.
        photo: "/assets/img/cw/equipe-avatar-cheikh.jpg",
        photoPlaceholder: true,
        links: pendingLinks,
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
