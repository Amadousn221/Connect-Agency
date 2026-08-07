import type { Client } from "@/types/content";

/**
 * Logos clients pour la preuve sociale (bandeau défilant). Emplacements
 * réservés tant que les logos et autorisations clients n'ont pas été
 * fournis — repris à l'identique de la maquette v2 (« Client 01 » à
 * « Client 08 »). Remplacer par les vrais noms/logos dès qu'ils arrivent.
 */
export const CLIENTS: Client[] = [
  { nom: "Client 01", visible: true },
  { nom: "Client 02", visible: true },
  { nom: "Client 03", visible: true },
  { nom: "Client 04", visible: true },
  { nom: "Client 05", visible: true },
  { nom: "Client 06", visible: true },
  { nom: "Client 07", visible: true },
  { nom: "Client 08", visible: true },
];
