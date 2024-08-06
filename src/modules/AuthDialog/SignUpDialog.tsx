'use client';
import { AuthErrorCodes } from 'firebase/auth';
import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  type AuthFormData,
  type SignUpDialogProps,
} from '@/modules/AuthDialog/AuthDialog.type';
import { signUp } from '@/firebase/auth';
import { useSnackbarAtom } from '@/stores/atoms/snackbar';

import AuthDialogBase from '@/modules/AuthDialog/AuthDialogBase';

const SignUpDialog: FC<SignUpDialogProps> = ({ onClose }) => {
  const { t } = useTranslation(['common', 'home']);
  const { showSnackbar } = useSnackbarAtom();

  const handleConfirm = useCallback(
    async ({ email, password }: AuthFormData) => {
      const res = await signUp(email, password);
      if (res.code) {
        showSnackbar({
          severity: 'error',
          message:
            res.code === AuthErrorCodes.EMAIL_EXISTS
              ? t('home:validation.emailExist')
              : t('common:validation.unknownError'),
        });
        return;
      }
      showSnackbar({ message: t('home:validation.signUpSuccessfully') });
      onClose();
    },
    [onClose, showSnackbar, t]
  );

  return (
    <AuthDialogBase
      title={t('home:signUp')}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
};

export default SignUpDialog;
