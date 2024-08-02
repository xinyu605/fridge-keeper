export const fallbackLng = 'en-US';
export const languages = [fallbackLng, 'zh-TW'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export const generateStaticParams = async () =>
  languages.map((lng) => ({ lng }));
