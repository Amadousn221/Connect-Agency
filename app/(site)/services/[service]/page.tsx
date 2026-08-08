import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import JsonLd from "@/components/seo/JsonLd";
import { serviceJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { PILIERS } from "@/content/services";

export function generateStaticParams() {
  return PILIERS.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const content = PILIERS.find((s) => s.slug === service);
  if (!content) return {};
  return { title: content.seo.title, description: content.seo.description };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const content = PILIERS.find((s) => s.slug === service);
  if (!content) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(content)} />
      <JsonLd data={faqPageJsonLd(content.faq)} />
      <ServiceTemplate content={content} />
    </>
  );
}
