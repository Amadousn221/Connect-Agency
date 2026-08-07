import type { FaqItem } from "@/types/content";
import { SITE_URL } from "@/lib/site-url";
import { SITE } from "@/content/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.nom,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.coordonnees.telephone,
      email: SITE.coordonnees.email,
      contactType: "customer service",
      areaServed: "SN",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.nom,
    url: SITE_URL,
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.reponse,
      },
    })),
  };
}

export function collectionPageJsonLd(
  projets: { nom: string; lien?: string; publie: boolean }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nos réalisations",
    url: `${SITE_URL}/realisations`,
    hasPart: projets
      .filter((p) => p.publie)
      .map((p) => ({
        "@type": "CreativeWork",
        name: p.nom,
        // On n'inclut que les URLs publiques confirmées (pas les placeholders).
        ...(p.lien && /^https?:\/\//.test(p.lien) && !p.lien.includes(".example")
          ? { url: p.lien }
          : {}),
      })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
