import { Suspense, type FC, type ReactNode } from 'react';
import { type Metadata } from 'next';
import { dir } from 'i18next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import '@/styles/globals.css';
import { type LngRouteProps } from '@/types/page';

import StyledRoot from '@/app/[lng]/StyledRoot';

export const metadata: Metadata = {
  title: 'Fridge Keeper',
  description: 'keep your fridge always clean and fresh!',
};

interface RootLayoutProps
  extends Readonly<{ children: ReactNode }>,
    LngRouteProps {}

const RootLayout: FC<RootLayoutProps> = ({ children, params }) => {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <AppRouterCacheProvider>
        <Suspense fallback="Loading...">
          <StyledRoot params={params}>{children}</StyledRoot>
        </Suspense>
      </AppRouterCacheProvider>
    </html>
  );
};

export default RootLayout;
