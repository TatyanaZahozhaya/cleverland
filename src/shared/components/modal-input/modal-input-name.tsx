import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormValuesType } from '../../types';

import { ModalInputLineContainer } from './modal-input-line-container';

import './index.scss';

type InputNameProps = {
  register: UseFormRegister<FormValuesType>;
  errors: any;
  watch: any;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
};

const renderNameError = (err: any) => {
  if (err?.type === 'required') {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  return null;
};

export const ModalInputName: FC<InputNameProps> = ({
  register,
  errors,
  watch,
  name,
  placeholder,
  disabled = false,
}) => {
  const value = watch(name);

  return (
    <ModalInputLineContainer
      placeholder={placeholder}
      upClass={errors[name] || value ? true : false}
      renderInstructions={renderNameError(errors[name])}
    >
      <input
        className='modal-input'
        {...register(name === 'firstName' ? 'firstName' : 'lastName', {
          required: true,
          disabled,
        })}
      />
    </ModalInputLineContainer>
  );
};
