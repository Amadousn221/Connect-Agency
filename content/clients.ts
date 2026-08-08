import type { Client } from "@/types/content";

/**
 * Logos clients pour la preuve sociale (bandeau défilant). Repris des
 * projets livrés en réalisations (public/clients/<slug>.png, 320×140,
 * fond transparent). DDS Medical et SCOD VTC n'ont pas encore de logo
 * fourni par le client — ils resteront absents du bandeau tant qu'il n'est
 * pas transmis (pas de logo générique inventé).
 */
export const CLIENTS: Client[] = [
  { nom: "Luxury Bijouterie by KN", visible: true, logo: "/clients/luxury-bijouterie.png" },
  { nom: "ADA Voyages", visible: true, logo: "/clients/ada-voyages.png" },
  { nom: "Link Shop", visible: true, logo: "/clients/link-shop.png" },
  { nom: "Marjan Bijouterie", visible: true, logo: "/clients/marjan-bijouterie.png" },
  { nom: "Sunu Thiossane", visible: true, logo: "/clients/sunu-thiossane.png" },
  { nom: "WAS Africa", visible: true, logo: "/clients/was-africa.png" },
  { nom: "Tamou Fishing International", visible: true, logo: "/clients/tamou-fishing.png" },
  { nom: "Fahamu Africa", visible: true, logo: "/clients/fahamu-africa.png" },
];
