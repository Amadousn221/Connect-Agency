"use client";
// Section « L'agence » de l'accueil — base visuelle : AboutV1 (démo home-1), choisie par Amadou le 08/11/2026,
// avec le texte à gauche et l'image à droite (demande d'Amadou).
// Retiré : carte de compteurs (AboutFactV1 : « années d'expérience »…) — D22, pas de chiffres non sourcés.
// Accordéon réécrit en React (titres h3, aria-expanded) au lieu du collapse Bootstrap de SingleFaqV2.
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { homeAgency } from "@/content/home";

const HomeAgency = () => {
    const { eyebrow, title, text, points, link, image } = homeAgency;
    const [open, setOpen] = useState<number | null>(0);
    const baseId = useId();

    return (
        <section className="about-style-one-area default-padding overflow-hidden cw-agency" aria-labelledby={`${baseId}-titre`}>
            {/* Formes décoratives de gauche (shape/3.png, shape/4.png) retirées : elles chevauchaient le texte placé à gauche. */}
            <div className="container">
                <div className="row align-center">
                    <div className="about-style-one col-xl-6 col-lg-6">
                        <h4 className="sub-title">{eyebrow}</h4>
                        <h2 id={`${baseId}-titre`} className="title mb-25">{title}</h2>
                        <p>{text}</p>
                        <div className="accordion mt-30">
                            {points.map((point, index) => {
                                const isOpen = open === index;
                                const buttonId = `${baseId}-bouton-${index}`;
                                const panelId = `${baseId}-panneau-${index}`;
                                return (
                                    <div className="accordion-single" key={point.title}>
                                        <h3 className="accordion-header">
                                            <button
                                                id={buttonId}
                                                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                onClick={() => setOpen(isOpen ? null : index)}
                                            >
                                                {point.title}
                                            </button>
                                        </h3>
                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                        >
                                            <div className="accordion-body">
                                                <p>{point.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Link className="btn btn-theme btn-md radius animation mt-40" href={link.href}>
                            {link.label}
                        </Link>
                    </div>
                    <div className="about-style-one col-xl-5 col-lg-5 offset-xl-1 offset-lg-1">
                        <div className="about-thumb cw-agency-thumb">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                            <div className="thumb-shape-bottom" aria-hidden="true">
                                <Image src="/assets/img/illustration/4.png" alt="" width={285} height={290} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAgency;
