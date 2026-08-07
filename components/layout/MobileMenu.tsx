"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { NAV_LINKS } from "@/content/nav";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

/** Menu mobile plein écran — reprise du bloc `.mobile` de la maquette v2. */
export default function MobileMenu({ open, onClose, onRequestQuote }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Bloque le scroll du body et pose le focus sur le bouton de fermeture.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
      className={cn(
        "fixed inset-0 z-200 flex flex-col overflow-y-auto bg-background p-[1.15rem] transition-[opacity,transform,visibility] duration-250 min-[1080px]:hidden",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <Logo />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground"
        >
          <X className="size-5" />
        </button>
      </div>

      <Link href="/" onClick={onClose} className="mobile-link">
        Accueil
      </Link>

      <details className="group">
        <summary className="mobile-link list-none [&::-webkit-details-marker]:hidden group-open:border-b-transparent">
          Services
          <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
        </summary>
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            onClick={onClose}
            className="block py-[0.4rem] pl-[0.9rem] text-[0.98rem] text-muted-foreground"
          >
            {s.pilier}
          </Link>
        ))}
      </details>

      {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
        <Link key={link.href} href={link.href} onClick={onClose} className="mobile-link">
          {link.label}
        </Link>
      ))}

      <div className="mt-auto grid gap-[0.6rem] pt-6">
        <button
          type="button"
          onClick={() => {
            onClose();
            onRequestQuote();
          }}
          className="btn-primary w-full"
        >
          {SITE.ctaPrimaire}
        </button>
        <p className="no-justify text-[0.85rem] text-muted-foreground">
          {SITE.coordonnees.telephone} · {SITE.coordonnees.telephoneSecondaire}
          <br />
          {SITE.coordonnees.email}
        </p>
      </div>
    </div>
  );
}
