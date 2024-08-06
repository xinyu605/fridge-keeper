import { type FC } from 'react';

import { type AuthDialogProps } from '@/modules/AuthDialog/AuthDialog.type';

import SignInDialog from '@/modules/AuthDialog/SignInDialog';
import SignUpDialog from '@/modules/AuthDialog/SignUpDialog';

const AuthDialog: FC<AuthDialogProps> = ({ type, onClose }) => {
  if (type === 'signIn') {
    return <SignInDialog onClose={onClose} />;
  }

  return <SignUpDialog onClose={onClose} />;
};

export default AuthDialog;
