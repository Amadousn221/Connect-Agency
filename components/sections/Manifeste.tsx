import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MANIFESTE } from "@/content/home";

export default function Manifeste() {
  return (
    <section className="bg-cw-subtle py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow justify-center">{MANIFESTE.eyebrow}</p>
            <h2 className="mt-4 text-balance font-display text-cw-h2 font-semibold leading-[var(--cw-lh-snug)] tracking-[var(--cw-tracking-tight)] text-cw-text">
              {MANIFESTE.titre}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col gap-4 text-left text-cw-lead leading-[var(--cw-lh-body)] text-cw-muted">
              {MANIFESTE.paragraphes.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Stagger delayChildren={0.04} className="mt-8 flex flex-wrap justify-center gap-2">
            {MANIFESTE.tags.map((tag) => (
              <StaggerItem key={tag}>
                <span className="inline-flex rounded-full border border-cw-border bg-cw-bg px-3.5 py-1.5 text-cw-sm font-medium text-cw-muted">
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
