// Gabarit des pages de services — disposition des captures « page à faire » d'Amadou (09/11/2026) :
// bandeau, introduction + image, repères, « ce que comprend le projet » (à la place des forfaits), services,
// bandeaux sombres/clairs, réalisations autorisées, cartes de questions, liste de questions, siège social + carte,
// bandeau de technologies. Chaque section est facultative : une page simple n'a que l'introduction.
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";
import HomeTechnologies from "@/components/technology/HomeTechnologies";
import { agencePage } from "@/content/agence";
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

const Band = ({ band }: { band: ServiceBand }) => (
    <section id={band.id} className={`cw-svc-band cw-svc-band-${band.tone}${band.tone === "dark" ? " text-light" : ""}`} aria-labelledby={`${band.id ?? "band"}-titre`}>
        <div className="container">
            <div className={`row align-center${band.image && band.imageSide === "left" ? " flex-row-reverse" : ""}`}>
                <div className={band.image ? "col-lg-6" : "col-lg-8"}>
                    <p className="cw-svc-eyebrow">{band.eyebrow}</p>
                    <h2 id={`${band.id ?? "band"}-titre`} className="cw-svc-h2">{band.title}</h2>
                    {band.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                    ))}
                    {band.cta && <CtaLink cta={band.cta} className="cw-about-btn" />}
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

export default function ServicePage({ page }: { page: ServicePageData }) {
    const { head, intro, points, approach, services, bands, faq } = page;
    const { contact } = agencePage;
    const shown = page.realisations
        ? realisations.filter((r) => r.published && r.image).slice(0, page.realisations.max)
        : [];

    return (
        <SiteLayout>
            {/* Bandeau */}
            <section className="cw-about-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            {head.parent && <li><Link href={head.parent.href}>{head.parent.label}</Link></li>}
                            <li aria-current="page">{head.title}</li>
                        </ol>
                    </nav>
                    <p className="cw-about-head-eyebrow">{head.eyebrow}</p>
                    <h1>{head.title}</h1>
                    <p className="cw-about-head-sub">{head.subtitle}</p>
                </div>
            </section>

            {/* Introduction + image */}
            <section className="cw-about-intro cw-svc-intro default-padding" aria-labelledby="svc-intro">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h4 className="cw-sub">{intro.eyebrow}</h4>
                            <h2 id="svc-intro" className="title cw-about-title">{intro.title}</h2>
                            {intro.paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                            ))}
                            {intro.bullets && (
                                <ul className="cw-svc-bullets">
                                    {intro.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            <CtaLink cta={intro.cta} className="cw-about-btn" />
                        </div>
                        <div className="col-lg-6">
                            <div className="cw-svc-photo">
                                <Image src={intro.image.src} alt={intro.image.alt} width={intro.image.width} height={intro.image.height} priority sizes="(min-width: 992px) 45vw, 100vw" />
                            </div>
                        </div>
                    </div>
                    {points && (
                        <ul className="row cw-svc-points">
                            {points.map((point) => (
                                <li key={point.title} className="col-lg-4 col-md-6">
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
                        <div className="cw-svc-narrow">
                            <p className="cw-svc-eyebrow">{approach.eyebrow}</p>
                            <h2 id="svc-approche" className="cw-svc-h2">{approach.title}</h2>
                            <p>{approach.intro}</p>
                        </div>
                        <ul className="row cw-svc-columns">
                            {approach.columns.map((column, index) => (
                                <li key={column.title} className="col-lg-4 col-md-6">
                                    <article className={`cw-svc-column cw-svc-column-${index + 1}`}>
                                        <h3>{column.title}</h3>
                                        <ul>
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
                            <CtaLink cta={approach.cta} className="cw-about-btn" />
                        </div>
                    </div>
                </section>
            )}

            {/* Services du pôle (ancres utilisées par le menu) */}
            {services && (
                <section id="services" className="cw-svc-services default-padding" aria-labelledby="svc-services">
                    <div className="container">
                        <div className="cw-svc-narrow">
                            <p className="cw-svc-eyebrow">{services.eyebrow}</p>
                            <h2 id="svc-services" className="cw-svc-h2">{services.title}</h2>
                            <p>{services.intro}</p>
                        </div>
                        <ul className="row cw-svc-service-grid">
                            {services.items.map((item) => (
                                <li key={item.slug} className="col-lg-4 col-md-6">
                                    <article id={item.slug} className="cw-svc-service">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        {item.href ? (
                                            <Link className="cw-about-btn" href={item.href} aria-label={`En savoir plus : ${item.title}`}>
                                                En savoir plus
                                            </Link>
                                        ) : (
                                            <a
                                                className="cw-about-btn"
                                                href={waLink(`Bonjour Connect Web, je souhaite en savoir plus sur : ${item.title}.`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`En savoir plus : ${item.title} (WhatsApp, nouvel onglet)`}
                                            >
                                                En savoir plus
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
                        <div className="cw-svc-narrow">
                            <h2 id="svc-realisations" className="cw-svc-h2">{page.realisations.title}</h2>
                            <p>{page.realisations.intro}</p>
                        </div>
                        <ul className="row cw-svc-project-grid">
                            {shown.map((project) => (
                                <li key={project.slug} className="col-lg-4 col-md-6">
                                    <article className="cw-svc-project">
                                        <Image src={project.image as string} alt={`Aperçu du site ${project.client}`} width={1000} height={625} sizes="(min-width: 992px) 30vw, 100vw" />
                                        <p className="cw-svc-project-cat">{project.category}</p>
                                        <h3>{project.client}</h3>
                                    </article>
                                </li>
                            ))}
                        </ul>
                        <div className="cw-svc-center">
                            <Link className="cw-about-btn" href="/realisations">Nos réalisations</Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Cartes de questions (même grille que /agence) */}
            {faq && (
                <>
                    <section className="cw-about-qa cw-svc-faq-cards default-padding text-light" aria-labelledby="svc-faq">
                        <div className="container">
                            <div className="cw-about-qa-head">
                                <h2 id="svc-faq">{faq.title}</h2>
                                <p>{faq.subtitle}</p>
                            </div>
                            <div className="cw-about-qa-grid">
                                {faq.items.map((item) => (
                                    <article key={item.id} id={`q-${item.id}`} className="cw-about-qa-card" aria-labelledby={`q-${item.id}-titre`}>
                                        <h3 id={`q-${item.id}-titre`}>{item.question}</h3>
                                        <p>{item.answer}</p>
                                        <a
                                            className="cw-about-btn"
                                            href={waLink(`Bonjour Connect Web, j'ai une question : ${item.question}`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`En parler avec nous : ${item.question} (WhatsApp, nouvel onglet)`}
                                        >
                                            En parler avec nous
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="cw-about-faq" aria-labelledby="svc-faq-liste">
                        <div className="container">
                            <h2 id="svc-faq-liste" className="cw-about-title">{faq.listTitle}</h2>
                            <ul className="cw-about-faq-list">
                                {faq.items.map((item) => (
                                    <li key={item.id}>
                                        <a href={`#q-${item.id}`}>{item.question}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </>
            )}

            {/* Siège social + carte */}
            <section className="cw-about-contact" aria-labelledby="svc-siege">
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

            <HomeTechnologies />
        </SiteLayout>
    );
}
