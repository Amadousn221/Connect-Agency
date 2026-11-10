// Section « Nos expertises » de l'accueil — les quatre pôles (décision D40) affichés ensemble : 4 colonnes sur grand
// écran, 2 sur tablette, 1 sur mobile. Plus de slider ni de défilement automatique (demande d'Amadou, 10/11/2026 :
// les quatre pôles doivent être visibles et accessibles d'emblée). Données : src/content/expertises.ts (source
// unique) et expertiseCards (src/content/home.ts). Le numéro du pôle est la signature graphique de la section.
import Image from "next/image";
import Link from "next/link";
import { expertiseHref, expertises, expertisesSection } from "@/content/expertises";
import { expertiseCards } from "@/content/home";

const HomeExpertises = () => {
    const { eyebrow, title, intro, subServicesLabel } = expertisesSection;

    return (
        <section id="nos-expertises" className="default-padding cw-expertises" aria-labelledby="expertises-titre">
            <div className="container">
                <div className="cw-expertises-head site-heading">
                    <h4 className="cw-sub">{eyebrow}</h4>
                    <h2 id="expertises-titre" className="title">{title}</h2>
                    <p className="cw-expertises-intro">{intro}</p>
                </div>
                <ul className="cw-expertises-grid">
                    {expertises.map((expertise) => {
                        const card = expertiseCards[expertise.id];
                        return (
                            <li key={expertise.id}>
                                <article className="cw-expertise-card" aria-labelledby={`expertise-${expertise.id}`}>
                                    <div className="cw-expertise-photo" aria-hidden="true">
                                        <Image
                                            src={card.photo}
                                            alt=""
                                            fill
                                            sizes="(min-width: 1400px) 320px, (min-width: 576px) 50vw, 100vw"
                                        />
                                    </div>
                                    <div className="cw-expertise-body">
                                        <p className="cw-expertise-num">
                                            <span className="visually-hidden">Pôle </span>
                                            {expertise.number}
                                        </p>
                                        <h3 id={`expertise-${expertise.id}`} className="cw-expertise-title">{card.cardTitle}</h3>
                                        <p className="cw-expertise-desc">{expertise.description}</p>
                                        <ul className="cw-arrow-list cw-expertise-services" aria-label={`${subServicesLabel} : ${expertise.shortTitle}`}>
                                            {card.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <Link className="cw-expertise-link" href={expertiseHref(expertise)}>
                                            {card.cta}
                                            <span className="visually-hidden"> : {expertise.shortTitle}</span>
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default HomeExpertises;
