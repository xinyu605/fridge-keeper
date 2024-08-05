'use client';
import { type FC, type ReactNode, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CssBaseline, type PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import { darkTheme, lightTheme } from '@/styles/theme';

import LoginDialog from '@/modules/LoginDialog';
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

  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
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
                <Button onClick={handleOpenLoginDialog}>
                  {t('home:login')}
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          {children}
          {openLoginDialog && <LoginDialog onClose={handleCloseLoginDialog} />}
        </main>
      </body>
    </ThemeProvider>
  );
};

export default StyledRoot;
