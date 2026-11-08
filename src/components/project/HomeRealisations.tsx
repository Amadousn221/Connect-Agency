"use client";
// Section « Réalisations » de l'accueil — base visuelle : ProjectV4 (démo /project-2), choisie par Amadou le
// 08/11/2026 : cartes à deux colonnes (visuel, catégorie, titre, texte, lien) dans un slider Swiper manuel.
// Règles de docs/08 : seules les réalisations publiées et autorisées s'affichent ; la section est masquée tant que
// moins de 2 cas sont publiables (D26). En développement local uniquement, un aperçu de mise en page avec du contenu
// fictif, clairement signalé, remplace la section masquée ; il n'existe pas en production.
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { previewRealisations, realisations, realisationsSection, SHOW_EXAMPLES_IN_PRODUCTION } from "@/content/realisations";

const HomeRealisations = () => {
    const { eyebrow, title, intro, linkLabel, minPublished } = realisationsSection;
    const published = realisations.filter((r) => r.published);
    const showExamples = published.length < minPublished && (process.env.NODE_ENV === "development" || SHOW_EXAMPLES_IN_PRODUCTION);
    // Le bandeau explicatif n'existe qu'en développement local.
    const isPreview = showExamples && process.env.NODE_ENV === "development";
    const items = published.length >= minPublished ? published : showExamples ? previewRealisations : [];

    if (items.length === 0) return null;

    return (
        <section className="project-style-two-area default-padding bg-gray cw-realisations" aria-labelledby="realisations-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : contenu fictif visible seulement en développement local. Cette section reste masquée tant
                        que moins de {minPublished} réalisations ne sont pas autorisées (docs/08).
                    </p>
                )}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="realisations-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-realisations-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    className="cw-realisations-slider"
                    modules={[Navigation, Pagination, Keyboard, A11y]}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{ 1100: { slidesPerView: 2, spaceBetween: 30 } }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    navigation={{ prevEl: ".cw-realisations-prev", nextEl: ".cw-realisations-next" }}
                    pagination={{ el: ".cw-realisations-pagination", clickable: true }}
                    a11y={{
                        prevSlideMessage: "Réalisation précédente",
                        nextSlideMessage: "Réalisation suivante",
                        paginationBulletMessage: "Aller à la réalisation {{index}}",
                        slideLabelMessage: "{{index}} sur {{slidesLength}}",
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.slug}>
                            <article className="project-style-two">
                                <div className="thumb">
                                    {item.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={item.image} alt="" />
                                    ) : (
                                        <div className="cw-realisation-visual" aria-hidden="true">
                                            <i className="fal fa-browser" />
                                        </div>
                                    )}
                                </div>
                                <div className="content">
                                    <span>{item.category}</span>
                                    <h3 className="cw-realisation-title">{item.title}</h3>
                                    <p>
                                        {item.status === "en cours" ? "Projet en cours. " : ""}
                                        {item.summary}
                                    </p>
                                    {item.pageReady && (
                                        <Link href={`/realisations/${item.slug}`} className="btn-arrow">
                                            {linkLabel}
                                            <span className="visually-hidden"> : {item.title}</span>
                                        </Link>
                                    )}
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="cw-realisations-controls">
                    <button type="button" className="cw-realisations-prev" aria-label="Réalisation précédente">
                        <i className="fal fa-arrow-left" aria-hidden="true" />
                    </button>
                    <div className="cw-realisations-pagination" />
                    <button type="button" className="cw-realisations-next" aria-label="Réalisation suivante">
                        <i className="fal fa-arrow-right" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeRealisations;
