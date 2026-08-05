import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().trim().min(2, "Merci d'indiquer votre nom."),
  email: z.string().trim().email("Adresse e-mail invalide."),
  telephone: z.string().trim().min(6, "Merci d'indiquer un numéro de téléphone valide."),
  service: z.string().min(1, "Merci de sélectionner un service."),
  message: z.string().trim().optional().default(""),
  // Honeypot — doit rester vide. Rempli = bot.
  entreprise_site: z.string().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
