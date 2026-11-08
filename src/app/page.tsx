// Accueil Connect Web — en cours d'assemblage (CW-041). Les sections seront choisies par Amadou.
// Contenu provisoire, non publiable : sert uniquement à vérifier l'en-tête.
import SiteLayout from "@/components/layouts/SiteLayout";

export const metadata = {
    robots: { index: false, follow: false },
};

export default function HomePage() {
    return (
        <SiteLayout>
            <div className="default-padding bg-dark text-light" style={{ minHeight: "70vh", paddingTop: 200 }}>
                <div className="container">
                    <h1>Accueil en cours d&apos;assemblage</h1>
                    <p>Page provisoire pour vérifier l&apos;en-tête. Les démos Tekni restent accessibles sur /home-1 à /home-6.</p>
                </div>
            </div>
            <div style={{ minHeight: "120vh" }} className="default-padding">
                <div className="container">
                    <p>Zone de défilement pour vérifier l&apos;en-tête fixe.</p>
                </div>
            </div>
        </SiteLayout>
    );
}
