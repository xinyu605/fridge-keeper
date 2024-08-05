'use client';

import * as z from 'zod';
import { type FC, type FormEvent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
  type LoginDialogProps,
  LoginFormData,
} from '@/modules/LoginDialog/LoginDialog.type';

import SimpleDialog from '@/modules/SimpleDialog';

const LoginDialog: FC<LoginDialogProps> = ({ onClose }) => {
  const { t } = useTranslation(['common', 'home']);

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
    void handleSubmit((values) => {
      // TODO: call api to login
      console.log(values);
    })(event);
  };

  return (
    <SimpleDialog
      disabledSubmit={!isValid}
      form
      open
      title={t('home:login')}
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
