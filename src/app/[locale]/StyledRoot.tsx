'use client';
import { type FC, type ReactNode, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CssBaseline, type PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import { darkTheme, lightTheme } from '@/styles/theme';

import { type AuthDialogType } from '@/modules/AuthDialog/AuthDialog.type';
import AuthDialog from '@/modules/AuthDialog/AuthDialog';
import Snackbar from '@/modules/Snackbar';
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

  const [authDialogType, setAuthDialogType] = useState<AuthDialogType | null>(
    null
  );

  const handleOpenSignInDialog = () => {
    setAuthDialogType('signIn');
  };

  const handleOpenSignUpDialog = () => {
    setAuthDialogType('signUp');
  };

  const handleCloseAuthDialog = () => {
    setAuthDialogType(null);
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
              <Box
                display="flex"
                gap={2}
                alignItems="center"
                justifyContent="center"
              >
                <ThemeModeSwitch value={mode} onChange={handleChangeMode} />
                <Button variant="contained" onClick={handleOpenSignInDialog}>
                  {t('home:signIn')}
                </Button>
                <Button variant="outlined" onClick={handleOpenSignUpDialog}>
                  {t('home:signUp')}
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          {children}
          {authDialogType && (
            <AuthDialog type={authDialogType} onClose={handleCloseAuthDialog} />
          )}
          <Snackbar />
        </main>
      </body>
    </ThemeProvider>
  );
};

export default StyledRoot;
