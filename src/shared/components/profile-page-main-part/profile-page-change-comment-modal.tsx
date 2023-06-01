import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAllBooksInfo, fetchAuthUserInfo, fetchOneBookInfo, useAppDispatch, useAppSelector } from '../../store';
import { fetchEditCommentInfo } from '../../store/slice/edit-comment-slice';
import { AuthUserCommentsType } from '../../types';
import { LeaveCommentModalPortal } from '../leave-comment-modal-portal';

type LeaveCommentModalType = {
  toggleCommentModalMode(): void;
  isCommentModalOpen: boolean;
  bookID: string;
  commentFromCurrentUser?: AuthUserCommentsType;
}

export const ProfilePageChangeCommentModal: FC<LeaveCommentModalType> = ({
  toggleCommentModalMode,
  isCommentModalOpen,
  bookID,
  commentFromCurrentUser,
}) => {
  const dispatch = useAppDispatch();

  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);

  const commentTextInitialState = commentFromCurrentUser ? commentFromCurrentUser.text : '';
  const commentRatingInitialState = commentFromCurrentUser ? commentFromCurrentUser.rating.toString() : '';
  const commentId = commentFromCurrentUser ? commentFromCurrentUser.id.toString() : '';

  const [commentText, setCommentText] = useState(commentTextInitialState);

  const [starSelected, setStarSelected] = useState(commentRatingInitialState);

  const { section } = useParams();

  useEffect(() => {
    if (!section) {
      dispatch(fetchOneBookInfo(bookID ? bookID : ''));
    }
  }, [dispatch, bookID, section]);

  const onSelectStar = (stars: string) => {
    setStarSelected(stars);
  };
  const onSetCommentText = (text: string) => {
    setCommentText(text);
  };

  const userID = authorizationInfo.user.id;

  const commentBody = {
    data: {
      rating: +starSelected,
      text: commentText,
      book: bookID,
      user: userID.toString(),
    },
  };

  const confirmAddComment = () => {
    dispatch(fetchEditCommentInfo({ body: commentBody, commentId })).then(() => {
      if (section) {
        dispatch(fetchOneBookInfo(bookID));
        dispatch(fetchAuthUserInfo());
      } else {
        dispatch(fetchAllBooksInfo());
      }
      
    });
  };

  return (
    <LeaveCommentModalPortal
      toggleCommentModalMode={toggleCommentModalMode}
      isCommentModalOpen={isCommentModalOpen}
      onSelectStar={onSelectStar}
      starSelected={starSelected}
      commentText={commentText}
      onSetCommentText={onSetCommentText}
      confirmAddComment={confirmAddComment}
      editComment={true}
    />
  );
};
