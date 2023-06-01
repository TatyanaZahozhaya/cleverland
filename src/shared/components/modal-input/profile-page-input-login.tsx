import { FC, useState } from 'react';

import { regularExpressionPattern } from '../../constants';
import { renderLoginInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { InputPropsPersonalDataType } from '.';

import './index.scss';

export const ProfilePageonInputLogin: FC<InputPropsPersonalDataType> = ({ register, errors, watch, disabled=false }) => {
  const [isInputFocused, setInputFocused] = useState(false)
  const value = watch('login');
  const {userNameLatinAndNumberRegPattern} = regularExpressionPattern;

  return (
    <ModalInputLineContainer
      placeholder='Логин'
      upClass={errors.login || value ? true : false}
      renderInstructions={renderLoginInstructions(value, errors.login, isInputFocused, disabled)}
    >
      <input
        className='modal-input'
        {...register('login', {
          onBlur: ()=>setInputFocused(false),
          required: true,
          disabled,
          pattern: userNameLatinAndNumberRegPattern,
        })}
        onFocus={()=>setInputFocused(true)}

      />
    </ModalInputLineContainer>
  );
};
