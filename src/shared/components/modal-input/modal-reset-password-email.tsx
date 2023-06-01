import { FC } from 'react';

import { regularExpressionPattern } from '../../constants';
import { useAppSelector } from '../../store';
import { renderEMailInstructions } from '../../utils';

import { InputPropsType } from '.';

import './index.scss';

export const ModalResetPasswordInputEMail: FC<InputPropsType> = ({ register, errors, watch }) => {
  const value = watch('email');
  const { forgotPasswordError } = useAppSelector((state) => state.forgotPasswordInfo);
  const { emailRegPattern } = regularExpressionPattern;

  return (
    <div className='modal-input-line_container'>
      <div className='modal-input-line'>
        <label
          className={
            errors.email || value ? 'modal-input-line_label modal-input-line_label-up' : 'modal-input-line_label'
          }
        >
          E-mail
          <input
            className='modal-input'
            {...register('email', {
              required: true,
              pattern: emailRegPattern,
            })}
          />
        </label>
      </div>
      <div className='modal-input-line_instructions'>{renderEMailInstructions(errors.email, forgotPasswordError)}</div>

      <div className='modal-input-line_description'>
        На это email будет отправлено письмо с инструкциями по восстановлению пароля
      </div>
    </div>
  );
};
