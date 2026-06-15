import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { ReactElement } from 'react';
import styles from './MegaMenu.module.css';

/* ─── Types ─── */
type MegaMenuProps = {
  type: 'expertises' | 'vosEnjeux';
  locale: string;
  mobile?: boolean;
};

/* ─── Column icons — EXPERTISES (16×16) ─── */
const IconLayers = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5L1.5 4.5l6.5 3 6.5-3L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M1.5 8.5l6.5 3 6.5-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.5 12l6.5 3 6.5-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCode = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10.5 3.5l4.5 4.5-4.5 4.5M5.5 3.5L1 8l4.5 4.5M9.5 2l-3 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1.5 11.5l4-4 3 3L15 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 3.5H15V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCompass = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M11 5L9.5 9.5l-4.5 1.5 1.5-4.5L11 5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M9 1.5L2.5 9H8L7 14.5l7.5-8H9.5L9 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Item icons — VOS ENJEUX (14×14) ─── */
const IconRocket = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1C9 1 11 3 11 5.5c0 2-1.5 4-4 5.5C4.5 9.5 3 7.5 3 5.5 3 3 5 1 7 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="7" cy="5.5" r="1.25" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4.5 9L3 11.5M9.5 9l1.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconEye = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1.5 7C1.5 7 3.5 3 7 3s5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M9 8.5C10.2 8.5 12 9.3 12 10.5V12H2v-1.5C2 9.3 3.8 8.5 5 8.5M7 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCart = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1.5 1.5h1.8L4.8 7.5h5.4l1.8-5H4.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5.5" cy="11" r="1" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="9.5" cy="11" r="1" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);
const IconDatabase = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <ellipse cx="7" cy="4" rx="4.5" ry="1.75" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2.5 7c0 .97 2.02 1.75 4.5 1.75S11.5 7.97 11.5 7M2.5 10c0 .97 2.02 1.75 4.5 1.75S11.5 10.97 11.5 10" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2.5 4v6M11.5 4v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconSettings = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.4 3.4l.7.7M9.9 9.9l.7.7M3.4 10.6l.7-.7M9.9 4.1l.7-.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconBag = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1.5" y="4.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4.5 4.5V3.5a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconFork = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M4.5 1.5v4a2 2 0 002 2v5M9.5 1.5v3M8 1.5v3M9.5 4.5a1.5 1.5 0 01-3 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1.5" y="1.5" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4.5 12.5V9.5h5v3M4.5 5.5h1.5M8 5.5h1.5M4.5 7.5h1.5M8 7.5h1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="2" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M5 12.5h4M7 10v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4.5 5V3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V5M1 8.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

/* ─── Icon maps ─── */
const EXPERTISE_COL_ICONS: Record<string, ReactElement> = {
  creation:       <IconLayers />,
  dev:            <IconCode />,
  marketing:      <IconTrendingUp />,
  conseil:        <IconCompass />,
  automatisation: <IconZap />,
};

const ENJEUX_ICONS: Record<string, ReactElement> = {
  objectifs_lancer:     <IconRocket />,
  objectifs_visibilite: <IconEye />,
  objectifs_leads:      <IconUsers />,
  objectifs_vendre:     <IconCart />,
  objectifs_donnees:    <IconDatabase />,
  objectifs_processus:  <IconSettings />,
  secteur_ecommerce:    <IconBag />,
  secteur_restaurant:   <IconFork />,
  secteur_immobilier:   <IconBuilding />,
  secteur_saas:         <IconMonitor />,
  secteur_b2b:          <IconBriefcase />,
  secteur_b2c:          <IconUser />,
};

/* ─── Arrow icons ─── */
const ArrowIcon = () => (
  <svg
    className={styles.itemArrow}
    width="10" height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CardArrow = () => (
  <svg
    className={styles.cardArrow}
    width="11" height="11"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 5.5h7M6 2.5L9 5.5 6 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CtaArrow = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Route map — EXPERTISES ─── */
const EXPERTISES_COLS = [
  {
    key: 'creation' as const,
    href: '/expertises/creation',
    items: [
      { key: 'sitesVitrines',    href: '/expertises/creation/sites-vitrines' },
      { key: 'sitesEcommerce',   href: '/expertises/creation/sites-ecommerce' },
      { key: 'sitesImmobiliers', href: '/expertises/creation/sites-immobiliers' },
      { key: 'sitesRestaurant',  href: '/expertises/creation/sites-restaurant' },
      { key: 'applicationSaas',  href: '/expertises/creation/application-saas' },
      { key: 'logicielsMétier',  href: '/expertises/creation/logiciels-metier' },
      { key: 'integrationErpCrm',href: '/expertises/creation/integration-erp-crm' },
      { key: 'extranetIntranet', href: '/expertises/creation/extranet-intranet' },
    ],
  },
  {
    key: 'dev' as const,
    href: '/expertises/developpement-sur-mesure',
    items: [
      { key: 'shopify', href: '/expertises/developpement-sur-mesure/shopify' },
      { key: 'odoo',    href: '/expertises/developpement-sur-mesure/odoo' },
      { key: 'nextjs',  href: '/expertises/developpement-sur-mesure/nextjs' },
      { key: 'python',  href: '/expertises/developpement-sur-mesure/python' },
      { key: 'pwa',     href: '/expertises/developpement-sur-mesure/pwa' },
    ],
  },
  {
    key: 'marketing' as const,
    href: '/expertises/marketing-digital',
    items: [
      { key: 'seo',           href: '/expertises/marketing-digital/seo' },
      { key: 'pub',           href: '/expertises/marketing-digital/publicite-en-ligne' },
      { key: 'crm',           href: '/expertises/marketing-digital/crm-marketing' },
      { key: 'emailMarketing',href: '/expertises/marketing-digital/email-marketing' },
    ],
  },
  {
    key: 'conseil' as const,
    href: '/expertises/conseil',
    items: [
      { key: 'strategie',      href: '/expertises/conseil/strategie-digitale' },
      { key: 'transformation', href: '/expertises/conseil/transformation-digitale' },
      { key: 'ia',             href: '/expertises/conseil/intelligence-artificielle' },
      { key: 'uxDesign',       href: '/expertises/conseil/ux-design' },
    ],
  },
  {
    key: 'automatisation' as const,
    href: '/expertises/automatisation',
    items: [
      { key: 'sync',          href: '/expertises/automatisation' },
      { key: 'n8n',           href: '/expertises/automatisation' },
      { key: 'autoMarketing', href: '/expertises/automatisation' },
      { key: 'agentsIa',      href: '/expertises/automatisation' },
    ],
  },
];

/* ─── Route map — VOS ENJEUX ─── */
const ENJEUX_COLS = [
  {
    key: 'objectifs' as const,
    items: [
      { key: 'lancer',     descKey: 'lancerDesc',     href: '/expertises/creation' },
      { key: 'visibilite', descKey: 'visibiliteDesc', href: '/expertises/marketing-digital' },
      { key: 'leads',      descKey: 'leadsDesc',      href: '/expertises/marketing-digital/crm-marketing' },
      { key: 'vendre',     descKey: 'vendreDesc',     href: '/expertises/creation/sites-ecommerce' },
      { key: 'donnees',    descKey: 'donneesDesc',    href: '/expertises/creation/integration-erp-crm' },
      { key: 'processus',  descKey: 'processusDesc',  href: '/expertises/automatisation' },
    ],
  },
  {
    key: 'secteur' as const,
    items: [
      { key: 'ecommerce',  descKey: 'ecommerceDesc',  href: '/expertises/creation/sites-ecommerce' },
      { key: 'restaurant', descKey: 'restaurantDesc', href: '/expertises/creation/sites-restaurant' },
      { key: 'immobilier', descKey: 'immobilierDesc', href: '/expertises/creation/sites-immobiliers' },
      { key: 'saas',       descKey: 'saasDesc',       href: '/expertises/creation/application-saas' },
      { key: 'b2b',        descKey: 'b2bDesc',        href: '/expertises/conseil' },
      { key: 'b2c',        descKey: 'b2cDesc',        href: '/expertises/marketing-digital' },
    ],
  },
  {
    key: 'former' as const,
    items: [] as { key: string; descKey: string; href: string }[],
  },
];

type ExpertiseKey = (typeof EXPERTISES_COLS)[number]['key'];
type EnjeuxColKey = (typeof ENJEUX_COLS)[number]['key'];

/* ─── Component ─── */
export default function MegaMenu({ type, locale, mobile = false }: MegaMenuProps) {
  const t = useTranslations('nav');
  const prefix = `/${locale}`;

  /* ── EXPERTISES ── */
  if (type === 'expertises') {

    /* Mobile: flat list */
    if (mobile) {
      return (
        <div className={styles.mobileGrid}>
          {EXPERTISES_COLS.map((col) => {
            const key = col.key as ExpertiseKey;
            return (
              <div key={key} className={styles.col}>
                <Link href={`${prefix}${col.href}`} className={styles.colHeader}>
                  <span className={styles.colIconBox}>{EXPERTISE_COL_ICONS[key]}</span>
                  <div className={styles.colMeta}>
                    <span className={styles.colName}>
                      {t(`megaExpertises.${key}.title`)}
                      <span className={styles.period} aria-hidden="true">.</span>
                    </span>
                  </div>
                </Link>
                <div className={styles.colDivider} aria-hidden="true" />
                <ul className={styles.list}>
                  {col.items.map((item) => (
                    <li key={item.key}>
                      <Link href={`${prefix}${item.href}`} className={styles.item}>
                        <span>{t(`megaExpertises.${key}.${item.key}`)}</span>
                        <ArrowIcon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );
    }

    /* Desktop: 2-row × 3-col grid */
    const renderSection = (col: (typeof EXPERTISES_COLS)[number], useItemGrid = false) => {
      const key = col.key as ExpertiseKey;
      return (
        <div className={styles.col}>
          <Link href={`${prefix}${col.href}`} className={styles.colHeader}>
            <span className={styles.colIconBox}>{EXPERTISE_COL_ICONS[key]}</span>
            <div className={styles.colMeta}>
              <span className={styles.colName}>
                {t(`megaExpertises.${key}.title`)}
                <span className={styles.period} aria-hidden="true">.</span>
              </span>
              <span className={styles.colTagline}>
                {t(`megaExpertises.${key}.tagline`)}
              </span>
            </div>
          </Link>
          <div className={styles.colDivider} aria-hidden="true" />
          <ul className={useItemGrid ? styles.itemGrid : styles.list}>
            {col.items.map((item) => (
              <li key={item.key}>
                <Link href={`${prefix}${item.href}`} className={styles.item}>
                  <span>{t(`megaExpertises.${key}.${item.key}`)}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    return (
      <div className={styles.expertisesWrapper}>

        {/* Row 1 — Création · Dev · Marketing */}
        <div className={styles.expertisesRow}>
          <div className={styles.expertisesCell}>
            {renderSection(EXPERTISES_COLS[0], true)}
          </div>
          <div className={`${styles.expertisesCell} ${styles.expertisesCellBorder}`}>
            {renderSection(EXPERTISES_COLS[1])}
          </div>
          <div className={`${styles.expertisesCell} ${styles.expertisesCellBorder}`}>
            {renderSection(EXPERTISES_COLS[2])}
          </div>
        </div>

        {/* Row separator */}
        <div className={styles.expertisesRowSep} aria-hidden="true" />

        {/* Row 2 — Conseil · Automatisation · CTA */}
        <div className={styles.expertisesRow}>
          <div className={styles.expertisesCell}>
            {renderSection(EXPERTISES_COLS[3])}
          </div>
          <div className={`${styles.expertisesCell} ${styles.expertisesCellBorder}`}>
            {renderSection(EXPERTISES_COLS[4])}
          </div>
          <div className={`${styles.expertisesCell} ${styles.expertisesCellBorder} ${styles.ctaCell}`}>
            <Link href={`${prefix}/portfolio`} className={styles.ctaLink}>
              {t('voirRealisations')}
              <CtaArrow />
            </Link>
          </div>
        </div>

      </div>
    );
  }

  /* ── VOS ENJEUX ── */
  return (
    <div className={mobile ? styles.mobileGrid : styles.enjeuxGrid}>
      {ENJEUX_COLS.map((col) => {
        const colKey = col.key as EnjeuxColKey;
        return (
          <div key={colKey} className={styles.col}>

            <p className={styles.colTitle}>
              {t(`megaVosEnjeux.${colKey}.title`)}
              <span className={styles.period} aria-hidden="true">.</span>
            </p>

            <div className={styles.colDivider} aria-hidden="true" />

            {col.items.length > 0 ? (
              <ul className={styles.list}>
                {col.items.map((item) => {
                  const iconKey = `${colKey}_${item.key}`;
                  const icon = ENJEUX_ICONS[iconKey];
                  return (
                    <li key={item.key}>
                      {mobile ? (
                        <Link href={`${prefix}${item.href}`} className={styles.item}>
                          <span>{t(`megaVosEnjeux.${colKey}.${item.key}`)}</span>
                          <ArrowIcon />
                        </Link>
                      ) : (
                        <Link href={`${prefix}${item.href}`} className={styles.enjeuxCard}>
                          {icon && (
                            <span className={styles.enjeuxCardIcon}>{icon}</span>
                          )}
                          <div className={styles.enjeuxCardBody}>
                            <span className={styles.enjeuxCardTitle}>
                              {t(`megaVosEnjeux.${colKey}.${item.key}`)}
                            </span>
                            <span className={styles.enjeuxCardDesc}>
                              {t(`megaVosEnjeux.${colKey}.${item.descKey}`)}
                            </span>
                          </div>
                          <CardArrow />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className={styles.empty}>
                {locale === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
