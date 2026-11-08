"use client";
// En-tête Connect Web — base visuelle : HeaderV2 (démo « Home Technology », /home-2), choisie par Amadou le 08/11/2026.
// Changements par rapport à HeaderV2 : menu Connect Web (docs/05 §3), bouton CTA à la place du bloc email de démo,
// accessibilité (aria-expanded, Échap, clic extérieur, focus piégé dans le panneau mobile, aria-current).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import useStickyMenu from "@/hooks/useStickyMenu";
import { allExpertises, families, mainLinks, primaryCta } from "@/content/navigation";

const MOBILE_QUERY = "(max-width: 991px)";

const SiteHeader = () => {
    const pathname = usePathname();
    const isMenuSticky = useStickyMenu();
    const [isMobile, setIsMobile] = useState(false);
    const [panelOpen, setPanelOpen] = useState(false);
    const [expertisesOpen, setExpertisesOpen] = useState(false);

    const panelRef = useRef<HTMLDivElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const dropdownId = useId();
    const panelId = "navbar-menu";

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const closePanel = useCallback((restoreFocus = true) => {
        setPanelOpen(false);
        setExpertisesOpen(false);
        if (restoreFocus) openButtonRef.current?.focus();
    }, []);

    // Fermeture après le choix d'un lien (délégation sur le panneau ; le bouton « Expertises » est exclu).
    const onPanelClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const link = (e.target as HTMLElement).closest("a");
        if (link && !link.classList.contains("dropdown-toggle")) {
            setPanelOpen(false);
            setExpertisesOpen(false);
        }
    };

    // Panneau mobile : blocage du défilement, focus piégé, Échap.
    useEffect(() => {
        if (!panelOpen) return;
        document.body.style.overflow = "hidden";
        const panel = panelRef.current;
        const focusables = () =>
            Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
        focusables()[0]?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                closePanel();
                return;
            }
            if (e.key !== "Tab") return;
            const items = focusables();
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKey);
        };
    }, [panelOpen, closePanel]);

    // Déroulant desktop : Échap et clic extérieur.
    useEffect(() => {
        if (!expertisesOpen || panelOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setExpertisesOpen(false);
                dropdownRef.current?.querySelector<HTMLElement>(".dropdown-toggle")?.focus();
            }
        };
        const onClick = (e: MouseEvent) => {
            if (!dropdownRef.current?.contains(e.target as Node)) setExpertisesOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
        };
    }, [expertisesOpen, panelOpen]);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
    const current = (href: string) => (pathname === href ? ("page" as const) : undefined);
    const expertisesActive = isActive(allExpertises.href);

    const toggleExpertises = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        setExpertisesOpen((open) => !open);
    };

    return (
        <header>
            <nav
                aria-label="Navigation principale"
                className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"}`}
            >
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-header">
                        <button
                            ref={openButtonRef}
                            type="button"
                            className="navbar-toggle"
                            aria-label="Ouvrir le menu"
                            aria-expanded={panelOpen}
                            aria-controls={panelId}
                            onClick={() => setPanelOpen(true)}
                        >
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>
                        {/* Logo : fichier Connect Web non fourni — nom de la marque en texte en attendant. */}
                        <Link className="navbar-brand cw-wordmark" href="/">
                            Connect Web
                        </Link>
                    </div>

                    <div
                        ref={panelRef}
                        id={panelId}
                        className={`collapse navbar-collapse collapse-mobile ${panelOpen ? "show" : ""}`}
                        onClick={onPanelClick}
                        {...(isMobile
                            ? { role: "dialog", "aria-modal": panelOpen ? true : undefined, "aria-label": "Menu", "aria-hidden": panelOpen ? undefined : true }
                            : {})}
                    >
                        <div className="collapse-header">
                            <span className="cw-wordmark">Connect Web</span>
                            <button
                                type="button"
                                className="navbar-toggle"
                                aria-label="Fermer le menu"
                                onClick={() => closePanel()}
                            >
                                <i className="fa fa-times" aria-hidden="true" />
                            </button>
                        </div>

                        <ul className="nav navbar-nav navbar-center">
                            <li ref={dropdownRef} className={`dropdown ${expertisesOpen ? "on" : ""}`}>
                                {/* Lien réel vers /expertises si le JavaScript échoue ; sinon ouvre le déroulant. */}
                                <a
                                    href={allExpertises.href}
                                    className={`dropdown-toggle ${expertisesActive ? "cw-active" : ""}`}
                                    role="button"
                                    aria-expanded={expertisesOpen}
                                    aria-controls={dropdownId}
                                    onClick={toggleExpertises}
                                    onKeyDown={(e) => {
                                        if (e.key === " ") toggleExpertises(e);
                                    }}
                                >
                                    Expertises
                                </a>
                                <ul
                                    id={dropdownId}
                                    className="dropdown-menu"
                                    style={isMobile ? { maxHeight: expertisesOpen ? "1000px" : "0" } : undefined}
                                >
                                    {families.map((family) => (
                                        <li key={family.id} role="presentation" className="cw-family">
                                            <span className="cw-family-label">{family.label}</span>
                                            <ul className="cw-family-poles">
                                                {family.poles.map((pole) => (
                                                    <li key={pole.href}>
                                                        <Link href={pole.href} aria-current={current(pole.href)} className={isActive(pole.href) ? "cw-active" : ""}>
                                                            {pole.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                    <li>
                                        <Link href={allExpertises.href} aria-current={current(allExpertises.href)}>
                                            {allExpertises.label}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {mainLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} aria-current={current(link.href)} className={isActive(link.href) ? "cw-active" : ""}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA dans le panneau mobile (docs/05 §3 : dernier élément du menu mobile). */}
                        <div className="cw-mobile-cta d-lg-none">
                            <Link className="btn btn-gradient btn-md radius animation" href={primaryCta.href}>
                                {primaryCta.label}
                            </Link>
                        </div>
                    </div>

                    <div className="attr-right d-none d-lg-block">
                        <div className="attr-nav">
                            <ul>
                                <li className="button">
                                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`overlay-screen ${panelOpen ? "opened" : ""}`}
                    onClick={() => closePanel()}
                    aria-hidden="true"
                />
            </nav>
        </header>
    );
};

export default SiteHeader;
