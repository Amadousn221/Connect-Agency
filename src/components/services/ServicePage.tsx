// Gabarit des pages de services (/expertises/...) — mise en page de l'accueil appliquée le 10/11/2026 : bandeau photo
// du pôle avec deux boutons, introduction + image, repères, « ce que comprend le projet », services, bandeaux
// sombres/clairs, réalisations autorisées, technologies, questions fréquentes, bandeau d'appel à l'action, siège social
// + carte. Chaque section est facultative : une page simple n'a que l'introduction.
// Les classes `cw-svc-*` sont propres à ce gabarit (les classes `cw-about-*` restent réservées à /agence, /contact et
// /equipe). Le pôle (numéro, photo du bandeau) est déduit de l'adresse de la page (canonical).
import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteContact from "@/components/contact/SiteContact";
import SiteLayout from "@/components/layouts/SiteLayout";
import HomeTechnologies from "@/components/technology/HomeTechnologies";
import { agencePage } from "@/content/agence";
import { expertises } from "@/content/expertises";
import { expertiseCards } from "@/content/home";
import { realisations } from "@/content/realisations";
import { waLink, type ServiceBand, type ServicePageData } from "@/content/services-pages";

type Cta = { label: string; href: string; external?: boolean };

const CtaLink = ({ cta, className }: { cta: Cta; className: string }) =>
    cta.external ? (
        <a className={className} href={cta.href} target="_blank" rel="noopener noreferrer" aria-label={`${cta.label} (WhatsApp, nouvel onglet)`}>
            {cta.label}
        </a>
    ) : (
        <Link className={className} href={cta.href}>
            {cta.label}
        </Link>
    );

// « e-commerce » ne se coupe jamais après le tiret (« e- / commerce » sur mobile).
const noBreak = (text: string): ReactNode[] =>
    text.split(/(e-commerce)/i).map((part, index) =>
        /^e-commerce$/i.test(part) ? (
            <span key={index} className="text-nowrap">
                {part}
            </span>
        ) : (
            part
        ),
    );

const Band = ({ band }: { band: ServiceBand }) => (
    <section id={band.id} className={`cw-svc-band cw-svc-band-${band.tone}${band.tone === "dark" ? " cw-svc-dark text-light" : ""}`} aria-labelledby={`${band.id ?? "band"}-titre`}>
        <div className="container">
            <div className={`row align-center${band.image && band.imageSide === "left" ? " flex-row-reverse" : ""}`}>
                <div className={band.image ? "col-lg-6" : "col-lg-8 offset-lg-2"}>
                    <h4 className="cw-sub">{band.eyebrow}</h4>
                    <h2 id={`${band.id ?? "band"}-titre`} className="title">{noBreak(band.title)}</h2>
                    {band.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ))}
                    {band.cta && <CtaLink cta={band.cta} className="cw-link-cta" />}
                </div>
                {band.image && (
                    <div className="col-lg-6">
                        <div className="cw-svc-photo">
                            <Image src={band.image.src} alt={band.image.alt} width={band.image.width} height={band.image.height} sizes="(min-width: 992px) 45vw, 100vw" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

// Icône de chaque carte de service (clé = ancre du service) ; icône par défaut si l'ancre n'est pas listée.
const serviceIcons: Record<string, string> = {
    "sites-internet": "fal fa-browser",
    "sites-ecommerce": "fal fa-shopping-cart",
    "shopify-woocommerce": "fal fa-store",
    "landing-page": "fal fa-bullseye-arrow",
    "applications-web-pwa": "fal fa-mobile-alt",
    "refonte-maintenance": "fal fa-tools",
    "crm": "fal fa-users-cog",
    "erp": "fal fa-chart-network",
    "applications-metiers": "fal fa-laptop-code",
    "automatisation-processus": "fal fa-robot",
    "integration-accompagnement": "fal fa-project-diagram",
    "hebergement-serveurs-cloud": "fal fa-cloud",
    "installation-configuration-it": "fal fa-desktop",
    "reseaux-cablage": "fal fa-network-wired",
    "telephonie-ip": "fal fa-phone-office",
    "videosurveillance-controle-acces": "fal fa-shield-check",
    "strategie": "fal fa-chess",
    "seo": "fal fa-search",
    "publicite-acquisition": "fal fa-bullhorn",
    "email-crm-marketing": "fal fa-envelope-open-text",
    "marketing-automation": "fal fa-cogs",
    "audit": "fal fa-clipboard-check",
    "contenu": "fal fa-pen-nib",
};
const defaultServiceIcon = "fal fa-layer-group";

export default function ServicePage({ page }: { page: ServicePageData }) {
    const { head, intro, points, approach, services, bands, faq } = page;
    const { contact } = agencePage;
    const shown = page.realisations
        ? realisations.filter((r) => r.published && r.image).slice(0, page.realisations.max)
        : [];

    // Pôle de la page : numéro (signature) et photo du bandeau, repris de l'accueil.
    const pole = expertises.find((expertise) => page.canonical.startsWith(`/expertises/${expertise.id}`));
    const heroPhoto = pole ? expertiseCards[pole.id]?.photo : undefined;
    const heroCta: Cta = approach?.cta ?? intro.cta;

    return (
        <SiteLayout>
            {/* Bandeau */}
            <section className="cw-svc-hero text-light">
                {heroPhoto && <Image className="cw-svc-hero-photo" src={heroPhoto} alt="" fill priority sizes="100vw" />}
                <div className="cw-svc-hero-overlay" aria-hidden="true" />
                <div className="container">
                    <div className="cw-svc-hero-content">
                        <nav aria-label="Fil d'Ariane">
                            <ol className="cw-breadcrumb">
                                <li><Link href="/">Accueil</Link></li>
                                {head.parent && <li><Link href={head.parent.href}>{head.parent.label}</Link></li>}
                                <li aria-current="page">{noBreak(head.title)}</li>
                            </ol>
                        </nav>
                        <p className="cw-svc-hero-eyebrow">
                            {pole && <span className="cw-svc-hero-num">{pole.number}</span>}
                            <span>{head.eyebrow}</span>
                        </p>
                        <h1>{noBreak(head.title)}</h1>
                        <p className="cw-svc-hero-sub">{head.subtitle}</p>
                        <div className="cw-svc-hero-buttons">
                            <CtaLink cta={heroCta} className="btn btn-md btn-theme" />
                            {services && (
                                <a className="btn btn-md btn-border-light" href="#services">
                                    Voir nos services
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction + image */}
            <section className="cw-svc-intro default-padding" aria-labelledby="svc-intro">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h4 className="cw-sub">{intro.eyebrow}</h4>
                            <h2 id="svc-intro" className="title">{noBreak(intro.title)}</h2>
                            {intro.paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                            ))}
                            {intro.bullets && (
                                <ul className="cw-arrow-list cw-svc-bullets">
                                    {intro.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            <CtaLink cta={intro.cta} className="cw-link-cta" />
                        </div>
                        <div className="col-lg-6">
                            <div className="cw-svc-photo">
                                <Image src={intro.image.src} alt={intro.image.alt} width={intro.image.width} height={intro.image.height} sizes="(min-width: 992px) 45vw, 100vw" />
                            </div>
                        </div>
                    </div>
                    {points && (
                        <ul className="cw-svc-points">
                            {points.map((point) => (
                                <li key={point.title}>
                                    <span className="cw-svc-point-icon" aria-hidden="true"><i className={point.icon} /></span>
                                    <h3>{point.title}</h3>
                                    <p>{point.text}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* Ce que comprend le projet (à la place des forfaits) */}
            {approach && (
                <section className="cw-svc-approach default-padding" aria-labelledby="svc-approche">
                    <div className="container">
                        <div className="cw-svc-head">
                            <h4 className="cw-sub">{approach.eyebrow}</h4>
                            <h2 id="svc-approche" className="title">{approach.title}</h2>
                            <p>{approach.intro}</p>
                        </div>
                        <ul className="cw-svc-columns">
                            {approach.columns.map((column, index) => (
                                <li key={column.title}>
                                    <article className="cw-svc-column">
                                        <p className="cw-svc-column-num">
                                            <span className="visually-hidden">Étape </span>
                                            {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3>{column.title}</h3>
                                        <ul className="cw-arrow-list">
                                            {column.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </li>
                            ))}
                        </ul>
                        <p className="cw-svc-note">{approach.note}</p>
                        <div className="cw-svc-center">
                            <CtaLink cta={approach.cta} className="btn btn-md btn-theme" />
                        </div>
                    </div>
                </section>
            )}

            {/* Services du pôle (ancres utilisées par le menu) */}
            {services && (
                <section id="services" className="cw-svc-services default-padding" aria-labelledby="svc-services">
                    <div className="container">
                        <div className="cw-svc-head">
                            <h4 className="cw-sub">{services.eyebrow}</h4>
                            <h2 id="svc-services" className="title">{services.title}</h2>
                            <p>{services.intro}</p>
                        </div>
                        <ul className="cw-svc-service-grid">
                            {services.items.map((item) => (
                                <li key={item.slug}>
                                    <article id={item.slug} className="cw-svc-service">
                                        <span className="cw-svc-service-icon" aria-hidden="true"><i className={serviceIcons[item.slug] ?? defaultServiceIcon} /></span>
                                        <h3>{noBreak(item.title)}</h3>
                                        <p>{item.description}</p>
                                        {item.href ? (
                                            <Link className="cw-svc-link" href={item.href} aria-label={`Voir le service : ${item.title}`}>
                                                Voir le service
                                            </Link>
                                        ) : (
                                            <a
                                                className="cw-svc-link"
                                                href={waLink(`Bonjour Connect Web, je souhaite en savoir plus sur : ${item.title}.`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Voir le service : ${item.title} (WhatsApp, nouvel onglet)`}
                                            >
                                                Voir le service
                                            </a>
                                        )}
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {bands?.map((band) => <Band key={band.title} band={band} />)}

            {/* Réalisations autorisées uniquement */}
            {page.realisations && shown.length > 0 && (
                <section className="cw-svc-projects default-padding" aria-labelledby="svc-realisations">
                    <div className="container">
                        <div className="cw-svc-head">
                            <h4 className="cw-sub">Réalisations</h4>
                            <h2 id="svc-realisations" className="title">{page.realisations.title}</h2>
                            <p>{page.realisations.intro}</p>
                        </div>
                        <ul className="cw-svc-project-grid">
                            {shown.map((project) => {
                                const card = (
                                    <>
                                        <Image src={project.image as string} alt={`Aperçu du site ${project.client}`} width={1000} height={625} sizes="(min-width: 992px) 30vw, 100vw" unoptimized />
                                        <div className="cw-svc-project-body">
                                            <p className="cw-svc-project-cat">{project.category}</p>
                                            <h3>{project.client}</h3>
                                        </div>
                                    </>
                                );
                                return (
                                    <li key={project.slug}>
                                        {project.siteUrl ? (
                                            <a className="cw-svc-project" href={project.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.client} : voir le site (nouvel onglet)`}>
                                                {card}
                                            </a>
                                        ) : (
                                            <article className="cw-svc-project">{card}</article>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="cw-svc-center">
                            <Link className="btn btn-md btn-border-theme" href="/realisations">Voir toutes les réalisations</Link>
                        </div>
                    </div>
                </section>
            )}

            <HomeTechnologies />

            {/* Questions fréquentes : une carte par question, un seul lien de contact en dessous */}
            {faq && (
                <section className="cw-svc-faq cw-svc-dark default-padding text-light" aria-labelledby="svc-faq">
                    <div className="container">
                        <div className="cw-svc-head">
                            <h2 id="svc-faq" className="title">{faq.title}</h2>
                            <p>{faq.subtitle}</p>
                        </div>
                        <div className="cw-svc-faq-grid">
                            {faq.items.map((item) => (
                                <article key={item.id} id={`q-${item.id}`} className="cw-svc-faq-card" aria-labelledby={`q-${item.id}-titre`}>
                                    <h3 id={`q-${item.id}-titre`}>{item.question}</h3>
                                    <p>{item.answer}</p>
                                </article>
                            ))}
                        </div>
                        <div className="cw-svc-center">
                            <a
                                className="btn btn-md btn-border-light"
                                href={waLink("Bonjour Connect Web, j'ai une question sur votre offre.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Poser une autre question sur WhatsApp (nouvel onglet)"
                            >
                                Poser une autre question sur WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Appel à l'action final */}
            <section className="cw-svc-cta default-padding" aria-labelledby="svc-cta">
                <div className="container">
                    <div className="cw-svc-head">
                        <h2 id="svc-cta" className="title">Un projet en tête ? Parlons-en</h2>
                        <p>Décrivez-nous votre besoin : nous vous répondons avec une proposition détaillée.</p>
                        <div className="cw-svc-cta-buttons">
                            <CtaLink cta={heroCta} className="btn btn-md btn-theme" />
                            <a className="btn btn-md btn-border-theme" href="#contact">
                                Nous écrire
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Siège social + carte */}
            <section className="cw-about-contact cw-svc-contact" aria-labelledby="svc-siege">
                <div className="cw-about-contact-panel text-light">
                    <Image className="cw-about-contact-bg" src={contact.image.src} alt="" width={contact.image.width} height={contact.image.height} aria-hidden="true" />
                    <div className="cw-about-contact-inner">
                        <h2 id="svc-siege" className="cw-about-contact-label">{contact.officeLabel}</h2>
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
                    <iframe title={contact.map.title} src={contact.map.src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                    <a className="cw-about-map-link" href={contact.map.link} target="_blank" rel="noopener noreferrer">
                        {contact.map.linkLabel}
                        <span className="visually-hidden"> (nouvel onglet)</span>
                    </a>
                </div>
            </section>

            {/* Formulaire de contact avant le pied de page */}
            <SiteContact />
        </SiteLayout>
    );
}
