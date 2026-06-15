'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './ExpertisesSection.module.css';

/* ── Types ── */
const PILLAR_KEYS = ['creation', 'dev', 'marketing', 'conseil', 'automatisation'] as const;
type PillarKey = (typeof PILLAR_KEYS)[number];

/* ── Expand icon: + rotates to × at 45° ── */
const ExpandIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`${styles.expandIcon} ${open ? styles.expandIconOpen : ''}`}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line
      x1="2" y1="9" x2="16" y2="9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={styles.expandHorizontal}
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Component ── */
export default function ExpertisesSection() {
  const t = useTranslations('expertisesSection');
  const locale = useLocale();
  const prefix = `/${locale}`;
  const [openPillar, setOpenPillar] = useState<PillarKey>('creation');
  const sectionRef = useRef<HTMLElement>(null);

  /* Lightweight parallax — moves decorative orb on scroll */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      section.style.setProperty('--parallax-y', `${(clamped * 80) - 40}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = (key: PillarKey) =>
    setOpenPillar(prev => (prev === key ? key : key));

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="expertises-title"
    >
      {/* Decorative background orb — parallax */}
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.orbSecondary} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Left: sticky header ── */}
        <div className={styles.leftCol}>
          <div className={styles.leftSticky}>
            <span className={styles.eyebrow}>{t('eyebrow')}</span>
            <h2 id="expertises-title" className={styles.title}>
              <span>{t('titleLine1')}</span>
              <span>{t('titleLine2')}</span>
            </h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>

            {/* Progress indicator */}
            <div className={styles.progress} aria-hidden="true">
              {PILLAR_KEYS.map((key, i) => (
                <button
                  key={key}
                  className={`${styles.progressDot} ${openPillar === key ? styles.progressDotActive : ''}`}
                  onClick={() => setOpenPillar(key)}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: accordion list ── */}
        <div className={styles.rightCol}>
          {PILLAR_KEYS.map((key, i) => {
            const isOpen = openPillar === key;
            const href = t(`${key}.href` as `${PillarKey}.href`);
            const pillarTitle = t(`${key}.title` as `${PillarKey}.title`);
            const pillarDesc = t(`${key}.desc` as `${PillarKey}.desc`);
            const tagsStr = t(`${key}.tags` as `${PillarKey}.tags`);
            const tags = tagsStr.split(', ');

            return (
              <div
                key={key}
                className={`${styles.pillar} ${isOpen ? styles.pillarOpen : ''}`}
              >
                {/* Trigger row */}
                <button
                  className={styles.trigger}
                  onClick={() => setOpenPillar(key)}
                  aria-expanded={isOpen}
                  aria-controls={`pillar-content-${key}`}
                >
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.pillarTitle}>
                    {pillarTitle}
                    <span className={styles.period} aria-hidden="true">.</span>
                  </span>
                  <span className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ''}`}>
                    <ExpandIcon open={isOpen} />
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  id={`pillar-content-${key}`}
                  role="region"
                  className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
                >
                  <div className={styles.contentInner}>
                    <div className={styles.body}>
                      {/* Text side */}
                      <div className={styles.textSide}>
                        <p className={styles.desc}>{pillarDesc}</p>
                        <div className={styles.tags} role="list">
                          {tags.map(tag => (
                            <span key={tag} className={styles.tag} role="listitem">{tag}</span>
                          ))}
                        </div>
                        <Link
                          href={`${prefix}${href}`}
                          className={styles.discoverLink}
                        >
                          {t('discover')}
                          <ArrowRight />
                        </Link>
                      </div>

                      {/* Visual side — placeholder */}
                      <div className={styles.visual} aria-hidden="true">
                        <div className={styles.visualInner}>
                          <span className={styles.visualNum}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className={styles.visualLine} />
                          <span className={styles.visualLabel}>{pillarTitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
