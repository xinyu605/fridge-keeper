'use client';
import { type FC, FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import {
  DialogFormProps,
  SimpleDialogProps,
} from '@/modules/SimpleDialog/SimpleDialog.type';

const DialogForm: FC<DialogFormProps> = ({ children, onSubmit }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

const SimpleDialog: FC<SimpleDialogProps> = ({
  children,
  confirmLabel,
  disableEscapeKeyDown,
  title,
  open,
  onCancel,
  onClose,
  onConfirm,
  ...props
}) => {
  const { t } = useTranslation(['common']);

  const content = (
    <>
      <MuiDialogTitle sx={{ padding: 2 }}>{title}</MuiDialogTitle>
      <IconButton
        size="small"
        color="primary"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
        onClick={onClose}
      >
        <CloseRoundedIcon />
      </IconButton>
      <MuiDialogContent sx={{ padding: 2 }}>{children}</MuiDialogContent>
      <MuiDialogActions sx={{ padding: 2 }}>
        {onCancel && (
          <MuiButton variant="outlined" onClick={onCancel}>
            {t('common:button.cancel')}
          </MuiButton>
        )}
        <MuiButton
          sx={{ boxShadow: 0 }}
          variant="contained"
          {...(props.form
            ? {
                type: 'submit',
                disabled: props.disabledSubmit,
              }
            : {
                onClick: onConfirm,
              })}
        >
          {confirmLabel || t('common:button.confirm')}
        </MuiButton>
      </MuiDialogActions>
    </>
  );

  return (
    <MuiDialog
      disableEscapeKeyDown={disableEscapeKeyDown}
      open={open}
      PaperProps={{
        sx: {
          minWidth: 480,
          position: 'relative',
          padding: 2,
        },
      }}
    >
      {props.form ? (
        <DialogForm onSubmit={props.onSubmit}>{content}</DialogForm>
      ) : (
        content
      )}
    </MuiDialog>
  );
};

export default SimpleDialog;
