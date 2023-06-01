import React, { FC, memo } from 'react';

import { AppModalCloseIcon } from '../svg-icons';

import './index.scss';

type AppModalContainerType = {
  children: React.ReactNode;
  toggleModalMode(): void;
};

export const AppModalContainer: FC<AppModalContainerType> = memo(({ children, toggleModalMode }) => (
  <div data-test-id='booking-modal' className='app-modal-container' role='dialog' aria-modal='true'>
    <button
      data-test-id='modal-close-button'
      className='app-modal-close-button'
      type='button'
      onClick={toggleModalMode}
    >
      <AppModalCloseIcon />
    </button>
    {children}
  </div>
));
