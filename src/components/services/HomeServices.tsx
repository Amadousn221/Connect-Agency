// Section « Ce que nous réalisons pour vous » de l'accueil — mise en page de la maquette de référence d'Amadou
// (capture du 08/11/2026) : titre centré, phrase d'intro, un service par carte (icône ronde, titre, description) avec
// ses cinq sous-services en liste à flèches. Contenu fourni par Amadou le 08/11/2026 (texte repris tel quel, sans lien :
// les pages de services n'existent pas encore). 6 services, 3 colonnes. Composant sans état, rendu côté serveur.
import { homeServices } from "@/content/home";

const HomeServices = () => {
    const { eyebrow, title, intro, cards } = homeServices;

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
                                <ul className="cw-arrow-list cw-service-list">
                                    {card.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeServices;
