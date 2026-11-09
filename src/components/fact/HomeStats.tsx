"use client";
// Section « Projets réalisés » de l'accueil — base visuelle : PartnerV1 (démo home-1) : grand chiffre sur carte du monde à
// gauche, grille à filets de logos clients à droite (ClientLogoGrid, données : content/clients.ts). Chiffres :
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
        <section className="partner-style-one-area default-padding-bottom cw-stats" aria-labelledby="chiffres-titre">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="site-heading col-xl-8 col-lg-9 text-center cw-stats-head">
                        <h4 className="cw-sub">{eyebrow}</h4>
                        <h2 id="chiffres-titre" className="title mb-20">{title}</h2>
                        <p className="cw-stats-text">{text}</p>
                    </div>
                </div>
                <div className="row align-center cw-stats-row">
                    <div className="col-lg-5">
                        <div className="partner-map" style={{ backgroundImage: "url(/assets/img/shape/map.png)" }}>
                            <h2 className="mask-text cw-stats-big">
                                {counter(main)}
                                {main.suffix && <span className="cw-stat-suffix">{main.suffix}</span>}
                            </h2>
                            <h3 className="cw-stats-big-label">{main.label}</h3>
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
