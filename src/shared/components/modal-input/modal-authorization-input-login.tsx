import { FC, memo, useState } from 'react';

import { renderAuthorizationInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { AuthorizationInputPropsType } from '.';

import './index.scss';

export const ModalAuthorizationInputLogin: FC<AuthorizationInputPropsType> = memo(
  ({ register, errors, watch, onChangeEnterBtn }) => {
    const [isInputFocused, setInputFocused] = useState(false);
    const value = watch('identifier');

    return (
      <ModalInputLineContainer
        placeholder='Логин'
        upClass={errors.identifier || value ? true : false}
        renderInstructions={renderAuthorizationInstructions(errors.identifier, isInputFocused)}
      >
        <input
          className='modal-input'
          {...register('identifier', {
            onBlur: () => setInputFocused(false),
            onChange: () => onChangeEnterBtn(),
            required: true,
          })}
          onFocus={() => {
            setInputFocused(true);
          }}
        />
      </ModalInputLineContainer>
    );
  }
);
