import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useRegistrationStatus } from '../../hooks';
import { useAppDispatch } from '../../store';
import { fetchRegistrationInfo } from '../../store/slice/registration-slice';
import { FormValuesType, RegistrationBodyType} from '../../types';
import { ModalIfAccountBox } from '../containers';
import { Loader } from '../loader';
import { ModalButton } from '../modal-button';
import {
  ModalInputName,
  ModalInputPhone,
  ModalRegistrationInputEMail,
  ModalRegistrationInputLogin,
  ModalRegistrationInputPassword,
} from '../modal-input';
import { ModalMessage } from '../modal-message';
import { ModalArrowIconRight } from '../svg-icons';
import {
  ModalMainText,
  ModalMessageBodyText,
  ModalMessageNameText,
  ModalNameText,
  ModalSecondaryText,
  ModalSecondaryTextDark,
  ModalStepText,
} from '../text';

import './index.scss';

export const RegistrationForm = () => {
  const [isLoading, startRegistration, errStatus400, errStatusNot400, successRegistration] = useRegistrationStatus();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<FormValuesType>({ mode: 'all' });

  const [formStep, setFormStep] = useState(0);

  const {authorizationPagePath, registrationPagePath} = routesPath;

  const changeFormStep = () => {
    setFormStep((i) => i + 1);
  };

  const onSubmit = (data: RegistrationBodyType) => {
    dispatch(fetchRegistrationInfo(data));
  };

  return (
    <div className='modal-form'>
      {isLoading && <Loader />}
      {startRegistration && (
        <React.Fragment>
          <ModalNameText text='Регистрация' />
          <form data-test-id='register-form' onSubmit={handleSubmit(onSubmit)}>
            {formStep === 0 && (
              <section className='form-section'>
                <ModalStepText text={`${formStep + 1} шаг из 3`} />
                <div className='modal-inputs-part'>
                  <ModalRegistrationInputLogin register={register} errors={errors} watch={watch} />
                  <ModalRegistrationInputPassword register={register} errors={errors} watch={watch} />
                </div>
                <ModalButton text='следующий шаг' typeButton={true} disabled={!isValid} onClick={changeFormStep} />
              </section>
            )}

            {formStep === 1 && (
              <section className='form-section'>
                <ModalStepText text={`${formStep + 1} шаг из 3`} />
                <div className='modal-inputs-part'>
                  <ModalInputName
                    placeholder='Имя'
                    name='firstName'
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
                  <ModalInputName
                    placeholder='Фамилия'
                    name='lastName'
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
                </div>

                <ModalButton text='последний шаг' typeButton={true} disabled={!isValid} onClick={changeFormStep} />
              </section>
            )}
            {formStep === 2 &&
              (errStatusNot400 ? (
                <div data-test-id='status-block' className='modal-message-container'>
                  <div className='modal-message-box'>
                    <ModalNameText text='Данные не сохранились' />
                    <ModalSecondaryTextDark text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз' />
                    <ModalButton text='повторить' disabled={!isValid} typeButton={false} />
                  </div>
                </div>
              ) : (
                <section className='form-section'>
                  <ModalStepText text={`${formStep + 1} шаг из 3`} />
                  <div className='modal-inputs-part'>
                    <ModalInputPhone register={register} errors={errors} watch={watch} control={control} />
                    <ModalRegistrationInputEMail register={register} errors={errors} watch={watch} />
                  </div>

                  <ModalButton text='зарегистрироваться' disabled={!isValid} typeButton={false} />
                </section>
              ))}
          </form>
          <ModalIfAccountBox>
            <ModalSecondaryText text='Есть учётная запись?' />
            <Link to={authorizationPagePath} className='modal-enter-link'>
              <ModalMainText text='войти' />
              <ModalArrowIconRight />
            </Link>
          </ModalIfAccountBox>
        </React.Fragment>
      )}
      {successRegistration && (
        <ModalMessage
          title='Регистрация успешна'
          message='Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль'
          path={authorizationPagePath}
          buttonName='вход'
        />
      )}
      {errStatusNot400 && (
        <div data-test-id='status-block' className='modal-message-container'>
          <div className='modal-message-box'>
            <ModalMessageNameText text='Данные не сохранились' />
            <ModalMessageBodyText text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'/>
            <ModalButton text='повторить' disabled={!isValid} typeButton={false} />
          </div>
        </div>
      )}

      {errStatus400 && (
        <ModalMessage
          title='Данные не сохранились'
          message='Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail'
          path={registrationPagePath}
          buttonName='назад к регистрации'
        />
      )}
    </div>
  );
};
