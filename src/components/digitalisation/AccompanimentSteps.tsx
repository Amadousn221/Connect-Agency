"use client";
// Feuille de route « Notre accompagnement » : quatre étapes empilées, chacune avec numéro, icône, titre et description
// courte toujours visibles ; le détail (ce que nous réalisons, ce que le client valide, livrable) se déplie au clic.
// Accordéon accessible : boutons aria-expanded / aria-controls, régions étiquetées, flèches haut/bas, Début, Fin.
// Une seule étape ouverte à la fois, la première par défaut ; le contenu déplié est de l'information, pas un effet.
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { digitalisationPage } from "@/content/digitalisation";

const AccompanimentSteps = () => {
    const { steps, labels } = digitalisationPage.method;
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
        <ol className="cw-roadmap">
            {steps.map((step, index) => {
                const isOpen = open === index;
                const buttonId = `${baseId}-b-${index}`;
                const panelId = `${baseId}-p-${index}`;
                return (
                    <li key={step.title} className={`cw-road-step ${isOpen ? "is-open" : ""}`}>
                        <h3 className="cw-road-head">
                            <button
                                id={buttonId}
                                ref={(node) => { buttons.current[index] = node; }}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpen(index)}
                                onKeyDown={(event) => onKeyDown(event, index)}
                            >
                                <span className="cw-road-num">{String(index + 1).padStart(2, "0")}</span>
                                <span className="cw-road-icon" aria-hidden="true"><i className={step.icon} /></span>
                                <span className="cw-road-text">
                                    <span className="cw-road-title">{step.title}</span>
                                    <span className="cw-road-short">{step.short}</span>
                                </span>
                                <span className="cw-step-chevron" aria-hidden="true" />
                            </button>
                        </h3>
                        <div id={panelId} role="region" aria-labelledby={buttonId} className="cw-step-panel">
                            <div className="cw-step-panel-inner">
                                <dl className="cw-road-detail">
                                    <div><dt>{labels.do}</dt><dd>{step.do}</dd></div>
                                    <div><dt>{labels.validate}</dt><dd>{step.validate}</dd></div>
                                    <div><dt>{labels.deliverable}</dt><dd>{step.deliverable}</dd></div>
                                </dl>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
};

export default AccompanimentSteps;
