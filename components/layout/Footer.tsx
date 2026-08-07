import Link from "next/link";
import { SITE } from "@/content/site";
import { SERVICES } from "@/content/services";
import { FOOTER_LEGAL } from "@/content/nav";
import Logo from "./Logo";

const SOCIALS: { label: "LinkedIn" | "Instagram" | "Facebook"; url: string }[] = [
  { label: "LinkedIn", url: SITE.reseaux.find((r) => r.plateforme === "LinkedIn")?.url ?? "#" },
  { label: "Instagram", url: SITE.reseaux.find((r) => r.plateforme === "Instagram")?.url ?? "#" },
  { label: "Facebook", url: SITE.reseaux.find((r) => r.plateforme === "Facebook")?.url ?? "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border py-[clamp(3rem,5vw,4rem)]">
      <div
        aria-hidden="true"
        className="glow pointer-events-none absolute -bottom-[300px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-[var(--glow-1)]"
      />
      <div className="container relative grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Connect Web, accueil" className="mb-3.5 inline-flex">
            <Logo />
          </Link>
          <p className="no-justify max-w-[32ch] text-sm text-muted-foreground">
            Agence digitale à Dakar. On digitalise les entreprises et leurs processus de vente.
          </p>
          <div className="mt-[1.15rem] flex gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-foreground"
              >
                {s.label === "LinkedIn" && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5A6 6 0 0 1 16 8Z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {s.label === "Instagram" && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="3.6" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                )}
                {s.label === "Facebook" && (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3.5 font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground/80">Services</p>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {s.pilier}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3.5 font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground/80">Contact</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href={SITE.coordonnees.telephoneHref} className="text-muted-foreground transition-colors hover:text-primary">
                {SITE.coordonnees.telephone}
              </a>
            </li>
            <li>
              <a href={SITE.coordonnees.telephoneSecondaireHref} className="text-muted-foreground transition-colors hover:text-primary">
                {SITE.coordonnees.telephoneSecondaire}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.coordonnees.email}`} className="text-muted-foreground transition-colors hover:text-primary">
                {SITE.coordonnees.email}
              </a>
            </li>
            <li className="text-muted-foreground">{SITE.coordonnees.adresse}</li>
          </ul>
        </div>

        <div>
          <p className="mb-3.5 font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground/80">Légal</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container relative mt-11 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-[1.4rem] text-[0.84rem] text-muted-foreground">
        <span>
          {SITE.nom} © {year} — Tous droits réservés.
        </span>
        <span>Dakar, Sénégal</span>
      </div>
    </footer>
  );
}
