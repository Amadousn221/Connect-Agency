import Link from "next/link";
import { CONVERSATION } from "@/content/home";
import Reveal from "@/components/motion/Reveal";

export default function ConversationCta() {
  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-card px-6 py-12 text-center sm:px-8 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_88%),transparent_70%)]"
          />
          <h2 className="relative text-balance text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-tight text-foreground">
            {CONVERSATION.titre}
          </h2>
          <p className="relative mt-4 max-w-md text-muted-foreground">{CONVERSATION.corps}</p>
          <Link href={CONVERSATION.cta.href} className="btn-primary relative mt-7 min-h-11 w-full justify-center sm:w-auto">
            {CONVERSATION.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
