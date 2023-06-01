import React, { FC } from 'react';

import { toastErrorText, toastSuccessText } from '../../constants';
import {
  useBookBookingStatus,
  useBookingLoadingStatus,
  useChangeBookingLoadingStatus,
  useDeleteBookingLoadingStatus,
  useShowBookingModalElement,
} from '../../hooks';
import { BookBookingType, BookDeliveryType } from '../../types';
import { ToastMessage } from '../toast-message';

import { ChangeBookingModalElement } from './change-booking-modal-element';
import { FirstBookingModalElement } from './first-booking-modal-element';

import './index.scss';

type BookingModalType =  {
  toggleModalMode(): void;
  isModalOpen: boolean;
  userID: number;
  booking: BookBookingType | null;
  delivery: BookDeliveryType | null;
  bookID: number;
}

export const BookingModal: FC<BookingModalType> = ({
  toggleModalMode,
  isModalOpen,
  userID,
  delivery,
  booking,
  bookID,
}) => {
  const { bookingDateOrder, bookStatus, bookingID } = useBookBookingStatus(booking, delivery);
  const { isFirstBookingLoaded, isFirstBookingError } = useBookingLoadingStatus();
  const { isChangeBookingLoaded, isChangeBookingError } = useChangeBookingLoadingStatus();
  const { isDeleteBookingLoaded, isDeleteBookingError } = useDeleteBookingLoadingStatus();
  const { showFirstBookingModalElement, showChangeBookingModalElement } = useShowBookingModalElement(bookStatus);
  const { bookingLoadingErrorText, changesNotSaved, cancelBookingErrorText } = toastErrorText;
  const { bookedSuccessfullyText, changesSavedText, canselBookingSuccessText } = toastSuccessText;

  return (
    <React.Fragment>
      {showFirstBookingModalElement && (
        <FirstBookingModalElement
          toggleModalMode={toggleModalMode}
          isModalOpen={isModalOpen}
          userID={userID}
          bookIDFromCard={bookID}
        />
      )}

      {showChangeBookingModalElement && (
        <ChangeBookingModalElement
          bookingDateOrder={bookingDateOrder ? bookingDateOrder : ''}
          toggleModalMode={toggleModalMode}
          isModalOpen={isModalOpen}
          bookingID={bookingID ? bookingID : 0}
          userID={userID}
          bookIDFromCard={bookID}
        />
      )}

      {isFirstBookingLoaded && (
        <ToastMessage messageText={bookedSuccessfullyText} toastType='success' toggleModalMode={toggleModalMode} />
      )}
      {isFirstBookingError && (
        <ToastMessage messageText={bookingLoadingErrorText} toastType='error' toggleModalMode={toggleModalMode} />
      )}

      {isChangeBookingLoaded && (
        <ToastMessage messageText={changesSavedText} toastType='success' toggleModalMode={toggleModalMode} />
      )}
      {isChangeBookingError && (
        <ToastMessage messageText={changesNotSaved} toastType='error' toggleModalMode={toggleModalMode} />
      )}
      {isDeleteBookingLoaded && (
        <ToastMessage messageText={canselBookingSuccessText} toastType='success' toggleModalMode={toggleModalMode} />
      )}
      {isDeleteBookingError && (
        <ToastMessage messageText={cancelBookingErrorText} toastType='error' toggleModalMode={toggleModalMode} />
      )}
    </React.Fragment>
  );
};
