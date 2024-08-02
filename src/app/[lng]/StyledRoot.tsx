'use client';
import { type FC, type ReactNode, useMemo, useState } from 'react';

import { CssBaseline, type PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '@/styles/theme';

import MainNav from '@/modules/MainNav';
import { LngRouteProps } from '@/types/page';

interface StyledRootProps
  extends Readonly<{ children: ReactNode }>,
    LngRouteProps {}

const StyledRoot: FC<StyledRootProps> = ({ children, params }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  const handleChangeMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body className={mode === 'dark' ? 'dark' : undefined}>
        <main className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-700">
          <MainNav params={params} mode={mode} onChange={handleChangeMode} />
          {children}
        </main>
      </body>
    </ThemeProvider>
  );
};

export default StyledRoot;
