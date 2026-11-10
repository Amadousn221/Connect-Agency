"use client";
// Section « Réalisations » de l'accueil — base visuelle : ProjectV1 (démo home), choisie par Amadou le 09/11/2026.
// Mise en page du 10/11/2026 : fond bleu marine uni (plus de dégradé), titre à gauche, compteur « 1/N » et flèches à
// droite, capture à gauche et informations à droite sur le fond (plus de carte qui chevauche la capture). Mêmes règles de docs/08 : seules les réalisations
// publiées s'affichent ; section masquée sous le seuil de 2 cas (D26), sauf décision D44 (exemples) ; en
// développement local, un aperçu de mise en page signalé remplace la section masquée.
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { previewRealisations, realisations, realisationsSection, SHOW_EXAMPLES_IN_PRODUCTION } from "@/content/realisations";

const HomeRealisations = () => {
    const { eyebrow, title, intro, siteLinkLabel, minPublished } = realisationsSection;
    const reduceMotion = useSyncExternalStore(
        (notify) => {
            const query = window.matchMedia("(prefers-reduced-motion: reduce)");
            query.addEventListener("change", notify);
            return () => query.removeEventListener("change", notify);
        },
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false,
    );
    const published = realisations.filter((r) => r.published);
    const showExamples = published.length < minPublished && (process.env.NODE_ENV === "development" || SHOW_EXAMPLES_IN_PRODUCTION);
    // Le bandeau explicatif n'existe qu'en développement local.
    const isPreview = showExamples && process.env.NODE_ENV === "development";
    const items = published.length >= minPublished ? published : showExamples ? previewRealisations : [];

    if (items.length === 0) return null;

    return (
        <section id="realisations" className="default-padding cw-realisations" aria-labelledby="realisations-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : contenu fictif visible seulement en développement local. Cette section reste masquée tant
                        que moins de {minPublished} réalisations ne sont pas autorisées (docs/08).
                    </p>
                )}
                <div className="cw-real-head">
                    <div className="cw-real-intro">
                        <h4 className="cw-sub">{eyebrow}</h4>
                        <h2 id="realisations-titre" className="title">{title}</h2>
                        <p className="cw-realisations-intro">{intro}</p>
                    </div>
                    <div className="cw-real-controls">
                        <div className="cw-real-pagination" aria-hidden="true" />
                        <button type="button" className="cw-real-prev" aria-label="Réalisation précédente" />
                        <button type="button" className="cw-real-next" aria-label="Réalisation suivante" />
                    </div>
                </div>
                <Swiper
                    className="cw-realisations-slider"
                    direction="horizontal"
                    loop={items.length > 1}
                    grabCursor
                    autoplay={reduceMotion ? false : { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    pagination={{ el: ".cw-real-pagination", type: "fraction" }}
                    navigation={{ nextEl: ".cw-real-next", prevEl: ".cw-real-prev" }}
                    modules={[Navigation, Keyboard, Autoplay, Pagination, A11y]}
                    a11y={{
                        prevSlideMessage: "Réalisation précédente",
                        nextSlideMessage: "Réalisation suivante",
                        slideLabelMessage: "{{index}} sur {{slidesLength}}",
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.slug}>
                            <article className="cw-real-slide">
                                <div className="cw-real-thumb">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={`Capture de la page d'accueil de ${item.client}`}
                                            width={1000}
                                            height={625}
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="cw-realisation-visual" aria-hidden="true">
                                            <i className="fal fa-browser" />
                                        </div>
                                    )}
                                </div>
                                <div className="cw-real-info">
                                    <p className="cw-real-category">{item.category}</p>
                                    <p className="cw-realisation-client">{item.client}</p>
                                    <h3 className="cw-realisation-title">{item.title}</h3>
                                    <p className="cw-real-summary">
                                        {item.status === "en cours" ? "Projet en cours. " : ""}
                                        {item.summary}
                                    </p>
                                    {item.siteUrl && (
                                        <a className="btn btn-md btn-border-light cw-realisation-btn" href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                                            <span>{siteLinkLabel}</span>
                                            <i className="fas fa-arrow-right" aria-hidden="true" />
                                            <span className="visually-hidden"> : {item.client} (nouvel onglet)</span>
                                        </a>
                                    )}
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="cw-realisations-all">
                    <Link className="btn btn-md btn-border-light" href="/realisations">
                        Voir toutes les réalisations
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeRealisations;
