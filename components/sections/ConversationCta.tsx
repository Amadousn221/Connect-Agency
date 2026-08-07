import Link from "next/link";
import { CONVERSATION } from "@/content/home";
import Reveal from "@/components/motion/Reveal";

export default function ConversationCta() {
  return (
    <section className="py-[clamp(44px,6vw,80px)]">
      <div className="container">
        <Reveal className="card relative grid justify-items-center gap-[0.9rem] p-[clamp(2rem,4.5vw,3.5rem)] text-center">
          <div
            aria-hidden="true"
            className="glow absolute -top-[190px] left-1/2 h-[340px] w-[520px] -translate-x-1/2 bg-[var(--glow-2)]"
          />
          <p className="eyebrow relative">{CONVERSATION.eyebrow}</p>
          <h2 className="relative max-w-[20ch] text-foreground">{CONVERSATION.titre}</h2>
          <p className="lead is-center relative max-w-[54ch]">{CONVERSATION.corps}</p>
          <Link href={CONVERSATION.cta.href} className="btn-outline relative">
            {CONVERSATION.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
