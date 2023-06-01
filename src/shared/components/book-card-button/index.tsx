import React, { FC, memo, useState } from 'react';

import { useBookBookingStatus } from '../../hooks';
import { useAppDispatch } from '../../store';
import { clearBookingErrorAfterCloseToast, clearBookingSuccessAfterCloseToast } from '../../store/slice/booking-slice';
import {
  clearChangeBookingErrorAfterCloseToast,
  clearChangeBookingSuccessAfterCloseToast,
} from '../../store/slice/change-booking-slice';
import {
  clearDeleteBookingErrorAfterCloseToast,
  clearDeleteBookingSuccessAfterCloseToast,
} from '../../store/slice/delete-booking-slice';
import { BookBookingType, BookDeliveryType } from '../../types';
import { BookingModal } from '../booking-modal';

import './index.scss';

type BookCardButtonType =  {
  booking: BookBookingType | null;
  delivery: BookDeliveryType | null;
  page: string;
  bookID: number;
}

export const BookCardButton: FC<BookCardButtonType> = memo(({ booking, delivery, page, bookID }) => {
  const dispatch = useAppDispatch();
  const { bookStatus, buttonDisabled, userID } = useBookBookingStatus(booking, delivery);

  const [isModalOpen, toggleModal] = useState(false);

  const toggleModalMode = () => {
    toggleModal(!isModalOpen);
  };

  const clearPrevMessages = () => {
    dispatch(clearBookingErrorAfterCloseToast());
    dispatch(clearBookingSuccessAfterCloseToast());
    dispatch(clearChangeBookingSuccessAfterCloseToast());
    dispatch(clearDeleteBookingSuccessAfterCloseToast());
    dispatch(clearChangeBookingErrorAfterCloseToast());
    dispatch(clearDeleteBookingErrorAfterCloseToast());
    toggleModalMode();
  };

  return (
    <React.Fragment>
      <button
        data-test-id='booking-button'
        className={bookStatus === 'забронировать' ? `book-card-button free ${page}` : `book-card-button ${page}`}
        type='button'
        disabled={buttonDisabled}
        onClick={() => clearPrevMessages()}
      >
        {bookStatus}
      </button>

      {isModalOpen && (
        <BookingModal
          toggleModalMode={toggleModalMode}
          isModalOpen={isModalOpen}
          userID={userID}
          delivery={delivery}
          booking={booking}
          bookID={bookID}
        />
      )}
    </React.Fragment>
  );
});
