"use client";
// Section « Projets réalisés » de l'accueil — base visuelle : PartnerV1 (démo home-1) : grand chiffre à gauche (la carte
// du monde du thème est retirée, 10/11/2026), grille à filets de logos clients à droite (ClientLogoGrid, données : content/clients.ts). Chiffres :
// content/home.ts (homeStats), indépendants du nombre de logos. Compteurs : react-countup du template.
// Les indicateurs sans valeur confirmée (value: null) ne sont pas affichés.
import CountUp from "react-countup";
import { useSyncExternalStore } from "react";
import { homeStats } from "@/content/home";
import { clientLogos } from "@/content/clients";
import ClientLogoGrid from "./ClientLogoGrid";

const HomeStats = () => {
    const { eyebrow, title, text, items } = homeStats;
    const visible = items.filter((item) => item.value !== null);
    const reduceMotion = useSyncExternalStore(
        (notify) => {
            const query = window.matchMedia("(prefers-reduced-motion: reduce)");
            query.addEventListener("change", notify);
            return () => query.removeEventListener("change", notify);
        },
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false,
    );
    const [main, ...others] = visible;
    if (!main) return null;

    const counter = (item: (typeof visible)[number]) => (
        <CountUp end={item.value as number} duration={reduceMotion ? 0 : 2} enableScrollSpy scrollSpyOnce />
    );

    return (
        <section className="default-padding cw-stats" aria-labelledby="chiffres-titre">
            <div className="container">
                <div className="cw-stats-head site-heading">
                    <h4 className="cw-sub">{eyebrow}</h4>
                    <h2 id="chiffres-titre" className="title">{title}</h2>
                    <p className="cw-stats-text">{text}</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="cw-stats-figure">
                            <p className="cw-stats-big">
                                {counter(main)}
                                {main.suffix && <span className="cw-stat-suffix">{main.suffix}</span>}
                            </p>
                            <p className="cw-stats-big-label">{main.label}</p>
                        </div>
                        {others.length > 0 && (
                            <dl className="cw-stats-minimal">
                                {others.map((item) => (
                                    <div key={item.id}>
                                        <dt>{item.label}</dt>
                                        <dd>
                                            {counter(item)}
                                            {item.suffix && <span className="cw-stat-suffix">{item.suffix}</span>}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <ClientLogoGrid logos={clientLogos} reduceMotion={reduceMotion} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeStats;
