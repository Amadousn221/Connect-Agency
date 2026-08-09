"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ_GLOBALE, FAQ_ACCUEIL_INDEX } from "@/content/site";

export default function FaqShort() {
  const items = FAQ_ACCUEIL_INDEX.map((i) => FAQ_GLOBALE[i]);

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <SectionHeader eyebrow="● FAQ" title="Foire aux questions." align="center" />
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion.Root type="single" collapsible className="mt-8 flex flex-col divide-y divide-cw-border border-t border-cw-border">
              {items.map((item, i) => (
                <Accordion.Item key={item.question} value={`item-${i}`} className="py-1">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full min-h-11 items-center justify-between gap-4 py-4 text-left text-base font-medium text-cw-text">
                      {item.question}
                      <ChevronDown className="size-4 shrink-0 text-cw-subtletext transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm leading-[var(--cw-lh-body)] text-cw-muted data-[state=closed]:animate-[cw-accordion-up_200ms_ease-out] data-[state=open]:animate-[cw-accordion-down_200ms_ease-out]">
                    <p className="pb-4">{item.reponse}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
