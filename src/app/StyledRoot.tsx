'use client';
import { type FC, type ReactNode, useMemo, useState } from 'react';

import { CssBaseline, type PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '@/styles/theme';

import ThemeModeSwitch from '@/modules/ThemeSwitch';

interface StyledRootProps extends Readonly<{ children: ReactNode }> {}

const StyledRoot: FC<StyledRootProps> = ({ children }) => {
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
        <main className="flex flex-col min-h-screen bg-slate-400 dark:bg-slate-800">
          {/* TODO: implement AppBar */}
          <ThemeModeSwitch value={mode} onChange={handleChangeMode} />
          {children}
        </main>
      </body>
    </ThemeProvider>
  );
};

export default StyledRoot;
