import { ValidationErrorType } from '../types';

export const renderAuthorizationInstructions = (errors: ValidationErrorType, isInputFocused: boolean) => {
  if (!isInputFocused && errors?.type === 'required') {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  return null;
};
