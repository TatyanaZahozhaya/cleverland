import React, { FC, memo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toastErrorText, toastSuccessText } from '../../constants';
import { useAddCommentLoadingStatus } from '../../hooks';
import { fetchAllBooksInfo, fetchAuthUserInfo, fetchOneBookInfo, useAppDispatch } from '../../store';
import { resetAddCommentState } from '../../store/slice/add-comment-slice';
import { resetEditCommentState } from '../../store/slice/edit-comment-slice';
import { Loader } from '../loader';
import { ToastMessage } from '../toast-message';

import { ProfilePageLeaveCommentModal } from './profile-page-leave-coment-modal';

type ProfilePageHistoryButtonType = {
  bookID: string;
  dataTestId: string;
};
export const ProfilePageHistoryVoteButton: FC<ProfilePageHistoryButtonType> = memo(({ bookID, dataTestId }) => {
  const dispatch = useAppDispatch();
  const { section } = useParams();
  const { startAddComment, isAddCommentLoaded, isAddCommentLoading, isAddCommentError } = useAddCommentLoadingStatus();
  const [isCommentModalOpen, toggleCommentModal] = useState(false);

  const showProfilePageLeaveCommentModal = (isCommentModalOpen && startAddComment) || isAddCommentLoading;

  const toggleCommentModalMode = () => {
    toggleCommentModal(!isCommentModalOpen);
  };

  const clearPreviousMessages = () => {
    dispatch(resetAddCommentState());
    dispatch(resetEditCommentState());
    toggleCommentModalMode();
  };

  const updateMainInfo = () => {
    if (section) {
      dispatch(fetchOneBookInfo(bookID));
      dispatch(fetchAuthUserInfo());
    }
    if (!section) {
      dispatch(fetchAllBooksInfo());
    }
  };

  return (
    <React.Fragment>
      <button
        data-test-id={dataTestId}
        className={
          section
            ? 'elipse-button elipse-button-vote book-page-for-rating-button'
            : 'elipse-button elipse-button-vote profile-page-for-rating-button'
        }
        type='button'
        disabled={false}
        onClick={() => clearPreviousMessages()}
      >
        {section ? 'оценить книгу' : 'Оставить отзыв'}
      </button>
      {isAddCommentLoading && <Loader />}
      {isAddCommentLoaded && (
        <ToastMessage
          toastType='success'
          messageText={toastSuccessText.addCommentsuccessText}
          toggleModalMode={toggleCommentModalMode}
          clearMessage={updateMainInfo}
        />
      )}

      {isAddCommentError && (
        <ToastMessage
          toastType='error'
          messageText={toastErrorText.changeRatingErrorText}
          toggleModalMode={toggleCommentModalMode}
        />
      )}
      {showProfilePageLeaveCommentModal && (
        <ProfilePageLeaveCommentModal
          toggleCommentModalMode={toggleCommentModalMode}
          isCommentModalOpen={isCommentModalOpen}
          bookID={bookID}
        />
      )}
    </React.Fragment>
  );
});
