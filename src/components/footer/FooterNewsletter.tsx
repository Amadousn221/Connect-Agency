"use client";
// Formulaire d'inscription du pied de page (apparence de la template). Contrairement au composant de démo, il ne
// confirme jamais une inscription qui n'a pas eu lieu : tant que NEWSLETTER_ENABLED est false (content/social.ts),
// l'envoi affiche que l'inscription n'est pas encore ouverte et rien n'est enregistré.
import { useState } from "react";
import { NEWSLETTER_ENABLED } from "@/content/social";

const FooterNewsletter = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!NEWSLETTER_ENABLED) {
            setMessage("L'inscription à la newsletter n'est pas encore ouverte.");
            return;
        }
        // À brancher sur le service d'envoi retenu (aucun pour l'instant).
    };

    return (
        <form onSubmit={handleSubmit} noValidate={false}>
            <label htmlFor="footer-newsletter-email" className="visually-hidden">Votre adresse e-mail</label>
            <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Votre e-mail"
                className="form-control"
                name="email"
                required
                autoComplete="email"
            />
            <button type="submit" aria-label="S'inscrire à la newsletter">
                <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 17L17 1H7.8" stroke="#232323" strokeWidth={2} />
                </svg>
            </button>
            <p role="status" className="visually-hidden">{message}</p>
        </form>
    );
};

export default FooterNewsletter;
