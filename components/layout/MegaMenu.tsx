import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './MegaMenu.module.css';

/* ─── Types ─── */
type MegaMenuProps = {
  type: 'expertises' | 'vosEnjeux';
  locale: string;
  mobile?: boolean;
};

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
      { key: 'strategie',       href: '/expertises/conseil/strategie-digitale' },
      { key: 'transformation',  href: '/expertises/conseil/transformation-digitale' },
      { key: 'ia',              href: '/expertises/conseil/intelligence-artificielle' },
    ],
  },
  {
    key: 'automatisation' as const,
    href: '/expertises/automatisation',
    items: [
      { key: 'sync',         href: '/expertises/automatisation' },
      { key: 'n8n',          href: '/expertises/automatisation' },
      { key: 'autoMarketing',href: '/expertises/automatisation' },
    ],
  },
];

/* ─── Route map — VOS ENJEUX ─── */
const ENJEUX_COLS = [
  {
    key: 'objectifs' as const,
    items: [
      { key: 'lancer',    href: '/expertises/creation' },
      { key: 'visibilite',href: '/expertises/marketing-digital' },
      { key: 'leads',     href: '/expertises/marketing-digital/crm-marketing' },
      { key: 'vendre',    href: '/expertises/creation/sites-ecommerce' },
      { key: 'donnees',   href: '/expertises/creation/integration-erp-crm' },
      { key: 'processus', href: '/expertises/automatisation' },
    ],
  },
  {
    key: 'secteur' as const,
    items: [
      { key: 'ecommerce',  href: '/expertises/creation/sites-ecommerce' },
      { key: 'restaurant', href: '/expertises/creation/sites-restaurant' },
      { key: 'immobilier', href: '/expertises/creation/sites-immobiliers' },
      { key: 'saas',       href: '/expertises/creation/application-saas' },
      { key: 'b2b',        href: '/expertises/conseil' },
      { key: 'b2c',        href: '/expertises/marketing-digital' },
    ],
  },
  {
    key: 'former' as const,
    items: [], /* hors scope — intentionnellement vide */
  },
];

/* ─── Arrow icon ─── */
const ArrowIcon = () => (
  <svg
    className={styles.itemArrow}
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 5.5h7M6.5 2.5l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Component ─── */
export default function MegaMenu({ type, locale, mobile = false }: MegaMenuProps) {
  const t = useTranslations('nav');
  const prefix = `/${locale}`;

  /* ── EXPERTISES ── */
  if (type === 'expertises') {
    return (
      <div className={mobile ? styles.mobileGrid : styles.expertisesGrid}>
        {EXPERTISES_COLS.map((col) => (
          <div key={col.key} className={styles.col}>
            <Link href={`${prefix}${col.href}`} className={styles.colTitle}>
              {t(`megaExpertises.${col.key}.title`)}
              <span className={styles.colPeriod} aria-hidden="true">.</span>
            </Link>
            <ul className={styles.list}>
              {col.items.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`${prefix}${item.href}`}
                    className={styles.item}
                  >
                    <span>{t(`megaExpertises.${col.key}.${item.key}`)}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {!mobile && (
          <div className={styles.ctaRow}>
            <Link href={`${prefix}/portfolio`} className={styles.ctaLink}>
              {t('voirRealisations')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    );
  }

  /* ── VOS ENJEUX ── */
  return (
    <div className={mobile ? styles.mobileGrid : styles.enjeuxGrid}>
      {ENJEUX_COLS.map((col) => (
        <div key={col.key} className={styles.col}>
          <p className={styles.colTitle}>
            {t(`megaVosEnjeux.${col.key}.title`)}
            <span className={styles.colPeriod} aria-hidden="true">.</span>
          </p>

          {col.items.length > 0 ? (
            <ul className={styles.list}>
              {col.items.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`${prefix}${item.href}`}
                    className={styles.item}
                  >
                    <span>{t(`megaVosEnjeux.${col.key}.${item.key}`)}</span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Bientôt disponible</p>
          )}
        </div>
      ))}

      {!mobile && (
        <div className={styles.ctaRow}>
          <Link href={`${prefix}/portfolio`} className={styles.ctaLink}>
            {t('voirRealisations')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
