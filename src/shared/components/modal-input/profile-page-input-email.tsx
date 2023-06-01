import { FC } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderEMailInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { InputPropsPersonalDataType } from '.';

import './index.scss';

export const ProfilePageInputEMail: FC<InputPropsPersonalDataType> = ({ register, errors, watch, disabled = false }) => {
  const value = watch('email');
  const { emailRegPattern } = regularExpressionPattern;
  const responseErr = null;

  return (
    <ModalInputLineContainer
      placeholder='E-mail'
      upClass={errors.email || value ? true : false}
      renderInstructions={renderEMailInstructions(errors.email, responseErr, disabled)}
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
