import  {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useResetPasswordStatus } from '../../hooks';
import { useAppDispatch } from '../../store';
import { fetchResetPasswordInfo } from '../../store/slice/reset-password-slice';
import { FormValuesType, ResetPasswordFromFormType } from '../../types';
import { Loader } from '../loader';
import { ModalButton } from '../modal-button';
import { ModalConfirmPassInputPassword, ModalResetPassInputPassword } from '../modal-input';
import { ModalMessage } from '../modal-message';
import { ModalNameText } from '../text';

export const ResetPasswordForm = () => {
  const [isLoading, successFinishReset, errReset] = useResetPasswordStatus();
  const location = useLocation();
  const [isConfirmInputFocused, setConfirmInputFocused] = useState(false)
  const codeFromUrl = location.search.slice(6);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: 'all' });

  const dispatch = useAppDispatch();

  const {authorizationPagePath, registrationPagePath} = routesPath;

  const newPassword = watch('password');
  const confirmedPassword = watch('passwordConfirmation');
  let isPasswordIncorrect = false;

  if (newPassword && confirmedPassword && newPassword !== confirmedPassword) {
    isPasswordIncorrect = true;
  }

  const onSubmit = (data: ResetPasswordFromFormType) => {
    dispatch(fetchResetPasswordInfo({ ...data, code: codeFromUrl }));
  };

  const onChangeFocus = (focus:boolean) =>{
    setConfirmInputFocused(focus)
  }

  return (
    <div className='modal-form'>
      {isLoading && <Loader />}
      {successFinishReset && (
        <ModalMessage
          title='Новые данные сохранены'
          message='Зайдите в личный кабинет, используя свои логин и новый пароль'
          path={authorizationPagePath}
          buttonName='вход'
        />
      )}
      {errReset && (
        <ModalMessage
          title='Данные не сохранились'
          message='Что-то пошло не так. Попробуйте ещё раз'
          path={authorizationPagePath}
          buttonName='повторить'
        />
      )}
      {!successFinishReset && !errReset && (
        <div>
          <ModalNameText text='Восстановление пароля' />
          <form data-test-id='reset-password-form' onSubmit={handleSubmit(onSubmit)}>
            <section className='form-section'>
              <div className='modal-inputs-part'>
                <ModalResetPassInputPassword register={register} errors={errors} watch={watch} label='Новый пароль' />
                <ModalConfirmPassInputPassword
                  register={register}
                  errors={errors}
                  equalPasswordErr={isPasswordIncorrect}
                  watch={watch}
                  label='Повторите пароль'
                  onChangeFocus={onChangeFocus}
                  isConfirmInputFocused={isConfirmInputFocused}
                />
              </div>
              <ModalButton
                text='сохранить изменения'
                typeButton={false}
                disabled={!isConfirmInputFocused && isPasswordIncorrect ? true : false}
              />
            </section>
          </form>
        </div>
      )}
    </div>
  );
};
