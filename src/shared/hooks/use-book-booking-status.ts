import { useAppSelector } from '../store';
import { BookBookingType, BookDeliveryType } from '../types';
import { getDayAndMonth } from '../utils';

interface IStatusOutput {
  bookStatus: string;
  buttonDisabled: boolean;
  userID: number;
  bookingDateOrder: string | undefined;
  bookingID: number | undefined;
}

export const useBookBookingStatus = (booking: BookBookingType | null, delivery: BookDeliveryType | null): IStatusOutput => {
  const { authorizationInfo } = useAppSelector((state) => state.authorizationInfo);
  const userID = authorizationInfo.user.id;
  const bookingDateOrder = booking ? booking.dateOrder : '';
  const bookingID = booking?.id;

  let bookStatus = '';
  let buttonDisabled = false;

  if (booking === null) {
    bookStatus = 'забронировать';
    buttonDisabled = false;
  }

  if (booking && booking.customerId === userID) {
    bookStatus = 'забронирована';
    buttonDisabled = false;
  }
  if (booking && booking.customerId !== userID) {
    bookStatus = 'забронирована';
    buttonDisabled = true;
  }

  if (delivery && delivery.recipientId !== userID && delivery.dateHandedTo) {
    bookStatus = `занята до ${getDayAndMonth(delivery.dateHandedTo)}`;
    buttonDisabled = true;
  }

  return { bookingID, bookingDateOrder, bookStatus, buttonDisabled, userID };
};
