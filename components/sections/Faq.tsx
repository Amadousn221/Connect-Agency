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
    <section className="section pt-0 section--subtle">
      <div className="container">
        <Reveal className="section-header is-center mx-auto justify-items-center text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-foreground">{titre}</h2>
        </Reveal>

        <Reveal className="mx-auto max-w-[52rem]">
          <Accordion.Root className="flex flex-col">
            {items.map((item, i) => (
              <Accordion.Item key={item.question} value={i} className="border-b border-border">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-[1.3rem] text-left font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-foreground">
                    {item.question}
                    <Plus className="size-[18px] shrink-0 text-primary transition-transform duration-[250ms] group-data-[panel-open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="overflow-hidden text-[0.93rem] text-muted-foreground transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
                  <p className="pb-[1.3rem]">{item.reponse}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
