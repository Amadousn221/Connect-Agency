import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
});

export const metadata: Metadata = {
  title: {
    default: 'Connect Web — Agence Digitale Complète',
    template: '%s | Connect Web'
  },
  description:
    'Agence digitale à Dakar et en France — Création web, développement sur-mesure, marketing digital, conseil et automatisation.'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('cw-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="dark" className={geist.variable}>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
