// Gabarit Connect Web : en-tête SiteHeader (base HeaderV2), contenu, pied de page minimal SiteFooter.
import SiteFooter from "../footer/SiteFooter";
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
            <SiteFooter />
        </>
    );
};

export default SiteLayout;
