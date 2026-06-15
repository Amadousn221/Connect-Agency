import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

/* Tech names are proper nouns — same in FR and EN */
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
    <section
      className="py-12 bg-muted border-y border-border"
      aria-labelledby="tech-stack-label"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-pad)] text-center">
        <p
          id="tech-stack-label"
          className="text-sm font-medium text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed"
        >
          {t('headline')}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {TECHS.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
