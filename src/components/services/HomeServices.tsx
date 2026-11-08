// Section « Ce que nous réalisons pour vous » de l'accueil — mise en page de la maquette de référence d'Amadou
// (capture du 08/11/2026) : titre centré, phrase d'intro, un service par carte (icône ronde, titre, description,
// lien « En savoir plus »). 6 services, 3 colonnes. Composant sans état, rendu côté serveur.
// Le lien vise la page du pôle quand elle existe, sinon la section « Nos expertises » (jamais une page inexistante).
import Link from "next/link";
import { expertises } from "@/content/expertises";
import { homeServices } from "@/content/home";

const serviceHref = (pole: string, anchor: string): string => {
    const expertise = expertises.find((e) => e.id === pole);
    return expertise?.pageReady ? `${expertise.href}#${anchor}` : "/#nos-expertises";
};

const HomeServices = () => {
    const { eyebrow, title, intro, linkLabel, cards } = homeServices;

    return (
        <section id="nos-services" className="default-padding bottom-less bg-gray cw-services" aria-labelledby="services-titre">
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
                        <li key={card.title} className="col-lg-4 col-md-6 mb-30 d-flex">
                            <article className="cw-service-card">
                                <div className="cw-service-icon" aria-hidden="true">
                                    <i className={card.icon} />
                                </div>
                                <h3 className="cw-service-title">{card.title}</h3>
                                <p className="cw-service-text">{card.text}</p>
                                <ul className="cw-arrow-list cw-service-items" aria-label={`Ce que comprend : ${card.title}`}>
                                    {card.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <Link className="cw-service-link" href={serviceHref(card.pole, card.anchor)}>
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
