export const supportedLocales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof supportedLocales[number];

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/fr/')) return 'fr';
  return 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const cleanPath = pathname.replace(/^\/fr/, '');
  
  if (locale === 'fr') {
    return `/fr${cleanPath}`;
  }
  
  return cleanPath || '/';
}
