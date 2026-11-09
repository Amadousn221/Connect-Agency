// Page « Réalisations » — base visuelle : /project-3 de la template Tekni (bandeau + fil d'Ariane, grille de projets
// à deux colonnes). Demandée par Amadou le 09/11/2026. Contenu : realisations.ts (entrées published: true) ; les textes
// décrivent uniquement ce qui est visible sur chaque site public (rôle exact de Connect Web et accords d'utilisation
// des marques à confirmer avant publication, docs/08 §3). Non indexée tant que le site n'est pas validé.
import type { Metadata } from "next";
import Link from "next/link";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import SiteLayout from "@/components/layouts/SiteLayout";
import RealisationsGrid from "@/components/project/RealisationsGrid";
import { primaryCta } from "@/content/navigation";
import { realisations, realisationsSection } from "@/content/realisations";

export const metadata: Metadata = {
    title: "Réalisations",
    description: "Une sélection de sites et de plateformes en ligne de clients de Connect Web : boutiques, sites institutionnels et applications web.",
    alternates: { canonical: "/realisations" },
    robots: { index: false, follow: false },
};

export default function RealisationsPage() {
    const items = realisations.filter((item) => item.published);

    return (
        <SiteLayout>
            <BreadCrumb title="Nos réalisations" breadCrumb="Réalisations" homeLabel="Accueil" />
            <section className="project-style-two-area bg-gray default-padding" aria-labelledby="realisations-liste">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 id="realisations-liste" className="title">{realisationsSection.title}</h2>
                                <div className="devider" />
                                <p className="cw-realisations-intro">{realisationsSection.intro}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <RealisationsGrid items={items} linkLabel={realisationsSection.siteLinkLabel} />
                            <div className="text-center mt-60">
                                <p className="cw-realisations-more">Un projet en tête ? Parlons de ce que vous voulez construire.</p>
                                <Link className="btn btn-theme btn-md" href={primaryCta.href}>
                                    {primaryCta.label}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
