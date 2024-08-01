import { type FC, type ReactNode } from 'react';
import { type Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import '@/styles/globals.css';

import StyledRoot from '@/app/StyledRoot';

export const metadata: Metadata = {
  title: 'Fridge Keeper',
  description: 'keep your fridge always clean and fresh!',
};

interface RootLayoutProps extends Readonly<{ children: ReactNode }> {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <AppRouterCacheProvider>
        <StyledRoot>{children}</StyledRoot>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
