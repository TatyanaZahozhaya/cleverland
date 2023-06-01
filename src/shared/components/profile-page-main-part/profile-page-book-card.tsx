import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAppDispatch } from '../../store';
import { setBookIDToOpenPage, setBookToOpenPage } from '../../store/slice/all-books-slice';
import { BookImageType } from '../../types';
import { BookCardCover } from '../book-card-cover';
import { BoookCardName } from '../book-card-name';
import { BookCardAuthor } from '../book-card-page-author';
import { StarRating } from '../star-rating';

import { ProfilePageRedCover } from './profile-page-red-cover';

import './index.scss';

type ProfilePageBookCardType= {
  id: number;
  title: string;
  rating: number;
  issueYear: string | null;
  authors: string[];
  image: BookImageType | null;
  onCancelBooking?(): void;
  bookingDateOverdue?: boolean;
  deliveryDateOverdue?: boolean;
  deliveryDateToDisplay?: string;
}
export const ProfilePageBookCard: FC<ProfilePageBookCardType> = memo(
  ({
    id,
    rating,
    title,
    authors,
    image,
    onCancelBooking,
    bookingDateOverdue,
    deliveryDateOverdue,
    deliveryDateToDisplay,
  }) => {
    const dispatch = useAppDispatch();

    const openBookPage = (e: React.MouseEvent<HTMLElement>) => {
      if (
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).id === 'modal-outer' ||
        (e.target as HTMLElement).id === 'toast-message'
      ) {
        e.preventDefault();
      }
      dispatch(setBookToOpenPage(title));
      dispatch(setBookIDToOpenPage(id));
    };

    return (
      <Link
        className='book-card-container book-card-container-list book-card-container-profile-page'
        data-test-id='card'
        onClick={openBookPage}
        to={`${routesPath.bookPageHalfPathToAllCategory}/${id}`}
      >
        <BookCardCover image={image} view='list' />
        <StarRating rating={rating} page='main-star' />
        <BoookCardName name={title} />
        <BookCardAuthor arr={authors} />
        {deliveryDateOverdue && (
          <ProfilePageRedCover title='Вышел срок пользования книги ' subtitle='Верните книгу, пожалуйста' />
        )}
        {bookingDateOverdue && (
          <ProfilePageRedCover
            title='Дата бронирования книги истекла'
            subtitle='Через 24 часа книга будет  доступна всем'
          />
        )}
        {deliveryDateToDisplay && <p className='profile-page-delivery-date'>Возврат {deliveryDateToDisplay}</p>}
        {onCancelBooking ? (
          <button
            data-test-id='cancel-booking-button'
            className='profile-page-booking-button-cancel'
            type='button'
            disabled={false}
            onClick={() => onCancelBooking()}
          >
            отменить бронь
          </button>
        ) : null}
      </Link>
    );
  }
);
