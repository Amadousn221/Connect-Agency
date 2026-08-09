import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/content/site";
import ContactForm from "./ContactForm";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-cw-border bg-cw-subtle py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,var(--cw-accent),transparent_70%)] opacity-[0.08]"
      />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">● PARLONS-EN</p>
          <h2 className="mt-4 font-display text-cw-h2 font-semibold leading-[var(--cw-lh-snug)] tracking-[var(--cw-tracking-tight)] text-cw-text">
            Discutons de votre projet.
          </h2>
          <p className="mt-4 max-w-md text-cw-muted">
            Contactez-nous par téléphone ou à l&apos;aide du formulaire. {SITE.prenomContact} vous
            répond en moins de 24 heures.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`mailto:${SITE.coordonnees.email}`}
              className="flex min-h-11 items-center gap-2.5 text-sm text-cw-text/90 hover:text-cw-accent"
            >
              <Mail className="size-4" />
              {SITE.coordonnees.email}
            </a>
            <a
              href={SITE.coordonnees.telephoneHref}
              className="flex min-h-11 items-center gap-2.5 text-sm text-cw-text/90 hover:text-cw-accent"
            >
              <Phone className="size-4" />
              {SITE.coordonnees.telephone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-cw-border bg-cw-elevated p-6 sm:p-8">
            <ContactForm variant="compact" title="" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
