import type { MetadataRoute } from "next";
import { PILIERS, SOUS_SERVICES } from "@/content/services";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/realisations",
    "/nous-joindre",
    "/politique-de-confidentialite",
    "/mentions-legales",
  ];

  const serviceRoutes = PILIERS.map((s) => `/services/${s.slug}`);
  const subServiceRoutes = SOUS_SERVICES.map((s) => `${s.parent!.href}/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
