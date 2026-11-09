// Page « Qui sommes-nous » — architecture de la capture de référence d'Amadou (09/11/2026), identité Connect Web.
// Contenus : content/agence.ts. Bandeau de logos : composant HomeTechnologies de l'accueil (même liste d'outils).
// Non indexée tant que le site n'est pas validé (comme le reste du site).
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";
import SiteContact from "@/components/contact/SiteContact";
import HomeTechnologies from "@/components/technology/HomeTechnologies";
import { agencePage, type AgenceLink } from "@/content/agence";

export const metadata: Metadata = {
    title: agencePage.meta.title,
    description: agencePage.meta.description,
    alternates: { canonical: "/agence" },
    robots: { index: false, follow: false },
};

// Lien interne, ancre ou WhatsApp (nouvel onglet) avec un nom accessible explicite.
const CtaLink = ({ link, className, context }: { link: AgenceLink; className: string; context?: string }) => {
    if (link.external) {
        return (
            <a
                className={className}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label}${context ? ` : ${context}` : ""} (WhatsApp, nouvel onglet)`}
            >
                {link.label}
            </a>
        );
    }
    if (link.href.startsWith("#")) {
        return (
            <a className={className} href={link.href}>
                {link.label}
            </a>
        );
    }
    return (
        <Link className={className} href={link.href}>
            {link.label}
        </Link>
    );
};

export default function AgencePage() {
    const { head, intro, pillars, reach, questionsSection, questions, faq, contact } = agencePage;

    return (
        <SiteLayout>
            {/* Bandeau */}
            <section className="cw-about-head text-light">
                <div className="container">
                    <nav aria-label="Fil d'Ariane">
                        <ol className="cw-breadcrumb">
                            <li><Link href="/">Accueil</Link></li>
                            <li aria-current="page">{head.eyebrow}</li>
                        </ol>
                    </nav>
                    <p className="cw-about-head-eyebrow">{head.eyebrow}</p>
                    <h1>{head.title}</h1>
                    <p className="cw-about-head-sub">{head.subtitle}</p>
                </div>
            </section>

            {/* Présentation, mission / vision, contact rapide */}
            <section className="cw-about-intro default-padding" aria-labelledby="agence-presentation">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h4 className="cw-sub">{intro.eyebrow}</h4>
                            <h2 id="agence-presentation" className="title cw-about-title">{intro.title}</h2>
                            {intro.paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                            ))}
                            <CtaLink link={intro.cta} className="cw-about-btn" />
                        </div>
                        <div className="col-lg-6">
                            <div className="cw-about-intro-thumb">
                                <Image src={intro.image.src} alt={intro.image.alt} width={intro.image.width} height={intro.image.height} />
                            </div>
                        </div>
                    </div>

                    <div className="row cw-about-pillars">
                        {pillars.map((pillar) => (
                            <div key={pillar.id} className="col-lg-6">
                                <article id={pillar.id} className="cw-about-pillar" aria-labelledby={`${pillar.id}-titre`}>
                                    <h3 id={`${pillar.id}-titre`}>{pillar.title}</h3>
                                    <p>{pillar.text}</p>
                                    <CtaLink link={pillar.link} className="cw-about-btn" />
                                </article>
                            </div>
                        ))}
                    </div>

                    <div className="cw-about-reach">
                        <h3>{reach.title}</h3>
                        <p>
                            {reach.label} :{" "}
                            <a href={reach.href} target="_blank" rel="noopener noreferrer" aria-label={`${reach.display}, WhatsApp (nouvel onglet)`}>
                                {reach.display}
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Huit questions sur fond sombre, avec un visuel dans la grille */}
            <section className="cw-about-qa default-padding text-light" aria-labelledby="agence-questions">
                <div className="container">
                    <div className="cw-about-qa-head">
                        <h2 id="agence-questions">{questionsSection.title}</h2>
                        <p>{questionsSection.subtitle}</p>
                    </div>
                    <div className="cw-about-qa-grid">
                        {questions.map((item, index) => (
                            <QuestionWithVisual key={item.id} index={index}>
                                <article id={`q-${item.id}`} className="cw-about-qa-card" aria-labelledby={`q-${item.id}-titre`}>
                                    <h3 id={`q-${item.id}-titre`}>{item.question}</h3>
                                    <p>{item.answer}</p>
                                    <CtaLink link={item.link} className="cw-about-btn" context={item.question} />
                                </article>
                            </QuestionWithVisual>
                        ))}
                    </div>
                </div>
            </section>

            {/* Foire aux questions : sommaire des huit questions */}
            <section className="cw-about-faq default-padding" aria-labelledby="agence-faq">
                <div className="container">
                    <h2 id="agence-faq" className="cw-about-title">{faq.title}</h2>
                    <ul className="cw-about-faq-list">
                        {questions.map((item) => (
                            <li key={item.id}>
                                <a href={`#q-${item.id}`}>{item.question}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Siège social + carte (disposition de la référence) */}
            <section className="cw-about-contact" aria-labelledby="agence-siege">
                <div className="cw-about-contact-panel text-light">
                    <Image className="cw-about-contact-bg" src={contact.image.src} alt="" width={contact.image.width} height={contact.image.height} aria-hidden="true" />
                    <div className="cw-about-contact-inner">
                        <h2 id="agence-siege" className="cw-about-contact-label">{contact.officeLabel}</h2>
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

            {/* Formulaire de contact avant le pied de page (template /contact-us, version compacte) */}
            <SiteContact />
        </SiteLayout>
    );
}

// Insère le visuel de la grille juste avant la question qui suit la position définie dans le contenu.
function QuestionWithVisual({ index, children }: { index: number; children: React.ReactNode }) {
    const { image, imageAfter } = agencePage.questionsSection;
    if (index !== imageAfter) return <>{children}</>;
    return (
        <>
            <div className="cw-about-qa-visual" aria-hidden="true">
                <Image src={image.src} alt="" width={image.width} height={image.height} />
            </div>
            {children}
        </>
    );
}
