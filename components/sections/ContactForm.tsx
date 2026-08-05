"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { SERVICES } from "@/content/services";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "full" | "compact";
  title?: string;
  subtitle?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  variant = "full",
  title = "Comment pouvons-nous vous aider aujourd'hui ?",
  subtitle,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      service: "",
      message: "",
      entreprise_site: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Merci de réessayer, ou de nous écrire directement par e-mail.");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
      hasError ? "border-destructive" : "border-border"
    );

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center" role="status">
        <p className="text-base font-semibold text-foreground">Merci !</p>
        <p className="mt-1 text-sm text-muted-foreground">
          On vous recontacte sous 24 h.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-4", variant === "full" && "gap-5")}
    >
      {(title || subtitle) && variant === "full" && (
        <div className="mb-1">
          {title && <h3 className="text-xl font-semibold text-foreground">{title}</h3>}
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      {/* Honeypot — masqué visuellement, laissé accessible aux bots */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="entreprise_site">Ne pas remplir</label>
        <input
          id="entreprise_site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("entreprise_site")}
        />
      </div>

      <div className={cn("grid gap-4", variant === "full" && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-foreground">
            Nom*
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            className={inputClass(!!errors.nom)}
            {...register("nom")}
          />
          {errors.nom && (
            <p id="nom-error" className="mt-1 text-xs text-destructive">
              {errors.nom.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Courriel*
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className={cn("grid gap-4", variant === "full" && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-foreground">
            Téléphone*
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.telephone}
            aria-describedby={errors.telephone ? "telephone-error" : undefined}
            className={inputClass(!!errors.telephone)}
            {...register("telephone")}
          />
          {errors.telephone && (
            <p id="telephone-error" className="mt-1 text-xs text-destructive">
              {errors.telephone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
            Service*
          </label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass(!!errors.service)}
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>
              Sélectionner un service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.pilier}
              </option>
            ))}
            <option value="autre">Autre / je ne sais pas encore</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-destructive">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={variant === "full" ? 4 : 3}
          className={inputClass(false)}
          {...register("message")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary justify-center disabled:opacity-60">
        {status === "submitting" ? "Envoi en cours…" : "Envoyer"}
      </button>
    </form>
  );
}
