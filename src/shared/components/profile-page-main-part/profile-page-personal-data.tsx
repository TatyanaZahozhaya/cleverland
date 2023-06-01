import { status, toastErrorText, toastSuccessText } from '../../constants';
import { useAppSelector } from '../../store';
import { Loader } from '../loader';
import { ToastMessage } from '../toast-message';

import { ProfilePagePersonalDataForm } from './profile-page-personal-data-form';
import { ProfilePageSectionSubTitle, ProfilePageSectionTitle } from './profile-page-section-title';

export const ProfilePagePersonalData = () => {
  const { editPersonalDataInfo, editPersonalDataInfoLoadingStatus } = useAppSelector(
    (state) => state.editPersonalDataInfo
  );

  const { idle, loading, error } = status;

  const dataEditLoaded = editPersonalDataInfoLoadingStatus === idle && editPersonalDataInfo.id !== 0;
  const dataEditLoading = editPersonalDataInfoLoadingStatus === loading;
  const dataEditError = editPersonalDataInfoLoadingStatus === error;

  return (
    <div className='profile-page-personal-data-box'>
      {dataEditLoading && <Loader />}
      {dataEditError && <ToastMessage toastType='error' messageText={toastErrorText.changesNotSaved} />}
      {dataEditLoaded && <ToastMessage toastType='success' messageText={toastSuccessText.changesSavedText} />}
      <div>
        <ProfilePageSectionTitle text='Учётные данные' />
        <ProfilePageSectionSubTitle text='Здесь вы можете отредактировать информацию о себе' />
      </div>

      <ProfilePagePersonalDataForm />
    </div>
  );
};
