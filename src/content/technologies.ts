// Section « Technologies » de l'accueil (demande d'Amadou du 09/11/2026) : deux lignes de logos en défilement lent.
// Textes fournis par Amadou. Les logos sont informatifs (ni lien ni bouton).
// Sources des fichiers (public/assets/img/technologies/) :
// - Next.js, React, WordPress, Shopify, WooCommerce, Supabase, Mailchimp, n8n : dépôt « SVG Logos » (gilbarbara/logos,
//   licence MIT), version symbole ;
// - Odoo, HubSpot, Brevo : « Simple Icons » (domaine public CC0), tracé officiel, couleur de la marque.
// Les marques restent la propriété de leurs détenteurs ; ils sont affichés pour nommer les outils utilisés.
// À CONFIRMER avant mise en ligne : la liste des outils réellement utilisés par Connect Web (Odoo, HubSpot, Mailchimp,
// Klaviyo ne sont pas documentés dans les dossiers du projet).
// Klaviyo : aucun fichier officiel n'a pu être récupéré depuis une source autorisée. Tant que `file` vaut null, le logo
// n'est pas affiché ; déposer le SVG officiel dans public/assets/img/technologies/klaviyo.svg, renseigner `file`,
// `ratio` (largeur / hauteur du fichier) et `height`, et il apparaît à sa place dans la deuxième ligne.

export interface Technology {
    name: string;
    file: string | null;
    ratio: number; // largeur / hauteur du fichier SVG
    height: number; // hauteur affichée sur ordinateur, en px (ajustée pour une taille visuelle homogène)
}

export const technologiesSection = {
    eyebrow: "Notre écosystème",
    titleLine: "Les technologies",
    titleAccent: "derrière vos projets.",
    text: "Des outils choisis selon vos besoins, pour créer vos sites, développer vos applications et connecter vos services.",
    listLabels: ["Technologies, première ligne", "Technologies, deuxième ligne"],
};

export const technologyRows: Technology[][] = [
    [
        { name: "Next.js", file: "nextjs.svg", ratio: 1, height: 46 },
        { name: "React", file: "react.svg", ratio: 1.123, height: 44 },
        { name: "WordPress", file: "wordpress.svg", ratio: 1.004, height: 46 },
        { name: "Shopify", file: "shopify.svg", ratio: 0.877, height: 48 },
        { name: "WooCommerce", file: "woocommerce.svg", ratio: 1.673, height: 36 },
        { name: "Supabase", file: "supabase.svg", ratio: 0.973, height: 46 },
    ],
    [
        { name: "Odoo", file: "odoo.svg", ratio: 3.158, height: 30 },
        { name: "HubSpot", file: "hubspot.svg", ratio: 0.955, height: 46 },
        { name: "Brevo", file: "brevo.svg", ratio: 1, height: 44 },
        { name: "Mailchimp", file: "mailchimp.svg", ratio: 0.941, height: 50 },
        { name: "Klaviyo", file: null, ratio: 1, height: 44 },
        { name: "n8n", file: "n8n.svg", ratio: 1.896, height: 36 },
    ],
];
