'use client';
import { type FunctionComponent, ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import { lightTheme } from '@/styles/theme';

interface StyledRootProps extends Readonly<{ children: ReactNode }> {}

const StyledRoot: FunctionComponent<StyledRootProps> = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default StyledRoot;
