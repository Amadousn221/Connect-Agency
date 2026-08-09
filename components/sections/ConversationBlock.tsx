"use client";

import { Reveal } from "@/components/motion/Reveal";
import { CONVERSATION } from "@/content/home";
import { useContactModal } from "@/components/layout/ContactModalProvider";

export default function ConversationBlock() {
  const { open } = useContactModal();

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto flex max-w-2xl flex-col items-center overflow-hidden rounded-2xl border border-cw-border-strong bg-cw-elevated px-8 py-14 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_0%,var(--cw-accent),transparent_60%)] opacity-[0.08]"
            />
            <h2 className="relative text-balance font-display text-cw-h2 font-semibold leading-[var(--cw-lh-snug)] text-cw-text">
              {CONVERSATION.titre}
            </h2>
            <p className="relative mt-4 max-w-md text-cw-muted">{CONVERSATION.corps}</p>
            <button onClick={open} className="btn-outline relative mt-7">
              {CONVERSATION.cta.label}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
