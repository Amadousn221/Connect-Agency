import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getRessources, type RessourceArticle } from '@/lib/ressources';
import styles from './ResourcesTeaser.module.css';

function ResourceCard({ slug, titre, date, image, locale }: RessourceArticle & { locale: string }) {
  const formatted = date
    ? new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(date))
    : '';

  return (
    <Link href={`/${locale}/ressources/${slug}`} className={styles.card}>
      {image && (
        <div className={styles.cardImage}>
          <Image src={image} alt={titre} fill className={styles.cardImg} />
        </div>
      )}
      <div className={styles.cardBody}>
        {formatted && <span className={styles.cardDate}>{formatted}</span>}
        <h3 className={styles.cardTitle}>{titre}</h3>
      </div>
    </Link>
  );
}

export default function ResourcesTeaser() {
  const t = useTranslations('resourcesTeaser');
  const locale = useLocale();
  const articles = getRessources(locale, 2);

  if (articles.length < 2) return null;

  return (
    <section className={styles.section} aria-labelledby="resources-title">
      <div className={styles.container}>

        {/* Left — label / headline / CTA */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h2 id="resources-title" className={styles.title}>{t('title')}</h2>
          <p className={styles.sub}>{t('sub')}</p>
          <Link href={`/${locale}/ressources`} className={styles.cta}>
            {t('cta')}
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right — 2 cards stacked */}
        <div className={styles.cards}>
          {articles.map((article) => (
            <ResourceCard key={article.slug} {...article} locale={locale} />
          ))}
        </div>

      </div>
    </section>
  );
}
