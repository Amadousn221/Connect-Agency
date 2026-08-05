import Link from "next/link";
import type { ReactNode } from "react";
import type { Cta } from "@/types/content";

interface HeroProps {
  eyebrow: string;
  h1: ReactNode;
  chapo: string;
  ctas: Cta[];
}

export default function Hero({ eyebrow, h1, chapo, ctas }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_82%),transparent_70%)]"
      />
      <div className="container relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {h1}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">{chapo}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {ctas.map((cta, i) => (
              <Link
                key={cta.href + cta.label}
                href={cta.href}
                className={i === 0 ? "btn-primary" : "btn-outline"}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
