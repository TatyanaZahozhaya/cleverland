import React, { FC } from 'react';

import { useChangeBookingLoadingStatus, useDeleteBookingLoadingStatus } from '../../hooks';
import { Loader } from '../loader';

import { ChangeBookingModal } from './change-booking-modal';

import './index.scss';

type BookingModalWindowType = {
  bookingDateOrder: string;
  toggleModalMode(): void;
  isModalOpen: boolean;
  bookingID: number;
  userID: number;
  bookIDFromCard: number;
}

export const ChangeBookingModalElement: FC<BookingModalWindowType> = ({
  bookingDateOrder,
  toggleModalMode,
  isModalOpen,
  bookingID,
  userID,
  bookIDFromCard,
}) => {
  const { startChangeBooking, isChangeBookingLoading } = useChangeBookingLoadingStatus();
  const { startDeleteBooking, isDeleteBookingLoading } = useDeleteBookingLoadingStatus();
  const startPosition = startDeleteBooking && startChangeBooking;
  const showChangeBookingModal = startPosition || isChangeBookingLoading || isDeleteBookingLoading;

  return (
    <React.Fragment>
      {isChangeBookingLoading && <Loader />}
      {isDeleteBookingLoading && <Loader />}
      {showChangeBookingModal && (
        <ChangeBookingModal
          bookingDateOrder={bookingDateOrder ? bookingDateOrder : ''}
          toggleModalMode={toggleModalMode}
          isModalOpen={isModalOpen}
          bookingID={bookingID ? bookingID : 0}
          userID={userID}
          bookIDFromCard={bookIDFromCard}
        />
      )}
    </React.Fragment>
  );
};
