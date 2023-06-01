import React, { FC, memo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toastErrorText, toastSuccessText } from '../../constants';
import { useEditCommentLoadingStatus } from '../../hooks';
import { useAppDispatch } from '../../store';
import { resetAddCommentState } from '../../store/slice/add-comment-slice';
import { resetEditCommentState } from '../../store/slice/edit-comment-slice';
import { AuthUserCommentsType } from '../../types';
import { Loader } from '../loader';
import { ToastMessage } from '../toast-message';

import { ProfilePageChangeCommentModal } from './profile-page-change-comment-modal';

type ProfilePageHistoryButtonType = {
  bookID: string;
  commentFromCurrentUser?: AuthUserCommentsType;
  dataTestId: string;
}
export const ProfilePageHistoryChangeButton: FC<ProfilePageHistoryButtonType> = memo(
  ({ bookID, commentFromCurrentUser, dataTestId }) => {
    const dispatch = useAppDispatch();
    const { section } = useParams();

    const { startEditComment, isEditCommentLoaded, isEditCommentLoading, isEditCommentError } =
      useEditCommentLoadingStatus();

    const [isCommentModalOpen, toggleCommentModal] = useState(false);

    const showProfilePageChangeCommentModal = (isCommentModalOpen && startEditComment) || isEditCommentLoading;

    const toggleCommentModalMode = () => {
      toggleCommentModal(!isCommentModalOpen);
    };

    const clearPreviousMessages = () => {
      dispatch(resetEditCommentState());
      dispatch(resetAddCommentState());
      toggleCommentModalMode();
    };

    return (
      <React.Fragment>
        <button
          data-test-id={dataTestId}
          className={
            section
              ? 'elipse-button elipse-button-change book-page-for-rating-button'
              : 'elipse-button elipse-button-change profile-page-for-rating-button'
          }
          type='button'
          disabled={false}
          onClick={() => clearPreviousMessages()}
        >
          изменить оценку
        </button>
        {isEditCommentLoading && <Loader />}
        {isEditCommentLoaded && (
          <ToastMessage
            toastType='success'
            messageText={toastSuccessText.changeRatingSuccessText}
            toggleModalMode={toggleCommentModalMode}
          />
        )}

        {isEditCommentError && (
          <ToastMessage
            toastType='error'
            messageText={toastErrorText.changesNotSaved}
            toggleModalMode={toggleCommentModalMode}
          />
        )}
        {showProfilePageChangeCommentModal && (
          <ProfilePageChangeCommentModal
            toggleCommentModalMode={toggleCommentModalMode}
            isCommentModalOpen={isCommentModalOpen}
            bookID={bookID}
            commentFromCurrentUser={commentFromCurrentUser}
          />
        )}
      </React.Fragment>
    );
  }
);
