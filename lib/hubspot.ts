import type { ContactFormValues } from "@/lib/validation/contact";
import { getServiceBySlug } from "@/content/services";

const HUBSPOT_API_BASE = "https://api.hubapi.com";

/**
 * Upsert (créer ou mettre à jour) le contact dans HubSpot via l'API Batch Upsert v3.
 * Ne fait rien si HUBSPOT_TOKEN n'est pas configuré — cf. critère d'acceptation :
 * un échec HubSpot ne doit jamais bloquer l'envoi de l'email au client.
 *
 * Remarque (client) : la propriété personnalisée "service_demande" doit exister
 * dans le portail HubSpot (Paramètres > Propriétés > Contact) pour être enregistrée.
 */
export async function upsertHubspotContact(values: ContactFormValues) {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.warn("[hubspot] HUBSPOT_TOKEN absent — contact non synchronisé.");
    return;
  }

  const serviceLabel = getServiceBySlug(values.service)?.pilier ?? values.service;

  const res = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts/batch/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: [
        {
          idProperty: "email",
          id: values.email,
          properties: {
            email: values.email,
            firstname: values.nom,
            phone: values.telephone,
            service_demande: serviceLabel,
            message: values.message || undefined,
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`HubSpot upsert a échoué (${res.status}): ${body}`);
  }
}
