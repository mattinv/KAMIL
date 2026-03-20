import type { Locale } from './config';

const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.blog': 'Poradnik',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Darmowa Wycena',

    // Footer
    'footer.services': 'Usługi',
    'footer.company': 'Firma',
    'footer.ctaTitle': 'Darmowa Wycena',
    'footer.ctaDescription': 'Otrzymaj bezpłatną wycenę ocieplenia lub elewacji w ciągu 24 godzin.',
    'footer.ctaButton': 'Skontaktuj się',
    'footer.copyright': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
    'footer.terms': 'Regulamin',
    'footer.brandDescription': 'Profesjonalne usługi elewacyjne i ociepleniowe dla klientów indywidualnych i biznesowych w całej Małopolsce.',

    // Footer service links
    'footer.link.houseInsulation': 'Ocieplenie Domu',
    'footer.link.ventilatedFacades': 'Elewacje Wentylowane',
    'footer.link.thermalModernization': 'Termomodernizacja',
    'footer.link.allServices': 'Wszystkie Usługi',

    // Footer company links
    'footer.link.about': 'O nas',
    'footer.link.projects': 'Realizacje',
    'footer.link.blog': 'Poradnik',
    'footer.link.contact': 'Kontakt',

    // Common
    'common.freeQuote': 'Darmowa Wycena',
    'common.readMore': 'Czytaj więcej',
    'common.askForQuote': 'Zapytaj o wycenę',
    'common.viewProject': 'Zobacz projekt',
    'common.call': 'Zadzwoń',
    'common.read': 'Czytaj',
    'common.reading': 'czytania',
    'common.featured': 'Wyróżniony',
    'common.all': 'Wszystkie',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Free Quote',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.ctaTitle': 'Free Quote',
    'footer.ctaDescription': 'Get a free insulation or facade quote within 24 hours.',
    'footer.ctaButton': 'Contact Us',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.brandDescription': 'Professional facade and insulation services for residential and commercial clients throughout Małopolska, Poland.',

    // Footer service links
    'footer.link.houseInsulation': 'House Insulation',
    'footer.link.ventilatedFacades': 'Ventilated Facades',
    'footer.link.thermalModernization': 'Thermal Modernization',
    'footer.link.allServices': 'All Services',

    // Footer company links
    'footer.link.about': 'About Us',
    'footer.link.projects': 'Projects',
    'footer.link.blog': 'Blog',
    'footer.link.contact': 'Contact',

    // Common
    'common.freeQuote': 'Free Quote',
    'common.readMore': 'Read More',
    'common.askForQuote': 'Request a Quote',
    'common.viewProject': 'View Project',
    'common.call': 'Call',
    'common.read': 'Read',
    'common.reading': 'read',
    'common.featured': 'Featured',
    'common.all': 'All',
  },
} as const;

type TranslationKey = keyof typeof translations.pl;

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return translations[locale][key] || translations.pl[key] || key;
  };
}
