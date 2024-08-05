import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import '@/styles/globals.css';
import initTranslations from '@/lib/i18n';
import { type ServerFC } from '@/lib/types';

import StyledRoot from '@/app/[locale]/StyledRoot';
import TransProvider from '@/modules/TransProvider';

export const metadata: Metadata = {
  title: 'Fridge Keeper',
  description: 'keep your fridge always clean and fresh!',
};

const i18nNameSpaces = ['home'];

interface RootLayoutProps extends Readonly<{ children: ReactNode }> {}

const RootLayout: ServerFC<RootLayoutProps> = async ({
  children,
  params: { locale },
}) => {
  const { resources } = await initTranslations(locale, i18nNameSpaces);

  return (
    <TransProvider
      nameSpaces={i18nNameSpaces}
      locale={locale}
      resources={resources}
    >
      <html lang={locale}>
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </html>
    </TransProvider>
  );
};

export default RootLayout;
