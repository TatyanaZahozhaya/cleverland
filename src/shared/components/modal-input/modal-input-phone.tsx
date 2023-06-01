import { FC } from 'react';
import { Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { regularExpressionPattern } from '../../constants';
import { renderPhoneInstructions } from '../../utils';

import { ModalInputLineContainer } from './modal-input-line-container';
import { InputPropsType } from '.';

import './index.scss';

export const ModalInputPhone: FC<InputPropsType> = ({ errors, watch, control, disabled = false }) => {
  const value = watch('phone');

  const { phoneBYRegPattern, phoneBYMaskPattern } = regularExpressionPattern;

  return (
    <ModalInputLineContainer
      placeholder='Номер телефона'
      upClass={errors.phone || value ? true : false}
      renderInstructions={renderPhoneInstructions(value, errors.phone)}
    >
      <Controller
        control={control}
        name='phone'
        rules={{
          required: true,
          pattern: phoneBYRegPattern,
        }}
        render={({ field }) => (
          <MaskedInput
            {...field}
            disabled={disabled}
            mask={phoneBYMaskPattern}
            guide={true}
            keepCharPositions={true}
            placeholderChar='x'
            type='tel'
            className='modal-input'
          />
        )}
      />
    </ModalInputLineContainer>
  );
};
