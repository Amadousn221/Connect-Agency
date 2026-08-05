import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { getServiceBySlug } from "@/content/services";

const SLUG = "conseil-strategie";

export function generateMetadata(): Metadata {
  const content = getServiceBySlug(SLUG);
  return { title: content?.seo.title, description: content?.seo.description };
}

export default function Page() {
  const content = getServiceBySlug(SLUG);
  if (!content) notFound();
  return <ServicePageTemplate content={content} />;
}
