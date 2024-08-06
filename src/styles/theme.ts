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
      paper: '#0F172A' /** Tailwind class: slate-900 */,
    },
    primary: {
      main: '#fde047' /** Tailwind class: yellow-300 */,
      dark: 'rgba(251, 191, 36, 0.8)' /** Tailwind class: yellow-100 */,
      light: '#a16207' /** Tailwind class: yellow-700 */,
      contrastText: '#fff',
    },
    error: {
      main: '#F87171' /** Tailwind class: red-400 */,
    },
    text: {
      ...lightTheme.palette.text,
      primary: '#fff',
    },
  },
  components: {
    ...lightTheme.components,
    MuiButton: {
      ...lightTheme.components?.MuiButton,
      styleOverrides: {
        ...lightTheme.components?.MuiButton?.styleOverrides,
        root: {
          '&.Mui-disabled': {
            color: '#4B5563' /** Tailwind class: gray-600 */,
          },
        },
        contained: {
          color: '#334155' /** Tailwind class: slate-700 */,
        },
      },
    },
    MuiInputLabel: {
      ...lightTheme.components?.MuiInputLabel,
      styleOverrides: {
        ...lightTheme.components?.MuiInputLabel?.styleOverrides,
        root: {
          color: '#64748B' /** Tailwind class: slate-500 */,
        },
      },
    },
    MuiOutlinedInput: {
      ...lightTheme.components?.MuiOutlinedInput,
      styleOverrides: {
        ...lightTheme.components?.MuiOutlinedInput?.styleOverrides,
        input: {
          ':-webkit-autofill': {
            webBoxShadow: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    },
  },
});
