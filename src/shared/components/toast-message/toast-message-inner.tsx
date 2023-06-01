/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';

import { AppContainer } from '../containers';
import { CloseModalIcon, ExclamationPointIcon, TickPointIcon } from '../svg-icons';
import { ToastMessageText } from '../text';

import './index.scss';

type ToastMessageInnerType =  {
  messageText: string;
  toastType: 'error' | 'success';
  closeToast(): void;
}

export const ToastMessageInner: FC<ToastMessageInnerType> = ({ toastType, messageText, closeToast }) => (
  <AppContainer>
    <div
      data-test-id='error'
      id='toast-message'
      className={
        toastType === 'error'
          ? 'toast-message-box toast-message-box_error'
          : 'toast-message-box toast-message-box_success'
      }
      role='dialog'
      aria-modal='true'
    >
      <svg className='exclamation-icon' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        {toastType === 'error' ? <ExclamationPointIcon /> : <TickPointIcon />}
      </svg>
      <ToastMessageText message={messageText} />
      <button
        data-test-id='alert-close'
        className='close-toast-message-button'
        onClick={() => closeToast()}
        type='button'
      >
        <svg className='close-toast-message-icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <CloseModalIcon />
        </svg>
      </button>
    </div>
  </AppContainer>
);
