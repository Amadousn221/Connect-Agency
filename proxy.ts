import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

const handleI18n = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const response = handleI18n(request);
  const pathname = request.nextUrl.pathname;
  const locale = (routing.locales as readonly string[]).find((l) =>
    pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  ) ?? routing.defaultLocale;
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
