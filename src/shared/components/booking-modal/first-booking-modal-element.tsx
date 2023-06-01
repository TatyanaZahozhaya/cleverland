import React, { FC } from 'react';

import { useBookingLoadingStatus } from '../../hooks';
import { Loader } from '../loader';

import { FirstBookingModal } from './first-booking-modal';

import './index.scss';

type FirstBookingModalElementType = {
  toggleModalMode(): void;
  isModalOpen: boolean;
  userID: number;
  bookIDFromCard: number;
}

export const FirstBookingModalElement: FC<FirstBookingModalElementType> = ({
  toggleModalMode,
  isModalOpen,
  userID,
  bookIDFromCard,
}) => {
  const { isFirstBookingLoading } = useBookingLoadingStatus();

  return (
    <React.Fragment>
      {isFirstBookingLoading && <Loader />}
      <FirstBookingModal
        toggleModalMode={toggleModalMode}
        isModalOpen={isModalOpen}
        userID={userID}
        bookIDFromCard={bookIDFromCard}
      />
    </React.Fragment>
  );
};
