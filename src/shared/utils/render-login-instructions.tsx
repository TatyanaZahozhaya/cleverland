import { regularExpressionPattern } from '../constants';
import { ValidationErrorType } from '../types';

export const renderLoginInstructions = (
  value: string,
  errors: ValidationErrorType,
  isInputFocused: boolean,
  disabled?: boolean
) => {
  const { regNoLatLetter, regNoNumber } = regularExpressionPattern;
  const haveNoLatLetter = value && value.match(regNoLatLetter) ? true : false;
  const haveNoNumber = value && value.match(regNoNumber) ? true : false;

  if (!isInputFocused && errors?.type === 'required' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  if (((errors?.type === 'pattern' && haveNoLatLetter) || haveNoNumber) && !disabled) {
    return (
      <div data-test-id='hint'>
        Используйте для логина{' '}
        <span className={haveNoLatLetter ? 'modal-input-line_instructions__warning-text' : ''}>латинский алфавит</span>{' '}
        и <span className={haveNoNumber ? 'modal-input-line_instructions__warning-text' : ''}>цифры</span>
      </div>
    );
  }

  if (errors?.type === 'pattern' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Используйте для логина латинский алфавит и цифры
      </span>
    );
  }

  return <span data-test-id='hint'>Используйте для логина латинский алфавит и цифры</span>;
};
