import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import type { ReactElement } from 'react';
import styles from './ObjectivesGrid.module.css';

/* ── SVG icons — Feather-style, 24×24, 1.5px stroke ── */
const icons: Record<string, ReactElement> = {
  lancer: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  visibilite: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  leads: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  vendre: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  donnees: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  processus: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const OBJECTIVE_KEYS = ['lancer', 'visibilite', 'leads', 'vendre', 'donnees', 'processus'] as const;
type ObjectiveKey = (typeof OBJECTIVE_KEYS)[number];

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ObjectivesGrid() {
  const t = useTranslations('objectives');
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <section className={styles.section} aria-labelledby="objectives-title">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('eyebrow')}</span>
          <h2 id="objectives-title" className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <ul className={styles.grid} role="list">
          {OBJECTIVE_KEYS.map((key, i) => {
            const href = t(`${key}.href` as `${ObjectiveKey}.href`);
            const cardTitle = t(`${key}.title` as `${ObjectiveKey}.title`);
            const cardDesc = t(`${key}.desc` as `${ObjectiveKey}.desc`);
            return (
              <li key={key}>
                <Link
                  href={`${prefix}${href}`}
                  className={styles.card}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.icon}>{icons[key]}</span>
                    <span className={styles.number} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{cardTitle}</h3>
                  <p className={styles.cardDesc}>{cardDesc}</p>
                  <span className={styles.cta} aria-hidden="true">
                    {t('cta')}
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
