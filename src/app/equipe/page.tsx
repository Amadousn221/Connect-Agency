// Page « Notre équipe » — disposition de la référence d'Amadou (09/11/2026), identité Connect Web.
// Contenus : content/team.ts (membres publiés uniquement) et content/agence.ts (siège social + carte).
// Non indexée tant que le site n'est pas validé (comme le reste du site).
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";
import HomeTechnologies from "@/components/technology/HomeTechnologies";
import { agencePage } from "@/content/agence";
import { members, teamPage, type TeamLink } from "@/content/team";

export const metadata: Metadata = {
    title: teamPage.meta.title,
    description: teamPage.meta.description,
    alternates: { canonical: "/equipe" },
    robots: { index: false, follow: false },
};

const socialIcon: Record<TeamLink["network"], { icon: string; label: string }> = {
    linkedin: { icon: "fab fa-linkedin-in", label: "LinkedIn" },
    facebook: { icon: "fab fa-facebook-f", label: "Facebook" },
    x: { icon: "fab fa-twitter", label: "X" },
    instagram: { icon: "fab fa-instagram", label: "Instagram" },
};

const initials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");

export default function EquipePage() {
    const { head, section } = teamPage;
    const { contact } = agencePage;
    const published = members.filter((member) => member.published);

    return (
        <SiteLayout>
            {/* Bandeau */}
            <section className="cw-about-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            <li><Link href="/agence">{head.eyebrow}</Link></li>
                            <li aria-current="page">{head.title}</li>
                        </ol>
                    </nav>
                    <p className="cw-about-head-eyebrow">{head.eyebrow}</p>
                    <h1>{head.title}</h1>
                    <p className="cw-about-head-sub">{head.subtitle}</p>
                </div>
            </section>

            {/* Membres : fond clair à facettes, cartes à photo (Team One) */}
            <section className="cw-about-faq cw-team-page" aria-labelledby="equipe-membres">
                <div className="container">
                    <h2 id="equipe-membres" className="cw-about-title">{section.title}</h2>
                    <p className="cw-team-page-sub">{section.subtitle}</p>
                    <ul className="row cw-team-page-grid">
                        {published.map((member) => (
                            <li key={member.id} className="col-xl-3 col-md-6">
                                <article className="team-style-one">
                                    <div className="thumb">
                                        {member.photo ? (
                                            <Image src={member.photo} alt={member.photoPlaceholder ? `Avatar provisoire de ${member.name}` : `Portrait de ${member.name}`} width={900} height={900} />
                                        ) : (
                                            <div className="cw-team-avatar" role="img" aria-label={`Portrait de ${member.name} : photo à venir`}>
                                                <span aria-hidden="true">{initials(member.name)}</span>
                                            </div>
                                        )}
                                        {member.links && member.links.length > 0 && (
                                            <div className="social">
                                                <ul>
                                                    {member.links.map((link) => (
                                                        <li key={link.network} className={link.network}>
                                                            {link.url ? (
                                                                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${socialIcon[link.network].label} de ${member.name} (nouvel onglet)`}>
                                                                    <i className={socialIcon[link.network].icon} aria-hidden="true" />
                                                                </a>
                                                            ) : (
                                                                <span className="cw-team-social-off" role="img" aria-label={`${socialIcon[link.network].label} : lien bientôt disponible`}>
                                                                    <i className={socialIcon[link.network].icon} aria-hidden="true" />
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className="info">
                                        <span>{member.role}</span>
                                        <h3 className="cw-team-name">{member.name}</h3>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Siège social + carte (même bloc que /agence) */}
            <section className="cw-about-contact" aria-labelledby="equipe-siege">
                <div className="cw-about-contact-panel text-light">
                    <Image className="cw-about-contact-bg" src={contact.image.src} alt="" width={contact.image.width} height={contact.image.height} aria-hidden="true" />
                    <div className="cw-about-contact-inner">
                        <h2 id="equipe-siege" className="cw-about-contact-label">{contact.officeLabel}</h2>
                        <address className="cw-about-contact-value">
                            {contact.officeLines.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </address>
                        <h3 className="cw-about-contact-label">{contact.label}</h3>
                        <p className="cw-about-contact-value">
                            <a href={contact.href} target="_blank" rel="noopener noreferrer" aria-label={`${contact.display}, WhatsApp (nouvel onglet)`}>
                                {contact.display}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="cw-about-contact-map">
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

            <HomeTechnologies />
        </SiteLayout>
    );
}
