"use client";
// En-tête Connect Web — base visuelle : HeaderV2 (démo « Home Technology »), choisie par Amadou le 08/11/2026 ;
// refonte du 08/11/2026 (D42) : quatre menus déroulants (Développement, Digitalisation, Marketing, Infrastructure),
// L'agence, Contact et un bouton compact. Données : src/content/navigation.ts (générées depuis expertises.ts).
// Accessibilité : chaque pôle est un bouton (aria-expanded, aria-controls) ; ouverture au survol (avec délai de
// fermeture), au clic (le menu reste alors ouvert) et au clavier (Entrée, Espace, flèches, Échap) ; fermeture au clic
// extérieur et quand le focus sort du menu. Mobile : panneau latéral avec accordéons, focus piégé, défilement bloqué.
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainLinks, navPoles, primaryCta } from "@/content/navigation";

const MOBILE_QUERY = "(max-width: 1023px)"; // seuil du thème pour le panneau latéral
const CLOSE_DELAY_MS = 220;

const SiteHeader = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [panelOpen, setPanelOpen] = useState(false);
    const [openId, setOpenId] = useState<string | null>(null);
    const [pinned, setPinned] = useState(false);

    const panelRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const closeMenus = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setOpenId(null);
        setPinned(false);
    }, []);

    const closePanel = useCallback(
        (restoreFocus = true) => {
            setPanelOpen(false);
            closeMenus();
            if (restoreFocus) openButtonRef.current?.focus();
        },
        [closeMenus],
    );

    useEffect(() => () => clearCloseTimer(), []);

    // Panneau mobile : blocage du défilement, focus piégé, Échap.
    useEffect(() => {
        if (!panelOpen) return;
        document.body.style.overflow = "hidden";
        const panel = panelRef.current;
        const focusables = () =>
            Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []).filter(
                (el) => el.offsetParent !== null,
            );
        // Le focus est donné après le premier rendu du panneau devenu visible.
        const focusFrame = requestAnimationFrame(() => focusables()[0]?.focus());

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
            cancelAnimationFrame(focusFrame);
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKey);
        };
    }, [panelOpen, closePanel]);

    // Bureau : Échap et clic extérieur ferment le menu ouvert.
    useEffect(() => {
        if (openId === null || panelOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                const trigger = listRef.current?.querySelector<HTMLElement>(`[data-pole="${openId}"] .cw-nav-trigger`);
                closeMenus();
                trigger?.focus();
            }
        };
        const onPointer = (e: MouseEvent) => {
            if (!listRef.current?.contains(e.target as Node)) closeMenus();
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onPointer);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onPointer);
        };
    }, [openId, panelOpen, closeMenus]);

    const isActive = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
    const current = (href: string) => (!href.includes("#") && pathname === href ? ("page" as const) : undefined);

    // Survol (bureau seulement) : ouverture immédiate, fermeture retardée pour traverser l'espace vers le sous-menu.
    const onEnter = (id: string) => {
        if (isMobile) return;
        clearCloseTimer();
        if (openId !== id) setPinned(false);
        setOpenId(id);
    };
    const onLeave = () => {
        if (isMobile || pinned) return;
        clearCloseTimer();
        closeTimer.current = setTimeout(() => setOpenId(null), CLOSE_DELAY_MS);
    };

    const onTriggerClick = (id: string) => {
        if (isMobile) {
            setOpenId((value) => (value === id ? null : id));
            return;
        }
        clearCloseTimer();
        if (openId === id && pinned) {
            closeMenus();
        } else {
            setOpenId(id);
            setPinned(true);
        }
    };

    const focusItem = (poleId: string, index: number | "first" | "last") => {
        const links = Array.from(
            listRef.current?.querySelectorAll<HTMLElement>(`[data-pole="${poleId}"] .cw-dropdown a`) ?? [],
        );
        if (links.length === 0) return;
        const target = index === "first" ? 0 : index === "last" ? links.length - 1 : Math.max(0, Math.min(index, links.length - 1));
        links[target]?.focus();
    };

    const onTriggerKeyDown = (e: React.KeyboardEvent, id: string) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpenId(id);
            setPinned(true);
            requestAnimationFrame(() => focusItem(id, "first"));
        }
    };

    const onDropdownKeyDown = (e: React.KeyboardEvent, id: string) => {
        const links = Array.from(
            listRef.current?.querySelectorAll<HTMLElement>(`[data-pole="${id}"] .cw-dropdown a`) ?? [],
        );
        const index = links.indexOf(document.activeElement as HTMLElement);
        if (e.key === "ArrowDown") {
            e.preventDefault();
            focusItem(id, index + 1);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (index <= 0) {
                listRef.current?.querySelector<HTMLElement>(`[data-pole="${id}"] .cw-nav-trigger`)?.focus();
            } else {
                focusItem(id, index - 1);
            }
        } else if (e.key === "Home") {
            e.preventDefault();
            focusItem(id, "first");
        } else if (e.key === "End") {
            e.preventDefault();
            focusItem(id, "last");
        }
    };

    // Le focus quitte l'élément de menu (bureau) : fermeture.
    const onItemBlur = (e: React.FocusEvent<HTMLLIElement>) => {
        if (isMobile) return;
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setOpenId(null);
            setPinned(false);
        }
    };

    // Fermeture du panneau après le choix d'un lien.
    const onPanelClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const link = (e.target as HTMLElement).closest("a");
        if (link) closePanel(false);
    };

    return (
        <header className="cw-header">
            <nav
                aria-label="Navigation principale"
                className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full cw-navbar"
            >
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-header">
                        <button
                            ref={openButtonRef}
                            type="button"
                            className="navbar-toggle"
                            aria-label="Ouvrir le menu"
                            aria-expanded={panelOpen}
                            aria-controls="navbar-menu"
                            onClick={() => setPanelOpen(true)}
                        >
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>
                        <Link className="navbar-brand cw-logo" href="/" aria-label="Connect Web, accueil">
                            <Image src="/assets/img/cw/logo-connect-web.png" alt="Connect Web" width={688} height={185} priority />
                        </Link>
                    </div>

                    <div
                        ref={panelRef}
                        id="navbar-menu"
                        className={`collapse navbar-collapse collapse-mobile ${panelOpen ? "show" : ""}`}
                        // Panneau fermé sur tablette et mobile : inerte (ni clavier, ni lecteur d'écran).
                        inert={isMobile && !panelOpen}
                        onClick={onPanelClick}
                        {...(isMobile
                            ? { role: "dialog", "aria-modal": panelOpen ? true : undefined, "aria-label": "Menu", "aria-hidden": panelOpen ? undefined : true }
                            : {})}
                    >
                        <div className="collapse-header">
                            <Image className="cw-logo-img" src="/assets/img/cw/logo-connect-web.png" alt="Connect Web" width={688} height={185} />
                            <button type="button" className="navbar-toggle" aria-label="Fermer le menu" onClick={() => closePanel()}>
                                <i className="fa fa-times" aria-hidden="true" />
                            </button>
                        </div>

                        <ul ref={listRef} className="cw-nav-list">
                            {navPoles.map((pole) => {
                                const open = openId === pole.id;
                                const menuId = `menu-${pole.id}`;
                                return (
                                    <li
                                        key={pole.id}
                                        data-pole={pole.id}
                                        className={`cw-nav-item ${open ? "is-open" : ""}`}
                                        onMouseEnter={() => onEnter(pole.id)}
                                        onMouseLeave={onLeave}
                                        onBlur={onItemBlur}
                                    >
                                        <button
                                            type="button"
                                            className="cw-nav-trigger"
                                            aria-expanded={open}
                                            aria-controls={menuId}
                                            onClick={() => onTriggerClick(pole.id)}
                                            onKeyDown={(e) => onTriggerKeyDown(e, pole.id)}
                                        >
                                            {pole.label}
                                            <i className="fal fa-chevron-down" aria-hidden="true" />
                                        </button>
                                        <div id={menuId} className="cw-dropdown" onKeyDown={(e) => onDropdownKeyDown(e, pole.id)}>
                                            <div className="cw-dropdown-inner">
                                                <ul>
                                                    {pole.items.map((item) => (
                                                        <li key={item.label}>
                                                            <Link href={item.href}>{item.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link className="cw-dropdown-all" href={pole.all.href}>
                                                    {pole.all.label}
                                                    <i className="fal fa-arrow-right" aria-hidden="true" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                            {mainLinks.map((link) => (
                                <li key={link.label} className="cw-nav-item cw-nav-plain">
                                    <Link
                                        href={link.href}
                                        aria-current={current(link.href)}
                                        className={`cw-nav-link ${isActive(link.href) ? "cw-active" : ""}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* CTA dans le panneau mobile (docs/05 §3 : dernier élément du menu mobile). */}
                        <div className="cw-mobile-cta">
                            <Link className="btn btn-theme btn-md" href={primaryCta.href}>
                                {primaryCta.label}
                            </Link>
                        </div>
                    </div>

                    <div className="cw-header-cta">
                        <Link className="btn btn-theme btn-sm" href={primaryCta.href}>
                            {primaryCta.label}
                        </Link>
                    </div>
                </div>
                <div className={`overlay-screen ${panelOpen ? "opened" : ""}`} onClick={() => closePanel()} aria-hidden="true" />
            </nav>
        </header>
    );
};

export default SiteHeader;
