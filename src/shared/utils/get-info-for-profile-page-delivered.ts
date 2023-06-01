import { AuthorizedUserInfoOutputSuccessType, BooksInfoOutputSuccessType } from '../types';

import { getDayAndMonth } from './get-day-and-month';
import { getTodayISO } from './get-today-date-iso';

export const getInfoForProfilePageDelivered = (
  allBooks: BooksInfoOutputSuccessType,
  authUserInfo: AuthorizedUserInfoOutputSuccessType
) => {
  const bookID = authUserInfo.delivery.book.id;
  const bookFromAll = allBooks.find((item) => item.id === bookID);
  const bookImage = bookFromAll ? bookFromAll.image : null;
  const image = bookImage;

  const deliveryDate = authUserInfo.delivery.dateHandedTo;
  const deliveryDateToDisplay = getDayAndMonth(deliveryDate);

  const todayISO = getTodayISO();
  const deliveryDateOverdue = todayISO > deliveryDate ? true : false;

  const { id, rating, title, authors, issueYear } = authUserInfo.delivery.book;

  const forBookCard = { id, rating, title, authors, issueYear, image };

  return { forBookCard, deliveryDateOverdue, deliveryDateToDisplay };
};
