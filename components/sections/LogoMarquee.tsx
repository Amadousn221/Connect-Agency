import { CLIENTS } from "@/content/clients";

/**
 * Bandeau de preuve sociale. Reste masqué tant qu'aucun logo client
 * autorisé n'est configuré dans content/clients.ts — voir ce fichier.
 */
export default function LogoMarquee() {
  if (CLIENTS.length === 0) return null;

  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y border-cw-border py-14">
      <div className="container">
        <p className="text-center text-cw-lead font-display font-medium text-cw-text">
          Des entreprises partout au Sénégal et en Afrique de l&apos;Ouest nous confient leurs
          projets numériques.
        </p>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:hidden">
        <div className="flex w-max animate-[cw-marquee_32s_linear_infinite] items-center gap-16 group-hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <span
              key={`${client.nom}-${i}`}
              className="whitespace-nowrap text-lg font-medium text-cw-subtletext opacity-60 grayscale"
            >
              {client.nom}
            </span>
          ))}
        </div>
      </div>

      {/* Repli statique 3 colonnes pour prefers-reduced-motion */}
      <div className="container mt-8 hidden motion-reduce:grid motion-reduce:grid-cols-3 motion-reduce:gap-6">
        {CLIENTS.slice(0, 6).map((client) => (
          <span
            key={client.nom}
            className="text-center text-sm font-medium text-cw-subtletext opacity-60"
          >
            {client.nom}
          </span>
        ))}
      </div>
    </section>
  );
}
