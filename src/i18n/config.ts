export const defaultLocale = 'pl' as const;
export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];

// Maps Polish routes to English routes
export const routeMap: Record<string, string> = {
  '/': '/en/',
  '/kontakt': '/en/contact',
  '/o-nas': '/en/about',
  '/realizacje': '/en/projects',
  '/poradnik': '/en/blog',
  '/uslugi': '/en/services',
  '/uslugi/ocieplenie-domu-krakow': '/en/services/house-insulation-krakow',
  '/uslugi/elewacje-krakow': '/en/services/facades-krakow',
  '/uslugi/elewacje-wentylowane-krakow': '/en/services/ventilated-facades-krakow',
  '/uslugi/termomodernizacja-malopolska': '/en/services/thermal-modernization-malopolska',
  '/uslugi/ocieplenie-styropianem-grafitowym': '/en/services/graphite-polystyrene-insulation',
  '/uslugi/ocieplenie-welna-mineralna': '/en/services/mineral-wool-insulation',
  '/uslugi/renowacja-elewacji-kamienic': '/en/services/tenement-facade-renovation',
  '/uslugi/wizualizacja-elewacji-3d': '/en/services/3d-facade-visualization',
  '/uslugi/tynk-silikonowy-elewacja': '/en/services/silicone-plaster-facade',
  '/uslugi/czyste-powietrze-elewacja': '/en/services/clean-air-program-facade',
  '/uslugi/mycie-elewacji-krakow': '/en/services/facade-cleaning-krakow',
};

// Reverse map: English routes to Polish routes
export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([pl, en]) => [en, pl])
);

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  return segment === 'en' ? 'en' : 'pl';
}

export function localePath(path: string, locale: Locale): string {
  if (locale === 'pl') return path;
  return routeMap[path] || `/en${path}`;
}

export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  // Normalize trailing slashes for matching
  const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  if (targetLocale === 'en') {
    // PL -> EN
    return routeMap[normalized] || `/en${normalized}`;
  } else {
    // EN -> PL
    return reverseRouteMap[normalized] || normalized.replace(/^\/en/, '') || '/';
  }
}
