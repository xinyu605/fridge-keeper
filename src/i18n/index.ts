import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { defaultNS, getOptions } from '@/i18n/settings';

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

interface TranslationOptions {
  keyPrefix?: string; // TODO: replace with specific words to narrow the scope of `keyPrefix`
}

/** Server pages can by async this way we can await the useTranslation response. */
export const useTranslation = async (
  lng: string,
  ns?: string | string[],
  options?: TranslationOptions
) => {
  const fixedNs = Array.isArray(ns) ? ns[0] : ns || defaultNS;
  const i18nextInstance = await initI18next(lng, fixedNs);
  return {
    t: i18nextInstance.getFixedT(lng, fixedNs, options?.keyPrefix),
    i18n: i18nextInstance,
  };
};
