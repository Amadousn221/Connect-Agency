"use client";
// Section « Pôles » de l'accueil — base visuelle : ServiceV6 (démo home-6), choisie par Amadou le 08/11/2026.
// Mise en slider (Swiper, déjà dans la template) à la demande d'Amadou : défilement manuel uniquement
// (docs/09 §4 : pas de défilement automatique sans pause), flèches et puces cliquables, clavier.
// Icônes : traits fins (Font Awesome Light) dans une petite tuile arrondie, à la demande d'Amadou.
// Un seul lien explicite par carte (« Voir le pôle ») ; carte mise en avant au survol et au focus.
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { homePoles } from "@/content/home";

const HomePoles = () => {
    const { eyebrow, titleLines, intro, linkLabel, cards } = homePoles;
    const [active, setActive] = useState(0);

    return (
        <section className="services-style-six-area bottom-less bg-gray default-padding-top cw-poles" aria-labelledby="poles-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="poles-titre" className="title">
                                {titleLines[0]}
                                <br />
                                {titleLines[1]}
                            </h2>
                            <div className="devider" />
                            <p className="cw-poles-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="services-style-six-items">
                    <Swiper
                        className="cw-poles-slider"
                        modules={[Navigation, Pagination, Keyboard, A11y]}
                        slidesPerView={1}
                        spaceBetween={24}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        keyboard={{ enabled: true, onlyInViewport: true }}
                        navigation={{ prevEl: ".cw-poles-prev", nextEl: ".cw-poles-next" }}
                        pagination={{ el: ".cw-poles-pagination", clickable: true }}
                        a11y={{
                            prevSlideMessage: "Pôle précédent",
                            nextSlideMessage: "Pôle suivant",
                            paginationBulletMessage: "Aller au pôle {{index}}",
                            slideLabelMessage: "{{index}} sur {{slidesLength}}",
                        }}
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide
                                key={card.href}
                                className={`services-style-six-item hover-active-item ${active === index ? "active" : ""}`}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                            >
                                <div className="item">
                                    <div className="cw-pole-icon" aria-hidden="true">
                                        <i className={card.icon} />
                                    </div>
                                    <h3 className="cw-pole-title">{card.title}</h3>
                                    <p>{card.need}</p>
                                    <ul aria-label="Prestations">
                                        {card.services.map((service) => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                    <Link className="cw-pole-link" href={card.href}>
                                        {linkLabel}
                                        <span className="visually-hidden"> {card.title}</span>
                                        <i className="fas fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="cw-poles-controls">
                        <button type="button" className="cw-poles-prev" aria-label="Pôle précédent">
                            <i className="fal fa-arrow-left" aria-hidden="true" />
                        </button>
                        <div className="cw-poles-pagination" />
                        <button type="button" className="cw-poles-next" aria-label="Pôle suivant">
                            <i className="fal fa-arrow-right" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePoles;
