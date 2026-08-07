import Link from "next/link";
import { MEGA_MENU } from "@/content/nav";

/**
 * Panneau du méga-menu. Il est positionné par le `Header` (ancré au header,
 * centré viewport, largeur min(1140px, 100vw - 2rem)) — ce composant ne gère
 * que son contenu.
 */
export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-[1.4rem] sm:grid-cols-2 lg:grid-cols-4">
      {MEGA_MENU.colonnes.map((colonne) => (
        <div key={colonne.titre}>
          <h4 className="mb-[0.7rem] font-[family-name:var(--font-mono)] text-[var(--fs-eyebrow)] font-medium tracking-[0.12em] text-[var(--color-text-subtle)] uppercase">
            {colonne.titre}
          </h4>

          {colonne.liens.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              onClick={onNavigate}
              className="block rounded-[var(--radius-sm)] px-[0.55rem] py-[0.45rem] text-[0.9rem] transition-colors duration-150 hover:bg-[var(--color-bg-subtle)] hover:text-primary"
            >
              {lien.label}
              {lien.description && (
                <small className="block text-[0.77rem] leading-[1.4] text-[var(--color-text-subtle)]">
                  {lien.description}
                </small>
              )}
            </Link>
          ))}

          {colonne.sousLiens && (
            <div>
              {colonne.sousLiens.map((lien) => (
                <Link
                  key={lien.href}
                  href={lien.href}
                  onClick={onNavigate}
                  className="block rounded-[var(--radius-sm)] py-[0.45rem] pr-[0.55rem] pl-[1.3rem] text-[0.85rem] text-muted-foreground transition-colors duration-150 hover:bg-[var(--color-bg-subtle)] hover:text-primary"
                >
                  {lien.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col items-start gap-[0.55rem] rounded-[var(--radius-md)] border border-border bg-[var(--color-bg-subtle)] p-[1.1rem]">
        <strong className="font-[family-name:var(--font-display)] text-base font-semibold text-foreground">
          {MEGA_MENU.encart.titre}
        </strong>
        <p className="text-left text-[0.85rem] text-muted-foreground">{MEGA_MENU.encart.corps}</p>
        <Link href={MEGA_MENU.encart.cta.href} onClick={onNavigate} className="btn-outline min-h-10 px-[1.05rem] text-[0.86rem]">
          {MEGA_MENU.encart.cta.label}
        </Link>
      </div>
    </div>
  );
}
