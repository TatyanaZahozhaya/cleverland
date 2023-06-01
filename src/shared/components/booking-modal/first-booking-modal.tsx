import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { fetchAllBooksInfo, fetchOneBookInfo, useAppDispatch } from '../../store';
import { fetchBookingInfo } from '../../store/slice/booking-slice';
import { AppModalContainer, AppModalLayout } from '../app-modal';
import { Calendar } from '../calendar';

import './index.scss';

const bookingPortal = document.getElementById('booking-portal');

type FirstBookingModalType = {
  toggleModalMode(): void;
  isModalOpen: boolean;
  userID: number;
  bookIDFromCard: number;
};

export const FirstBookingModal: FC<FirstBookingModalType> = ({
  toggleModalMode,
  isModalOpen,
  userID,
  bookIDFromCard,
}) => {
  const { bookID } = useParams();
  const dispatch = useAppDispatch();

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

  const onBooking = () => {
    dispatch(fetchBookingInfo(bookingBody)).then(() => {
      if (bookID) {
        dispatch(fetchOneBookInfo(bookID));
      } else {
        dispatch(fetchAllBooksInfo());
      }
    });
  };

  return createPortal(
    <AppModalLayout toggleModalMode={toggleModalMode} isModalOpen={isModalOpen}>
      <AppModalContainer toggleModalMode={toggleModalMode}>
        <div className='booking-modal-container'>
          <p data-test-id='modal-title' className='booking-modal-title'>
            Выбор даты бронирования
          </p>
          <Calendar chooseBookingDate={chooseBookingDate} />
          <button
            data-test-id='booking-button'
            id='booking-button'
            className='booking-modal-button booking-modal-button-confirm'
            type='button'
            disabled={bookingDate ? false : true}
            onClick={() => onBooking()}
          >
            Забронировать
          </button>
        </div>
      </AppModalContainer>
    </AppModalLayout>,

    bookingPortal as HTMLElement
  );
};
