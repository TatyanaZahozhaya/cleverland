import React, { FC } from 'react';

import './index.scss';

type AppModalLayoutType = {
  children: React.ReactNode;
  toggleModalMode(): void;
  isModalOpen: boolean;
};

export const AppModalLayout: FC<AppModalLayoutType> = ({ children, toggleModalMode, isModalOpen }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div
    data-test-id='modal-outer'
    id='modal-outer'
    className={isModalOpen ? 'app-modal-layout' : 'app-modal-closed'}
    onClick={(e) => (e.target === e.currentTarget ? toggleModalMode() : e.stopPropagation())}
  >
    {children}
  </div>
);
