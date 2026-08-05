import Link from "next/link";
import type { ReactNode } from "react";
import { Globe, Sparkles, Boxes, TrendingUp } from "lucide-react";
import type { Cta } from "@/types/content";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow: string;
  h1: ReactNode;
  chapo: string;
  ctas: Cta[];
}

const HERO_PILLARS = [
  { icon: Globe, label: "Sites & plateformes" },
  { icon: Sparkles, label: "IA & automatisation" },
  { icon: Boxes, label: "CRM & ERP" },
  { icon: TrendingUp, label: "Marketing" },
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero({ eyebrow, h1, chapo, ctas }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-12rem] h-[40rem] bg-[radial-gradient(55%_55%_at_30%_10%,color-mix(in_oklch,var(--primary),transparent_84%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-1/3 h-[26rem] w-[26rem] bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklch,var(--accent),transparent_86%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="container relative py-16 sm:py-20 lg:flex lg:min-h-[88vh] lg:items-center lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-10">
          <div className="text-center lg:text-left">
            <p
              className="eyebrow justify-center animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500 lg:justify-start"
            >
              {eyebrow}
            </p>
            <h1
              className="mt-5 text-balance text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-100 duration-500"
            >
              {h1}
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-balance text-[clamp(1.05rem,1.4vw,1.3rem)] text-muted-foreground animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-200 duration-500 lg:mx-0"
            >
              {chapo}
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center animate-in fade-in slide-in-from-bottom-2 fill-mode-both delay-300 duration-500 lg:justify-start"
            >
              {ctas.map((cta, i) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={cn("min-h-11 justify-center", i === 0 ? "btn-primary" : "btn-outline")}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="animate-in fade-in zoom-in-95 fill-mode-both delay-500 duration-700">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HERO_PILLARS.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={cn(
                    "group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary),transparent_60%),0_12px_32px_-12px_color-mix(in_oklch,var(--primary),transparent_60%)]",
                    i % 2 === 1 && "lg:translate-y-6"
                  )}
                >
                  <Icon className="size-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
