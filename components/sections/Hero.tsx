'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const y = window.scrollY;
      section.style.setProperty('--hero-parallax-y', `${y * 0.35}px`);
    };

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      data-theme="dark"
      aria-label="Hero"
    >
      {/* Background orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Badge */}
        <div className={styles.badge} aria-hidden="true">
          <span className={styles.badgeDot} />
          {t('heroBadge')}
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          {t('heroHeadline')}
        </h1>

        {/* Subline */}
        <p className={styles.subline}>
          {t('heroSubline')}
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link
            href={`/${locale}/audit-gratuit`}
            className={styles.ctaPrimary}
          >
            {t('heroCta')}
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link
            href={`/${locale}/portfolio`}
            className={styles.ctaSecondary}
          >
            {t('heroCtaSecondary')}
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
