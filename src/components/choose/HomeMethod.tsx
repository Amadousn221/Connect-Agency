// Section « Méthode » de l'accueil — base visuelle : WhyChooseV3 (démo home-5), repérée par Amadou le 08/11/2026 :
// image à gauche, titre, paragraphe, liste à droite. Textes : docs/07 [07-ACC-6].
// Retiré : compteur « 18K » et barres de pourcentage (D22 : pas de chiffres non sourcés) ; mention
// « 100 % certifié » de la démo. La liste à coches devient une liste ordonnée numérotée (étapes).
import Image from "next/image";
import { homeMethod } from "@/content/home";

const HomeMethod = () => {
    const { title, intro, rolePrefix, steps, image } = homeMethod;

    return (
        <section className="choose-us-style-three-area default-padding cw-method" aria-labelledby="methode-titre">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="choose-us-style-three-thumb">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1">
                        <div className="choose-us-style-three-info">
                            <h2 id="methode-titre" className="title">{title}</h2>
                            <p>{intro}</p>
                            <ol className="cw-method-steps">
                                {steps.map((step) => (
                                    <li key={step.title}>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                        <p className="cw-method-role">
                                            <strong>{rolePrefix}</strong> {step.role}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMethod;
