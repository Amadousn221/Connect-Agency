// Bouton WhatsApp flottant, en bas à droite de toutes les pages. Numéro : content/contact.ts.
import { whatsapp } from "@/content/contact";

const WhatsAppButton = () => {
    return (
        <a
            className="cw-whatsapp"
            href={`https://wa.me/${whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${whatsapp.label} au ${whatsapp.display} (nouvel onglet)`}
            title={`${whatsapp.label} : ${whatsapp.display}`}
        >
            <i className="fab fa-whatsapp" aria-hidden="true" />
        </a>
    );
};

export default WhatsAppButton;
