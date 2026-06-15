'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import MegaMenu from './MegaMenu';
import styles from './Header.module.css';

type MenuKey = 'expertises' | 'vosEnjeux';

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="10" height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogoMark = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.logoIcon}>
    <rect x="2" y="2" width="7" height="7" rx="1.5" fill="var(--color-accent)"/>
    <rect x="11" y="2" width="7" height="7" rx="1.5" fill="var(--color-accent)" opacity=".4"/>
    <rect x="2" y="11" width="7" height="7" rx="1.5" fill="var(--color-accent)" opacity=".4"/>
    <rect x="11" y="11" width="7" height="7" rx="1.5" fill="var(--color-accent)"/>
  </svg>
);

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const prefix = `/${locale}`;

  /* ── Desktop mega-menu state ── */
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNav = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  /* ── Mobile drawer state ── */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleSection = (key: string) =>
    setMobileSection((p) => (p === key ? null : key));

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  /* ── Keyboard: Escape closes any open menu ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        closeMobile();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── Cleanup timer on unmount ── */
  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>

          {/* ── Logo ── */}
          <Link href={prefix} className={styles.logo} onClick={closeMobile}>
            <LogoMark />
            <span className={styles.logoText}>
              <span className={styles.logoMark}>
                Connect<span className={styles.logoAccent}>Web</span><span className={styles.logoPeriod}>.</span>
              </span>
              <span className={styles.logoTagline}>
                {locale === 'fr'
                  ? 'Votre stack digital, pensé pour croître'
                  : 'Your digital stack, built to scale'}
              </span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className={styles.nav} aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}>

            {/* EXPERTISES — full-width panel */}
            <div
              className={styles.navItem}
              onMouseEnter={() => openNav('expertises')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={styles.navTrigger}
                aria-haspopup="true"
                aria-expanded={openMenu === 'expertises'}
                onFocus={() => openNav('expertises')}
                onBlur={scheduleClose}
              >
                {t('expertises')}
                <ChevronIcon
                  className={`${styles.chevron} ${openMenu === 'expertises' ? styles.chevronUp : ''}`}
                />
              </button>

              <div
                className={`${styles.megaPanel} ${openMenu === 'expertises' ? styles.megaPanelOpen : ''}`}
                role="region"
                aria-label={t('expertises')}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <MegaMenu type="expertises" locale={locale} />
              </div>
            </div>

            {/* VOS ENJEUX — floating centered panel */}
            <div
              className={`${styles.navItem} ${styles.navItemFloat}`}
              onMouseEnter={() => openNav('vosEnjeux')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={styles.navTrigger}
                aria-haspopup="true"
                aria-expanded={openMenu === 'vosEnjeux'}
                onFocus={() => openNav('vosEnjeux')}
                onBlur={scheduleClose}
              >
                {t('vosEnjeux')}
                <ChevronIcon
                  className={`${styles.chevron} ${openMenu === 'vosEnjeux' ? styles.chevronUp : ''}`}
                />
              </button>

              <div
                className={`${styles.megaPanel} ${styles.megaPanelFloat} ${openMenu === 'vosEnjeux' ? styles.megaPanelOpen : ''}`}
                role="region"
                aria-label={t('vosEnjeux')}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
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
              aria-controls="mobile-drawer"
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
        id="mobile-drawer"
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav aria-label={locale === 'fr' ? 'Menu mobile' : 'Mobile menu'}>

          <div className={styles.mobileSection}>
            <button
              className={styles.mobileTrigger}
              onClick={() => toggleSection('expertises')}
              aria-expanded={mobileSection === 'expertises'}
            >
              {t('expertises')}
              <ChevronIcon className={`${styles.chevron} ${mobileSection === 'expertises' ? styles.chevronUp : ''}`} />
            </button>
            {mobileSection === 'expertises' && (
              <div className={styles.mobileSub}>
                <MegaMenu type="expertises" locale={locale} mobile />
              </div>
            )}
          </div>

          <div className={styles.mobileSection}>
            <button
              className={styles.mobileTrigger}
              onClick={() => toggleSection('vosEnjeux')}
              aria-expanded={mobileSection === 'vosEnjeux'}
            >
              {t('vosEnjeux')}
              <ChevronIcon className={`${styles.chevron} ${mobileSection === 'vosEnjeux' ? styles.chevronUp : ''}`} />
            </button>
            {mobileSection === 'vosEnjeux' && (
              <div className={styles.mobileSub}>
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

          <div className={styles.mobileFooter}>
            <Link href={`${prefix}/audit-gratuit`} className={styles.mobileCta} onClick={closeMobile}>
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
