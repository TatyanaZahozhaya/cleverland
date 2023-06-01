import { status } from '../constants';
import { useAppSelector } from '../store';

export const useDeleteBookingLoadingStatus = () => {
  const { deletedBookingInfo, deletedbookingInfoLoadingStatus, deletedbookingInfoError } = useAppSelector(
    (state) => state.deletedBookingInfo
  );

  const { idle, loading, error } = status;

  const startDeleteBooking =
    deletedbookingInfoLoadingStatus === idle && !deletedBookingInfo && !deletedbookingInfoError;
  const isDeleteBookingLoaded = deletedbookingInfoLoadingStatus === idle && deletedBookingInfo ? true : false;
  const isDeleteBookingLoading = deletedbookingInfoLoadingStatus === loading;
  const isDeleteBookingError = deletedbookingInfoLoadingStatus === error;

  return { startDeleteBooking, isDeleteBookingLoaded, isDeleteBookingLoading, isDeleteBookingError };
};
