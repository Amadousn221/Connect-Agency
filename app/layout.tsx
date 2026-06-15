import type { ReactNode } from 'react';
import { Geist } from 'next/font/google';
import { headers } from 'next/headers';
import '@/styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
});

/* Anti-FOUC: reads saved theme before React hydration */
const ANTI_FOUC = `(function(){try{var t=localStorage.getItem('cw-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') ?? 'fr';

  return (
    <html
      lang={locale}
      data-theme="dark"
      className={geist.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
