'use client';
import { AuthErrorCodes } from 'firebase/auth';
import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  type AuthFormData,
  type SignInDialogProps,
} from '@/modules/AuthDialog/AuthDialog.type';
import { signIn } from '@/firebase/auth';
import { useSnackbarAtom } from '@/stores/atoms/snackbar';

import AuthDialogBase from '@/modules/AuthDialog/AuthDialogBase';

const SignInDialog: FC<SignInDialogProps> = ({ onClose }) => {
  const { t } = useTranslation(['common', 'home']);
  const { showSnackbar } = useSnackbarAtom();

  const handleConfirm = useCallback(
    async ({ email, password }: AuthFormData) => {
      const res = await signIn(email, password);
      if (res.code) {
        showSnackbar({
          severity: 'error',
          message:
            res.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
              ? t('home:validation.invalidLoginCredentials')
              : t('common:validation.unknownError'),
        });
        return;
      }
      showSnackbar({
        message: t('home:validation.signInSuccessfully'),
      });
      onClose();
    },
    [onClose, showSnackbar, t]
  );

  return (
    <AuthDialogBase
      title={t('home:signIn')}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default SignInDialog;
