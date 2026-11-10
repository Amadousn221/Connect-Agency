// Bloc « Nous contacter » placé avant le pied de page — base visuelle : ContactV1 de la template (/contact-us),
// en version compacte : informations à gauche (icônes rondes), formulaire dans une carte à droite.
// Formulaire : DigitalContactForm (envoi réel vers /api/contact, Brevo ; aucun succès simulé). Tant que les variables
// BREVO_API_KEY, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL ne sont pas configurées, l'envoi affiche une erreur.
import DigitalContactForm from "@/components/digitalisation/DigitalContactForm";
import { agencePage } from "@/content/agence";

const SiteContact = () => {
    const { title, text, items, formEyebrow, formTitle } = agencePage.contactForm;

    return (
        <section id="contact" className="contact-style-one-area cw-contact-band" aria-labelledby="contact-titre">
            <div className="container">
                <div className="row align-center">
                    <div className="contact-stye-one col-lg-5">
                        <div className="contact-style-one-info">
                            <h2 id="contact-titre" className="title">{title}</h2>
                            <p>{text}</p>
                            <ul>
                                {items.map((item) => (
                                    <li key={item.title}>
                                        <i className={item.icon} aria-hidden="true" />
                                        <div className="info">
                                            <h3 className="title">{item.title}</h3>
                                            {item.href ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.value}, ${item.title} (nouvel onglet)`}>
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p>{item.value}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="contact-stye-one col-lg-7">
                        <div className="contact-form-style-one">
                            <p className="sub-title">{formEyebrow}</p>
                            <h3 className="title">{formTitle}</h3>
                            <DigitalContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SiteContact;
