// Pied de page Connect Web — mise en page de la template Tekni (FooterV1 : fond bleu marine uni, formes décoratives
// et image de fond du thème retirées le 10/11/2026, 4 colonnes, barre de bas de page), contenu Connect Web. Ne contient que des faits établis : nom, description du
// dossier (docs/07 §1), liens vers les pôles et les sections de l'accueil, droits. Éléments de la démo volontairement
// absents tant qu'ils ne sont pas fournis par Amadou (docs/12 Q07) : horaires d'ouverture,
// mentions légales et confidentialité. Newsletter : interface présente mais sans service d'envoi (voir FooterNewsletter).
// Réseaux sociaux : adresses à fournir (content/social.ts). Aucun lien vers une page inexistante.
import Image from "next/image";
import Link from "next/link";
import { mainLinks, navPoles, primaryCta } from "@/content/navigation";
import { expertises, subServiceHref, subServicePages } from "@/content/expertises";
import { socialLinks } from "@/content/social";
import FooterNewsletter from "./FooterNewsletter";

// Services qui ont leur propre page, repris de expertises.ts (même libellé que dans le menu).
const footerServices = expertises.flatMap((expertise) =>
    expertise.subServices
        .filter((subService) => `${expertise.id}/${subService.slug}` in subServicePages)
        .map((subService) => ({ label: subService.title, href: subServiceHref(expertise, subService) })),
);

const SiteFooter = () => {
    return (
        <footer className="bg-dark text-light cw-site-footer" aria-label="Pied de page">
            <div className="container">
                <div className="f-items cw-footer-main">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-item pr-50 pr-xs-15">
                            <div className="f-item about">
                                <Image className="logo" src="/assets/img/cw/logo-connect-web-clair.png" alt="Connect Web" width={688} height={185} style={{ width: "auto" }} />
                                <p>
                                    Connect Web conçoit des sites, des boutiques en ligne et des outils de gestion, et accompagne l&apos;équipement
                                    informatique des locaux professionnels.
                                </p>
                                <Link className="btn btn-light btn-md radius animation" href={primaryCta.href}>
                                    {primaryCta.label}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h2 className="widget-title">Expertises</h2>
                                <ul>
                                    {navPoles.map((pole) => (
                                        <li key={pole.id}>
                                            <Link href={pole.all.href}>{pole.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h2 className="widget-title">Nos services</h2>
                                <ul>
                                    {footerServices.map((service) => (
                                        <li key={service.href}>
                                            <Link href={service.href}>{service.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-item">
                            <div className="f-item link">
                                <h2 className="widget-title">Connect Web</h2>
                                <ul>
                                    {[...mainLinks, { label: "Notre équipe", href: "/equipe" }].map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item">
                            <h2 className="widget-title">Newsletter</h2>
                            <p>Recevez nos actualités et conseils pour votre activité en ligne.</p>
                            <div className="f-item newsletter">
                                <FooterNewsletter />
                            </div>
                            <ul className="footer-social">
                                {socialLinks.map((social) => (
                                    <li key={social.id}>
                                        {social.href ? (
                                            <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                                <i className={social.icon} aria-hidden="true" />
                                            </Link>
                                        ) : (
                                            <span className="cw-social-soon" title={`${social.label} : bientôt`}>
                                                <i className={social.icon} aria-hidden="true" />
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>© {new Date().getFullYear()} Connect Web</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
