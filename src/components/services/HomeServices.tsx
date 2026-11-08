// Section « Nos services » de l'accueil — mise en page de la maquette de référence d'Amadou (capture du
// 08/11/2026) : titre centré, phrase d'intro, un service par carte (icône ronde, titre, description, lien
// « En savoir plus »). 10 services de docs/04 (S01 à S10), 3 colonnes, dernière ligne centrée.
// Composant sans état : section statique rendue côté serveur.
import Link from "next/link";
import { homeServices } from "@/content/home";

const HomeServices = () => {
    const { eyebrow, title, intro, linkLabel, cards } = homeServices;

    return (
        <section className="default-padding bottom-less bg-gray cw-services" aria-labelledby="services-titre">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="services-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-services-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="row justify-content-center list-unstyled m-0">
                    {cards.map((card) => (
                        <li key={card.href} className="col-lg-4 col-md-6 mb-30 d-flex">
                            <article className="cw-service-card">
                                <div className="cw-service-icon" aria-hidden="true">
                                    <i className={card.icon} />
                                </div>
                                <h3 className="cw-service-title">{card.title}</h3>
                                <p>{card.text}</p>
                                <Link className="cw-service-link" href={card.href}>
                                    {linkLabel}
                                    <span className="visually-hidden"> sur {card.title}</span>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeServices;
