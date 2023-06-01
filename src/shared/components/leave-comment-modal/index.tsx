/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';

import { fetchOneBookInfo, useAppDispatch, useAppSelector } from '../../store';
import { fetchAddCommentInfo } from '../../store/slice/add-comment-slice';
import { LeaveCommentModalPortal } from '../leave-comment-modal-portal';

type LeaveCommentModalType =  {
  toggleCommentModalMode(): void;
  isCommentModalOpen: boolean;
}

export const LeaveCommentModal: FC<LeaveCommentModalType> = ({ toggleCommentModalMode, isCommentModalOpen }) => {
  const dispatch = useAppDispatch();
  const { oneBookInfo } = useAppSelector((state) => state.oneBookInfo);
  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);

  const [commentText, setCommentText] = useState('');

  const [starSelected, setStarSelected] = useState('');

  const onSelectStar = (stars: string) => {
    setStarSelected(stars);
  };
  const onSetCommentText = (text: string) => {
    setCommentText(text);
  };

  const userID = authorizationInfo.user.id;
  const bookID = oneBookInfo.id;

  const commentBody = {
    data: {
      rating: +starSelected,
      text: commentText,
      book: bookID.toString(),
      user: userID.toString(),
    },
  };

  const confirmAddComment = () => {
    dispatch(fetchAddCommentInfo(commentBody)).then(() => fetchOneBookInfo(bookID.toString()));
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
    />
  );
};
