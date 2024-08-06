export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthDialogBaseProps {
  title: string;
  onClose: () => void;
  onConfirm: (formData: AuthFormData) => Promise<void>;
}

export type AuthDialogType = 'signIn' | 'signUp';

export interface AuthDialogProps {
  type: AuthDialogType;
  onClose: () => void;
}

export interface SignInDialogProps extends Pick<AuthDialogProps, 'onClose'> {}

export type SignUpDialogProps = SignInDialogProps;
