/**
 * Filet de séparation subtil entre deux sections qui partagent le même fond
 * (cas de bord quand l'alternance normale ne suffit pas). Ne pas utiliser
 * ailleurs : le fond alterné suffit à marquer la transition dans le cas
 * général.
 */
export default function SectionDivider() {
  return (
    <div className="container" aria-hidden="true">
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
    </div>
  );
}
