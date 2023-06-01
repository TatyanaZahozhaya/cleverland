import { status } from '../constants';
import { useAppSelector } from '../store';

export const useRegistrationStatus = () => {
  const { registrationInfo, registarationInfoLoadingStatus, registarationInfoError } = useAppSelector(
    (state) => state.registarationInfo
  );

  const { idle, loading, error } = status;

  const startRegistration =
    registarationInfoLoadingStatus === idle && !registrationInfo && !registarationInfoError.data ? true : false;
  const errStatus400 = registarationInfoLoadingStatus === error && registarationInfoError === 400 ? true : false;
  const errStatusNot400 = registarationInfoLoadingStatus === error && registarationInfoError !== 400 ? true : false;
  const successRegistration = registarationInfoLoadingStatus === idle && registrationInfo ? true : false;
  const isLoading = registarationInfoLoadingStatus === loading ? true : false;

  return [isLoading, startRegistration, errStatus400, errStatusNot400, successRegistration];
};
