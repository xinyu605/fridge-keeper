'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightTheme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export const darkTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    mode: 'dark',
  },
});
