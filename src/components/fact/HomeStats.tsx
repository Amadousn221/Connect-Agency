"use client";
// Section « Nos chiffres » de l'accueil — base : compteurs du template (Counter / react-countup, classes .fun-fact),
// mise en page en cartes blanches à filet bleu. Aucune nouvelle dépendance ; icônes en SVG intégrés.
// Les indicateurs sans valeur confirmée (value: null) ne sont pas affichés.
import CountUp from "react-countup";
import { useSyncExternalStore } from "react";
import { homeStats } from "@/content/home";

const icons: Record<string, React.ReactNode> = {
    briefcase: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>),
    users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" /></>),
    layers: (<><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>),
    calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>),
};

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

    return (
        <section className="default-padding-bottom cw-stats" aria-labelledby="chiffres-titre">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <h4 className="sub-title">{eyebrow}</h4>
                        <h2 id="chiffres-titre" className="title mb-20">{title}</h2>
                        <p className="cw-stats-text">{text}</p>
                    </div>
                </div>
                <ul className="cw-stats-grid" data-count={visible.length}>
                    {visible.map((item) => (
                        <li className="cw-stat" key={item.id}>
                            <span className="cw-stat-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    {icons[item.icon]}
                                </svg>
                            </span>
                            <div className="cw-stat-value">
                                <CountUp end={item.value as number} duration={reduceMotion ? 0 : 2} enableScrollSpy scrollSpyOnce />
                                {item.suffix && <span className="cw-stat-suffix">{item.suffix}</span>}
                            </div>
                            <p className="cw-stat-label">{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeStats;
