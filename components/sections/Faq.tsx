import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/content";

interface FaqProps {
  items: FaqItem[];
  titre?: string;
}

export default function Faq({ items, titre = "Foire aux questions." }: FaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">● FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {titre}
          </h2>

          <Accordion.Root className="mt-8 flex flex-col divide-y divide-border border-t border-border">
            {items.map((item, i) => (
              <Accordion.Item key={item.question} value={i} className="py-1">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-foreground">
                    {item.question}
                    <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[panel-open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[ending-style]:h-0 data-[starting-style]:h-0 transition-[height] duration-200 ease-out">
                  <p className="pb-4">{item.reponse}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
