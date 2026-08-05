import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validation/contact";
import { getServiceBySlug } from "@/content/services";

// TODO (client) : une fois le domaine connectweb.sn vérifié sur Resend,
// remplacer "onboarding@resend.dev" par une adresse @connectweb.sn.
let client: Resend | null = null;

function getClient() {
  if (!process.env.RESEND_API_KEY) return null;
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

function serviceLabel(slug: string) {
  return getServiceBySlug(slug)?.pilier ?? slug;
}

function leadEmailHtml(values: ContactFormValues) {
  return `
    <div style="font-family: system-ui, sans-serif; color: #0F172A;">
      <h2 style="color:#FA0E1F;">Nouvelle demande — Connect Web</h2>
      <p><strong>Nom :</strong> ${values.nom}</p>
      <p><strong>E-mail :</strong> ${values.email}</p>
      <p><strong>Téléphone :</strong> ${values.telephone}</p>
      <p><strong>Service demandé :</strong> ${serviceLabel(values.service)}</p>
      <p><strong>Message :</strong></p>
      <p>${values.message ? values.message.replace(/\n/g, "<br/>") : "—"}</p>
    </div>
  `;
}

function confirmationEmailHtml(values: ContactFormValues) {
  return `
    <div style="font-family: system-ui, sans-serif; color: #0F172A;">
      <h2>Merci de nous avoir contactés, ${values.nom} !</h2>
      <p>On a bien reçu votre demande concernant <strong>${serviceLabel(values.service)}</strong>.
      Notre équipe vous répond sous 24 heures.</p>
      <p>À très vite,<br/>L'équipe Connect Web</p>
    </div>
  `;
}

export async function sendLeadNotification(values: ContactFormValues) {
  const resend = getClient();
  const to = process.env.CONTACT_TO_EMAIL;
  if (!resend || !to) {
    throw new Error("Resend n'est pas configuré (RESEND_API_KEY / CONTACT_TO_EMAIL manquant).");
  }

  await resend.emails.send({
    from: "Connect Web <onboarding@resend.dev>",
    to,
    replyTo: values.email,
    subject: `Nouvelle demande — ${serviceLabel(values.service)}`,
    html: leadEmailHtml(values),
  });
}

export async function sendLeadConfirmation(values: ContactFormValues) {
  const resend = getClient();
  if (!resend) return;

  try {
    await resend.emails.send({
      from: "Connect Web <onboarding@resend.dev>",
      to: values.email,
      subject: "On a bien reçu votre demande",
      html: confirmationEmailHtml(values),
    });
  } catch (error) {
    console.error("[resend] Échec de l'accusé de réception :", error);
  }
}
