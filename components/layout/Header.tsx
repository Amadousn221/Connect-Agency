'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import MegaMenu from './MegaMenu';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = `/${locale}`;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (key: string) =>
    setMobileSection((prev) => (prev === key ? null : key));

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* ── Logo ── */}
          <Link href={prefix} className={styles.logo} onClick={closeMobile}>
            <span className={styles.logoConnect}>Connect</span>
            <span className={styles.logoWeb}>Web</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className={styles.nav} aria-label="Navigation principale">

            {/* EXPERTISES */}
            <div className={styles.navItem}>
              <button className={styles.navTrigger} aria-haspopup="true">
                {t('expertises')}
                <svg className={styles.chevron} width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Mega-menu — shown via CSS :hover on parent .navItem */}
              <div className={styles.megaPanel} role="region" aria-label={t('expertises')}>
                <div className={styles.megaPanelInner}>
                  <MegaMenu type="expertises" locale={locale} />
                </div>
              </div>
            </div>

            {/* VOS ENJEUX */}
            <div className={styles.navItem}>
              <button className={styles.navTrigger} aria-haspopup="true">
                {t('vosEnjeux')}
                <svg className={styles.chevron} width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={styles.megaPanel} role="region" aria-label={t('vosEnjeux')}>
                <div className={styles.megaPanelInner}>
                  <MegaMenu type="vosEnjeux" locale={locale} />
                </div>
              </div>
            </div>

            <Link href={`${prefix}/agence`} className={styles.navLink}>
              {t('agence')}
            </Link>
            <Link href={`${prefix}/ressources`} className={styles.navLink}>
              {t('ressources')}
            </Link>
          </nav>

          {/* ── Actions ── */}
          <div className={styles.actions}>
            <ThemeToggle />
            <Link href={`${prefix}/audit-gratuit`} className={styles.ctaButton}>
              {t('auditGratuit')}
            </Link>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={mobileOpen}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (outside header so it scrolls properly) ── */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav aria-label="Menu mobile">

          {/* EXPERTISES accordion */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileSectionTrigger}
              onClick={() => toggleMobileSection('expertises')}
              aria-expanded={mobileSection === 'expertises'}
            >
              {t('expertises')}
              <svg
                className={`${styles.chevron} ${mobileSection === 'expertises' ? styles.chevronUp : ''}`}
                width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
              >
                <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileSection === 'expertises' && (
              <div className={styles.mobileSubContent}>
                <MegaMenu type="expertises" locale={locale} mobile />
              </div>
            )}
          </div>

          {/* VOS ENJEUX accordion */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileSectionTrigger}
              onClick={() => toggleMobileSection('vosEnjeux')}
              aria-expanded={mobileSection === 'vosEnjeux'}
            >
              {t('vosEnjeux')}
              <svg
                className={`${styles.chevron} ${mobileSection === 'vosEnjeux' ? styles.chevronUp : ''}`}
                width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
              >
                <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileSection === 'vosEnjeux' && (
              <div className={styles.mobileSubContent}>
                <MegaMenu type="vosEnjeux" locale={locale} mobile />
              </div>
            )}
          </div>

          <Link href={`${prefix}/agence`} className={styles.mobileLink} onClick={closeMobile}>
            {t('agence')}
          </Link>
          <Link href={`${prefix}/ressources`} className={styles.mobileLink} onClick={closeMobile}>
            {t('ressources')}
          </Link>

          <div className={styles.mobileBottom}>
            <Link
              href={`${prefix}/audit-gratuit`}
              className={styles.mobileCtaButton}
              onClick={closeMobile}
            >
              {t('auditGratuit')}
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className={styles.overlay}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}
