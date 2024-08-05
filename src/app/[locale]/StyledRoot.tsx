'use client';
import { type FC, type ReactNode, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  type PaletteMode,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '@/styles/theme';

import ThemeModeSwitch from '@/modules/ThemeSwitch';

interface StyledRootProps extends Readonly<{ children: ReactNode }> {}

const StyledRoot: FC<StyledRootProps> = ({ children }) => {
  const { t } = useTranslation(['home']);

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
          <AppBar position="fixed" color="inherit">
            <Toolbar
              variant="dense"
              className="flex justify-end bg-white dark:bg-gray-700"
            >
              <div className="flex gap-2 items-center">
                <ThemeModeSwitch value={mode} onChange={handleChangeMode} />
                <Button>{t('home:login')}</Button>
              </div>
            </Toolbar>
          </AppBar>
          {children}
        </main>
      </body>
    </ThemeProvider>
  );
};

export default StyledRoot;
