"use client";
// Section « Réalisations » de l'accueil — base visuelle : ProjectV1 (démo home, « Completed Projects »), choisie par
// Amadou le 09/11/2026 en remplacement de ProjectV4 : bandeau dégradé, titre à gauche, compteur « 1/N » avec flèches,
// grande capture à gauche et carte d'information qui la chevauche. Mêmes règles de docs/08 : seules les réalisations
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
        <section id="realisations" className="project-style-one-area default-padding bg-gradient bottom-shape-light cw-realisations" aria-labelledby="realisations-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : contenu fictif visible seulement en développement local. Cette section reste masquée tant
                        que moins de {minPublished} réalisations ne sont pas autorisées (docs/08).
                    </p>
                )}
                <div className="heading-left text-light">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="content-left">
                                <h4 className="cw-sub">{eyebrow}</h4>
                                <h2 id="realisations-titre" className="title">{title}</h2>
                                <p className="cw-realisations-intro">{intro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            className="project-style-one-carousel cw-realisations-slider"
                            direction="horizontal"
                            loop={items.length > 1}
                            grabCursor
                            autoplay={reduceMotion ? false : { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                            keyboard={{ enabled: true, onlyInViewport: true }}
                            pagination={{ el: ".project-pagination", type: "fraction" }}
                            navigation={{ nextEl: ".project-button-next", prevEl: ".project-button-prev" }}
                            modules={[Navigation, Keyboard, Autoplay, Pagination, A11y]}
                            a11y={{
                                prevSlideMessage: "Réalisation précédente",
                                nextSlideMessage: "Réalisation suivante",
                                slideLabelMessage: "{{index}} sur {{slidesLength}}",
                            }}
                        >
                            {items.map((item) => (
                                <SwiperSlide key={item.slug}>
                                    <article className="project-style-one">
                                        <div className="row align-bottom">
                                            <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
                                                <div className="thumb">
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
                                            </div>
                                            <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
                                                <div className="info">
                                                    <span>{item.category}</span>
                                                    <p className="cw-realisation-client">{item.client}</p>
                                                    <h3 className="cw-realisation-title">{item.title}</h3>
                                                    <p>
                                                        {item.status === "en cours" ? "Projet en cours. " : ""}
                                                        {item.summary}
                                                    </p>
                                                    {item.siteUrl && (
                                                        <a className="btn btn-theme btn-md cw-realisation-btn" href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                                                            <span>{siteLinkLabel}</span>
                                                            <i className="fas fa-arrow-right" aria-hidden="true" />
                                                            <span className="visually-hidden"> : {item.client} (nouvel onglet)</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                            <div className="project-swiper-nav">
                                <div className="project-pagination" aria-hidden="true" />
                                <div className="project-button-prev" role="button" tabIndex={0} aria-label="Réalisation précédente" />
                                <div className="project-button-next" role="button" tabIndex={0} aria-label="Réalisation suivante" />
                            </div>
                        </Swiper>
                        <div className="text-center cw-realisations-all">
                            <Link className="btn btn-border-theme btn-md" href="/realisations">
                                Voir toutes les réalisations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRealisations;
