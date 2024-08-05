'use client';

import { type FC, type ReactNode } from 'react';
import { createInstance, type Resource } from 'i18next';

import { I18nextProvider } from 'react-i18next';

import initTranslations from '@/lib/i18n';

interface TransProviderProps {
  children: ReactNode;
  locale: string;
  nameSpaces: string[];
  resources?: Resource;
}

const TransProvider: FC<TransProviderProps> = ({
  children,
  locale,
  nameSpaces,
  resources,
}) => {
  const i18n = createInstance();
  initTranslations(locale, nameSpaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TransProvider;
