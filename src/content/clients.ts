// Logos clients de la section « Projets réalisés » (accueil). Source : dossier Images\Clients fourni par Amadou
// (09/11/2026). Un logo = un nom + un chemin sous /public. Les noms d'`alt` reprennent le texte lisible sur chaque logo ;
// ils ne désignent pas la nature de la prestation. Pour ajouter un client : copier le fichier dans
// public/assets/img/clients/ et ajouter une ligne ici (la rotation s'adapte seule ; 6 logos ou moins = pas de rotation).
// Fichiers du dossier source volontairement non repris : Linkshop.svg (rectangle gris vide, sans logo),
// « Nous sommes la solution.webp » (doublon exact de Logo-NSS1-1.webp), logo-seal.jpg (même visuel que logo-seal.svg).

export interface ClientLogo {
    name: string;
    logo: string;
}

const dir = "/assets/img/clients";

export const clientLogos: ClientLogo[] = [
    { name: "DDS Medical", logo: `${dir}/dds-medical.webp` },
    { name: "Atta Africa", logo: `${dir}/atta-africa.png` },
    { name: "Horeca Africa", logo: `${dir}/horeca-africa.webp` },
    { name: "Marjan Bijouterie", logo: `${dir}/marjan-bijouterie.png` },
    { name: "Cosaan International Academy", logo: `${dir}/cosaan-international-academy.svg` },
    { name: "Tamou", logo: `${dir}/tamou.jpg` },
    { name: "N'JËG", logo: `${dir}/njeg.png` },
    { name: "Destination Rêvée", logo: `${dir}/destination-revee.webp` },
    { name: "SD Group", logo: `${dir}/sd-group.webp` },
    { name: "Centre Sahélien pour la Biodiversité", logo: `${dir}/centre-sahelien-biodiversite.webp` },
    { name: "KN Luxury Bijouterie", logo: `${dir}/kn-luxury-bijouterie.webp` },
    { name: "Sunu Thiossane", logo: `${dir}/sunu-thiossane.webp` },
    { name: "Cosaan Education Network", logo: `${dir}/cosaan-education-network.webp` },
    { name: "ADA Voyages", logo: `${dir}/ada-voyages.webp` },
    { name: "SCOD VTC", logo: `${dir}/scod-vtc.webp` },
    { name: "Nous sommes la solution", logo: `${dir}/nous-sommes-la-solution.webp` },
    { name: "Fahamu", logo: `${dir}/fahamu.webp` },
];

export const LOGO_CELLS = 6;
// Rotation : un tick toutes les 700 ms change une cellule à tour de rôle → chaque cellule change toutes les 4,2 s.
export const LOGO_TICK_MS = 700;
export const LOGO_FADE_MS = 700;
