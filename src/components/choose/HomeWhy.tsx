// Section « Pourquoi Connect Web ? » de l'accueil — base visuelle : WhyChooseV1 (démo home-1, « Be at the forefront
// of new innovation »), choisie par Amadou le 08/11/2026 : panneau bleu foncé incliné à gauche, liste à filet bleu,
// fond dégradé à droite à la place de la photo (les images de démo sont des gabarits gris), mot en filigrane.
// Textes : docs/03 §2 (bénéfices de la proposition de valeur). Le « 24/7 » de la démo n'est pas repris.
import Image from "next/image";
import { homeWhy } from "@/content/home";

const HomeWhy = () => {
    const { title, points, watermark } = homeWhy;

    return (
        <section className="choose-us-style-one-area default-padding text-light cw-why" aria-labelledby="pourquoi-titre">
            <div className="cover-bg cw-why-cover" aria-hidden="true" />
            <div className="shape-left-top" aria-hidden="true">
                <Image src="/assets/img/shape/17.png" alt="" width={335} height={245} />
            </div>
            <div className="text-invisible" aria-hidden="true">{watermark}</div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pr-80">
                        <div className="choose-us-style-one">
                            <h2 id="pourquoi-titre" className="title mb-35">{title}</h2>
                            <ul className="list-item">
                                {points.map((point) => (
                                    <li key={point.title}>
                                        <h3>{point.title}</h3>
                                        <p>{point.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;
