'use client';

import * as z from 'zod';
import { type FC, type FormEvent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
  type AuthDialogBaseProps,
  type AuthFormData,
} from '@/modules/AuthDialog/AuthDialog.type';

import SimpleDialog from '@/modules/SimpleDialog';

const AuthDialogBase: FC<AuthDialogBaseProps> = ({
  title,
  onClose,
  onConfirm,
}) => {
  const { t } = useTranslation(['common', 'home']);

  const authSchema = useMemo(
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
  } = useForm<AuthFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(onConfirm)(event);
  };

  return (
    <SimpleDialog
      disabledSubmit={!isValid}
      form
      open
      title={title}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Box display="flex" flexDirection="column" gap={3}>
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

export default AuthDialogBase;
