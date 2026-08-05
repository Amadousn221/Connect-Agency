import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubServicePageTemplate from "@/components/templates/SubServicePageTemplate";
import { getServiceBySlug } from "@/content/services";

const PARENT_SLUG = "sites-web-ecommerce";
const SUB_SLUG = "refonte-de-site";

export const metadata: Metadata = {
  title: "Refonte de site web",
  description: "Une refonte qui garde le référencement que vous avez bâti : audit, migration propre, redirections.",
};

export default function Page() {
  const parent = getServiceBySlug(PARENT_SLUG);
  const sub = parent?.sousServices?.find((s) => s.slug === SUB_SLUG);
  if (!parent || !sub) notFound();
  return <SubServicePageTemplate parent={parent} sub={sub} />;
}
