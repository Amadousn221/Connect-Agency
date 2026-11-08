"use client";
// Hero de l'accueil — base visuelle : BannerV1 (démo home-1), quatre slides alimentées par homeHero.slides (un par
// pôle). Un seul composant Swiper en fondu : la hauteur est celle de la plus grande slide (pas de saut).
// Autoplay modéré, mis en pause au survol, arrêté à la première interaction ; désactivé et sans
// transition si l'utilisateur demande moins d'animations. Un seul <h1> (slide 1) ; les autres titres sont des <h2>.
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
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

    return (
        <section className="overflow-hidden text-light cw-hero" aria-roledescription="carrousel" aria-label="Nos quatre pôles d'expertise">
            <div
                className={`banner-thumb bg-cover ${backgroundImage ? "shadow theme" : "cw-hero-gradient"}`}
                style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
                aria-hidden="true"
            />
            <div className="banner-shape-bg" aria-hidden="true">
                <Image src="/assets/img/shape/1.png" alt="" width={800} height={630} priority />
            </div>
            <Swiper
                key={reduceMotion ? "static" : "animated"}
                className="cw-hero-slider"
                modules={[A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={reduceMotion ? 0 : 700}
                loop={false}
                autoplay={reduceMotion ? false : { delay: 7000, pauseOnMouseEnter: true, disableOnInteraction: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                navigation={{ prevEl: ".cw-hero-prev", nextEl: ".cw-hero-next" }}
                pagination={{ el: ".cw-hero-pagination", clickable: true }}
                a11y={{
                    prevSlideMessage: "Slide précédente",
                    nextSlideMessage: "Slide suivante",
                    paginationBulletMessage: "Aller à la slide {{index}}",
                    slideLabelMessage: "{{index}} sur {{slidesLength}}",
                }}
            >
                {slides.map((slide, index) => {
                    const expertise = expertises.find((e) => e.id === slide.pole);
                    const href = expertise ? expertiseHref(expertise) : "/#nos-expertises";
                    const Title = index === 0 ? "h1" : "h2";
                    return (
                        <SwiperSlide key={slide.pole}>
                            <div className="container">
                                <div className="cw-hero-content">
                                    <p className="cw-hero-eyebrow">{slide.eyebrow}</p>
                                    <Title className="cw-hero-title">{slide.title}</Title>
                                    <p className="cw-hero-text">{slide.text}</p>
                                    <div className="cw-hero-buttons">
                                        <Link className="btn btn-theme" href={href}>
                                            {slide.cta}
                                        </Link>
                                        <Link className="btn btn-border-light" href={secondaryCta.href}>
                                            {secondaryCta.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="container cw-hero-controls">
                <button type="button" className="cw-hero-prev" aria-label="Slide précédente">
                    <i className="fal fa-arrow-left" aria-hidden="true" />
                </button>
                <div className="cw-hero-pagination" />
                <button type="button" className="cw-hero-next" aria-label="Slide suivante">
                    <i className="fal fa-arrow-right" aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};

export default HomeHero;
