import { useTranslations } from 'next-intl';
import styles from './ProcessSteps.module.css';

const STEP_KEYS = ['step1', 'step2', 'step3', 'step4'] as const;
type StepKey = (typeof STEP_KEYS)[number];

export default function ProcessSteps() {
  const t = useTranslations('processSteps');

  return (
    <section className={styles.section} aria-labelledby="process-title">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('eyebrow')}</span>
          <h2 id="process-title" className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {/* Horizontal connector — desktop only, behind circles */}
          <div className={styles.connector} aria-hidden="true" />

          {STEP_KEYS.map((key) => {
            const stepKey = key as StepKey;
            return (
              <div key={key} className={styles.step}>
                {/* Circle wrapper isolates z-index from connector */}
                <div className={styles.circleWrapper}>
                  <div className={styles.circle} aria-hidden="true">
                    {t(`${stepKey}.num`)}
                  </div>
                </div>
                <h3 className={styles.stepTitle}>
                  {t(`${stepKey}.title`)}
                  <span className={styles.period} aria-hidden="true">.</span>
                </h3>
                <p className={styles.stepDesc}>{t(`${stepKey}.desc`)}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
