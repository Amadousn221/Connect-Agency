"use client";

import { CONVERSATION } from "@/content/home";
import { useContactModal } from "@/components/layout/ContactModalProvider";

export default function ConversationCta() {
  const { open } = useContactModal();

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-border bg-card px-8 py-14 text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {CONVERSATION.titre}
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">{CONVERSATION.corps}</p>
          <button onClick={open} className="btn-primary mt-7">
            {CONVERSATION.cta.label}
          </button>
        </div>
      </div>
    </section>
  );
}
