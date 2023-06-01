import { useEffect } from 'react';

import {
  AppContainer,
  Loader,
  ProfilePageBookedSection,
  ProfilePageDeliverySection,
  ProfilePageHeader,
  ProfilePageHistorySection,
  ProfilePagePersonalData,
} from '../../shared/components';
import { useAuthUserInfoLoadingStatus } from '../../shared/hooks';
import { fetchAllBooksInfo, fetchAuthUserInfo, fetchBooksCategories, useAppDispatch } from '../../shared/store';

import './index.scss';

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { isAuthUserInfoLoaded, isAuthUserInfoLoading } = useAuthUserInfoLoadingStatus();

  useEffect(() => {
    dispatch(fetchAuthUserInfo());
    dispatch(fetchAllBooksInfo());
    dispatch(fetchBooksCategories());
  }, [dispatch]);

  return (
    <AppContainer>
      {isAuthUserInfoLoading && <Loader />}

      {isAuthUserInfoLoaded && (
        <div className='account-page-container'>
          <ProfilePageHeader />
          <ProfilePagePersonalData />
          <ProfilePageBookedSection />
          <ProfilePageDeliverySection />
          <ProfilePageHistorySection />
        </div>
      )}
    </AppContainer>
  );
};
