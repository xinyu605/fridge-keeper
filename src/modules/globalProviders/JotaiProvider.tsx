'use client';

import { FC, type ReactNode } from 'react';

import { Provider } from 'jotai';

interface JotaiProviderProps {
  children: ReactNode;
}

const JotaiProvider: FC<JotaiProviderProps> = ({ children }) => (
  <Provider>{children}</Provider>
);

export default JotaiProvider;
