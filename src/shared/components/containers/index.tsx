import React, { FC, memo } from 'react';

import './index.scss';

type ContainerType = {
  children: React.ReactNode | any;
  view?: string;
};

export const AppContainer: FC<ContainerType> = memo(({ children }) => <div className='app-container'>{children}</div>);
export const SocialIconContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='social-icon-container'>{children}</div>
));
export const AppNameContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='app-name-container'>{children}</div>
));
export const ContentContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='content-container'>{children}</div>
));
export const ControlsContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='controls-container'>{children}</div>
));
export const CardsContainer: FC<ContainerType> = memo(({ children, view }) => (
  <div data-test-id='content' className={`cards-container-${view}`}>
    {children}
  </div>
));
export const BookCardAuthorContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='book-card-author-container'>{children}</div>
));
export const ModalContainer: FC<ContainerType> = memo(({ children }) => (
  <div data-test-id='auth' className='modal-container'>
    {children}
  </div>
));
export const ModalBox: FC<ContainerType> = memo(({ children }) => <div className='modal-box'>{children}</div>);

export const ModalIfAccountBox: FC<ContainerType> = memo(({ children }) => (
  <div className='modal-if-account-box'>{children}</div>
));

export const ModalEnterLinkContainer: FC<ContainerType> = memo(({ children }) => (
  <div className='modal-if-account-box modal-enter-link-container'>{children}</div>
));
