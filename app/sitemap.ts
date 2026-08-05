import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
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

  const serviceRoutes = SERVICES.flatMap((service) => [
    `/services/${service.slug}`,
    ...(service.sousServices?.map((sub) => `/services/${service.slug}/${sub.slug}`) ?? []),
  ]);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
