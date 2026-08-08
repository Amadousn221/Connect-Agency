import Link from "next/link";
import { SECTEURS_TRANSVERSAUX } from "@/content/services/_shared";
import Reveal from "@/components/motion/Reveal";

export default function SectorGrid() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Secteurs</p>
          <h2 className="text-foreground">On connaît votre milieu.</h2>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2">
          {SECTEURS_TRANSVERSAUX.map((secteur) => (
            <span key={secteur} className="tag">
              {secteur}
            </span>
          ))}
        </Reveal>

        <p className="no-justify mt-7 text-muted-foreground">
          Vous ne voyez pas votre secteur ? On a probablement déjà fait quelque chose qui s&apos;en rapproche.{" "}
          <Link href="/nous-joindre" className="font-medium text-primary hover:underline">
            Parlons-en →
          </Link>
        </p>
      </div>
    </section>
  );
}
