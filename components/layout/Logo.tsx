/**
 * Logo reconstitué d'après la maquette v2 — prévoir une prop `src` pour
 * brancher le SVG définitif du client sans toucher au reste du site.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2 font-[family-name:var(--font-display)] text-[1.12rem] font-bold uppercase tracking-[0.01em] text-[var(--logo-word)] ${className ?? ""}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--brand-accent-raw)"
        strokeWidth="2.4"
        strokeLinecap="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M8.1 7.9a7 7 0 1 0 7.8 0" />
        <path d="M12 2.6v6.6" />
      </svg>
      Connect<b className="font-bold text-[var(--brand-accent-raw)]">Web</b>
    </span>
  );
}
