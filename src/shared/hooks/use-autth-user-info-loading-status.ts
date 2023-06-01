import { status } from '../constants';
import { useAppSelector } from '../store';

export const useAuthUserInfoLoadingStatus = () => {
  const { authUserInfoLoadingStatus } = useAppSelector((state) => state.authUserInfo);

  const { idle, loading, error } = status;

  const isAuthUserInfoLoaded = authUserInfoLoadingStatus === idle;
  const isAuthUserInfoLoading = authUserInfoLoadingStatus === loading;
  const isAuthUserInfoError = authUserInfoLoadingStatus === error;

  return { isAuthUserInfoLoaded, isAuthUserInfoLoading, isAuthUserInfoError };
};
