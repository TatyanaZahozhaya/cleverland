import { useEffect } from 'react';

import {
  AppContainer,
  BooksCardsSection,
  ContentContainer,
  ControlPanel,
  EmptyFilterResult,
  Loader,
  SideMenu,
  ToastMessage,
} from '../../shared/components';
import { status, toastErrorText } from '../../shared/constants';
import { useAllBooksLoadingStatus } from '../../shared/hooks';
import {
  fetchAllBooksInfo,
  fetchAuthUserInfo,
  fetchBooksCategories,
  useAppDispatch,
  useAppSelector,
} from '../../shared/store';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const [isAllBooksLoaded, isAllBooksLoading, isAllBooksError] = useAllBooksLoadingStatus();
  const { authUserInfoLoadingStatus } = useAppSelector((state) => state.authUserInfo);
  const showLoader = isAllBooksLoading || authUserInfoLoadingStatus === status.loading;

  useEffect(() => {
    dispatch(fetchAuthUserInfo());
    dispatch(fetchAllBooksInfo());
    dispatch(fetchBooksCategories());
  }, [dispatch]);

  return (
    <AppContainer>
      <div data-test-id='main-page' className='central-part_container'>
        <SideMenu />
        <ContentContainer>
          <ControlPanel />
          <EmptyFilterResult />
          {showLoader && <Loader />}
          {isAllBooksError && <ToastMessage messageText={toastErrorText.mainInfoLoadingErrorText} toastType='error' />}
          {isAllBooksLoaded && <BooksCardsSection />}
        </ContentContainer>
      </div>
    </AppContainer>
  );
};
