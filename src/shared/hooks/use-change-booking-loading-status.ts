import { status } from '../constants';
import { useAppSelector } from '../store';

export const useChangeBookingLoadingStatus = () => {
  const { changedBookingInfo, changedbookingInfoLoadingStatus, changedbookingInfoError } = useAppSelector(
    (state) => state.changedBookingInfo
  );

  const { idle, loading, error } = status;

  const startChangeBooking =
    changedbookingInfoLoadingStatus === idle && !changedBookingInfo && !changedbookingInfoError;
  const isChangeBookingLoaded = changedbookingInfoLoadingStatus === idle && changedBookingInfo ? true : false;
  const isChangeBookingLoading = changedbookingInfoLoadingStatus === loading;
  const isChangeBookingError = changedbookingInfoLoadingStatus === error;

  return { startChangeBooking, isChangeBookingLoaded, isChangeBookingLoading, isChangeBookingError };
};
