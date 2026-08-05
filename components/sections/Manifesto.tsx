import { MANIFESTE } from "@/content/home";
import Reveal from "@/components/motion/Reveal";

export default function Manifesto() {
  return (
    <section className="border-y border-border bg-[var(--color-bg-subtle)] py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{MANIFESTE.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
            {MANIFESTE.titre}
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-left text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed text-muted-foreground">
            {MANIFESTE.paragraphes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {MANIFESTE.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
