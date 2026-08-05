import { Mail, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import ContactForm from "./ContactForm";

export default function CtaBand() {
  return (
    <section className="border-t border-border bg-[var(--color-bg-subtle)] py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">● PARLONS-EN</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Discutons de votre projet.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Contactez-nous par téléphone ou à l&apos;aide du formulaire. {SITE.prenomContact} vous répond en
            moins de 24 heures.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href={`mailto:${SITE.coordonnees.email}`} className="flex items-center gap-2.5 text-sm text-foreground/90 hover:text-primary">
              <Mail className="size-4" />
              {SITE.coordonnees.email}
            </a>
            <a href={SITE.coordonnees.telephoneHref} className="flex items-center gap-2.5 text-sm text-foreground/90 hover:text-primary">
              <Phone className="size-4" />
              {SITE.coordonnees.telephone}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm variant="compact" title="" />
        </div>
      </div>
    </section>
  );
}
