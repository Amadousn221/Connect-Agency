// Gabarit Connect Web. En-tête : SiteHeader (base HeaderV2).
// Pied de page : FooterV2 de démo en attendant le choix d'Amadou (étape suivante de l'assemblage).
import FooterV2 from "../footer/FooterV2";
import SiteHeader from "../header/SiteHeader";

interface LayoutProps {
    children?: React.ReactNode;
}

const SiteLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <SiteHeader />
            <main id="contenu" tabIndex={-1}>
                {children}
            </main>
            <FooterV2 />
        </>
    );
};

export default SiteLayout;
