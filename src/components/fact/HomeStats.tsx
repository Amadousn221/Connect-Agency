"use client";
// Section « Nos chiffres » de l'accueil — base visuelle : PartnerV1 (démo home-1) : grand chiffre sur carte du monde à
// gauche, grille à filets à droite. Les logos partenaires sont remplacés par les autres indicateurs (aucun partenaire
// n'est nommé). Compteurs : react-countup du template. Icônes en SVG intégrés, aucune nouvelle dépendance.
// Les indicateurs sans valeur confirmée (value: null) ne sont pas affichés.
import CountUp from "react-countup";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import { homeStats } from "@/content/home";
import { MIN_PARTNERS, partners, previewPartners } from "@/content/partners";

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
    const published = partners.filter((partner) => partner.published);
    const isPreview = published.length < MIN_PARTNERS && process.env.NODE_ENV === "development";
    const logos = published.length >= MIN_PARTNERS ? published.slice(0, 6) : isPreview ? previewPartners : [];
    const [main, ...others] = visible;
    if (!main) return null;

    const counter = (item: (typeof visible)[number]) => (
        <CountUp end={item.value as number} duration={reduceMotion ? 0 : 2} enableScrollSpy scrollSpyOnce />
    );

    return (
        <section className="partner-style-one-area default-padding-bottom cw-stats" aria-labelledby="chiffres-titre">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <h4 className="sub-title">{eyebrow}</h4>
                        <h2 id="chiffres-titre" className="title mb-20">{title}</h2>
                        <p className="cw-stats-text">{text}</p>
                    </div>
                </div>
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : logos de démonstration visibles seulement en développement local. La grille reste masquée
                        tant que moins de {MIN_PARTNERS} logos ne sont pas autorisés.
                    </p>
                )}
                <div className="row align-center cw-stats-row">
                    <div className={logos.length ? "col-lg-5" : "col-12"}>
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
                    {logos.length > 0 && (
                        <div className="col-lg-6 offset-lg-1">
                            <div className="partner-items">
                                <ul>
                                    {logos.map((partner, index) => (
                                        <li key={`${partner.name}-${index}`}>
                                            <Image src={partner.logo} alt={isPreview ? "" : partner.name} width={256} height={256} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeStats;
