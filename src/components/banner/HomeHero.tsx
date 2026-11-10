"use client";
// Hero de l'accueil — base visuelle : BannerV1 (démo home-1), quatre slides alimentées par homeHero.slides (un par
// pôle). Un seul composant Swiper en fondu : la hauteur est celle de la plus grande slide (pas de saut).
// Défilement automatique toutes les 6 s, sans flèches ni puces (demande d'Amadou, 08/11/2026) ; glissement au doigt
// ou à la souris, flèches du clavier. Pause au survol et quand le focus est dans le hero (le texte ne défile pas sous
// le curseur ni sous un lecteur d'écran) ; désactivé et sans transition si l'utilisateur demande moins d'animations.
// Un seul <h1> (slide 1) ; les autres titres sont des <h2>.
import Image from "next/image";
import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { expertiseHref, expertises } from "@/content/expertises";
import { homeHero } from "@/content/home";

const HomeHero = () => {
    const { slides, secondaryCta, backgroundImage } = homeHero;
    const reduceMotion = useSyncExternalStore(
        (notify) => {
            const query = window.matchMedia("(prefers-reduced-motion: reduce)");
            query.addEventListener("change", notify);
            return () => query.removeEventListener("change", notify);
        },
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false,
    );

    const swiperRef = useRef<SwiperInstance | null>(null);

    return (
        <section
            className="overflow-hidden text-light cw-hero"
            aria-roledescription="carrousel"
            aria-label="Nos quatre pôles d'expertise"
            onFocusCapture={() => swiperRef.current?.autoplay?.pause()}
            onBlurCapture={() => swiperRef.current?.autoplay?.resume()}
        >
            <div
                className={`banner-thumb bg-cover ${backgroundImage ? "shadow theme" : "cw-hero-gradient"}`}
                style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
                aria-hidden="true"
            />
            <Swiper
                key={reduceMotion ? "static" : "animated"}
                className="cw-hero-slider"
                modules={[A11y, Autoplay, EffectFade, Keyboard]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={reduceMotion ? 0 : 700}
                loop={false}
                // Après la dernière slide, retour à la première (sans boucle, donc sans slides dupliquées).
                rewind
                grabCursor
                autoplay={reduceMotion ? false : { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                a11y={{
                    slideLabelMessage: "{{index}} sur {{slidesLength}}",
                }}
            >
                {slides.map((slide, index) => {
                    const expertise = expertises.find((e) => e.id === slide.pole);
                    const href = expertise ? expertiseHref(expertise) : "/#nos-expertises";
                    const Title = index === 0 ? "h1" : "h2";
                    return (
                        <SwiperSlide key={slide.pole}>
                            <Image
                                className="cw-hero-photo"
                                src={slide.image}
                                alt=""
                                fill
                                sizes="100vw"
                                priority={index === 0}
                            />
                            <div className="cw-hero-overlay" aria-hidden="true" />
                            <div className="container">
                                <div className="cw-hero-content">
                                    <p className="cw-hero-eyebrow">
                                        {expertise && <span className="cw-hero-num">{expertise.number}</span>}
                                        <span className="cw-hero-eyebrow-label">{slide.eyebrow}</span>
                                    </p>
                                    <Title className="cw-hero-title">{slide.title}</Title>
                                    <p className="cw-hero-text">{slide.text}</p>
                                    <div className="cw-hero-buttons">
                                        <Link className="btn btn-md btn-theme" href={href}>
                                            {slide.cta}
                                        </Link>
                                        <Link className="btn btn-md btn-border-light" href={secondaryCta.href}>
                                            {secondaryCta.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default HomeHero;
