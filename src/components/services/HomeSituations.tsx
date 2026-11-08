"use client";
// Section « Situations clients » de l'accueil — base visuelle : ServiceV5 (démo home-5), choisie par Amadou le
// 08/11/2026, avec la mise en page de sa maquette de référence : titre centré, phrase d'intro, cartes à icône
// ronde, lien en bas de carte. 5 cartes : 3 + 2 centrées. Retiré : formes décoratives et pictogrammes de démo.
// Carte mise en avant au survol et au focus clavier ; un seul lien explicite par carte.
import Link from "next/link";
import { useState } from "react";
import { homeSituations } from "@/content/home";

const HomeSituations = () => {
    const { eyebrow, title, intro, linkLabel, cards } = homeSituations;
    const [active, setActive] = useState(0);

    return (
        <section className="services-style-five-area default-padding bottom-less cw-situations" aria-labelledby="situations-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="situations-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-situations-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="row justify-content-center list-unstyled m-0">
                    {cards.map((card, index) => (
                        <li
                            key={card.href}
                            className={`col-xl-4 col-md-6 mb-30 services-style-five hover-active-item ${active === index ? "active" : ""}`}
                            onMouseEnter={() => setActive(index)}
                            onFocus={() => setActive(index)}
                        >
                            <div className="item">
                                <div className="cw-situation-icon" aria-hidden="true">
                                    <i className={card.icon} />
                                </div>
                                <h3 className="cw-situation-title">{card.title}</h3>
                                <p className="cw-situation-problem">{card.problem}</p>
                                <p>{card.text}</p>
                                <Link className="cw-situation-link" href={card.href}>
                                    {linkLabel}
                                    <span className="visually-hidden"> {card.pole}</span>
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeSituations;
