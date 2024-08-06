'use client';

import { type FC } from 'react';

import MuiAlert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';

import { useSnackbarAtom } from '@/stores/atoms/snackbar';

const Snackbar: FC = () => {
  const { snackbar, hideSnackbar } = useSnackbarAtom();

  if (!snackbar) return null;

  const { severity, message } = snackbar;

  return (
    <MuiSnackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      autoHideDuration={3000}
      open
      onClose={hideSnackbar}
    >
      <MuiAlert
        severity={severity}
        sx={{ width: '100%' }}
        onClose={hideSnackbar}
      >
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
