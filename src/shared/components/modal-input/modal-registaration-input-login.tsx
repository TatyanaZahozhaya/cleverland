import { FC, useState } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderLoginInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { InputPropsType } from '.';

import './index.scss';

export const ModalRegistrationInputLogin: FC<InputPropsType> = ({ register, errors, watch }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const value = watch('username');

  const { userNameLatinAndNumberRegPattern } = regularExpressionPattern;

  return (
    <ModalInputLineContainer
      placeholder='Придумайте логин для входа'
      upClass={errors.username || value ? true : false}
      renderInstructions={renderLoginInstructions(value, errors.username, isInputFocused)}
    >
      <input
        className='modal-input'
        {...register('username', {
          onBlur: () => setInputFocused(false),
          required: true,
          pattern: userNameLatinAndNumberRegPattern,
        })}
        onFocus={() => setInputFocused(true)}
      />
    </ModalInputLineContainer>
  );
};
