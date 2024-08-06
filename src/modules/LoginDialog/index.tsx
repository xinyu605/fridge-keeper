'use client';

import * as z from 'zod';
import { AuthErrorCodes } from 'firebase/auth';
import { type FC, type FormEvent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { FirebaseError } from 'firebase/app';
import {
  type LoginDialogProps,
  LoginFormData,
} from '@/modules/LoginDialog/LoginDialog.type';
import { signIn } from '@/firebase/auth';
import { useSnackbarAtom } from '@/stores/atoms/snackbar';

import SimpleDialog from '@/modules/SimpleDialog';

const LoginDialog: FC<LoginDialogProps> = ({ onClose }) => {
  const { t } = useTranslation(['common', 'home']);
  const { showSnackbar } = useSnackbarAtom();

  const loginSchema = useMemo(
    () =>
      z.object({
        email: z.string().email({ message: t('home:validation.email') }),
        password: z.string().min(8, { message: t('home:validation.password') }),
      }),
    [t]
  );

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(async ({ email, password }) => {
      try {
        await signIn(email, password);
        showSnackbar({
          message: t('home:validation.signInSuccessfully'),
        });
      } catch (err) {
        showSnackbar({
          severity: 'error',
          message:
            err instanceof FirebaseError &&
            err.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS
              ? t('home:validation.invalidLoginCredentials')
              : t('common:validation.unknownError'),
        });
      }
    })(event);
  };

  return (
    <SimpleDialog
      disabledSubmit={!isValid}
      form
      open
      title={t('home:signIn')}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Box display={'flex'} flexDirection={'column'} gap={3}>
        <TextField
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          label={t('home:email')}
          type="email"
        />
        <TextField
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          label={t('home:password')}
          type="password"
        />
      </Box>
    </SimpleDialog>
  );
};

export default LoginDialog;
