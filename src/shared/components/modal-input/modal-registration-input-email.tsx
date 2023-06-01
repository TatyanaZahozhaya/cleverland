import { FC } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderEMailInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { InputPropsType } from '.';

import './index.scss';

export const ModalRegistrationInputEMail: FC<InputPropsType> = ({ register, errors, watch, disabled = false }) => {
  const value = watch('email');
  const { emailRegPattern } = regularExpressionPattern;

  return (
    <ModalInputLineContainer
      placeholder='E-mail'
      upClass={errors.email || value ? true : false}
      renderInstructions={renderEMailInstructions(errors.email)}
    >
      <input
        className='modal-input'
        {...register('email', {
          required: true,
          disabled,
          pattern: emailRegPattern,
        })}
      />
    </ModalInputLineContainer>
  );
};
