import { FC, useState } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderPasswordInstructions } from '../../utils';
import { EyeClosedIcon, EyeOpenedIcon, GreenTickIcon } from '../svg-icons';

import { InputPropsPersonalDataType } from '.';

import './index.scss';

export const ProfilePageInputPassword: FC<InputPropsPersonalDataType> = ({
  register,
  errors,
  watch,
  eyeOpen = true,
  disabled = false,
}) => {
  const [shownPassword, setshownPassword] = useState(eyeOpen);
  const [isInputFocused, setInputFocused] = useState(false);
  const value = watch('password');
  const { passwordMore8SymbolsWithNumAndUpperCaseRegPattern } = regularExpressionPattern;

  return (
    <div className='modal-input-line_container'>
      <div className='modal-input-line'>
        <label
          className={
            errors.password || value ? 'modal-input-line_label modal-input-line_label-up' : 'modal-input-line_label'
          }
        >
          Пароль
          <input
            className='modal-input'
            type={shownPassword ? 'text' : 'password'}
            {...register('password', {
              onBlur: () => setInputFocused(false),
              required: true,
              disabled,
              minLength: 8,
              pattern: passwordMore8SymbolsWithNumAndUpperCaseRegPattern,
            })}
            onFocus={() => setInputFocused(true)}
          />
        </label>
        {value && !errors.password && (
          <span className='modal-input-password-validation-tick'>
            <GreenTickIcon />
          </span>
        )}

        {value ? (
          <button
            className='modal-input-password-type-toggler'
            type='button'
            onClick={() => setshownPassword(!shownPassword)}
          >
            {shownPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
          </button>
        ) : null}
      </div>
      <div className='modal-input-line_instructions'>
        {renderPasswordInstructions(value, errors.password, isInputFocused, disabled)}
      </div>
    </div>
  );
};
