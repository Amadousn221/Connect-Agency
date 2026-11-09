"use client";
// Grille de la page /realisations — base visuelle : ProjectV2 (démo /project-3) : cartes en deux colonnes (masonry
// Isotope), capture, forme décorative, bandeau catégorie + titre au survol. Adaptations Connect Web : liens vers les
// sites publics (aucune page de détail n'existe), nom du client toujours lisible, bandeau visible en permanence sur
// tablette et mobile (le survol n'existe pas au toucher) et au focus clavier. Sources : content/realisations.ts.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Realisation } from "@/content/realisations";

const RealisationsGrid = ({ items, linkLabel }: { items: Realisation[]; linkLabel: string }) => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(0);
    const [activeSlug, setActiveSlug] = useState<string | null>(items[0]?.slug ?? null);

    // Isotope (déjà dans le projet) recalcule la maçonnerie quand toutes les captures sont chargées ; sans lui, les
    // cartes restent côte à côte (flottants du thème).
    useEffect(() => {
        if (loaded < items.length || !galleryRef.current) return;
        let iso: { layout: () => void; destroy: () => void } | undefined;
        let timer: number | undefined;
        let cancelled = false;
        import("isotope-layout").then((Isotope) => {
            if (cancelled || !galleryRef.current) return;
            iso = new Isotope.default(galleryRef.current, { itemSelector: ".gallery-item", layoutMode: "masonry" });
            timer = window.setTimeout(() => iso?.layout(), 300);
        });
        return () => {
            cancelled = true;
            if (timer) window.clearTimeout(timer);
            iso?.destroy();
        };
    }, [loaded, items.length]);

    return (
        <div className="magnific-mix-gallery gallery-masonary cw-realisations-grid">
            <div id="gallery-masonary" className="gallery-items colums-2" ref={galleryRef}>
                {items.map((item) => (
                    <div
                        key={item.slug}
                        className={`gallery-item ${activeSlug === item.slug ? "active" : ""}`}
                        onMouseEnter={() => setActiveSlug(item.slug)}
                    >
                        <div className="gallery-style-one">
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={`Capture de la page d'accueil de ${item.client}`}
                                    width={1000}
                                    height={625}
                                    unoptimized
                                    onLoad={() => setLoaded((count) => count + 1)}
                                    onError={() => setLoaded((count) => count + 1)}
                                />
                            )}
                            <div className="shape">
                                <Image src="/assets/img/shape/35.png" alt="" width={890} height={865} />
                            </div>
                            <div className="overlay">
                                <div className="content">
                                    <span>{item.category}</span>
                                    <h4>
                                        {item.siteUrl ? (
                                            <a href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                                                {item.client}
                                                <span className="visually-hidden"> : {linkLabel} (nouvel onglet)</span>
                                            </a>
                                        ) : (
                                            item.client
                                        )}
                                    </h4>
                                    <p className="cw-realisation-card-title">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealisationsGrid;
