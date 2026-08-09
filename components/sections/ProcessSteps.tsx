import { Compass, PenTool, Rocket, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PROCESSUS_STANDARD } from "@/content/site";

const ICONS: LucideIcon[] = [Compass, PenTool, Rocket];

export default function ProcessSteps({
  titre = "Comment se déroule un projet avec nous.",
}: {
  titre?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeader eyebrow="● LE PROCESSUS" title={titre} />

        <Stagger delayChildren={0.08} className="mt-10 grid gap-6 sm:grid-cols-3">
          {PROCESSUS_STANDARD.map((step, i) => {
            const Icon = ICONS[i] ?? Compass;
            return (
              <StaggerItem key={step.etape}>
                <div className="h-full rounded-xl border border-cw-border bg-cw-elevated p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-cw-subtle text-cw-accent">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-2xl font-semibold text-cw-border-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cw-text">{step.titre}</h3>
                  <p className="mt-2 text-sm text-cw-muted">{step.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
