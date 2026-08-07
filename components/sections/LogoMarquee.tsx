import { CLIENTS } from "@/content/clients";

export default function LogoMarquee() {
  const clients = CLIENTS.filter((c) => c.visible);
  if (clients.length === 0) return null;

  const track = [...clients, ...clients];

  return (
    <section className="py-[clamp(2.5rem,6vw,4.125rem)]">
      <div className="container is-center mb-9">
        <p className="text-[1.12rem] font-semibold text-foreground">Plus de 20 projets livrés.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Des entreprises partout au Sénégal et en Afrique de l&apos;Ouest nous confient leurs projets numériques.
        </p>
      </div>

      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max gap-16 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
          {track.map((client, i) => (
            <span
              key={`${client.nom}-${i}`}
              className="flex shrink-0 items-center gap-2 font-[family-name:var(--font-display)] text-[1.1rem] font-bold whitespace-nowrap text-foreground opacity-60"
            >
              <span className="text-[0.65em] text-primary" aria-hidden="true">
                ◆
              </span>
              {client.nom}
            </span>
          ))}
        </div>
      </div>
      <p className="is-center container mt-4 text-xs text-muted-foreground">
        Emplacements réservés — logos clients à fournir avec autorisation.
      </p>
    </section>
  );
}
