import Link from "next/link";
import { SITE } from "@/content/site";
import { SERVICES } from "@/content/services";
import { FOOTER_LEGAL } from "@/content/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[var(--color-bg-subtle)]">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Connect<span className="text-primary">Web</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">{SITE.baseline}</p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={`mailto:${SITE.coordonnees.email}`} className="text-foreground/90 hover:text-primary">
                {SITE.coordonnees.email}
              </a>
            </li>
            <li>
              <a href={SITE.coordonnees.telephoneHref} className="text-foreground/90 hover:text-primary">
                {SITE.coordonnees.telephone}
              </a>
            </li>
            <li className="text-muted-foreground">{SITE.coordonnees.adresse}</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Services
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-foreground/90 hover:text-primary">
                  {s.pilier}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Liens
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/realisations" className="text-foreground/90 hover:text-primary">
                Nos réalisations
              </Link>
            </li>
            <li>
              <Link href="/nous-joindre" className="text-foreground/90 hover:text-primary">
                Nous joindre
              </Link>
            </li>
            {FOOTER_LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            {SITE.nom} © {year} — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
