import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/templates/SubServicePageTemplate";
import { getServiceBySlug } from "@/content/services";

const PARENT_SLUG = "sites-web-ecommerce";
const SUB_SLUG = "boutique-en-ligne";

export const metadata: Metadata = {
  title: "Boutique en ligne",
  description: "Shopify, WooCommerce ou sur mesure — une boutique en ligne conçue pour vendre, partout.",
};

export default function Page() {
  const parent = getServiceBySlug(PARENT_SLUG);
  const sub = parent?.sousServices?.find((s) => s.slug === SUB_SLUG);
  if (!parent || !sub) notFound();
  return <SubServicePageTemplate parent={parent} sub={sub} />;
}
