"use client";
// Section « Nos expertises » de l'accueil — base visuelle : FeatureV2 (démo home-3), choisie par Amadou le
// 08/11/2026, mise en slider à sa demande (Swiper, déjà dans la template). Défilement manuel uniquement
// (docs/09 §4 : pas de défilement automatique sans pause) ; flèches, puces cliquables et clavier.
// Cartes : zone visuelle en haut qui s'estompe, tuile d'icône qui chevauche, titre, besoin, prestations en
// badges en ligne, lien « Voir le pôle ». Les photos de la démo sont des gabarits gris : la zone visuelle
// est un dégradé du thème tant qu'aucune photo Connect Web n'est fournie.
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { homePoles } from "@/content/home";

const HomeExpertises = () => {
    const { eyebrow, titleLines, intro, linkLabel, cards } = homePoles;

    return (
        <section className="feature-style-two-area default-padding cw-expertises" aria-labelledby="expertises-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="expertises-titre" className="title">
                                {titleLines[0]}
                                <br />
                                {titleLines[1]}
                            </h2>
                            <div className="devider" />
                            <p className="cw-expertises-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    className="cw-expertises-slider"
                    modules={[Navigation, Pagination, Keyboard, A11y]}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    navigation={{ prevEl: ".cw-expertises-prev", nextEl: ".cw-expertises-next" }}
                    pagination={{ el: ".cw-expertises-pagination", clickable: true }}
                    a11y={{
                        prevSlideMessage: "Pôle précédent",
                        nextSlideMessage: "Pôle suivant",
                        paginationBulletMessage: "Aller au pôle {{index}}",
                        slideLabelMessage: "{{index}} sur {{slidesLength}}",
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={card.href}>
                            <article className="feature-style-two">
                                <div className="thumb">
                                    <div className="cw-expertise-visual" aria-hidden="true">
                                        <span className="cw-expertise-family">{card.family}</span>
                                        <span className={`cw-expertise-bigicon ${card.icon}`} />
                                    </div>
                                </div>
                                <div className="info">
                                    <span className={`icon cw-tone-${(index % 5) + 1}`} aria-hidden="true">
                                        <span className={card.icon} />
                                    </span>
                                    <h3 className="cw-expertise-title">{card.title}</h3>
                                    <p>{card.need}</p>
                                    <ul className="cw-expertise-services" aria-label="Prestations">
                                        {card.services.map((service) => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                    <Link className="cw-expertise-link" href={card.href}>
                                        {linkLabel}
                                        <span className="visually-hidden"> {card.title}</span>
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="cw-expertises-controls">
                    <button type="button" className="cw-expertises-prev" aria-label="Pôle précédent">
                        <i className="fal fa-arrow-left" aria-hidden="true" />
                    </button>
                    <div className="cw-expertises-pagination" />
                    <button type="button" className="cw-expertises-next" aria-label="Pôle suivant">
                        <i className="fal fa-arrow-right" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeExpertises;
