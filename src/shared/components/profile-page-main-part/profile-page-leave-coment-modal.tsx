import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOneBookInfo, useAppDispatch, useAppSelector } from '../../store';
import { fetchAddCommentInfo } from '../../store/slice/add-comment-slice';
import { LeaveCommentModalPortal } from '../leave-comment-modal-portal';

type LeaveCommentModalType =  {
  toggleCommentModalMode(): void;
  isCommentModalOpen: boolean;
  bookID: string;
}

export const ProfilePageLeaveCommentModal: FC<LeaveCommentModalType> = ({
  toggleCommentModalMode,
  isCommentModalOpen,
  bookID,
}) => {
  const dispatch = useAppDispatch();
  const { section } = useParams();

  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);

  const [commentText, setCommentText] = useState('');

  const [starSelected, setStarSelected] = useState('5');

  useEffect(() => {
    if (!section) {
      dispatch(fetchOneBookInfo(bookID ? bookID : ''));
    }
  }, [dispatch, bookID, section]);

  const userID = authorizationInfo.user.id;

  const onSelectStar = (stars: string) => {
    setStarSelected(stars);
  };
  const onSetCommentText = (text: string) => {
    setCommentText(text);
  };

  const commentBody = {
    data: {
      rating: +starSelected,
      text: commentText,
      book: bookID,
      user: userID.toString(),
    },
  };

  const confirmAddComment = () => {
    dispatch(fetchAddCommentInfo(commentBody));
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
