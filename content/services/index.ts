import type { ServiceContent } from "./_types";
import sitesWebEcommerce from "./sites-web-ecommerce";
import sitesWordpress from "./sites-wordpress";
import refonteDeSite from "./refonte-de-site";
import boutiqueEnLigne from "./boutique-en-ligne";
import logicielsApplicationsWeb from "./logiciels-applications-web";
import iaAutomatisation from "./ia-automatisation";
import crmErpIntegrations from "./crm-erp-integrations";
import marketingGenerationProspects from "./marketing-generation-prospects";
import conseilStrategie from "./conseil-strategie";

/** Les 6 piliers (pages racine, sans `parent`). */
export const PILIERS: ServiceContent[] = [
  sitesWebEcommerce,
  logicielsApplicationsWeb,
  iaAutomatisation,
  crmErpIntegrations,
  marketingGenerationProspects,
  conseilStrategie,
];

/** Sous-pages de `sites-web-ecommerce` (mêmes gabarit, `parent` renseigné). */
export const SOUS_SERVICES: ServiceContent[] = [sitesWordpress, refonteDeSite, boutiqueEnLigne];

/** Les 9 pages au total — registre pour `generateStaticParams` et les recherches par slug. */
export const ALL_SERVICES: ServiceContent[] = [...PILIERS, ...SOUS_SERVICES];

/** Alias rétrocompatible : les 6 piliers, utilisés par la nav, le footer et le formulaire. */
export const SERVICES = PILIERS;

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getSubService(parentSlug: string, subSlug: string): ServiceContent | undefined {
  const sub = SOUS_SERVICES.find((s) => s.slug === subSlug);
  if (!sub || !sub.parent) return undefined;
  return sub.parent.href === `/services/${parentSlug}` ? sub : undefined;
}

export type { ServiceContent } from "./_types";
