import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projetsPublies } from "@/content/projects";

/**
 * Route d'étude de cas par projet. Le gabarit détaillé fait l'objet d'une phase
 * ultérieure : on se contente ici d'une page « bientôt disponible » pour les
 * slugs publiés (et d'un 404 pour les autres), afin que les URLs existent déjà
 * sans promettre un contenu absent.
 */
export function generateStaticParams() {
  return projetsPublies().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projet = projetsPublies().find((p) => p.slug === slug);
  if (!projet) return {};
  return {
    title: `${projet.nom} — Étude de cas`,
    description: projet.resume,
    robots: { index: false, follow: true },
  };
}

export default async function ProjetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projet = projetsPublies().find((p) => p.slug === slug);
  if (!projet) notFound();

  return (
    <section className="section">
      <div className="container max-w-[46rem]">
        <p className="eyebrow">{projet.secteur}</p>
        <h1 className="mt-[0.85rem] text-foreground">{projet.nom}</h1>
        <p className="lead mt-4">{projet.resume}</p>
        <p className="mt-6 text-muted-foreground">
          L&apos;étude de cas détaillée de ce projet arrive bientôt. En attendant, nous pouvons vous la présenter de
          vive voix.
        </p>
        <div className="mt-8 flex flex-wrap gap-[0.7rem]">
          <Link href="/nous-joindre" className="btn-primary">
            Nous joindre
          </Link>
          <Link href="/realisations" className="btn-outline">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Toutes les réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
