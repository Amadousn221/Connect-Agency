// Réseaux sociaux du pied de page. Les adresses de profil de Connect Web ne sont pas encore fournies (docs/12 Q07) :
// tant que `href` est vide, l'icône s'affiche sans lien (aucune adresse inventée, aucun lien vers le réseau en général).
// Renseigner `href` avec l'adresse réelle du profil pour activer le lien ; retirer une ligne pour masquer un réseau.
export interface SocialLink {
    id: string;
    label: string;
    icon: string;
    href: string;
}

export const socialLinks: SocialLink[] = [
    { id: "facebook", label: "Facebook", icon: "fab fa-facebook-f", href: "" },
    { id: "instagram", label: "Instagram", icon: "fab fa-instagram", href: "" },
    { id: "linkedin", label: "LinkedIn", icon: "fab fa-linkedin-in", href: "" },
];

// Inscription à la newsletter : aucun service d'envoi n'est branché à ce jour. Passer à true uniquement quand le
// formulaire de FooterNewsletter envoie réellement l'adresse à un service (puis tester la réception avec des données de test).
export const NEWSLETTER_ENABLED = false;
