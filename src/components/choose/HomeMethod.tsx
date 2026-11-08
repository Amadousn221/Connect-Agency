"use client";
// Section « Comment nous travaillons » de l'accueil — base visuelle : WhyChooseV3 (démo home-5) : image à gauche,
// contenu à droite. Les quatre étapes sont un accordéon (une seule ouverte, la première par défaut), écrit en React
// avec attributs ARIA et pilotage clavier (flèches haut/bas, Début, Fin). Sur ordinateur, la colonne image est
// étirée à la hauteur du contenu (object-fit: cover), voir .cw-method dans connect-web.css.
// Textes fournis par Amadou le 08/11/2026. Image : gabarit gris du template en attendant un visuel Connect Web.
import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { homeMethod } from "@/content/home";

const HomeMethod = () => {
    const { title, intro, rolePrefix, steps, image } = homeMethod;
    const [open, setOpen] = useState(0);
    const baseId = useId();
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const last = steps.length - 1;
        const target =
            event.key === "ArrowDown" ? (index === last ? 0 : index + 1)
            : event.key === "ArrowUp" ? (index === 0 ? last : index - 1)
            : event.key === "Home" ? 0
            : event.key === "End" ? last
            : null;
        if (target === null) return;
        event.preventDefault();
        buttons.current[target]?.focus();
    };

    return (
        <section className="default-padding cw-method" aria-labelledby="methode-titre">
            <div className="container">
                <div className="row cw-method-row">
                    <div className="col-lg-5">
                        <div className="cw-method-thumb">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="cw-method-info">
                            <h2 id="methode-titre" className="title">{title}</h2>
                            <p className="cw-method-intro">{intro}</p>
                            <div className="cw-steps">
                                {steps.map((step, index) => {
                                    const isOpen = open === index;
                                    const buttonId = `${baseId}-bouton-${index}`;
                                    const panelId = `${baseId}-panneau-${index}`;
                                    return (
                                        <div className={`cw-step ${isOpen ? "is-open" : ""}`} key={step.title}>
                                            <h3 className="cw-step-header">
                                                <button
                                                    id={buttonId}
                                                    ref={(node) => { buttons.current[index] = node; }}
                                                    type="button"
                                                    aria-expanded={isOpen}
                                                    aria-controls={panelId}
                                                    onClick={() => setOpen(index)}
                                                    onKeyDown={(event) => onKeyDown(event, index)}
                                                >
                                                    <span className="cw-step-number">{String(index + 1).padStart(2, "0")}</span>
                                                    <span className="cw-step-title">{step.title}</span>
                                                    <span className="cw-step-chevron" aria-hidden="true" />
                                                </button>
                                            </h3>
                                            <div id={panelId} role="region" aria-labelledby={buttonId} className="cw-step-panel">
                                                <div className="cw-step-panel-inner">
                                                    <p>{step.text}</p>
                                                    <p className="cw-method-role">
                                                        <strong>{rolePrefix}</strong> {step.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMethod;
