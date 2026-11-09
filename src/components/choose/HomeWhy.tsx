"use client";

// Section « Pourquoi Connect Web ? » de l'accueil — base visuelle : WhyChooseV1 (panneau bleu foncé incliné à gauche,
// liste à filet bleu, photo à droite). Demande d'Amadou du 09/11/2026 : retirer le mot en filigrane « CONNECT WEB »,
// rendre la liste interactive et animée, avec un comportement de feuille de route cliquable : chaque raison est une
// étape ; le filet bleu se remplit jusqu'à l'étape active, les autres étapes sont atténuées mais restent lisibles.
// Lecture automatique lente, arrêtée au survol, au focus clavier, après un clic, et si l'utilisateur réduit les
// animations (prefers-reduced-motion). Tout le texte reste dans le DOM (aucun contenu masqué).
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { homeWhy } from "@/content/home";

const AUTOPLAY_MS = 6000;

const HomeWhy = () => {
    const { title, points } = homeWhy;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [reduced, setReduced] = useState(false);
    const [armed, setArmed] = useState(false);
    const [visible, setVisible] = useState(false);
    const listRef = useRef<HTMLOListElement>(null);
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);

    // Préférence « animations réduites » : pas de lecture automatique ni d'entrée animée.
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = () => setReduced(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    // Entrée progressive au défilement (le texte reste visible si JavaScript n'est pas disponible).
    useEffect(() => {
        const el = listRef.current;
        if (!el || reduced) return;
        setArmed(true);
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [reduced]);

    // Lecture automatique de la feuille de route.
    useEffect(() => {
        if (reduced || paused || touched || !visible) return;
        const id = window.setInterval(() => setActive((i) => (i + 1) % points.length), AUTOPLAY_MS);
        return () => window.clearInterval(id);
    }, [reduced, paused, touched, visible, points.length]);

    const select = (index: number) => {
        setTouched(true);
        setActive(index);
    };

    const onKeyDown = (e: React.KeyboardEvent, index: number) => {
        let next = -1;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (index + 1) % points.length;
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (index - 1 + points.length) % points.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = points.length - 1;
        if (next < 0) return;
        e.preventDefault();
        select(next);
        buttons.current[next]?.focus();
    };

    return (
        <section className="choose-us-style-one-area default-padding text-light cw-why" aria-labelledby="pourquoi-titre">
            <div className="cover-bg cw-why-cover" aria-hidden="true" />
            <div className="shape-left-top" aria-hidden="true">
                <Image src="/assets/img/shape/17.png" alt="" width={335} height={245} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pr-80">
                        <div className="choose-us-style-one">
                            <h2 id="pourquoi-titre" className="title mb-35">{title}</h2>
                            <ol
                                ref={listRef}
                                className={`cw-roadmap ${armed ? "is-armed" : ""} ${visible ? "is-in" : ""}`}
                                aria-label="Les raisons de choisir Connect Web"
                                onMouseEnter={() => setPaused(true)}
                                onMouseLeave={() => setPaused(false)}
                                onFocus={() => setPaused(true)}
                                onBlur={() => setPaused(false)}
                            >
                                {points.map((point, index) => {
                                    const state = index === active ? "is-active" : index < active ? "is-done" : "";
                                    return (
                                        <li
                                            key={point.title}
                                            className={`cw-roadmap-step ${state}`}
                                            style={{ ["--i" as string]: index } as unknown as React.CSSProperties}
                                        >
                                            <span className="cw-roadmap-dot" aria-hidden="true" />
                                            <h3>
                                                <button
                                                    type="button"
                                                    ref={(el) => {
                                                        buttons.current[index] = el;
                                                    }}
                                                    aria-current={index === active ? "step" : undefined}
                                                    aria-describedby={`pourquoi-texte-${index}`}
                                                    onClick={() => select(index)}
                                                    onKeyDown={(e) => onKeyDown(e, index)}
                                                >
                                                    {point.title}
                                                </button>
                                            </h3>
                                            <p id={`pourquoi-texte-${index}`}>{point.text}</p>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;
