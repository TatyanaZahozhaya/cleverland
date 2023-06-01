import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useForgotPasswordStatus } from '../../hooks';
import { useAppDispatch } from '../../store';
import { fetchForgotPasswordInfo } from '../../store/slice/forgot-password-slice';
import { ForgotPasswordBodyType, FormValuesType } from '../../types';
import { ModalEnterLinkContainer, ModalIfAccountBox } from '../containers';
import { Loader } from '../loader';
import { ModalButton } from '../modal-button';
import { ModalResetPasswordInputEMail } from '../modal-input';
import { ModalMessage } from '../modal-message';
import { ModalArrowIconLeft, ModalArrowIconRight } from '../svg-icons';
import { ModalMainText, ModalMainTextGrey, ModalNameText, ModalSecondaryText } from '../text';

export const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const [isLoading, successStartReset] = useForgotPasswordStatus();

  const { authorizationPagePath, registrationPagePath } = routesPath;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: 'all' });

  const onSubmit = (data: ForgotPasswordBodyType) => {
    dispatch(fetchForgotPasswordInfo(data));
  };

  return (
    <div className='modal-form '>
      {isLoading && <Loader />}
      {successStartReset && (
        <ModalMessage
          title='Письмо выслано'
          message='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля'
        />
      )}
      {!successStartReset && (
        <div className='modal-form-reset'>
          <ModalEnterLinkContainer>
            <Link to={authorizationPagePath} className='modal-enter-link'>
              <ModalArrowIconLeft />
              <ModalMainTextGrey text='вход в личный кабинет' />
            </Link>
          </ModalEnterLinkContainer>
          <ModalNameText text='Восстановление пароля' />
          <form data-test-id='send-email-form' onSubmit={handleSubmit(onSubmit)}>
            <section className='form-section'>
              <div className='modal-inputs-part'>
                <ModalResetPasswordInputEMail register={register} errors={errors} watch={watch} />
              </div>
              <ModalButton text='восстановить' typeButton={false} disabled={false} />
            </section>
          </form>
          <ModalIfAccountBox>
            <ModalSecondaryText text='Нет учётной записи?' />
            <Link to={registrationPagePath} className='modal-enter-link'>
              <ModalMainText text='регистрация' />
              <ModalArrowIconRight />
            </Link>
          </ModalIfAccountBox>
        </div>
      )}
    </div>
  );
};
