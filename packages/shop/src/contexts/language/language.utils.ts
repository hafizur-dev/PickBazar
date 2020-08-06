import { locales, rtlLocales, defaultLocale } from './language.config';
import Cookie from 'js-cookie';

export type Locale = typeof locales[number];

export type Strings = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}

export function isRTL(tested: string): tested is Locale {
  return rtlLocales.some((locale) => locale === tested);
}

export function getInitialLocale(): Locale {
  // preference from the previous session
  const localSetting = Cookie.get('locale');
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }

  return defaultLocale;
}
