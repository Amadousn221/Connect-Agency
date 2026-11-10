// Page « Contact » (/contact) — disposition de /contact-us de la template Tekni (bandeau, coordonnées + formulaire, carte),
// identité et contenus Connect Web. Formulaire : DigitalContactForm (envoi réel vers /api/contact, Brevo ; aucun succès
// simulé). Seul canal public fourni : WhatsApp ; l'adresse du siège et la carte viennent de content/agence.ts.
// Non indexée tant que le site n'est pas validé (statut PROPOSÉ pour les textes).
import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";
import SiteContact from "@/components/contact/SiteContact";
import { agencePage } from "@/content/agence";

export const metadata: Metadata = {
    title: "Contact | Connect Web",
    description:
        "Parlez-nous de votre projet : site internet, boutique en ligne, outils de gestion, marketing digital ou équipement informatique. Connect Web, Grand Yoff, Dakar.",
    alternates: { canonical: "/contact" },
    robots: { index: false, follow: false },
};

export default function ContactPage() {
    const { contact } = agencePage;

    return (
        <SiteLayout>
            <section className="cw-about-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            <li aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <p className="cw-about-head-eyebrow">Contact</p>
                    <h1>Parlons de votre projet</h1>
                    <p className="cw-about-head-sub">Présentez votre activité et ce que vous souhaitez améliorer : nous revenons vers vous pour en discuter.</p>
                </div>
            </section>

            {/* Coordonnées + formulaire (même bloc que la page Qui sommes-nous) */}
            <div className="cw-contact-page">
                <SiteContact />
            </div>

            {/* Siège social + carte */}
            <section className="cw-contact-map" aria-labelledby="contact-siege">
                <div className="container">
                    <h2 id="contact-siege" className="cw-contact-map-title">{contact.officeLabel}</h2>
                    <address className="cw-contact-map-address">
                        {contact.officeLines.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                    </address>
                </div>
                <div className="cw-about-contact-map cw-contact-map-frame">
                    <iframe
                        title={contact.map.title}
                        src={contact.map.src}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                    <a className="cw-about-map-link" href={contact.map.link} target="_blank" rel="noopener noreferrer">
                        {contact.map.linkLabel}
                        <span className="visually-hidden"> (nouvel onglet)</span>
                    </a>
                </div>
            </section>
        </SiteLayout>
    );
}
