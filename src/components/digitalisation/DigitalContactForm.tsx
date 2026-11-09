"use client";
// Formulaire de contact de la page Digitalisation — classes du formulaire du thème (contact-form, form-group,
// form-control), envoi réel vers /api/contact (Brevo). Aucun succès simulé : la confirmation ne s'affiche qu'après une
// réponse { ok: true }. En cas d'échec, les champs restent remplis.
// Présélection du service : tout lien portant data-cw-service="<id>" (cartes de services, bouton « connexions »)
// renseigne le champ avant le défilement vers #contact ; ?service=<id> dans l'URL fonctionne aussi au chargement.
// Contexte : data-cw-context="<texte>" (module « En pratique ») pré-remplit « Quelques mots sur le projet » uniquement
// si ce champ est vide ou ne contient que le contexte précédent : un texte saisi par le visiteur n'est jamais écrasé.
// Messages : docs/07 [07-FORM].
import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { digitalisationPage, serviceOptions } from "@/content/digitalisation";

type Status = "idle" | "sending" | "success" | "error";
type Field = "name" | "email" | "service" | "message";

const fieldErrors: Record<Field, string> = {
    name: "Indiquez votre nom et prénom.",
    email: "Cette adresse email semble incomplète. Exemple : nom@entreprise.com",
    service: "Choisissez le service le plus proche, ou « J'ai besoin de conseil ».",
    message: "Ajoutez quelques détails (20 caractères minimum).",
};

const isKnownService = (value: string | null) => !!value && serviceOptions.some((option) => option.value === value);

const DigitalContactForm = () => {
    const { submit, success } = digitalisationPage.contact;
    const [service, setService] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Field[]>([]);
    const [notConfigured, setNotConfigured] = useState(false);
    const id = useId();
    const summaryRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const prefilled = useRef("");

    useEffect(() => {
        const fromUrl = new URLSearchParams(window.location.search).get("service");
        // Lecture unique de l'URL au montage (pas d'état externe à synchroniser).
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (isKnownService(fromUrl)) setService(fromUrl as string);
        const onClick = (event: MouseEvent) => {
            const link = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cw-service]");
            const value = link?.dataset.cwService ?? null;
            if (isKnownService(value)) setService(value as string);
            const context = link?.dataset.cwContext;
            const area = messageRef.current;
            if (context && area && (area.value.trim() === "" || area.value === prefilled.current)) {
                area.value = `${context}\n`;
                prefilled.current = area.value;
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
        const found: Field[] = [];
        if ((values.name ?? "").trim().length < 2) found.push("name");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((values.email ?? "").trim())) found.push("email");
        if (!isKnownService(values.service ?? "")) found.push("service");
        if ((values.message ?? "").trim().length < 20) found.push("message");
        setErrors(found);
        if (found.length) {
            setStatus("idle");
            requestAnimationFrame(() => summaryRef.current?.focus());
            return;
        }
        setStatus("sending");
        setNotConfigured(false);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data.ok) {
                setStatus("success");
                form.reset();
                setService("");
                return;
            }
            if (data.error === "validation" && Array.isArray(data.fields)) setErrors(data.fields as Field[]);
            setNotConfigured(data.error === "not_configured");
            setStatus("error");
        } catch {
            setStatus("error");
        }
        requestAnimationFrame(() => summaryRef.current?.focus());
    };

    const errorFor = (field: Field) =>
        errors.includes(field) ? (
            <span className="cw-field-error" id={`${id}-${field}-erreur`}>{fieldErrors[field]}</span>
        ) : null;
    const describedBy = (field: Field) => (errors.includes(field) ? `${id}-${field}-erreur` : undefined);

    if (status === "success") {
        return (
            <div className="cw-form-success" role="status" tabIndex={-1} ref={summaryRef}>
                <i className="fal fa-check-circle" aria-hidden="true" />
                <p>{success}</p>
            </div>
        );
    }

    return (
        <form className="contact-form cw-contact-form" onSubmit={onSubmit} noValidate aria-busy={status === "sending"}>
            <div ref={summaryRef} tabIndex={-1} className="cw-form-summary" aria-live="assertive">
                {errors.length > 0 && (
                    <p className="cw-form-alert">
                        Le formulaire contient {errors.length} erreur{errors.length > 1 ? "s" : ""}. Corrigez les champs indiqués ci-dessous.
                    </p>
                )}
                {status === "error" && errors.length === 0 && (
                    <p className="cw-form-alert">
                        Votre demande n&apos;a pas pu être envoyée. Réessayez dans quelques instants. Votre message n&apos;a pas été perdu :
                        les champs sont toujours remplis.
                        {notConfigured && process.env.NODE_ENV === "development" && (
                            <span className="cw-form-dev"> (Développement : envoi non configuré, variables BREVO_API_KEY, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL absentes.)</span>
                        )}
                    </p>
                )}
            </div>
            {/* Champ piège pour les robots : invisible et ignoré par les lecteurs d'écran. */}
            <div className="cw-hp" aria-hidden="true">
                <label htmlFor={`${id}-website`}>Ne pas remplir</label>
                <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`${id}-name`}>Nom <span aria-hidden="true">*</span></label>
                        <input className="form-control" id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={120}
                            aria-invalid={errors.includes("name")} aria-describedby={describedBy("name")} />
                        {errorFor("name")}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`${id}-email`}>Email <span aria-hidden="true">*</span></label>
                        <input className="form-control" id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={200}
                            placeholder="nom@entreprise.com" aria-invalid={errors.includes("email")} aria-describedby={describedBy("email")} />
                        {errorFor("email")}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`${id}-company`}>Entreprise <span className="cw-optional">(facultatif)</span></label>
                        <input className="form-control" id={`${id}-company`} name="company" type="text" autoComplete="organization" maxLength={160} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`${id}-service`}>Service souhaité <span aria-hidden="true">*</span></label>
                        <select className="form-control cw-select" id={`${id}-service`} name="service" required value={service}
                            onChange={(event) => setService(event.target.value)}
                            aria-invalid={errors.includes("service")} aria-describedby={describedBy("service")}>
                            <option value="">Choisir un service</option>
                            {serviceOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {errorFor("service")}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor={`${id}-message`}>Quelques mots sur le projet <span aria-hidden="true">*</span></label>
                <textarea className="form-control" ref={messageRef} id={`${id}-message`} name="message" rows={5} required maxLength={4000}
                    placeholder="Votre activité, ce qui ne fonctionne pas aujourd'hui, ce que vous aimeriez obtenir"
                    aria-invalid={errors.includes("message")} aria-describedby={describedBy("message")} />
                {errorFor("message")}
            </div>
            <p className="cw-form-note">Vos informations servent uniquement à répondre à votre demande. Les champs marqués * sont obligatoires.</p>
            <button type="submit" className="btn btn-theme btn-md" disabled={status === "sending"}>
                {status === "sending" ? "Envoi en cours…" : <>{submit} <span aria-hidden="true">→</span></>}
            </button>
        </form>
    );
};

export default DigitalContactForm;
