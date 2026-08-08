import { MANIFESTE } from "@/content/home";
import Reveal from "@/components/motion/Reveal";

export default function Manifesto() {
  return (
    <section className="section">
      <div className="container grid gap-8 min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-14">
        <Reveal>
          <p className="eyebrow">{MANIFESTE.eyebrow}</p>
          <h2 className="mt-[0.85rem] text-foreground">{MANIFESTE.titre}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lead">{MANIFESTE.paragraphes[0]}</p>
          <p className="mt-4 text-muted-foreground">{MANIFESTE.paragraphes[1]}</p>

          <div className="mt-[1.9rem] flex flex-wrap gap-2">
            {MANIFESTE.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
