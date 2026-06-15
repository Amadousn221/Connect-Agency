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

/* ─── Column icons — EXPERTISES (18×18) ─── */
const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M9 1.5L1.5 5l7.5 3.5L16.5 5 9 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M1.5 9.5l7.5 3.5 7.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.5 13.5l7.5 3.5 7.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M12 4l5 5-5 5M6 4L1 9l5 5M11 2.5l-4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M1.5 13l5-5 3.5 3.5L17 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 4H17v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCompass = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12.5 5.5L10.5 10.5l-5 2 2-5 5-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="9" cy="9" r="1" fill="currentColor"/>
  </svg>
);
const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M10.5 1.5L3 10h6.5L9 16.5l9-9H10.5l0-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Item icons — VOS ENJEUX (16×16) ─── */
const IconRocket = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5C10.5 1.5 12.5 3.5 12.5 6c0 2.5-2 5-4.5 7C5.5 11 3.5 8.5 3.5 6c0-2.5 2-4.5 4.5-4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="8" cy="6" r="1.4" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5 10.5L3 13M11 10.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1.5 8C1.5 8 4 3.5 8 3.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="8" cy="8" r="1.75" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10.5 10C12 10 14 11 14 12.5V14H2v-1.5C2 11 4 10 5.5 10M8 8.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCart = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1.5 2h2l1.8 7.5h6.2l1.8-5.5H4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="13" r="1.1" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="10.5" cy="13" r="1.1" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
);
const IconDatabase = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <ellipse cx="8" cy="4.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 8c0 1.1 2.24 2 5 2s5-.9 5-2M3 11.5c0 1.1 2.24 2 5 2s5-.9 5-2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 4.5v7M13 4.5v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconSettings = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M8 1.5v1.3M8 13.2v1.3M1.5 8h1.3M13.2 8h1.3M3.7 3.7l.92.92M11.38 11.38l.92.92M3.7 12.3l.92-.92M11.38 4.62l.92-.92" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconBag = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="5.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5.5 5.5V4a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconFork = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M5.5 2v4a2 2 0 002 2v6M10.5 2v3M9 2v3M10.5 5a1.5 1.5 0 01-3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="12" height="12.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5.5 14.5V11h5v3.5M5.5 6.5h1.5M9 6.5h1.5M5.5 9h1.5M9 9h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="2.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5.5 14h5M8 11.5V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="5.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M5.5 5.5V4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1.5M1.5 9.5h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5.5" r="2.75" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M2.5 14.5c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
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
    width="11" height="11"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 5.5h7M6.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CardArrow = () => (
  <svg
    className={styles.cardArrow}
    width="12" height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 6h8M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CtaArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      { key: 'marketplace',      href: '/expertises/creation/marketplace' },
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
      { key: 'python',  href: '/expertises/developpement-sur-mesure/python' },
      { key: 'vuejs',   href: '/expertises/developpement-sur-mesure/vuejs' },
      { key: 'pwa',     href: '/expertises/developpement-sur-mesure/pwa' },
    ],
  },
  {
    key: 'marketing' as const,
    href: '/expertises/marketing-digital',
    items: [
      { key: 'seo', href: '/expertises/marketing-digital/seo' },
      { key: 'pub', href: '/expertises/marketing-digital/publicite-en-ligne' },
      { key: 'crm', href: '/expertises/marketing-digital/crm-marketing' },
    ],
  },
  {
    key: 'conseil' as const,
    href: '/expertises/conseil',
    items: [
      { key: 'strategie',      href: '/expertises/conseil/strategie-digitale' },
      { key: 'transformation', href: '/expertises/conseil/transformation-digitale' },
      { key: 'ia',             href: '/expertises/conseil/intelligence-artificielle' },
    ],
  },
  {
    key: 'automatisation' as const,
    href: '/expertises/automatisation',
    items: [
      { key: 'sync',          href: '/expertises/automatisation' },
      { key: 'n8n',           href: '/expertises/automatisation' },
      { key: 'autoMarketing', href: '/expertises/automatisation' },
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
    return (
      <div className={mobile ? styles.mobileGrid : styles.expertisesGrid}>
        {EXPERTISES_COLS.map((col) => {
          const key = col.key as ExpertiseKey;
          return (
            <div key={key} className={styles.col}>

              {/* Column header — icon box + title + tagline */}
              <Link href={`${prefix}${col.href}`} className={styles.colHeader}>
                <span className={styles.colIconBox}>
                  {EXPERTISE_COL_ICONS[key]}
                </span>
                <div className={styles.colMeta}>
                  <span className={styles.colName}>
                    {t(`megaExpertises.${key}.title`)}
                    <span className={styles.period} aria-hidden="true">.</span>
                  </span>
                  {!mobile && (
                    <span className={styles.colTagline}>
                      {t(`megaExpertises.${key}.tagline`)}
                    </span>
                  )}
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

        {!mobile && (
          <div className={styles.ctaRow}>
            <Link href={`${prefix}/portfolio`} className={styles.ctaLink}>
              {t('voirRealisations')}
              <CtaArrow />
            </Link>
          </div>
        )}
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

            {/* Column heading */}
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
                        /* Mobile: compact text link */
                        <Link href={`${prefix}${item.href}`} className={styles.item}>
                          <span>{t(`megaVosEnjeux.${colKey}.${item.key}`)}</span>
                          <ArrowIcon />
                        </Link>
                      ) : (
                        /* Desktop: Reverb-style card (icon + title + desc) */
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
              <p className={styles.empty}>Bientôt disponible</p>
            )}
          </div>
        );
      })}

      {!mobile && (
        <div className={styles.ctaRow}>
          <Link href={`${prefix}/portfolio`} className={styles.ctaLink}>
            {t('voirRealisations')}
            <CtaArrow />
          </Link>
        </div>
      )}
    </div>
  );
}
