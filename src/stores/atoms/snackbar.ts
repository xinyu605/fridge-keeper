import {
  type AlertProps as MuiAlertProps,
  type SnackbarProps as MuiSnackbarProps,
} from '@mui/material';
import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

interface SnackbarItem
  extends Pick<MuiAlertProps, 'severity'>,
    Pick<MuiSnackbarProps, 'open'> {
  message: string;
}

const snackbarAtom = atom<SnackbarItem>();
if (process.env.NODE_ENV === 'development') {
  snackbarAtom.debugLabel = 'snackbar';
}

export const useSnackbarAtom = () => {
  const [snackbar, setSnackbar] = useAtom(snackbarAtom);

  return {
    snackbar,
    showSnackbar: useCallback(
      ({ message, severity }: Pick<SnackbarItem, 'message' | 'severity'>) => {
        setSnackbar({
          open: true,
          message,
          severity,
        });
      },
      [setSnackbar]
    ),
    hideSnackbar: useCallback(() => {
      setSnackbar(undefined);
    }, [setSnackbar]),
  };
};
