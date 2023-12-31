import { ReactNode } from 'react';
import { FormState, onBlurProps, onChangeProps, onfocusProps } from './input';

export type ModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
};

export type TodoModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
  formState: FormState;
  onChangeHandle: (props: onChangeProps) => void;
  isFormValid: boolean;
  onFocusHandler: (props: onfocusProps) => void;
  onBlurHandler: (props: onBlurProps) => void;
  onChangeDate: (selectedDate?: Date) => void;
  date: Date | null;
};
