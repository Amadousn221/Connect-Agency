// Gabarit Connect Web : en-tête SiteHeader (base HeaderV2), contenu, pied de page minimal SiteFooter.
import SiteFooter from "../footer/SiteFooter";
import SiteHeader from "../header/SiteHeader";
import WhatsAppButton from "../utilities/WhatsAppButton";

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
            <WhatsAppButton />
        </>
    );
};

export default SiteLayout;
