"use client";
// Accordéon accessible (même modèle que l'accordéon « Comment nous travaillons » de l'accueil, classes .cw-step) :
// boutons aria-expanded / aria-controls, régions étiquetées, flèches haut/bas, Début et Fin. Toutes les questions
// peuvent être refermées ; la première est ouverte par défaut.
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

interface Item {
    q: string;
    a: string;
}

const FaqAccordion = ({ items }: { items: Item[] }) => {
    const [open, setOpen] = useState<number | null>(0);
    const baseId = useId();
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const last = items.length - 1;
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
        <div className="cw-steps cw-faq">
            {items.map((item, index) => {
                const isOpen = open === index;
                const buttonId = `${baseId}-q-${index}`;
                const panelId = `${baseId}-r-${index}`;
                return (
                    <div className={`cw-step ${isOpen ? "is-open" : ""}`} key={item.q}>
                        <h3 className="cw-step-header">
                            <button
                                id={buttonId}
                                ref={(node) => { buttons.current[index] = node; }}
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpen(isOpen ? null : index)}
                                onKeyDown={(event) => onKeyDown(event, index)}
                            >
                                <span className="cw-step-title">{item.q}</span>
                                <span className="cw-step-chevron" aria-hidden="true" />
                            </button>
                        </h3>
                        <div id={panelId} role="region" aria-labelledby={buttonId} className="cw-step-panel" hidden={!isOpen}>
                            <div className="cw-step-panel-inner">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FaqAccordion;
