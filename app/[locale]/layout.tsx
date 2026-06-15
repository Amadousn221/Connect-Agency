import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';

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
    <NextIntlClientProvider messages={messages}>
      <Header />
      {children}
    </NextIntlClientProvider>
  );
}
