import React from 'react';

import avatarPreview from '../../../pictures/user-avatar/avatarBig.png';
import { status, toastErrorText, toastSuccessText } from '../../constants';
import { fetchSetNewAvatarInfo, useAppDispatch, useAppSelector } from '../../store';
import { Loader } from '../loader';
import { CameraIcon } from '../svg-icons';
import { ToastMessage } from '../toast-message';

import './index.scss';

export const ProfilePageHeader = () => {
  const dispatch = useAppDispatch();
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const { setNewAvatarInfo, setNewAvatarInfoLoadingStatus } = useAppSelector((state) => state.setNewAvatarInfo);

  const { idle, loading, error } = status;

  const avatarLoaded = setNewAvatarInfoLoadingStatus === idle && setNewAvatarInfo.id !== 0;
  const avatarLoading = setNewAvatarInfoLoadingStatus === loading;
  const avatarError = setNewAvatarInfoLoadingStatus === error;

  const userId = authUserInfo.id;
  const userFirstName = authUserInfo.firstName;
  const userLastName = authUserInfo.lastName;
  const userAvatar = authUserInfo.avatar;

  const handleUpload = (files: FileList | null) => {
    if (files) {
      const file = files[0];

      const formData = new FormData();

      formData.append('files', file);
      dispatch(fetchSetNewAvatarInfo({ files: formData, userId }));
    }
  };

  return (
    <React.Fragment>
      {avatarLoading && <Loader />}
      {avatarError && <ToastMessage messageText={toastErrorText.photoNotSavedText} toastType='error' />}
      {avatarLoaded && <ToastMessage messageText={toastSuccessText.photoSavedText} toastType='success' />}
      <div data-test-id='profile-avatar' className='profile-page-header'>
        <div className='profile-page-header-avatar'>
          <input
            className='profile-page-header-input'
            type='file'
            accept='image/*, .png, .jpg, .web'
            id='download-user-avatar'
            onChange={(e) => handleUpload(e.target.files)}
          />
          <label className='profile-page-header-label' htmlFor='download-user-avatar'>
            <img
              src={userAvatar ? `${userAvatar}` : avatarPreview}
              alt='изображение аватара пользователя; кнопка для смены аватара пользователя'
            />
            <div className='camera-icon-container'>
              <CameraIcon />
            </div>
          </label>
        </div>
        <div className='profile-page-header-name-container'>
          <div className='profile-page-header-name-text'>{userFirstName}</div>
          <div className='profile-page-header-name-text'>{userLastName}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
