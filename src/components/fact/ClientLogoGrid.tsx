"use client";
// Grille 3×2 de logos clients de la section « Projets réalisés ». Six cellules fixes ; quand il y a plus de six
// logos, une cellule à la fois change toutes les LOGO_TICK_MS (donc chaque cellule toutes les ~4,2 s), en fondu
// enchaîné, sans mouvement ni changement de mise en page. Aucun doublon visible tant qu'il reste des logos distincts ;
// le logo suivant est préchargé avant d'être affiché ; rotation suspendue onglet masqué et désactivée avec
// prefers-reduced-motion. Aucune dépendance ajoutée. Styles : .cw-logo-* dans connect-web.css.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LOGO_CELLS, LOGO_FADE_MS, LOGO_TICK_MS, type ClientLogo } from "@/content/clients";

// Prochain logo (ordre circulaire à partir de `from`) qui n'est ni affiché ni en échec ; -1 s'il n'y en a pas.
function pickNext(total: number, shown: number[], failed: Set<number>, from: number): number {
    for (let step = 1; step <= total; step++) {
        const index = (from + step) % total;
        if (!shown.includes(index) && !failed.has(index)) return index;
    }
    return -1;
}

const LogoCell = ({ logo, onError }: { logo: ClientLogo | null; onError: () => void }) => {
    const [shown, setShown] = useState<ClientLogo | null>(logo);
    const [leaving, setLeaving] = useState<ClientLogo | null>(null);
    const [seq, setSeq] = useState(0);

    // Changement de logo : l'ancien reste en surimpression le temps du fondu, le nouveau apparaît (clé différente).
    if (logo !== shown) {
        setLeaving(shown);
        setShown(logo);
        setSeq((value) => value + 1);
    }

    useEffect(() => {
        if (!leaving) return;
        const timer = window.setTimeout(() => setLeaving(null), LOGO_FADE_MS + 100);
        return () => window.clearTimeout(timer);
    }, [leaving]);

    return (
        <div className="cw-logo-box">
            {leaving && (
                <div className="cw-logo-layer is-leaving" key={`out-${seq}`} aria-hidden="true">
                    <Image src={leaving.logo} alt="" fill sizes="180px" unoptimized />
                </div>
            )}
            {shown && (
                <div className={seq > 0 ? "cw-logo-layer is-entering" : "cw-logo-layer"} key={`in-${seq}`}>
                    <Image src={shown.logo} alt={shown.name} fill sizes="180px" unoptimized onError={onError} />
                </div>
            )}
        </div>
    );
};

const ClientLogoGrid = ({ logos, reduceMotion }: { logos: ClientLogo[]; reduceMotion: boolean }) => {
    const [slots, setSlots] = useState<number[]>(() =>
        Array.from({ length: LOGO_CELLS }, (_, cell) => (cell < logos.length ? cell : -1)),
    );
    const slotsRef = useRef(slots);
    const failedRef = useRef(new Set<number>());
    const cursorRef = useRef(Math.min(LOGO_CELLS, logos.length) - 1);
    const tickRef = useRef(0);
    const rotate = logos.length > LOGO_CELLS && !reduceMotion;

    useEffect(() => {
        slotsRef.current = slots;
    }, [slots]);

    useEffect(() => {
        if (!rotate) return;
        let cancelled = false;
        let pending = false;
        let preload: HTMLImageElement | null = null;
        const timer = window.setInterval(() => {
            if (document.hidden || pending) return;
            const next = pickNext(logos.length, slotsRef.current, failedRef.current, cursorRef.current);
            if (next < 0) return;
            const cell = tickRef.current % LOGO_CELLS;
            pending = true;
            const img = new window.Image();
            preload = img;
            img.onload = () => {
                pending = false;
                if (cancelled) return;
                cursorRef.current = next;
                tickRef.current += 1;
                setSlots((previous) => previous.map((value, index) => (index === cell ? next : value)));
            };
            img.onerror = () => {
                pending = false;
                failedRef.current.add(next);
            };
            img.src = logos[next].logo;
        }, LOGO_TICK_MS);
        return () => {
            cancelled = true;
            window.clearInterval(timer);
            if (preload) {
                preload.onload = null;
                preload.onerror = null;
            }
        };
    }, [rotate, logos]);

    // Image affichée introuvable : on l'écarte et on met un autre logo à sa place (ou une cellule vide).
    const handleError = (index: number) => {
        if (index < 0 || failedRef.current.has(index)) return;
        failedRef.current.add(index);
        const next = pickNext(logos.length, slotsRef.current, failedRef.current, cursorRef.current);
        if (next >= 0) cursorRef.current = next;
        setSlots((previous) => previous.map((value) => (value === index ? next : value)));
    };

    return (
        <div className="partner-items cw-logo-grid">
            <ul aria-label="Clients accompagnés">
                {slots.map((index, cell) => (
                    <li key={cell}>
                        <LogoCell logo={index >= 0 ? logos[index] : null} onError={() => handleError(index)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientLogoGrid;
