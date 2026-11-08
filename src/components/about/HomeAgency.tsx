// Section « L'agence » de l'accueil — base visuelle : AboutV1 (démo home-1), texte à gauche et image à droite.
// Orientation (08/11/2026) : présenter l'agence, les problématiques de ses clients et les solutions, sans le parcours
// du fondateur (page /agence). Liste légère à flèches, sans bloc coloré. Aucun compteur (D22).
// L'image est un gabarit gris du template : besoin visuel documenté dans content/home.ts.
import Image from "next/image";
import Link from "next/link";
import { homeAgency } from "@/content/home";

const HomeAgency = () => {
    const { eyebrow, title, paragraphs, listTitle, points, link, image } = homeAgency;

    return (
        <section id="agence" className="about-style-one-area default-padding overflow-hidden cw-agency" aria-labelledby="agence-titre">
            <div className="container">
                <div className="row align-center">
                    <div className="about-style-one col-xl-6 col-lg-6">
                        <h4 className="sub-title">{eyebrow}</h4>
                        <h2 id="agence-titre" className="title mb-25">{title}</h2>
                        {paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}
                        <h3 className="cw-agency-list-title">{listTitle}</h3>
                        <ul className="cw-arrow-list cw-agency-list">
                            {points.map((point) => (
                                <li key={point.title}>
                                    <strong>{point.title}</strong> — {point.text}
                                </li>
                            ))}
                        </ul>
                        <Link className="btn btn-theme mt-30" href={link.href}>
                            {link.label}
                        </Link>
                    </div>
                    <div className="about-style-one col-xl-5 col-lg-5 offset-xl-1 offset-lg-1">
                        <div className="about-thumb cw-agency-thumb">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                            <div className="thumb-shape-bottom" aria-hidden="true">
                                <Image src="/assets/img/illustration/4.png" alt="" width={285} height={290} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAgency;
