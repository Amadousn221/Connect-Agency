import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";
import Reveal from "@/components/motion/Reveal";

interface FaqProps {
  items: FaqItem[];
  titre?: string;
}

export default function Faq({ items, titre = "Foire aux questions." }: FaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-[clamp(4rem,10vw,8rem)]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
            {titre}
          </h2>

          <Accordion.Root className="mt-8 flex flex-col divide-y divide-border border-t border-border">
            {items.map((item, i) => (
              <Accordion.Item key={item.question} value={i} className="py-1">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex min-h-11 w-full items-center justify-between gap-4 rounded-lg px-2 py-4 text-left font-[family-name:var(--font-display)] text-base font-semibold text-foreground transition-colors -mx-2 hover:bg-[var(--color-bg-subtle)]">
                    {item.question}
                    <Plus className="size-[18px] shrink-0 text-primary transition-transform duration-[250ms] group-data-[panel-open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="overflow-hidden px-2 text-sm leading-relaxed text-muted-foreground transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                  <p className="pb-4">{item.reponse}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
