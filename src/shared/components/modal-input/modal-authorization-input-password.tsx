import { FC, useState } from 'react';

import { status } from '../../constants';
import { useAppSelector } from '../../store';
import { renderAuthorizationInstructions } from '../../utils';
import { EyeClosedIcon, EyeOpenedIcon } from '../svg-icons';

import { AuthorizationInputPropsType } from '.';

import './index.scss';

export const ModalAuthorizationInputPassword: FC<AuthorizationInputPropsType> = ({
  register,
  errors,
  watch,
  onChangeEnterBtn,
}) => {
  const { authorisationInfoLoadingStatus, authorisationInfoError } = useAppSelector((state) => state.authorizationInfo);
  const errStatus400 =
    authorisationInfoLoadingStatus === status.error && authorisationInfoError === '400' ? true : false;
  const [shownPassword, setshownPassword] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const value = watch('password');

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
              onChange: () => onChangeEnterBtn(),
              required: true,
            })}
            onFocus={() => {
              setInputFocused(true);
            }}
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
      <div
        className={
          errStatus400
            ? 'modal-input-line_instructions modal-input-line_instructions_warning'
            : 'modal-input-line_instructions'
        }
      >
        {renderAuthorizationInstructions(errors.password, isInputFocused)}
      </div>
    </div>
  );
};
