/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { StarRatingToVote } from '../star-rating';
import { AppModalCloseIcon } from '../svg-icons';

import './index.scss';

const commentPortal = document.getElementById('comment-portal');

type LeaveCommentModalPortalType =  {
  toggleCommentModalMode(): void;
  isCommentModalOpen: boolean;
  onSelectStar(stars: string): void;
  starSelected: string;
  commentText: string | null;
  onSetCommentText(text: string): void;
  confirmAddComment(): void;
  editComment?: boolean;
}

export const LeaveCommentModalPortal: FC<LeaveCommentModalPortalType> = ({
  toggleCommentModalMode,
  isCommentModalOpen,
  onSelectStar,
  starSelected,
  commentText,
  onSetCommentText,
  confirmAddComment,
  editComment,
}) =>
  createPortal(
    <div
      data-test-id='modal-outer'
      className={isCommentModalOpen ? 'app-modal-layout' : 'app-modal-closed'}
      onClick={(e) => (e.target === e.currentTarget ? toggleCommentModalMode() : e.stopPropagation())}
      role='dialog'
      aria-modal='true'
    >
      <div data-test-id='modal-rate-book' className='rate-modal-container'>
        <button
          data-test-id='modal-close-button'
          className='comment-modal-close-button'
          type='button'
          onClick={toggleCommentModalMode}
        >
          <AppModalCloseIcon />
        </button>
        <div className='comment-modal-container'>
          <p data-test-id='modal-title' className='comment-modal-title'>
            Оцените книгу
          </p>

          <StarRatingToVote onSelectStar={onSelectStar} starSelected={starSelected} />
          <textarea
            data-test-id='comment'
            className='comment-modal-textarea'
            placeholder='Оставить отзыв'
            value={commentText ? commentText : ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onSetCommentText(e.target.value)}
          />
          <button
            data-test-id='button-comment'
            className='booking-modal-button booking-modal-button-confirm'
            type='button'
            onClick={() => confirmAddComment()}
          >
            {editComment ? 'изменить оценку' : 'оценить'}
          </button>
        </div>
      </div>
    </div>,
    commentPortal as HTMLElement
  );
