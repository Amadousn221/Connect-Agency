"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MegaMenu from "./MegaMenu";
import { NAV_LINKS } from "@/content/nav";
import { SITE } from "@/content/site";
import { useContactModal } from "./ContactModalProvider";
import { cn } from "@/lib/utils";

export default function Header() {
  const { open } = useContactModal();
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-md">
        <div className="container flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="7" height="7" rx="1.5" fill="var(--primary)" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" fill="var(--primary)" opacity=".4" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" fill="var(--primary)" opacity=".4" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" fill="var(--primary)" />
            </svg>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Connect<span className="text-primary">Web</span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            <Link href="/" className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary">
              Accueil
            </Link>

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <button
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onFocus={openServices}
                onBlur={scheduleClose}
              >
                Services
                <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              <div
                className={cn(
                  "absolute left-1/2 top-full w-[min(680px,90vw)] -translate-x-1/2 pt-3 transition-all duration-200",
                  servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                )}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl">
                  <MegaMenu onNavigate={() => setServicesOpen(false)} />
                </div>
              </div>
            </div>

            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.coordonnees.telephoneHref}
              className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary hover:text-primary xl:flex"
            >
              <Phone className="size-3.5" />
              {SITE.coordonnees.telephone}
            </a>

            <ThemeToggle />

            <button onClick={open} className="btn-primary hidden sm:inline-flex">
              {SITE.ctaPrimaire}
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex size-9 items-center justify-center rounded-full text-foreground lg:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={cn(
          "fixed inset-x-0 top-[var(--header-height)] z-30 h-[calc(100dvh-var(--header-height))] overflow-y-auto bg-background transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav aria-label="Menu mobile" className="container flex flex-col gap-1 py-6">
          <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground">
            Accueil
          </Link>

          <div className="px-3 py-3">
            <p className="text-base font-medium text-foreground">Services</p>
            <div className="mt-4">
              <MegaMenu onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-border px-3 pt-6">
            <a href={SITE.coordonnees.telephoneHref} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4" />
              {SITE.coordonnees.telephone}
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
              className="btn-primary justify-center"
            >
              {SITE.ctaPrimaire}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
