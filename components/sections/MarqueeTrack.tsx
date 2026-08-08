import Image from "next/image";
import { CLIENTS } from "@/content/clients";

/**
 * Piste défilante des logos clients — extraite de `LogoMarquee` pour isoler
 * le défilement du titre spécifique à l'accueil.
 */
export default function MarqueeTrack() {
  const clients = CLIENTS.filter((c) => c.visible);
  if (clients.length === 0) return null;

  const track = [...clients, ...clients];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max items-center gap-12 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
        {track.map((client, i) =>
          client.logo ? (
            <span
              key={`${client.nom}-${i}`}
              className="relative h-9 w-[140px] shrink-0 opacity-70 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
            >
              <Image src={client.logo} alt={client.nom} fill sizes="140px" className="object-contain" />
            </span>
          ) : (
            <span
              key={`${client.nom}-${i}`}
              className="flex shrink-0 items-center gap-2 font-[family-name:var(--font-display)] text-[1.1rem] font-bold whitespace-nowrap text-foreground opacity-60"
            >
              <span className="text-[0.65em] text-primary" aria-hidden="true">
                ◆
              </span>
              {client.nom}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
