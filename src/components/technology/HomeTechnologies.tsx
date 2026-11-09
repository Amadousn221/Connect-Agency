// Section « Technologies » de l'accueil : deux lignes de logos en défilement continu lent, en sens opposés, avec fondu
// sur les bords (masque CSS). Composant sans état, rendu côté serveur ; aucune interaction : les logos ne sont ni des
// liens ni des boutons. Pause au survol et mode sans animation (prefers-reduced-motion) gérés en CSS (connect-web.css).
// Boucle sans saut : chaque ligne contient 2 × REPEATS séries identiques, la piste glisse de la moitié de sa largeur.
// Seule la première série est lue par les lecteurs d'écran ; les autres sont masquées (aria-hidden).
import Image from "next/image";
import type { CSSProperties } from "react";
import { technologiesSection, technologyRows, type Technology } from "@/content/technologies";

const REPEATS = 5; // la demi-piste doit dépasser la largeur de l'écran pour qu'aucun vide n'apparaisse
const SET_COUNT = REPEATS * 2;

const TechRow = ({ items, reverse, label, duration }: { items: Technology[]; reverse: boolean; label: string; duration: number }) => {
    const logos = items.filter((item) => item.file);
    if (logos.length === 0) return null;

    return (
        <div className="cw-tech-row">
            <div className={`cw-tech-track${reverse ? " cw-tech-reverse" : ""}`} style={{ "--cw-tech-duration": `${duration}s` } as CSSProperties}>
                {Array.from({ length: SET_COUNT }, (_, setIndex) => {
                    const primary = setIndex === 0;
                    return (
                        <ul key={setIndex} className="cw-tech-set" {...(primary ? { "aria-label": label } : { "aria-hidden": true })}>
                            {logos.map((tech) => (
                                <li key={tech.name} style={{ "--cw-h": tech.height } as CSSProperties}>
                                    <Image
                                        src={`/assets/img/technologies/${tech.file}`}
                                        alt={primary ? tech.name : ""}
                                        width={Math.round(tech.height * tech.ratio)}
                                        height={tech.height}
                                        draggable={false}
                                        unoptimized
                                    />
                                </li>
                            ))}
                        </ul>
                    );
                })}
            </div>
        </div>
    );
};

const HomeTechnologies = () => {
    const { eyebrow, titleLine, titleAccent, text, listLabels } = technologiesSection;

    return (
        <section id="technologies" className="default-padding cw-tech" aria-labelledby="technologies-titre">
            <div className="container">
                <div className="cw-tech-head">
                    <h4 className="cw-sub">{eyebrow}</h4>
                    <h2 id="technologies-titre" className="title cw-tech-title">
                        {titleLine} <span className="cw-tech-accent">{titleAccent}</span>
                    </h2>
                    <p>{text}</p>
                </div>
            </div>
            <div className="cw-tech-rows">
                <TechRow items={technologyRows[0]} reverse={false} label={listLabels[0]} duration={90} />
                <TechRow items={technologyRows[1]} reverse label={listLabels[1]} duration={82} />
            </div>
        </section>
    );
};

export default HomeTechnologies;
