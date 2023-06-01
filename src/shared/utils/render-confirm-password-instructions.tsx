import { ValidationErrorType } from '../types';

export const renderConfirmPasswordInstructions = (
  errors: ValidationErrorType,
  isConfirmInputFocused: boolean | undefined,
  equalPasswordErr: boolean | undefined
) => {
  if (errors?.type === 'required') {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  if (!isConfirmInputFocused && equalPasswordErr) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Пароли не совпадают
      </span>
    );
  }

  return null;
};
