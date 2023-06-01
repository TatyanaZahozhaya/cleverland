import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { routesPath } from '../../constants';
import { useAppDispatch } from '../../store';
import { setBookIDToOpenPage, setBookToOpenPage } from '../../store/slice/all-books-slice';
import { AuthUserCommentsType,BookImageType } from '../../types';
import { BookCardCover } from '../book-card-cover';
import { BoookCardName } from '../book-card-name';
import { BookCardAuthor } from '../book-card-page-author';
import { StarRating } from '../star-rating';

import { ProfilePageHistoryChangeButton } from './profile-page-history-change-button';
import { ProfilePageHistoryVoteButton } from './profile-page-history-vote-button';

export type ProfilePageBookCardType = {
  id: number;
  title: string;
  rating: number;
  issueYear: string | null;
  authors: string[];
  image: BookImageType | null;
  commentFromCurrentUser?: AuthUserCommentsType;
};
export const ProfilePageHistoryBookCard: FC<ProfilePageBookCardType> = memo(
  ({ id, rating, title, authors, image, commentFromCurrentUser }) => {
    const dispatch = useAppDispatch();
    const userAlreadyCommented = commentFromCurrentUser ? true : false;

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
        className='book-card-container book-card-container-window book-card-container-profile-page book-card-container-history'
        data-test-id='card'
        onClick={(e) => openBookPage(e)}
        to={`${routesPath.bookPageHalfPathToAllCategory}/${id}`}
      >
        <BookCardCover image={image} view='window' />
        <StarRating rating={rating} page='main-star' />
        <BoookCardName name={title} />
        <BookCardAuthor arr={authors} />
        {userAlreadyCommented ? (
          <ProfilePageHistoryChangeButton
            dataTestId='history-review-button'
            bookID={id.toString()}
            commentFromCurrentUser={commentFromCurrentUser}
          />
        ) : (
          <ProfilePageHistoryVoteButton dataTestId='history-review-button' bookID={id.toString()} />
        )}
      </Link>
    );
  }
);
