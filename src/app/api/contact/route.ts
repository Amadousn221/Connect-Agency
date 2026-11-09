// Route d'envoi du formulaire de contact — spécification : docs/10 §6 (Brevo, API transactionnelle).
// Étapes : champ piège, validation, limite de fréquence par IP (en mémoire), puis deux emails Brevo :
// notification interne (replyTo = demandeur) et accusé de réception au demandeur.
// Sans configuration (variables ci-dessous absentes), la route répond 503 « not_configured » : aucun envoi simulé.
// Variables (serveur uniquement, jamais NEXT_PUBLIC_) : BREVO_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL,
// CONTACT_FROM_NAME.
import { NextResponse } from "next/server";
import { serviceOptions } from "@/content/digitalisation";

const LIMITS = { name: 120, email: 200, company: 160, message: 4000 };
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const tooMany = (ip: string) => {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > MAX_PER_WINDOW;
};

const sendBrevo = async (apiKey: string, payload: Record<string, unknown>) => {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Brevo ${res.status}`);
};

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    // Champ piège : rempli uniquement par les robots. On répond comme un succès sans rien envoyer.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const data = {
        name: clean(body.name, LIMITS.name),
        email: clean(body.email, LIMITS.email),
        company: clean(body.company, LIMITS.company),
        service: clean(body.service, 60),
        message: clean(body.message, LIMITS.message),
    };
    const serviceLabel = serviceOptions.find((option) => option.value === data.service)?.label;
    const errors: string[] = [];
    if (data.name.length < 2) errors.push("name");
    if (!isEmail(data.email)) errors.push("email");
    if (!serviceLabel) errors.push("service");
    if (data.message.length < 20) errors.push("message");
    if (errors.length) return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (tooMany(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

    const { BREVO_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, CONTACT_FROM_NAME } = process.env;
    if (!BREVO_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
        return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }
    const sender = { email: CONTACT_FROM_EMAIL, name: CONTACT_FROM_NAME || "Connect Web" };

    // Emails en texte brut uniquement : aucune valeur saisie n'est interprétée comme du HTML.
    const summary = [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        `Entreprise : ${data.company || "non renseignée"}`,
        `Service souhaité : ${serviceLabel}`,
        "",
        "Projet :",
        data.message,
    ].join("\n");

    try {
        await sendBrevo(BREVO_API_KEY, {
            sender,
            to: [{ email: CONTACT_TO_EMAIL }],
            replyTo: { email: data.email, name: data.name },
            subject: `Nouvelle demande : ${serviceLabel}`,
            textContent: summary,
        });
        await sendBrevo(BREVO_API_KEY, {
            sender,
            to: [{ email: data.email, name: data.name }],
            replyTo: { email: CONTACT_TO_EMAIL },
            // Accusé de réception : texte de docs/07 (« Accusé de réception email »).
            subject: "Votre demande à Connect Web",
            textContent: `Bonjour ${data.name},

Merci pour votre message. Nous avons bien reçu votre demande concernant : ${serviceLabel}. Nous l'étudions et revenons vers vous pour en parler. Si vous souhaitez ajouter des documents ou des précisions, répondez simplement à cet email.

Connect Web`,
        });
    } catch {
        return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
