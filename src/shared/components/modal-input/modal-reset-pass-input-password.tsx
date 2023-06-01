import { FC, useState } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderPasswordInstructions } from '../../utils';
import { EyeClosedIcon, EyeOpenedIcon, GreenTickIcon } from '../svg-icons';

import { InputPropsType } from '.';

import './index.scss';

export const ModalResetPassInputPassword: FC<InputPropsType> = ({ register, errors, watch, label }) => {
  const [shownPassword, setshownPassword] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const value = watch('password');
  const {passwordMore8SymbolsWithNumAndUpperCaseRegPattern}=regularExpressionPattern;

  return (
    <div className='modal-input-line_container'>
      <div className='modal-input-line'>
        <label
          className={
            errors.password || value ? 'modal-input-line_label modal-input-line_label-up' : 'modal-input-line_label'
          }
        >
          {label}
          <input
            className='modal-input'
            type={shownPassword ? 'text' : 'password'}
            {...register('password', {
              onBlur: () => setInputFocused(false),
              required: true,
              minLength: 8,
              pattern: passwordMore8SymbolsWithNumAndUpperCaseRegPattern,
            })}
            onFocus={() => setInputFocused(true)}
          />
        </label>
        {!value || errors.password ? null : (
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
      <div className='modal-input-line_instructions' data-test-id='hint'>
        {renderPasswordInstructions(value, errors.password, isInputFocused)}
      </div>
    </div>
  );
};
