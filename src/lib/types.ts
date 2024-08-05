import { FC } from 'react';

interface ServerPageProps {
  params: {
    locale: string;
  };
}

export interface ServerFC<P = {}> extends FC<P & ServerPageProps> {}
