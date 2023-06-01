import { UseFormRegister } from 'react-hook-form';

import { FormValuesType, FormValuesPersonalDataType } from '../../types';

export { ModalRegistrationInputEMail } from './modal-registration-input-email';
export { ModalRegistrationInputLogin } from './modal-registaration-input-login';
export { ModalInputName } from './modal-input-name';
export { ModalInputPhone } from './modal-input-phone';
export { ModalResetPasswordInputEMail } from './modal-reset-password-email';
export { ModalAuthorizationInputLogin } from './modal-authorization-input-login';
export { ModalRegistrationInputPassword } from './modal-registration-input-password';
export { ModalAuthorizationInputPassword } from './modal-authorization-input-password';
export { ModalResetPassInputPassword } from './modal-reset-pass-input-password';
export { ModalConfirmPassInputPassword } from './modal-confirm-pass-input-password';
export { ProfilePageonInputLogin } from './profile-page-input-login';
export { ProfilePageInputName } from './profile-page-input-name';
export { ProfilePageInputPhone } from './profile-page-input-phone';
export { ProfilePageInputEMail } from './profile-page-input-email';
export { ProfilePageInputPassword } from './profile-page-input-password';

export type ModalInputType = {
  placeholder: string;
  upClass: boolean;
  children: React.ReactNode;
  renderInstructions?: any;
}

export type InputPropsType = {
  register: UseFormRegister<FormValuesType>;
  errors: any;
  watch: any;
  control?: any;
  label?: string;
  equalPasswordErr?: boolean;
  onChangeFocus?: any;
  isConfirmInputFocused?: boolean;
  required?: boolean;
  eyeOpen?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export type AuthorizationInputPropsType = {
  register: UseFormRegister<FormValuesType>;
  errors: any;
  watch: any;
  onChangeEnterBtn(): void;
}

export type InputPropsPersonalDataType = {
  register: UseFormRegister<FormValuesPersonalDataType>;
  errors: any;
  watch: any;
  control?: any;
  label?: string;
  equalPasswordErr?: boolean;
  onChangeFocus?: any;
  isConfirmInputFocused?: boolean;
  eyeOpen?: boolean;
  disabled?: boolean;
}
