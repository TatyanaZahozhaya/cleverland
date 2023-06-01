import React from 'react';
import { useSelector } from 'react-redux';

import { status, toastErrorText } from '../../constants';
import { useAuthUserInfoLoadingStatus, useBookLoadingStatus } from '../../hooks';
import { IAppState } from '../../store';
import { getInfoFromBookRequest } from '../../utils';
import { Comments } from '../comments';
import { AppContainer } from '../containers';
import { DetailedBookInfo } from '../detailed-book-info';
import { GeneralBookDescription } from '../general-book-description';
import { Loader } from '../loader';
import { StarRatingWithNumber } from '../star-rating-with-number';
import { ToastMessage } from '../toast-message';

import './index.scss';

export const BookPageInfo = () => {
  const { oneBookInfo } = useSelector((state: IAppState) => state.oneBookInfo);
  const { categoriesLoadingStatus } = useSelector((state: IAppState) => state.booksCategories);
  const { forGeneralDescription, forRating, forComments, forDetailedInfo } = getInfoFromBookRequest(oneBookInfo);
  const [isOneBookLoaded, isOneBookLoading, isOneBookError] = useBookLoadingStatus();
  const { isAuthUserInfoLoading } = useAuthUserInfoLoadingStatus();
  const showLoader = isOneBookLoading || isAuthUserInfoLoading || categoriesLoadingStatus === status.loading;

  return (
    <React.Fragment>
      {showLoader && <Loader />}
      {isOneBookError && <ToastMessage messageText={toastErrorText.mainInfoLoadingErrorText} toastType='error' />}

      {isOneBookLoaded && (
        <AppContainer>
          <GeneralBookDescription {...forGeneralDescription} />
          <StarRatingWithNumber rating={forRating} />
          <DetailedBookInfo details={forDetailedInfo} />
          <Comments comments={forComments} />
        </AppContainer>
      )}
    </React.Fragment>
  );
};
