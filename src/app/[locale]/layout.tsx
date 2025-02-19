import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import '@/styles/globals.css';
import { type ServerFC } from '@/lib/types';
import initTranslations from '@/lib/i18n';

import JotaiProvider from '@/modules/globalProviders/JotaiProvider';
import StyledRoot from '@/app/[locale]/StyledRoot';
import TransProvider from '@/modules/globalProviders/TransProvider';

export const metadata: Metadata = {
  title: 'Fridge Keeper',
  description: 'keep your fridge always clean and fresh!',
};

const i18nNameSpaces = ['common', 'home'];

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
          <JotaiProvider>
            <StyledRoot>{children}</StyledRoot>
          </JotaiProvider>
        </AppRouterCacheProvider>
      </html>
    </TransProvider>
  );
};

export default RootLayout;
