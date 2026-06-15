import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './AboutTeaser.module.css';

export default function AboutTeaser() {
  const t = useTranslations('aboutTeaser');
  const locale = useLocale();

  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{t('eyebrow')}</p>
        <h2 id="about-title" className={styles.title}>{t('title')}</h2>
        <p className={styles.body}>{t('body')}</p>
        <Link href={`/${locale}/agence`} className={styles.cta}>
          {t('cta')}
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
