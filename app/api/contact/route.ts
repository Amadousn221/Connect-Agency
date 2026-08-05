import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { isRateLimited } from "@/lib/rate-limit";
import { sendLeadNotification, sendLeadConfirmation } from "@/lib/resend";
import { upsertHubspotContact } from "@/lib/hubspot";

export const runtime = "nodejs";

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Champs invalides." }, { status: 400 });
  }

  const values = parsed.data;

  // Honeypot rempli → probable bot, on répond 200 sans rien envoyer.
  if (values.entreprise_site) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Trop de demandes. Merci de réessayer dans une minute." },
      { status: 429 }
    );
  }

  try {
    await sendLeadNotification(values);
  } catch (error) {
    console.error("[api/contact] Échec de l'envoi de l'email interne :", error);
    return NextResponse.json(
      { ok: false, error: "Une erreur est survenue. Merci de réessayer plus tard." },
      { status: 500 }
    );
  }

  try {
    await upsertHubspotContact(values);
  } catch (error) {
    console.error("[api/contact] Échec de la synchronisation HubSpot :", error);
  }

  await sendLeadConfirmation(values);

  return NextResponse.json({ ok: true });
}
