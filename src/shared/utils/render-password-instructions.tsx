import { regularExpressionPattern } from '../constants';
import { ValidationErrorType } from '../types';

export const renderPasswordInstructions = (
  value: string,
  errors: ValidationErrorType,
  isInputFocused: boolean,
  disabled?: boolean
) => {
  const { regNoUpperCaseLetter, regNoNumber } = regularExpressionPattern;
  const haveNoUpperCaseLetter = value && value.match(regNoUpperCaseLetter) ? true : false;
  const haveNoNumber = value && value.match(regNoNumber) ? true : false;
  const notMatchLength = errors?.type === 'minLength' ? true : false;

  if (!isInputFocused && errors?.type === 'required' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  if ((notMatchLength || haveNoUpperCaseLetter || haveNoNumber) && !disabled) {
    return (
      <div data-test-id='hint'>
        Пароль{' '}
        <span className={notMatchLength ? 'modal-input-line_instructions__warning-text' : ''}>не менее 8 символов</span>
        , с{' '}
        <span className={haveNoUpperCaseLetter ? 'modal-input-line_instructions__warning-text' : ''}>
          заглавной буквой
        </span>{' '}
        и <span className={haveNoNumber ? 'modal-input-line_instructions__warning-text' : ''}>цифрой </span>
      </div>
    );
  }
  if (!isInputFocused && errors?.type === 'pattern' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Пароль не <span>менее 8 символов</span>, с <span>заглавной буквой</span> и <span>цифрой</span>
      </span>
    );
  }

  return <span data-test-id='hint'>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>;
};
