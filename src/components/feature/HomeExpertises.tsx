// Section « Nos expertises » de l'accueil — base visuelle : FeatureV2 (démo home-3), choisie par Amadou le
// 08/11/2026. Elle ne présente plus que les trois familles (Digitalisation, Marketing, Infrastructure) et les
// pôles qu'elles regroupent ; les services détaillés sont dans la section « Nos services » (pas de doublon).
// Trois cartes : plus besoin de slider. Les photos de la démo sont des gabarits gris : la zone visuelle est un
// dégradé du thème tant qu'aucune photo Connect Web n'est fournie.
import Link from "next/link";
import { homeFamilies } from "@/content/home";

const HomeExpertises = () => {
    const { eyebrow, titleLines, intro, linkLabel, cards } = homeFamilies;

    return (
        <section className="feature-style-two-area default-padding bottom-less cw-expertises" aria-labelledby="expertises-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="expertises-titre" className="title">
                                {titleLines[0]}
                                <br />
                                {titleLines[1]}
                            </h2>
                            <div className="devider" />
                            <p className="cw-expertises-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="row justify-content-center cw-expertises-grid">
                    {cards.map((card, index) => (
                        <li key={card.title} className="col-lg-4 col-md-6 mb-30">
                            <article className="feature-style-two">
                                <div className="thumb">
                                    <div className="cw-expertise-visual" aria-hidden="true">
                                        <span className={`cw-expertise-bigicon ${card.icon}`} />
                                    </div>
                                </div>
                                <div className="info">
                                    <span className={`icon cw-tone-${(index % 5) + 1}`} aria-hidden="true">
                                        <span className={card.icon} />
                                    </span>
                                    <h3 className="cw-expertise-title">{card.title}</h3>
                                    <p>{card.need}</p>
                                    <ul className="cw-expertise-services" aria-label={`Pôles de la famille ${card.title}`}>
                                        {card.poles.map((pole) => (
                                            <li key={pole.href}>
                                                <Link href={pole.href}>{pole.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link className="cw-expertise-link" href={card.href}>
                                        {linkLabel}
                                        <span className="visually-hidden"> {card.title}</span>
                                    </Link>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeExpertises;
