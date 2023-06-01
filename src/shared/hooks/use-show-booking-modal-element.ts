import { useBookingLoadingStatus } from './use-booking-loading-status';
import { useChangeBookingLoadingStatus } from './use-change-booking-loading-status';
import { useDeleteBookingLoadingStatus } from './use-delete-booking-loadind-status';

export const useShowBookingModalElement = (bookStatus: string) => {
  const { startFirstBooking, isFirstBookingLoaded } = useBookingLoadingStatus();

  const { startChangeBooking, isChangeBookingLoaded } = useChangeBookingLoadingStatus();

  const { startDeleteBooking, isDeleteBookingLoaded } = useDeleteBookingLoadingStatus();

  const startEditingBooking = startChangeBooking || startDeleteBooking;

  const toBookItem = bookStatus === 'забронировать';
  const toChangeBooking = !(bookStatus === 'забронировать');

  const showFirstBookingModalElement =
    toBookItem && startFirstBooking && !isChangeBookingLoaded && !isDeleteBookingLoaded;

  const showChangeBookingModalElement = toChangeBooking && startEditingBooking && !isFirstBookingLoaded;

  return { showFirstBookingModalElement, showChangeBookingModalElement };
};
