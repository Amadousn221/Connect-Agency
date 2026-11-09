"use client";
// Section « Nos expertises » de l'accueil — base visuelle : FeatureV2 (démo home-3), choisie par Amadou le
// 08/11/2026. Quatre pôles (décision D40) en slider Swiper : 3 cartes visibles à la fois sur ordinateur (le 4e pôle
// s'atteint par défilement automatique ou au clavier), 2 sur tablette ; sur mobile (< 768 px) le slider est désactivé
// et les cartes s'affichent en grille (CSS). Défilement automatique toutes les 6 s, sans flèches ni puces
// (modifie docs/09 §4 : à répercuter). Données : src/content/expertises.ts (source unique).
// Les photos de la démo sont des gabarits gris : le bandeau est un dégradé du thème.
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { expertiseHref, expertises, expertisesSection } from "@/content/expertises";
import { expertiseCards } from "@/content/home";

const HomeExpertises = () => {
    const { eyebrow, title, intro, subServicesLabel } = expertisesSection;
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
        <section id="nos-expertises" className="feature-style-two-area default-padding cw-expertises" aria-labelledby="expertises-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="site-heading text-center">
                            <h4 className="cw-sub">{eyebrow}</h4>
                            <h2 id="expertises-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-expertises-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    key={reduceMotion ? "static" : "animated"}
                    className="cw-expertises-slider"
                    modules={[Autoplay, Keyboard, A11y]}
                    // Défilement automatique toutes les 6 s ; retour à la première carte après la dernière (sans boucle).
                    autoplay={reduceMotion ? false : { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                    rewind
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        0: { enabled: false },
                        768: { enabled: true, slidesPerView: 2, spaceBetween: 24 },
                        1200: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    a11y={{
                        slideLabelMessage: "{{index}} sur {{slidesLength}}",
                    }}
                >
                    {expertises.map((expertise, index) => {
                        const card = expertiseCards[expertise.id];
                        return (
                        <SwiperSlide key={expertise.id}>
                            <article className="feature-style-two" aria-labelledby={`expertise-${expertise.id}`}>
                                <div className="thumb">
                                    <div className="cw-expertise-visual" aria-hidden="true">
                                        <Image className="cw-expertise-photo" src={card.photo} alt="" fill sizes="(min-width: 1200px) 400px, (min-width: 768px) 50vw, 100vw" />
                                        <span className="cw-expertise-veil" />
                                        <span className="cw-expertise-number">Pôle {expertise.number}</span>
                                        <span className={`cw-expertise-bigicon ${expertise.icon}`} />
                                    </div>
                                </div>
                                <div className="info">
                                    <span className={`icon cw-tone-${(index % 5) + 1}`} aria-hidden="true">
                                        <span className={expertise.icon} />
                                    </span>
                                    <h3 id={`expertise-${expertise.id}`} className="cw-expertise-title">{card.cardTitle}</h3>
                                    <p className="cw-expertise-desc">{expertise.description}</p>
                                    <ul className="cw-arrow-list cw-expertise-services" aria-label={`${subServicesLabel} : ${expertise.shortTitle}`}>
                                        {card.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <Link className="cw-expertise-link" href={expertiseHref(expertise)}>
                                        {card.cta}
                                        <span className="visually-hidden"> : {expertise.shortTitle}</span>
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeExpertises;
