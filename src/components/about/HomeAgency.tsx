// Section « L'agence » de l'accueil — base visuelle : AboutV1 (démo home-1), texte à gauche et image à droite.
// Mise en page inspirée du benchmark (titre en deux temps) ; textes originaux. Liste à flèches conservée.
// Contenu fourni par Amadou le 08/11/2026 (texte repris tel quel, sans titre de liste ; lien minimaliste ajouté sous la liste à la demande d'Amadou, 09/11/2026). Aucun compteur (D22).
// L'image est un gabarit gris du template : besoin visuel documenté dans content/home.ts.
import Image from "next/image";
import Link from "next/link";
import { homeAgency, homeHero } from "@/content/home";

const HomeAgency = () => {
    const { eyebrow, titleLines, paragraphs, points, image } = homeAgency;
    const { secondaryCta } = homeHero;

    return (
        <section id="agence" className="about-style-one-area default-padding overflow-hidden cw-agency" aria-labelledby="agence-titre">
            <div className="container">
                <div className="row align-center">
                    <div className="about-style-one col-xl-6 col-lg-6">
                        <div className="cw-agency-text">
                            <h4 className="cw-sub">{eyebrow}</h4>
                            <h2 id="agence-titre" className="title mb-25">
                                {titleLines[0]}
                                <span className="cw-agency-accent">{titleLines[1]}</span>
                            </h2>
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                            ))}
                            <ul className="cw-arrow-list cw-agency-list">
                                {points.map((point) => (
                                    <li key={point.title}>
                                        <strong>{point.title}</strong> : {point.text}
                                    </li>
                                ))}
                            </ul>
                            <Link className="cw-link-cta" href={secondaryCta.href}>
                                {secondaryCta.label}
                            </Link>
                        </div>
                    </div>
                    <div className="about-style-one col-xl-6 col-lg-6 cw-agency-photo-col">
                        <div className="about-thumb cw-agency-thumb">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAgency;
