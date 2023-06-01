import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAuthorizationStatus } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchAuthorizationInfo, removeAuthError } from '../../store/slice/authorization-slice';
import { AuthorizationBodyType, FormValuesType } from '../../types';
import { ModalIfAccountBox } from '../containers';
import { Loader } from '../loader';
import { ModalButton } from '../modal-button';
import { ModalAuthorizationInputLogin, ModalAuthorizationInputPassword } from '../modal-input';
import { ModalMessage } from '../modal-message';
import { ModalArrowIconRight } from '../svg-icons';
import { ModalMainText, ModalNameText, ModalSecondaryText } from '../text';

import './index.scss';

export const AuthorizationForm = () => {
  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);
  const [isLoading, successAuthorisation, errStatusNot400, errStatus400] = useAuthorizationStatus();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: 'all' });

  const { authorizationPagePath, mainPagePath, registrationPagePath, resetPasswordPagePath } = routesPath;

  const [enterBtnDisabled, setEnterBtnDisabled] = useState(true);

  const onChangeEnterBtn = () => {
    if (errStatus400) {
      setEnterBtnDisabled(false);
    }
  };

  const onSubmit = (data: AuthorizationBodyType) => {
    dispatch(fetchAuthorizationInfo(data));
  };

  useEffect(() => {
    if (successAuthorisation) {
      localStorage.setItem('token', authorizationInfo.jwt);
      navigate(mainPagePath);
    }
    if (errStatus400) {
      setEnterBtnDisabled(true);
    }
  }, [navigate, successAuthorisation, authorizationInfo.jwt, errStatus400, mainPagePath]);

  return (
    <div className='modal-form'>
      {isLoading && <Loader />}
      {errStatusNot400 ? (
        <ModalMessage
          title='Вход не выполнен'
          message='Что-то пошло не так. Попробуйте ещё раз'
          path={authorizationPagePath}
          buttonName='повторить'
          clearErr={()=>dispatch(removeAuthError())}
        />
      ) : (
        <React.Fragment>
          <ModalNameText text='Вход в личный кабинет' />
          <form data-test-id='auth-form' onSubmit={handleSubmit(onSubmit)} className='auth-form'>
            <section className='form-section'>
              <div className='modal-inputs-part'>
                <ModalAuthorizationInputLogin
                  register={register}
                  errors={errors}
                  watch={watch}
                  onChangeEnterBtn={onChangeEnterBtn}
                />
                <ModalAuthorizationInputPassword
                  register={register}
                  errors={errors}
                  watch={watch}
                  onChangeEnterBtn={onChangeEnterBtn}
                />
              </div>

              {errStatus400 ? (
                <React.Fragment>
                  <div className='link-to-reset-password-container'>
                    <p data-test-id='hint' className='link-to-reset-password_text link-to-reset-password_text__warning'>
                      Неверный логин или пароль!
                    </p>
                    <Link to={resetPasswordPagePath} className='link-to-reset-password_text'>
                      Восстановить?
                    </Link>
                  </div>
                  <ModalButton text='вход' typeButton={false} disabled={enterBtnDisabled} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='link-to-reset-password-container'>
                    <Link
                      to={resetPasswordPagePath}
                      className='link-to-reset-password_text link-to-reset-password_text__grey'
                    >
                      Забыли логин или пароль?
                    </Link>
                  </div>
                  <ModalButton text='вход' typeButton={false} disabled={false} />
                </React.Fragment>
              )}
            </section>
          </form>
          <ModalIfAccountBox>
            <ModalSecondaryText text='Нет учётной записи?' />
            <Link to={registrationPagePath} className='modal-enter-link'>
              <ModalMainText text='Регистрация' />
              <ModalArrowIconRight />
            </Link>
          </ModalIfAccountBox>
        </React.Fragment>
      )}
    </div>
  );
};
