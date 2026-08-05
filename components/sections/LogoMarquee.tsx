import { CLIENTS } from "@/content/clients";

export default function LogoMarquee() {
  const clients = CLIENTS.filter((c) => c.visible);
  if (clients.length === 0) return null;

  const track = [...clients, ...clients];

  return (
    <section className="border-y border-border py-[clamp(3rem,7vw,4.5rem)]">
      <div className="container text-center">
        <h2 className="text-[clamp(1.4rem,2.2vw,1.75rem)] font-semibold tracking-tight text-foreground">
          Des entreprises qui nous font confiance.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Des entreprises partout au Sénégal et en Afrique de l&apos;Ouest nous confient leurs projets numériques.
        </p>
      </div>

      <div
        className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max gap-16 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
          {track.map((client, i) => (
            <span
              key={`${client.nom}-${i}`}
              className="shrink-0 text-lg font-semibold tracking-tight text-foreground/60 opacity-60 grayscale"
            >
              {client.nom}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
