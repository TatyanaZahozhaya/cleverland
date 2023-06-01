import { ValidationErrorType } from '../types';

export const renderEMailInstructions = (errors: ValidationErrorType, responseErr?: any, disabled?:boolean,) => {
  if (errors?.type === 'required' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  if (errors?.type === 'pattern' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Введите корректный e-mail
      </span>
    );
  }

  if (responseErr && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        error
      </span>
    );
  }

  if(disabled ) return null

  return null;
};
