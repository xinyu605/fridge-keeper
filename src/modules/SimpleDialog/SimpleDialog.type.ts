import { type FormEventHandler, type ReactNode } from 'react';
import { type DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

interface DialogSharedProps
  extends Pick<MuiDialogProps, 'children' | 'disableEscapeKeyDown' | 'open'> {
  confirmLabel?: string;
  title?: string;
  onCancel?: () => void;
  onClose: () => void;
  onConfirm?: () => void;
}

interface BaseDialogProps extends DialogSharedProps {
  disabledSubmit?: never;
  form?: false | undefined;
}

interface FormDialogProps extends DialogSharedProps {
  disabledSubmit?: boolean | undefined;
  form: true;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export type SimpleDialogProps = BaseDialogProps | FormDialogProps;
