'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { getOptions, languages, cookieName } from '@/i18n/settings';

const isServerSide = typeof window === 'undefined';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    debug: true,
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isServerSide ? languages : [],
  });

export const useTranslation = (lng: string, ns: string, options = {}) => {
  const res = useTranslationOrg(ns, options);
  const { i18n } = res;

  const [cookies, setCookie] = useCookies([cookieName]);
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  if (isServerSide && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (isServerSide || activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  useEffect(() => {
    if (isServerSide || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    if (isServerSide || cookies.i18next === lng) return;
    setCookie(cookieName, lng, { path: '/' });
  }, [lng, cookies.i18next, setCookie]);

  return res;
};
