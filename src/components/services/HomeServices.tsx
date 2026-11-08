"use client";
// Section « Nos services » de l'accueil — mise en page de la maquette de référence d'Amadou (capture du
// 08/11/2026) : titre centré, phrase d'intro, un service par carte (icône ronde, titre, description, lien
// « En savoir plus »). 10 services de docs/04 (S01 à S10) : les 5 plus importants (featured) d'abord, les autres
// derrière le bouton « Voir plus de services » (demande d'Amadou). Les cartes masquées restent dans le HTML
// (attribut hidden : ni visibles ni atteignables au clavier tant que la liste n'est pas dépliée).
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { homeServices } from "@/content/home";

const HomeServices = () => {
    const { eyebrow, title, intro, linkLabel, moreLabel, lessLabel, cards } = homeServices;
    const [expanded, setExpanded] = useState(false);
    const listId = useId();
    const listRef = useRef<HTMLUListElement>(null);

    // Les services mis en avant d'abord, les autres ensuite, chacun dans l'ordre de docs/04.
    const ordered = [...cards.filter((c) => c.featured), ...cards.filter((c) => !c.featured)];
    const visibleCount = cards.filter((c) => c.featured).length;

    const toggle = () => {
        const next = !expanded;
        setExpanded(next);
        if (next) {
            // Le focus passe au premier service révélé, pour que le clavier et le lecteur d'écran suivent.
            requestAnimationFrame(() => {
                listRef.current?.querySelectorAll<HTMLElement>("li:not([hidden]) a")[visibleCount]?.focus();
            });
        }
    };

    return (
        <section id="nos-services" className="default-padding bottom-less bg-gray cw-services" aria-labelledby="services-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="services-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-services-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul id={listId} ref={listRef} className="row justify-content-center list-unstyled m-0">
                    {ordered.map((card, index) => (
                        <li key={card.href} className="col-lg-4 col-md-6 mb-30 d-flex" hidden={!expanded && index >= visibleCount}>
                            <article className="cw-service-card">
                                <div className="cw-service-icon" aria-hidden="true">
                                    <i className={card.icon} />
                                </div>
                                <h3 className="cw-service-title">{card.title}</h3>
                                <p>{card.text}</p>
                                <Link className="cw-service-link" href={card.href}>
                                    {linkLabel}
                                    <span className="visually-hidden"> sur {card.title}</span>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
                <div className="cw-services-more">
                    <button type="button" className="btn btn-border-theme btn-md radius" aria-expanded={expanded} aria-controls={listId} onClick={toggle}>
                        {expanded ? lessLabel : `${moreLabel} (${cards.length - visibleCount})`}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
