// Textes de l'accueil — source : docs/07 [07-ACC-*]. Ne pas réécrire sans le signaler.

export const homeHero = {
    // [07-ACC-1]
    eyebrow: "Agence digitale et solutions informatiques",
    title: "Des sites, des outils de gestion et des installations pensés pour votre façon de travailler",
    text: "Connect Web accompagne les commerces, les PME et les organisations qui veulent vendre en ligne, travailler sans ressaisies, garder le lien avec leurs clients et équiper leurs locaux. Nous partons de votre activité — vos commandes, vos clients, vos équipes — avant de choisir un outil.",
    primaryCta: { label: "Parlons de votre projet", href: "/contact" },
    secondaryCta: { label: "Découvrir nos expertises", href: "/expertises" },
    // Les images de démo Tekni sont des gabarits gris (ex. « 1900x1004 ») : fond en dégradé du thème
    // tant qu'aucun visuel Connect Web n'est fourni. Renseigner un chemin pour afficher une image.
    backgroundImage: null as string | null,
};

export const homeAgency = {
    // Surtitre ajouté pour reprendre la structure de AboutV1 (non présent dans docs/07) — à valider.
    eyebrow: "L'agence",
    // [07-ACC-7] — bloc [VALIDATION] dans docs/07.
    title: "Une agence qui connaît le quotidien de ses clients",
    // [07-ACC-7] sans « basé à {{VILLE_ADRESSE}} » tant que Q07 n'est pas réglée.
    text: "Connect Web est dirigée par Amadou Diallo, développeur web. Avant de concevoir des outils pour d'autres, il a géré l'activité en ligne d'une marque : migration de la boutique, catalogue, réassorts, service client, campagnes email. Cette expérience guide chaque projet : un outil n'est utile que s'il simplifie le travail de ceux qui l'utilisent.",
    // [07-ACC-2] Repères, présentés dans l'accordéon de AboutV1.
    points: [
        {
            title: "Expérience terrain du e-commerce",
            text: "Catalogue, commandes, service client et emailing gérés au quotidien.",
        },
        {
            title: "Un interlocuteur, du cadrage à la prise en main",
            text: "La personne qui comprend votre besoin suit votre projet.",
        },
        {
            title: "Des outils que vous savez utiliser",
            text: "Chaque livraison comprend une prise en main et une documentation.",
        },
        {
            title: "Le bon outil, pas le plus complexe",
            text: "Nous vérifions si un logiciel existant suffit avant de proposer du sur mesure.",
        },
    ],
    link: { label: "Découvrir l'agence", href: "/agence" },
    // Gabarit gris de la template (783×900) en attendant la photo d'Amadou (docs/06 §1 section 7).
    image: { src: "/assets/img/about/1.jpg", alt: "", width: 783, height: 900 },
};
