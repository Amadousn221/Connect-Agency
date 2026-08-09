import type { Client } from "@/types/content";

/**
 * Logos clients pour le bandeau de preuve sociale. Vide par défaut — on
 * n'affiche jamais un logo sans autorisation du client (cf. débrief §8).
 * Le composant LogoMarquee reste masqué tant que ce tableau est vide.
 *
 * Exemple de structure à respecter :
 * { nom: "Nom du client", visible: true }
 */
export const CLIENTS: Client[] = [];
