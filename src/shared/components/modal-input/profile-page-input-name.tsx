import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormValuesPersonalDataType } from '../../types';

import { ModalInputLineContainer } from './modal-input-line-container';

import './index.scss';

type ProfilePageInputProps = {
  register: UseFormRegister<FormValuesPersonalDataType>;
  errors: any;
  watch: any;
  name: string;
  placeholder: string;
  disabled?: boolean;
};

const renderNameError = (err: any, disabled?:boolean) => {
  if (err?.type === 'required' && !disabled) {
    return (
      <span data-test-id='hint' className='modal-input-line_instructions__warning-text'>
        Поле не может быть пустым
      </span>
    );
  }

  return <span data-test-id='hint'>{null}</span>;
};

export const ProfilePageInputName: FC<ProfilePageInputProps> = ({
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
      renderInstructions={renderNameError(errors[name], disabled)}
    >
      <input
        className='modal-input'
        {...register(name === 'firstName' ? 'firstName' : 'lastName', {
          required: false,
          disabled,
        })}
      />
    </ModalInputLineContainer>
  );
};
