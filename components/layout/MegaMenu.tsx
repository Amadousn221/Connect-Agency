import Link from "next/link";
import { MEGA_MENU } from "@/content/nav";

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-8 sm:grid-cols-4">
      {MEGA_MENU.colonnes.map((colonne) => (
        <div key={colonne.titre}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {colonne.titre}
          </p>
          <ul className="flex flex-col gap-2.5">
            {colonne.liens.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  onClick={onNavigate}
                  className="text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="rounded-xl border border-border bg-background p-5 sm:col-span-1">
        <p className="text-sm font-semibold text-foreground">{MEGA_MENU.encart.titre}</p>
        <p className="mt-1.5 text-sm text-muted-foreground">{MEGA_MENU.encart.corps}</p>
        <Link
          href={MEGA_MENU.encart.cta.href}
          onClick={onNavigate}
          className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          {MEGA_MENU.encart.cta.label} →
        </Link>
      </div>
    </div>
  );
}
