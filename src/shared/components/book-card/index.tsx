import { FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAppDispatch } from '../../store';
import { setBookIDToOpenPage,setBookToOpenPage } from '../../store/slice/all-books-slice';
import { IBookCard } from '../../types';
import { BookCardButton } from '../book-card-button';
import { BookCardCover } from '../book-card-cover';
import { BoookCardName } from '../book-card-name';
import { BookCardAuthor } from '../book-card-page-author';
import { StarRating } from '../star-rating';

import './index.scss';

export const BookCard: FC<IBookCard> = memo(({ id, image, rating, title, authors, booking, delivery, view }) => {
  const { category } = useParams();
  const dispatch = useAppDispatch();

  const {mainPageHalfPath} = routesPath;

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
      className={`book-card-container book-card-container-${view}`}
      data-test-id='card'
      onClick={(e) => openBookPage(e)}
      to={`${mainPageHalfPath}/${category}/${id}`}
    >
      <BookCardCover image={image} view={view} />
      <StarRating rating={rating} page='main-star' />
      <BoookCardName name={title} />
      <BookCardAuthor arr={authors} />
      <BookCardButton booking={booking} delivery={delivery} bookID={id} page={`main-${view}`} />
    </Link>
  );
});
