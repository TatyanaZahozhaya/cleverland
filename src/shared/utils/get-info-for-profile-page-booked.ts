import { AuthorizedUserInfoOutputSuccessType, BooksInfoOutputSuccessType } from '../types';

import { getTodayISO } from './get-today-date-iso';

export const getInfoForProfilePageBooked = (
  allBooks: BooksInfoOutputSuccessType,
  authUserInfo: AuthorizedUserInfoOutputSuccessType
) => {
  const bookID = authUserInfo.booking.book.id;
  const bookFromAll = allBooks.find((item) => item.id === bookID);
  const bookImage = bookFromAll ? bookFromAll.image : null;
  const bookingID = authUserInfo.booking.id;
  const image = bookImage;
  const bookedDate = authUserInfo.booking.dateOrder;

  const todayISO = getTodayISO();
  const bookingDateOverdue = todayISO > bookedDate ? true : false;

  const { id, rating, title, authors, issueYear } = authUserInfo.booking.book;

  const forBookCard = { id, rating, title, authors, issueYear, image };

  return { forBookCard, bookingID, bookingDateOverdue };
};
