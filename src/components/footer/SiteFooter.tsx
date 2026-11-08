// Pied de page Connect Web — version minimale avant publication (08/11/2026).
// Remplace le pied de page de démo de la template (FooterV2 : adresse, téléphones, emails et histoire d'entreprise
// fictifs). Ne contient que des faits établis : nom, description du dossier (docs/07 §1), liens vers les pôles et
// les sections de l'accueil, droits. Coordonnées, réseaux sociaux, mentions légales et confidentialité : à ajouter
// quand Amadou les fournit (docs/12 Q07) ; aucun lien vers une page inexistante.
import Image from "next/image";
import Link from "next/link";
import { mainLinks, navPoles } from "@/content/navigation";

const SiteFooter = () => {
    return (
        <footer className="cw-footer" aria-label="Pied de page">
            <div className="container">
                <div className="row cw-footer-main">
                    <div className="col-lg-5 col-md-12">
                        <Image className="cw-footer-logo" src="/assets/img/cw/logo-connect-web-clair.png" alt="Connect Web" width={688} height={185} />
                        <p className="cw-footer-text">
                            Connect Web conçoit des sites, des boutiques en ligne et des outils de gestion, et accompagne l&apos;équipement
                            informatique des locaux professionnels.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h2 className="cw-footer-title">Expertises</h2>
                        <ul className="cw-footer-links">
                            {navPoles.map((pole) => (
                                <li key={pole.id}>
                                    <Link href={pole.all.href}>{pole.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2 className="cw-footer-title">Connect Web</h2>
                        <ul className="cw-footer-links">
                            {mainLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cw-footer-bottom">
                    <p>© {new Date().getFullYear()} Connect Web</p>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
