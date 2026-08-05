import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/templates/SubServicePageTemplate";
import { getServiceBySlug } from "@/content/services";

const PARENT_SLUG = "sites-web-ecommerce";
const SUB_SLUG = "sites-wordpress";

export const metadata: Metadata = {
  title: "Sites WordPress",
  description: "Développement de sites web WordPress solides et faciles à faire évoluer.",
};

export default function Page() {
  const parent = getServiceBySlug(PARENT_SLUG);
  const sub = parent?.sousServices?.find((s) => s.slug === SUB_SLUG);
  if (!parent || !sub) notFound();
  return <SubServicePageTemplate parent={parent} sub={sub} />;
}
