"use client";
// Section « En pratique » de la page Digitalisation : module compact et interactif pour explorer des exemples de
// connexion entre outils. Trois scénarios (boutons, aria-pressed) x quatre étapes (liste à gauche) ; le panneau de
// droite détaille l'étape choisie. Aucun défilement automatique, aucun changement au survol, aucune bibliothèque
// ajoutée. Les parcours sont des exemples illustratifs (jamais des réalisations clients). Le bouton final mène au
// formulaire #contact : data-cw-service présélectionne le service et data-cw-context transmet le scénario
// (voir DigitalContactForm, qui n'écrase jamais un texte saisi). Textes : content/digitalisation.ts (useCases).
import { useId, useState } from "react";
import { digitalisationPage } from "@/content/digitalisation";

const pad = (value: number) => String(value).padStart(2, "0");

const UseCaseTabs = () => {
    const { eyebrow, titleLines, intro, selectorLabel, stepsLabel, illustrative, stepWord, next, restart, cta, scenarios } =
        digitalisationPage.useCases;
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const baseId = useId();

    const scenario = scenarios[scenarioIndex];
    const step = scenario.steps[stepIndex];
    const total = scenario.steps.length;
    const isLast = stepIndex === total - 1;
    const panelId = `${baseId}-panel`;
    const counter = `${stepWord} ${pad(stepIndex + 1)} / ${pad(total)}`;
    const contextForForm = `${cta.contextPrefix} : ${scenario.label} (${scenario.context}).`;

    const chooseScenario = (index: number) => {
        setScenarioIndex(index);
        setStepIndex(0);
    };

    return (
        <div className="cw-pr">
            {/* 1. En-tête compact : titre à gauche, texte court à droite (sous le titre sur mobile) */}
            <div className="cw-pr-head">
                <div>
                    <p className="sub-title cw-dg-sub">{eyebrow}</p>
                    <h2 id="dg-pratique" className="cw-pr-title">
                        {titleLines[0]}
                        <span className="cw-pr-title-accent">{titleLines[1]}</span>
                    </h2>
                </div>
                <p className="cw-pr-intro">{intro}</p>
            </div>

            {/* 2. Sélecteur de scénarios */}
            <div className="cw-pr-scenarios" role="group" aria-label={selectorLabel}>
                {scenarios.map((item, index) => (
                    <button
                        key={item.id}
                        type="button"
                        className="cw-pr-scenario"
                        aria-pressed={scenarioIndex === index}
                        aria-controls={panelId}
                        onClick={() => chooseScenario(index)}
                    >
                        <i className={item.icon} aria-hidden="true" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>

            {/* 3. Module en deux colonnes : étapes (1/3) et détail (2/3) */}
            <div className="cw-pr-module">
                <ol className="cw-pr-steps" aria-label={`${stepsLabel} : ${scenario.label}`}>
                    {scenario.steps.map((item, index) => (
                        <li key={item.short}>
                            <button
                                type="button"
                                className="cw-pr-step"
                                aria-pressed={stepIndex === index}
                                aria-controls={panelId}
                                onClick={() => setStepIndex(index)}
                            >
                                <span className="cw-pr-step-num" aria-hidden="true">{pad(index + 1)}</span>
                                <i className={item.icon} aria-hidden="true" />
                                <span className="cw-pr-step-title">{item.short}</span>
                                <span className="cw-pr-step-arrow" aria-hidden="true">→</span>
                            </button>
                        </li>
                    ))}
                </ol>

                <div id={panelId} className="cw-pr-panel">
                    {/* Annonce discrète du changement pour les lecteurs d'écran */}
                    <p className="visually-hidden" role="status">
                        {`${scenario.label}. ${stepWord} ${stepIndex + 1} sur ${total} : ${step.short}. ${step.title}`}
                    </p>
                    <div className="cw-pr-panel-top">
                        <span className="cw-pr-context">{scenario.context}</span>
                        <span className="cw-pr-note">{illustrative}</span>
                    </div>
                    <div className="cw-pr-body" key={`${scenario.id}-${stepIndex}`}>
                        <span className="cw-pr-body-icon" aria-hidden="true"><i className={step.icon} /></span>
                        <h3 className="cw-pr-body-title">{step.title}</h3>
                        <p className="cw-pr-body-text">{step.text}</p>
                        <dl className="cw-pr-facts">
                            {step.facts.map((fact) => (
                                <div key={fact.label}>
                                    <dt>{fact.label}</dt>
                                    <dd>{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="cw-pr-panel-foot">
                        <span className="cw-pr-counter" aria-hidden="true">{counter}</span>
                        <button
                            type="button"
                            className="cw-pr-next"
                            onClick={() => setStepIndex(isLast ? 0 : stepIndex + 1)}
                        >
                            {isLast ? restart : next} <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Appel à l'action vers le formulaire existant (aucun faux envoi ici) */}
            <div className="cw-pr-cta">
                <div>
                    <p className="cw-pr-cta-title">{cta.title}</p>
                    <p className="cw-pr-cta-text">{cta.text}</p>
                </div>
                <a className="cw-pr-cta-btn" href="#contact" data-cw-service={cta.service} data-cw-context={contextForForm}>
                    {cta.label} <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    );
};

export default UseCaseTabs;
