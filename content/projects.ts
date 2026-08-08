import type { Projet } from "@/types/content";

/**
 * Réalisations Connect Web — projets réels, rédigés d'après les sites livrés
 * (débrief client). Règles d'honnêteté conservées :
 *  - aucun résultat chiffré tant que le client ne l'a pas confirmé (`resultats` vide) ;
 *  - le bouton « Voir le site » n'apparaît que pour une URL publique confirmée
 *    (`lien`). Les six autres restent sans lien tant que le client ne les fournit pas ;
 *  - `couverture` pointera vers /realisations/<slug>.jpg une fois les captures
 *    livrées ; en attendant, `gradient` sert de placeholder (repris de la maquette).
 */
export const PROJETS: Projet[] = [
  {
    slug: "luxury-bijouterie",
    nom: "Luxury Bijouterie by KN",
    secteur: "E-commerce · Bijouterie",
    resume:
      "Boutique haut de gamme : collections or 18K et argent 925, fiches produits soignées, paiement carte/Wave/PayPal et livraison internationale. Rendu éditorial sombre et doré.",
    resultats: [],
    services: ["sites-web-ecommerce"],
    gradient: "linear-gradient(135deg,#1a1207,#3a2a10 60%,#0b0906)",
    lien: "https://luxurybijouterie.com",
    ordre: 1,
    publie: true,
  },
  {
    slug: "ada-voyages",
    nom: "ADA Voyages",
    secteur: "Tourisme · Agence de voyage",
    resume:
      "Site vitrine pour une agence accréditée IATA : offres colonies, Oumrah et transferts aéroport, tarifs clairs et parcours de réservation guidé pour particuliers, entreprises et organismes publics.",
    resultats: [],
    services: ["sites-web-ecommerce", "marketing-generation-prospects"],
    gradient: "linear-gradient(135deg,#0f3d63,#1b6fa6 55%,#f1571a)",
    lien: "https://adavoyages.net",
    ordre: 2,
    publie: true,
  },
  {
    slug: "scod-vtc",
    nom: "SCOD VTC",
    secteur: "Transport · VTC & location",
    resume:
      "Plateforme de réservation de chauffeur privé : tarif fixe garanti, choix du véhicule, paiement en ligne (Orange Money, Wave, Visa), suivi temps réel et catalogue de flotte. Offres particuliers et entreprises.",
    resultats: [],
    services: ["sites-web-ecommerce", "logiciels-applications-web"],
    gradient: "linear-gradient(135deg,#0c0f2b,#1a1f52 55%,#f5c451)",
    lien: "https://scodvtc.com",
    ordre: 3,
    publie: true,
  },
  {
    slug: "link-shop",
    nom: "Link Shop",
    secteur: "E-commerce · High-tech",
    resume:
      "Boutique de matériel informatique et électronique : large catalogue (ordinateurs, réseaux, imprimantes), catégories filtrables, paiement sécurisé et livraison partout au Sénégal.",
    resultats: [],
    services: ["sites-web-ecommerce"],
    gradient: "linear-gradient(135deg,#0a2818,#12603a 55%,#0b1a10)",
    lien: "https://linkshop.sn",
    ordre: 4,
    publie: true,
  },
  {
    slug: "marjan-bijouterie",
    nom: "Marjan Bijouterie",
    secteur: "E-commerce · Bijouterie",
    resume:
      "Boutique or et argent de Dakar et Saint-Louis : navigation par catégories, coups de cœur, nouveautés et collections dédiées. Recherche produit et parcours d'achat pensés pour un grand catalogue.",
    resultats: [],
    services: ["sites-web-ecommerce"],
    gradient: "linear-gradient(135deg,#3a1e05,#f39c1f 60%,#7a4a10)",
    ordre: 5,
    publie: true,
  },
  {
    slug: "dds-medical",
    nom: "DDS Medical",
    secteur: "Santé · Distribution médicale",
    resume:
      "Site vitrine pour un distributeur de consommables et matériels médicaux : présentation de l'offre, catalogue produits, partenaires et prise de contact directe. Un positionnement clair de référence sur le marché.",
    resultats: [],
    services: ["sites-web-ecommerce", "marketing-generation-prospects"],
    gradient: "linear-gradient(135deg,#071a3a,#123fa0 55%,#0a1428)",
    lien: "https://ddsmedicalsenegal.com",
    ordre: 6,
    publie: true,
  },
  {
    slug: "sunu-thiossane",
    nom: "Sunu Thiossane",
    secteur: "Éducation · Programmes jeunesse",
    resume:
      "Site institutionnel pour une organisation d'échanges culturels et éducatifs : piliers d'action, catalogue de programmes, témoignages de parents et candidature en ligne. Un parcours pensé pour rassurer les familles.",
    resultats: [],
    services: ["sites-web-ecommerce", "marketing-generation-prospects"],
    gradient: "linear-gradient(135deg,#3a2408,#c9822a 60%,#5a3a12)",
    lien: "https://sunuthiossane.org",
    ordre: 7,
    publie: true,
  },
  {
    slug: "was-africa",
    nom: "WAS Africa",
    secteur: "Association · ONG",
    resume:
      "Site pour un mouvement panafricain de femmes rurales : mise en récit de la mission, chiffres clés, actualités, FAQ et appel à rejoindre le mouvement. Un site clair et crédible au service du plaidoyer.",
    resultats: [],
    services: ["sites-web-ecommerce", "conseil-strategie"],
    gradient: "linear-gradient(135deg,#08240f,#1a7a34 55%,#0a1a0e)",
    lien: "https://wasafrica.org",
    ordre: 8,
    publie: true,
  },
  {
    slug: "tamou-fishing",
    nom: "Tamou Fishing International",
    secteur: "Agroalimentaire · Pêche & export",
    resume:
      "Site vitrine pour un acteur de la filière halieutique : histoire et ADN de l'entreprise, gamme de produits, valeurs, présence géographique et engagement social. Une image corporate solide pour le B2B et l'export.",
    resultats: [],
    services: ["sites-web-ecommerce"],
    gradient: "linear-gradient(135deg,#062033,#0f5a8c 55%,#0a2436)",
    lien: "https://tamou.sn",
    ordre: 9,
    publie: true,
  },
  {
    slug: "fahamu-africa",
    nom: "Fahamu Africa",
    secteur: "Association · ONG",
    resume:
      "Site institutionnel pour une organisation panafricaine dédiée à la justice sociale : vision et valeurs, programmes, articles, galerie et formulaire de contact. Un site clair au service du plaidoyer.",
    resultats: [],
    services: ["sites-web-ecommerce", "conseil-strategie"],
    gradient: "linear-gradient(135deg,#3a0a0a,#c23838 55%,#2a0808)",
    // ⚠️ Note interne (non affichée) : au moment de la capture, le site laissait
    // apparaître des articles de spam (casino) — piratage probable. Le client a
    // demandé à l'afficher malgré tout ; à faire nettoyer côté client au plus vite.
    lien: "https://fahamuafrica.org",
    ordre: 10,
    publie: true,
  },
];

/** Libellés courts des tags de service affichés sur les cartes (cf. maquette). */
export const SERVICE_TAG: Record<string, string> = {
  "sites-web-ecommerce": "Sites & e-commerce",
  "logiciels-applications-web": "Applications web",
  "ia-automatisation": "IA & automatisation",
  "crm-erp-integrations": "CRM & ERP",
  "marketing-generation-prospects": "Marketing",
  "conseil-strategie": "Conseil",
};

/** Projets publiés, triés par `ordre`. */
export function projetsPublies(): Projet[] {
  return PROJETS.filter((p) => p.publie).sort((a, b) => (a.ordre ?? 0) - (b.ordre ?? 0));
}

/**
 * Secteurs pour les filtres, dérivés des projets publiés dans leur ordre
 * d'apparition (le premier segment de `secteur`, avant le « · »). Généré, pas
 * codé en dur.
 */
export const SECTEURS_PROJETS: string[] = Array.from(
  projetsPublies().reduce<Map<string, true>>((acc, p) => {
    const secteur = p.secteur.split("·")[0]?.trim();
    if (secteur) acc.set(secteur, true);
    return acc;
  }, new Map()).keys(),
);

/** Un lien n'est affiché que s'il s'agit d'une URL publique confirmée. */
export function lienConfirme(lien?: string): lien is string {
  return typeof lien === "string" && /^https?:\/\//.test(lien) && !lien.includes(".example");
}
