/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastMessageInner } from './toast-message-inner';

import './index.scss';

const toastMessagePortal = document.getElementById('toast-message-portal');

type ToastMessageType = {
  messageText: string;
  toastType: 'error' | 'success';
  clearMessage?: any;
  toggleModalMode?: any;
}

export const ToastMessage: FC<ToastMessageType> = ({ messageText, toastType, clearMessage, toggleModalMode }) => {
  const [closedWindow, setClosedWindow] = useState(false);

  const closeToast = () => {
    if (clearMessage) clearMessage();
    if (toggleModalMode) toggleModalMode();

    setClosedWindow(true);
  };

  setTimeout(() => {
    closeToast();
  }, 4000);

  return createPortal(
    <div
      className={closedWindow ? 'toast-message-window__closed' : 'toast-message-window'}
      id='toast-message-window'
      onClick={(e) => e.stopPropagation()}
    >
      {closedWindow ? null : (
        <ToastMessageInner
          toastType={toastType}
          messageText={messageText}
          closeToast={closeToast}
        />
      )}
    </div>,
    toastMessagePortal as HTMLElement
  );
};

