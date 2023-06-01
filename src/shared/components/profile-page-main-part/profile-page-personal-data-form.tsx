import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { fetchAuthUserInfo, useAppDispatch, useAppSelector } from '../../store';
import { fetchEditPersonalDataInfo } from '../../store/slice/edit-personal-data-slice';
import { EditPersonalDataBodyFormType,FormValuesPersonalDataType } from '../../types';
import {
  ProfilePageInputEMail,
  ProfilePageInputName,
  ProfilePageInputPassword,
  ProfilePageInputPhone,
  ProfilePageonInputLogin,
} from '../modal-input';

export const ProfilePagePersonalDataForm = () => {
  const dispatch = useAppDispatch();

  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);

  const [editAllowed, setEditAllowed] = useState(false);

  const inputDisabled = editAllowed ? false : true;

  const { firstName, lastName, email, username, phone } = authUserInfo;
  const userId = authUserInfo.id;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValuesPersonalDataType>({
    mode: 'all',
    defaultValues: {
      firstName,
      lastName,
      email,
      login: username,
      phone,
    },
  });

  const onSubmit = (data: EditPersonalDataBodyFormType) => {
    dispatch(fetchEditPersonalDataInfo({ body: { ...data, username: data.login }, userId })).then(() =>
      dispatch(fetchAuthUserInfo())
    );
  };

  return (
    <form data-test-id='profile-form' className='profile-page-personal-data-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='profile-page-personal-data-inputs-container'>
        <ProfilePageonInputLogin register={register} errors={errors} watch={watch} disabled={inputDisabled} />
        <ProfilePageInputPassword
          register={register}
          errors={errors}
          watch={watch}
          eyeOpen={false}
          disabled={inputDisabled}
        />
        <ProfilePageInputName
          placeholder='Имя'
          name='firstName'
          register={register}
          errors={errors}
          watch={watch}
          disabled={inputDisabled}
        />
        <ProfilePageInputName
          placeholder='Фамилия'
          name='lastName'
          register={register}
          errors={errors}
          watch={watch}
          disabled={inputDisabled}
        />
        <ProfilePageInputPhone
          register={register}
          errors={errors}
          watch={watch}
          control={control}
          disabled={inputDisabled}
        />
        <ProfilePageInputEMail register={register} errors={errors} watch={watch} disabled={inputDisabled} />
      </div>

      <div className='profile-page-personal-data-form-buttons'>
        <button
          data-test-id='edit-button'
          className='profile-page-personal-data-button profile-page-personal-data-button_edit'
          type='button'
          disabled={false}
          onClick={() => setEditAllowed(!editAllowed)}
        >
          Редактировать
        </button>
        <button
          data-test-id='save-button'
          className='profile-page-personal-data-button profile-page-personal-data-button_confirm'
          type='submit'
          disabled={editAllowed ? false : true}
        >
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};
