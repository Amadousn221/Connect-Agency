"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { NAV_LINKS } from "@/content/nav";
import { SITE } from "@/content/site";
import { useContactModal } from "./ContactModalProvider";
import { cn } from "@/lib/utils";

export default function Header() {
  const { open } = useContactModal();
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  // 140 ms de délai avant fermeture, comme dans la maquette.
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 8);

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={scheduleClose}
        className={cn(
          "sticky top-0 z-100 border-b border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-[14px] transition-shadow duration-300",
          scrolled && "shadow-[var(--shadow-md)]"
        )}
      >
        <div className="container flex h-[var(--header-height)] items-center gap-4">
          <Link href="/" aria-label="Connect Web, accueil">
            <Logo />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="mx-auto hidden items-center gap-[0.15rem] min-[1080px]:flex"
          >
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className="relative rounded-[var(--radius-sm)] px-[0.8rem] py-2 text-[0.92rem] text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-[0.8rem] aria-[current=page]:after:-bottom-[0.35rem] aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-[var(--brand-accent-raw)] aria-[current=page]:after:content-['']"
            >
              Accueil
            </Link>

            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="megamenu"
              onMouseEnter={openServices}
              onFocus={openServices}
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center gap-[0.3rem] rounded-[var(--radius-sm)] px-[0.8rem] py-2 text-[0.92rem] text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground"
            >
              Services
              <ChevronDown
                className={cn("size-[13px] transition-transform duration-200", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="relative rounded-[var(--radius-sm)] px-[0.8rem] py-2 text-[0.92rem] text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-[0.8rem] aria-[current=page]:after:-bottom-[0.35rem] aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-[var(--brand-accent-raw)] aria-[current=page]:after:content-['']"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 min-[1080px]:ml-0">
            <a
              href={SITE.coordonnees.telephoneHref}
              className="hidden items-center gap-[0.4rem] rounded-full border border-border px-[0.85rem] py-[0.45rem] font-[family-name:var(--font-mono)] text-[0.82rem] text-muted-foreground transition-colors hover:text-foreground min-[1280px]:inline-flex"
            >
              <Phone className="size-[13px]" aria-hidden="true" />
              {SITE.coordonnees.telephone}
            </a>

            <button
              type="button"
              className="hidden gap-[0.3rem] rounded-full border border-border px-[0.65rem] py-2 font-[family-name:var(--font-mono)] text-[0.76rem] text-[var(--color-text-subtle)] min-[1280px]:inline-flex"
            >
              FR <span className="opacity-50">/ EN</span>
            </button>

            <ThemeToggle />

            <button
              type="button"
              onClick={open}
              className="btn-primary hidden min-h-10 px-[1.05rem] text-[0.86rem] sm:inline-flex"
            >
              {SITE.ctaPrimaire}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground min-[1080px]:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>

        {/* Méga-menu ancré au header → toujours centré viewport, jamais coupé */}
        <div
          id="megamenu"
          inert={!servicesOpen}
          onMouseEnter={openServices}
          className={cn(
            "absolute top-full left-1/2 w-[min(1140px,calc(100vw_-_2rem))] -translate-x-1/2 rounded-b-[var(--radius-lg)] border border-t-0 border-border bg-card p-[1.6rem] shadow-[var(--shadow-md)] transition-[opacity,transform,visibility] duration-200",
            servicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-[6px] opacity-0"
          )}
        >
          <MegaMenu onNavigate={() => setServicesOpen(false)} />
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onRequestQuote={open} />
    </>
  );
}
