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
      <main className="flex flex-col min-h-screen">
        {/* TODO: implement AppBar */}
        <ThemeModeSwitch value={mode} onChange={handleChangeMode} />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default StyledRoot;
