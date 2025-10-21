import { defineMiddleware } from 'astro:middleware';
import { supportedLocales, defaultLocale } from './i18n/config.js';

function parseAcceptLanguage(acceptLanguage: string): string[] {
  return acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().split('-')[0])
    .filter(lang => lang.length > 0);
}

function pickPreferredLanguage(cookie: string | undefined, acceptLanguage: string): string {
  // Priority: cookie > Accept-Language header > default
  if (cookie && supportedLocales.includes(cookie as any)) {
    return cookie;
  }
  
  const preferred = parseAcceptLanguage(acceptLanguage).find(lang => 
    supportedLocales.includes(lang as any)
  );
  
  return preferred || defaultLocale;
}

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  // Skip middleware for static assets and already localized paths
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname.startsWith('/robots.txt') ||
    url.pathname.startsWith('/fr/')
  ) {
    return next();
  }
  
  // Only redirect from root path
  if (url.pathname === '/') {
    const cookie = context.cookies.get('lang')?.value;
    const acceptLanguage = context.request.headers.get('accept-language') || '';
    const preferred = pickPreferredLanguage(cookie, acceptLanguage);
    
    if (preferred === 'fr') {
      return context.redirect('/fr/', 302);
    }
  }
  
  return next();
});
