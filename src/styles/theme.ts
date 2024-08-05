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
    primary: {
      main: '#FACC15' /** Tailwind class: yellow-400 */,
      dark: '#854D0E' /** Tailwind class: yellow-800 */,
      light: '#fef9c3' /**Tailwind class: yellow-100 */,
      contrastText: '#fff',
    },
    secondary: {
      main: '#06b6d4' /** Tailwind class: cyan-500 */,
      light: '#7dd3fc' /** Tailwind class: sky-300 */,
      dark: '#075985' /** Tailwind class: sky-800 */,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    mode: 'dark',
    background: {
      ...lightTheme.palette.background,
      paper: '#3f4739',
    },
    primary: {
      main: '#fde047' /** Tailwind class: yellow-300 */,
      dark: '#fef9c3' /**Tailwind class: yellow-100 */,
      light: '#a16207' /** Tailwind class: yellow-700 */,
      contrastText: '#fff',
    },
    text: {
      ...lightTheme.palette.text,
      primary: '#fff',
    },
  },
});
