import { CLIENTS } from "@/content/clients";
import MarqueeTrack from "@/components/sections/MarqueeTrack";
import Reveal from "@/components/motion/Reveal";

export default function TrustBar({ trustLine }: { trustLine: string }) {
  const hasClients = CLIENTS.some((c) => c.visible);

  return (
    <section className="border-y border-border py-[clamp(2rem,5vw,3.25rem)]">
      <Reveal className="container is-center mb-7">
        <p className="text-[1.05rem] font-semibold text-foreground">{trustLine}</p>
      </Reveal>
      {hasClients && <MarqueeTrack />}
    </section>
  );
}
