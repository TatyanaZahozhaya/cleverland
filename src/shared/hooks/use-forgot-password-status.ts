import { status } from '../constants';
import { useAppSelector } from '../store';

export const useForgotPasswordStatus = () => {
  const { forgotPasswordInfo, forgotPasswordLoadingStatus } = useAppSelector((state) => state.forgotPasswordInfo);

  const { idle, loading } = status;

  const successStartReset = forgotPasswordLoadingStatus === idle && forgotPasswordInfo ? true : false;
  const isLoading = forgotPasswordLoadingStatus === loading ? true : false;

  return [isLoading, successStartReset];
};
