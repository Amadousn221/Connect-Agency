import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import JsonLd from "@/components/seo/JsonLd";
import { serviceJsonLd, faqPageJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { SOUS_SERVICES } from "@/content/services";

function parentSlugOf(sub: (typeof SOUS_SERVICES)[number]) {
  return sub.parent?.href.split("/").pop() ?? "";
}

export function generateStaticParams() {
  return SOUS_SERVICES.map((s) => ({ service: parentSlugOf(s), sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; sub: string }>;
}): Promise<Metadata> {
  const { service, sub } = await params;
  const content = SOUS_SERVICES.find((s) => s.slug === sub && parentSlugOf(s) === service);
  if (!content) return {};
  return { title: content.seo.title, description: content.seo.description };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ service: string; sub: string }>;
}) {
  const { service, sub } = await params;
  const content = SOUS_SERVICES.find((s) => s.slug === sub && parentSlugOf(s) === service);
  if (!content || !content.parent) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: content.parent.label, path: content.parent.href },
          { name: content.pilier, path: `${content.parent.href}/${content.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(content)} />
      <JsonLd data={faqPageJsonLd(content.faq)} />
      <ServiceTemplate content={content} />
    </>
  );
}
