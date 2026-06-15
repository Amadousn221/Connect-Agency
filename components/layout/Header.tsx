'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import MegaMenu from './MegaMenu';
import styles from './Header.module.css';

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 2.5L4.5 6.5L8 2.5"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = `/${locale}`;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleSection = (key: string) =>
    setMobileSection((p) => (p === key ? null : key));

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
            <span className={styles.logoMark}>
              Connect<span className={styles.logoAccent}>Web</span>
              <span className={styles.logoPeriod}>.</span>
            </span>
            <span className={styles.logoTagline}>
              {locale === 'fr'
                ? 'Votre stack digital, pensé pour croître'
                : 'Your digital stack, built to scale'}
            </span>
          </Link>

          {/* ── Desktop nav (centred) ── */}
          <nav className={styles.nav} aria-label="Navigation principale">

            {/* EXPERTISES */}
            <div className={styles.navItem}>
              <button
                className={styles.navTrigger}
                aria-haspopup="true"
              >
                {t('expertises')}
                <ChevronIcon className={styles.chevron} />
              </button>
              <div
                className={styles.megaPanel}
                role="region"
                aria-label={t('expertises')}
              >
                <MegaMenu type="expertises" locale={locale} />
              </div>
            </div>

            {/* VOS ENJEUX */}
            <div className={styles.navItem}>
              <button
                className={styles.navTrigger}
                aria-haspopup="true"
              >
                {t('vosEnjeux')}
                <ChevronIcon className={styles.chevron} />
              </button>
              <div
                className={styles.megaPanel}
                role="region"
                aria-label={t('vosEnjeux')}
              >
                <MegaMenu type="vosEnjeux" locale={locale} />
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
            <Link
              href={`${prefix}/audit-gratuit`}
              className={styles.ctaButton}
            >
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

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav aria-label="Menu mobile">
          {/* Expertises */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileTrigger}
              onClick={() => toggleSection('expertises')}
              aria-expanded={mobileSection === 'expertises'}
            >
              {t('expertises')}
              <ChevronIcon
                className={`${styles.chevron} ${
                  mobileSection === 'expertises' ? styles.chevronUp : ''
                }`}
              />
            </button>
            {mobileSection === 'expertises' && (
              <div className={styles.mobileSub}>
                <MegaMenu type="expertises" locale={locale} mobile />
              </div>
            )}
          </div>

          {/* Vos Enjeux */}
          <div className={styles.mobileSection}>
            <button
              className={styles.mobileTrigger}
              onClick={() => toggleSection('vosEnjeux')}
              aria-expanded={mobileSection === 'vosEnjeux'}
            >
              {t('vosEnjeux')}
              <ChevronIcon
                className={`${styles.chevron} ${
                  mobileSection === 'vosEnjeux' ? styles.chevronUp : ''
                }`}
              />
            </button>
            {mobileSection === 'vosEnjeux' && (
              <div className={styles.mobileSub}>
                <MegaMenu type="vosEnjeux" locale={locale} mobile />
              </div>
            )}
          </div>

          <Link
            href={`${prefix}/agence`}
            className={styles.mobileLink}
            onClick={closeMobile}
          >
            {t('agence')}
          </Link>
          <Link
            href={`${prefix}/ressources`}
            className={styles.mobileLink}
            onClick={closeMobile}
          >
            {t('ressources')}
          </Link>

          <div className={styles.mobileFooter}>
            <Link
              href={`${prefix}/audit-gratuit`}
              className={styles.mobileCta}
              onClick={closeMobile}
            >
              {t('auditGratuit')}
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Scrim */}
      {mobileOpen && (
        <div
          className={styles.scrim}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}
