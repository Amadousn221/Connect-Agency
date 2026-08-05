import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Nous joindre",
  description:
    "Contactez Connect Web pour discuter de votre projet digital. Nous répondons à toutes les demandes sous 24 heures.",
};

export default function NousJoindrePage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10rem] h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_86%),transparent_70%)]"
      />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">● NOUS JOINDRE</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Comment pouvons-nous vous aider aujourd&apos;hui ?
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Vous souhaitez obtenir plus d&apos;informations concernant nos services ? N&apos;hésitez pas à
            nous contacter pour toute demande, qu&apos;il s&apos;agisse d&apos;une proposition gratuite ou
            de plus amples détails.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={SITE.coordonnees.telephoneHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Numéro de téléphone</p>
                <p className="font-medium text-foreground">{SITE.coordonnees.telephone}</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.coordonnees.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Nous joindre par courriel</p>
                <p className="font-medium text-foreground">{SITE.coordonnees.email}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
          <ContactForm
            variant="full"
            title="Comment pouvons-nous vous aider aujourd'hui ?"
            subtitle="Donnez-nous simplement un aperçu de votre projet. Nous répondons à toutes les demandes sous 24 heures et vous donnons notre avis sincère pour savoir si nous sommes le partenaire qu'il vous faut."
          />
        </div>
      </div>
    </section>
  );
}
