import {
  EachBookCommentsType,
  EachBookInfoOutputSuccessType,
  ForDetailedInfoType,
  ForGeneralDescriptionType,
} from '../types';

export const getInfoFromBookRequest = (
  book: EachBookInfoOutputSuccessType
): {
  forGeneralDescription: ForGeneralDescriptionType;
  forRating: number | null;
  forComments: EachBookCommentsType[];
  forDetailedInfo: ForDetailedInfoType[];
} => {
  const {
    id,
    title,
    authors,
    booking,
    delivery,
    description,
    images,
    comments,
    rating,
    publish,
    issueYear,
    pages,
    cover,
    format,
    categories,
    weight,
    ISBN,
    producer,
  } = book;

  const categoriesString = categories && categories.length ? categories.join(', ') : '';

  const forGeneralDescription = { id, title, authors, booking, delivery, description, images };
  const forRating = rating;
  const forComments = comments;
  const forDetailedInfo = [
    { key: 'Издательство', value: publish },
    { key: 'Год издания', value: issueYear },
    { key: 'Страниц', value: pages },
    { key: 'Переплёт', value: cover },
    { key: 'Формат', value: format },
    { key: 'Жанр', value: categoriesString },
    { key: 'Вес', value: weight },
    { key: 'ISBN', value: ISBN },
    { key: 'Изготовитель', value: producer },
  ];

  return { forGeneralDescription, forRating, forComments, forDetailedInfo };
};
