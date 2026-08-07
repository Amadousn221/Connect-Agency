import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import ContactForm from "./ContactForm";
import Reveal from "@/components/motion/Reveal";

const CONTACT_LINES = [
  { icon: Phone, label: "Téléphone", value: SITE.coordonnees.telephone, href: SITE.coordonnees.telephoneHref },
  {
    icon: Phone,
    label: "Second numéro",
    value: SITE.coordonnees.telephoneSecondaire,
    href: SITE.coordonnees.telephoneSecondaireHref,
  },
  { icon: Mail, label: "E-mail", value: SITE.coordonnees.email, href: `mailto:${SITE.coordonnees.email}` },
  { icon: MapPin, label: "Adresse", value: SITE.coordonnees.adresse, href: undefined },
];

export default function CtaBand() {
  return (
    <section id="contact" className="section section--subtle relative overflow-hidden">
      <div className="glow pointer-events-none absolute -top-[210px] -right-[120px] h-[400px] w-[560px] bg-[var(--glow-1)]" aria-hidden="true" />
      <Reveal className="container relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Parlons-en</p>
          <h2 className="mt-3.5 text-foreground">
            Discutons de votre projet.
          </h2>
          <p className="no-justify mt-4 max-w-md text-muted-foreground">
            Contactez-nous par téléphone ou via le formulaire. Notre équipe vous répond en moins de 24 heures.
          </p>

          <div className="mt-[1.85rem]">
            {CONTACT_LINES.map((line) => {
              const Tag = line.href ? "a" : "div";
              return (
                <Tag
                  key={line.label}
                  {...(line.href ? { href: line.href } : {})}
                  className="flex items-center gap-3.5 border-t border-border py-[0.85rem] text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  <line.icon className="size-[18px] shrink-0 text-primary" />
                  <span>
                    <small className="block font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
                      {line.label}
                    </small>
                    {line.value}
                  </span>
                </Tag>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm variant="compact" title="" />
        </div>
      </Reveal>
    </section>
  );
}
