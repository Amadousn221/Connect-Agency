// Page « Digitalisation » — route du pôle 02 (CLAUDE.md). Parcours : comprendre l'offre, identifier son besoin,
// explorer les services, voir leur utilité concrète, évaluer l'accompagnement, présenter son projet.
// Composants du thème réutilisés ou adaptés : titres .sub-title, boutons .btn, listes à flèches (.cw-arrow-list),
// accordéon (.cw-step-*), formulaire (.contact-form / .form-group), fonds .bg-gray. Animations : CSS seul (voir
// connect-web.css, .cw-reveal), car AOS (déjà dans le projet) masque le contenu sans JavaScript et ignore
// prefers-reduced-motion. Section Réalisations masquée tant qu'aucune réalisation n'est autorisée (realisations.ts).
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";
import AccompanimentSteps from "@/components/digitalisation/AccompanimentSteps";
import DigitalContactForm from "@/components/digitalisation/DigitalContactForm";
import FaqAccordion from "@/components/digitalisation/FaqAccordion";
import UseCaseTabs from "@/components/digitalisation/UseCaseTabs";
import { digitalisationPage, digitalServices } from "@/content/digitalisation";
import { realisations } from "@/content/realisations";

const page = digitalisationPage;

export const metadata: Metadata = {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: "/expertises/digitalisation" },
};

export default function DigitalisationPage() {
    const projects = realisations.filter((r) => r.published).slice(0, 3);

    return (
        <SiteLayout>
            <div className="cw-dg">
                {/* 1. Hero photographique pleine largeur, voile sombre, texte dans le conteneur habituel */}
                <section className="cw-dg-hero text-light" aria-labelledby="dg-titre">
                    <Image className="cw-dg-hero-photo" src={page.hero.image} alt="" fill priority sizes="100vw" />
                    <div className="cw-dg-hero-veil" aria-hidden="true" />
                    <div className="container">
                        <div className="cw-dg-hero-content">
                            <p className="cw-dg-eyebrow">{page.hero.eyebrow}</p>
                            <h1 id="dg-titre" className="cw-dg-h1">{page.hero.title}</h1>
                            <p className="cw-dg-lead">{page.hero.text}</p>
                            <div className="cw-dg-actions">
                                <a className="btn btn-theme btn-md" href={page.hero.primary.href}>
                                    {page.hero.primary.label} <span aria-hidden="true">→</span>
                                </a>
                                <a className="cw-dg-textlink-light" href={page.hero.secondary.href}>
                                    {page.hero.secondary.label} <span aria-hidden="true">↓</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Texte + photo à droite */}
                <section className="cw-dg-about" aria-labelledby="dg-about">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-6 cw-reveal">
                                <p className="sub-title cw-dg-sub">{page.about.eyebrow}</p>
                                <h2 id="dg-about" className="cw-dg-h2">{page.about.title}</h2>
                                {page.about.paragraphs.map((paragraph) => (
                                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                                ))}
                                <ul className="cw-dg-benefits">
                                    {page.about.benefits.map((benefit) => (
                                        <li key={benefit.label}>
                                            <span className="cw-dg-icon" aria-hidden="true"><i className={benefit.icon} /></span>
                                            <span>{benefit.label}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a className="cw-dg-textlink" href={page.about.link.href}>
                                    {page.about.link.label} <span aria-hidden="true">↓</span>
                                </a>
                            </div>
                            <div className="col-lg-5 offset-lg-1 cw-reveal">
                                <div className="cw-dg-photo">
                                    <Image src={page.about.image.src} alt={page.about.image.alt} width={page.about.image.width} height={page.about.image.height} sizes="(min-width: 992px) 40vw, 100vw" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Services : 3 colonnes (2 sur tablette, 1 sur mobile) ; une seule action par carte */}
                <section id="services" className="cw-dg-services bg-gray" aria-labelledby="dg-services">
                    <div className="container">
                        <div className="cw-dg-narrow cw-reveal">
                            <p className="sub-title cw-dg-sub">{page.services.eyebrow}</p>
                            <h2 id="dg-services" className="cw-dg-h2">{page.services.title}</h2>
                            <p>{page.services.intro}</p>
                        </div>
                        <ul className="cw-dg-grid">
                            {digitalServices.map((service) => (
                                <li key={service.id} id={`service-${service.id}`} className="cw-dg-card cw-reveal">
                                    {service.extraAnchors?.map((anchor) => (
                                        <span key={anchor} id={anchor} className="cw-dg-anchor" aria-hidden="true" />
                                    ))}
                                    <div className="cw-dg-card-head">
                                        <span className="cw-dg-icon" aria-hidden="true"><i className={service.icon} /></span>
                                        <h3 id={`dg-s-${service.id}`}>{service.title}</h3>
                                    </div>
                                    <p>{service.text}</p>
                                    <ul className="cw-arrow-list" aria-label={`Prestations : ${service.title}`}>
                                        {service.items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                    {/* Lien unique de la carte : son ::after couvre toute la carte (clic, clavier, focus). */}
                                    <a className="cw-dg-card-link" href="#contact" data-cw-service={service.id} aria-describedby={`dg-s-${service.id}`}>
                                        {service.ctaLabel}
                                        <span className="cw-dg-card-arrow" aria-hidden="true">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 4. En pratique : module interactif compact (en-tête, scénarios, étapes, appel à l'action) */}
                <section id="en-pratique" className="cw-dg-practice" aria-labelledby="dg-pratique">
                    <div className="container">
                        <UseCaseTabs />
                    </div>
                </section>

                {/* 5. Réalisations : uniquement des projets autorisés (published: true), sinon section absente */}
                {projects.length > 0 && (
                    <section className="cw-dg-projects bg-gray" aria-labelledby="dg-projets">
                        <div className="container">
                            <h2 id="dg-projets" className="cw-dg-h2">{page.realisations.title}</h2>
                            <ul className="cw-dg-grid">
                                {projects.map((project) => (
                                    <li key={project.slug} className="cw-dg-card cw-reveal">
                                        <h3>{project.title}</h3>
                                        <p>{project.summary}</p>
                                        {project.pageReady && (
                                            <Link className="cw-dg-textlink" href={`/realisations/${project.slug}`}>
                                                Voir le projet <span aria-hidden="true">→</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* 6. Accompagnement : introduction à gauche, 4 étapes dépliables à droite */}
                <section className="cw-dg-method bg-gray" aria-labelledby="dg-methode">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 cw-reveal">
                                <p className="sub-title cw-dg-sub">{page.method.eyebrow}</p>
                                <h2 id="dg-methode" className="cw-dg-h2">{page.method.title}</h2>
                                <p>{page.method.text}</p>
                            </div>
                            <div className="col-lg-6 offset-lg-1 cw-reveal">
                                <AccompanimentSteps />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FAQ */}
                <section className="cw-dg-faq" aria-labelledby="dg-faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 cw-reveal">
                                <h2 id="dg-faq" className="cw-dg-h2">{page.faq.title}</h2>
                            </div>
                            <div className="col-lg-8 cw-reveal">
                                <FaqAccordion items={page.faq.items} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Contact */}
                <section id="contact" className="cw-dg-contact bg-gray" aria-labelledby="dg-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 cw-reveal">
                                <h2 id="dg-contact" className="cw-dg-h2">{page.contact.title}</h2>
                                <p>{page.contact.text}</p>
                            </div>
                            <div className="col-lg-8 cw-reveal">
                                <DigitalContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
