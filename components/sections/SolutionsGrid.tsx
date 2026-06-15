import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import type { ReactElement } from 'react';
import styles from './SolutionsGrid.module.css';

const SOLUTION_KEYS = ['ecommerce', 'restaurant', 'immobilier'] as const;
type SolutionKey = (typeof SOLUTION_KEYS)[number];

/* Icons — 24×24, 1.5px stroke, same visual family as ObjectivesGrid */
const icons: Record<SolutionKey, ReactElement> = {
  ecommerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  restaurant: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  immobilier: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SolutionsGrid() {
  const t = useTranslations('solutions');
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <section className={styles.section} aria-labelledby="solutions-title">
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('eyebrow')}</span>
          <h2 id="solutions-title" className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <ul className={styles.grid} role="list">
          {SOLUTION_KEYS.map((key) => {
            const href = t(`${key}.href` as `${SolutionKey}.href`);
            const cardTitle = t(`${key}.title` as `${SolutionKey}.title`);
            const cardDesc = t(`${key}.desc` as `${SolutionKey}.desc`);
            const cardCta = t(`${key}.cta` as `${SolutionKey}.cta`);
            const secteur = t(`${key}.secteur` as `${SolutionKey}.secteur`);
            return (
              <li key={key}>
                <Link href={`${prefix}${href}`} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.icon}>{icons[key]}</span>
                    <span className={styles.secteurLabel}>{secteur}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{cardTitle}</h3>
                  <p className={styles.cardDesc}>{cardDesc}</p>
                  <span className={styles.cta} aria-hidden="true">
                    {cardCta}
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
