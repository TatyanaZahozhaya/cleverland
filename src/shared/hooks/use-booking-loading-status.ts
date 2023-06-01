import { status } from '../constants';
import { useAppSelector } from '../store';

export const useBookingLoadingStatus = () => {
  const { bookingInfo, bookingInfoLoadingStatus, bookingInfoError } = useAppSelector((state) => state.bookingInfo);

  const { idle, loading, error } = status;

  const startFirstBooking = bookingInfoLoadingStatus === idle && !bookingInfo && !bookingInfoError;
  const isFirstBookingLoaded = bookingInfoLoadingStatus === idle && bookingInfo ? true : false;
  const isFirstBookingLoading = bookingInfoLoadingStatus === loading;
  const isFirstBookingError = bookingInfoLoadingStatus === error;

  return { startFirstBooking, isFirstBookingLoaded, isFirstBookingLoading, isFirstBookingError };
};
