import { CLIENTS } from "@/content/clients";
import MarqueeTrack from "./MarqueeTrack";

export default function LogoMarquee() {
  const hasClients = CLIENTS.some((c) => c.visible);
  if (!hasClients) return null;

  return (
    <section className="py-[clamp(2.5rem,6vw,4.125rem)]">
      <div className="container is-center mb-9">
        <p className="text-[1.12rem] font-semibold text-foreground">Plus de 20 projets livrés.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Des entreprises partout au Sénégal et en Afrique de l&apos;Ouest nous confient leurs projets numériques.
        </p>
      </div>
      <MarqueeTrack />
    </section>
  );
}
