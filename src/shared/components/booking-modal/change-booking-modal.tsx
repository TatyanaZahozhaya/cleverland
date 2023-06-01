import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { fetchAllBooksInfo, fetchOneBookInfo, useAppDispatch } from '../../store';
import { fetchChangeBookingInfo } from '../../store/slice/change-booking-slice';
import { fetchDeleteBookingInfo } from '../../store/slice/delete-booking-slice';
import { getDateObject } from '../../utils';
import { AppModalContainer, AppModalLayout } from '../app-modal';
import { Calendar } from '../calendar';

import './index.scss';

const editBookingPortal = document.getElementById('edit-booking-portal');

type BookingModalWindowType= {
  bookingDateOrder: string;
  toggleModalMode(): void;
  isModalOpen: boolean;
  bookingID: number;
  userID: number;
  bookIDFromCard: number;
}

export const ChangeBookingModal: FC<BookingModalWindowType> = ({
  bookingDateOrder,
  toggleModalMode,
  isModalOpen,
  bookingID,
  userID,
  bookIDFromCard,
}) => {
  const dispatch = useAppDispatch();
  const { bookID } = useParams();
  const chosenData = getDateObject(bookingDateOrder);

  const [bookingDate, setBookingDate] = useState('');
  const chooseBookingDate = (date: string) => {
    setBookingDate(date);
  };

  const bookingBody = {
    data: {
      order: bookingDate ? true : false,
      dateOrder: bookingDate,
      book: bookIDFromCard.toString(),
      customer: userID.toString(),
    },
  };

  const updateMainData = () => {
    if (bookID) {
      dispatch(fetchOneBookInfo(bookID));
    } else {
      dispatch(fetchAllBooksInfo());
    }
  };

  const onChangeBooking = () => {
    dispatch(fetchChangeBookingInfo({ body: bookingBody, bookingID })).then(() => updateMainData());
  };

  const onCancelBooking = () => {
    dispatch(fetchDeleteBookingInfo(bookingID)).then(() => updateMainData());
  };

  return createPortal(
    <AppModalLayout toggleModalMode={toggleModalMode} isModalOpen={isModalOpen}>
      <AppModalContainer toggleModalMode={toggleModalMode}>
        <div className='booking-modal-container'>
          <p data-test-id='modal-title' className='booking-modal-title'>
            Изменение даты бронирования
          </p>
          <Calendar chooseBookingDate={chooseBookingDate} chosenData={chosenData} />
          <button
            data-test-id='booking-button'
            id='booking-button-edit'
            className='booking-modal-button booking-modal-button-confirm'
            type='button'
            disabled={bookingDate ? false : true}
            onClick={() => onChangeBooking()}
          >
            Забронировать
          </button>
          <button
            data-test-id='booking-cancel-button'
            className='booking-modal-button booking-modal-button-cancel'
            type='button'
            disabled={false}
            onClick={() => onCancelBooking()}
          >
            отменить бронь
          </button>
        </div>
      </AppModalContainer>
    </AppModalLayout>,

    editBookingPortal as HTMLElement
  );
};
