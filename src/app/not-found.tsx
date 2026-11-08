// Page 404 Connect Web — textes de docs/07 §13. Remplace la page d'erreur de démo de la template.
import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/layouts/SiteLayout";

export const metadata: Metadata = {
    title: "Page introuvable",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <SiteLayout>
            <section className="default-padding cw-notfound">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <h1 className="title">Page introuvable</h1>
                            <p>Cette page n&apos;existe pas ou a été déplacée. Voici où reprendre :</p>
                            <p className="cw-notfound-actions">
                                <Link className="btn btn-theme btn-md" href="/">Accueil</Link>
                                <Link className="btn btn-border-theme btn-md" href="/#nos-expertises">Nos expertises</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
