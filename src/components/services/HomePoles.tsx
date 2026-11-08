"use client";
// Section « Pôles » de l'accueil — base visuelle : ServiceV6 (démo home-6), choisie par Amadou le 08/11/2026.
// Adaptations : 5 cartes (3 + 2 centrées, docs/06 §1 section 3) ; icônes Font Awesome du thème à la place des
// 3 pictogrammes abstraits de la démo ; un seul lien explicite par carte (« Voir le pôle ») au lieu du titre-lien ;
// carte mise en avant aussi au focus clavier, pas seulement au survol.
import Link from "next/link";
import { useState } from "react";
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
                    <ul className="row justify-content-center list-unstyled m-0">
                        {cards.map((card, index) => (
                            <li
                                key={card.href}
                                className={`col-xl-4 col-md-6 mb-30 services-style-six-item hover-active-item ${active === index ? "active" : ""}`}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                            >
                                <div className="item">
                                    <div className="icon cw-pole-icon" aria-hidden="true">
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomePoles;
