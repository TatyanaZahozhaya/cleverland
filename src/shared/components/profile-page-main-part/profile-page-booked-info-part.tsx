import React from 'react';

import { toastErrorText, toastSuccessText } from '../../constants';
import { useDeleteBookingLoadingStatus } from '../../hooks';
import { fetchAuthUserInfo, useAppDispatch, useAppSelector } from '../../store';
import { fetchDeleteBookingInfo } from '../../store/slice/delete-booking-slice';
import { getInfoForProfilePageBooked } from '../../utils';
import { Loader } from '../loader';
import { ToastMessage } from '../toast-message';

import { ProfilePageBookCard } from './profile-page-book-card';

export const ProfilePageBookedInfoPart = () => {
  const dispatch = useAppDispatch();
  const { isDeleteBookingLoaded, isDeleteBookingLoading, isDeleteBookingError } = useDeleteBookingLoadingStatus();
  const { authUserInfo } = useAppSelector((state) => state.authUserInfo);
  const { allBooks } = useAppSelector((state) => state.allBooks);
  const { forBookCard, bookingID, bookingDateOverdue } = getInfoForProfilePageBooked(allBooks, authUserInfo);

  const onCancelBooking = () => {
    dispatch(fetchDeleteBookingInfo(bookingID)).then(() => dispatch(fetchAuthUserInfo()));
  };

  return (
    <React.Fragment>
      <ProfilePageBookCard {...forBookCard} onCancelBooking={onCancelBooking} bookingDateOverdue={bookingDateOverdue} />
      {isDeleteBookingLoading && <Loader />}
      {isDeleteBookingLoaded && (
        <ToastMessage messageText={toastSuccessText.canselBookingSuccessText} toastType='success' />
      )}
      {isDeleteBookingError && <ToastMessage messageText={toastErrorText.cancelBookingErrorText} toastType='error' />}
    </React.Fragment>
  );
};
