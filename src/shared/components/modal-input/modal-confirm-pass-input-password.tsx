import { FC, useState } from 'react';

import { renderConfirmPasswordInstructions } from '../../utils';
import { EyeClosedIcon, EyeOpenedIcon } from '../svg-icons';

import { InputPropsType } from '.';

import './index.scss';

export const ModalConfirmPassInputPassword: FC<InputPropsType> = ({
  register,
  errors,
  watch,
  label,
  equalPasswordErr,
  onChangeFocus,
  isConfirmInputFocused,
}) => {
  const [shownPassword, setshownPassword] = useState(true);

  const value = watch('passwordConfirmation');

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
            {...register('passwordConfirmation', {
              onBlur: () => onChangeFocus(false),
              required: true,
            })}
            onFocus={() => onChangeFocus(true)}
          />
        </label>

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
        {renderConfirmPasswordInstructions(errors.passwordConfirmation, isConfirmInputFocused, equalPasswordErr)}
      </div>
    </div>
  );
};
