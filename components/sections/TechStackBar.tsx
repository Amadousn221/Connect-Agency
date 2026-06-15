'use client';

import { useTranslations } from 'next-intl';
import styles from './TechStackBar.module.css';

const TECHS = [
  'WordPress',
  'Shopify',
  'WooCommerce',
  'Odoo Community',
  'n8n',
  'Klaviyo',
  'Vue.js',
  'Python',
  'QR/NFC',
] as const;

export default function TechStackBar() {
  const t = useTranslations('techStack');

  return (
    <section className={styles.section} aria-labelledby="tech-stack-label">
      <div className={styles.container}>
        <p id="tech-stack-label" className={styles.headline}>
          {t('headline')}
        </p>
        <div className={styles.badges}>
          {TECHS.map((tech) => (
            <span key={tech} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
