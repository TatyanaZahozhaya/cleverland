import { status } from '../constants';
import { useAppSelector } from '../store';

export const useResetPasswordStatus = () => {
  const { resetPasswordInfo, resetPasswordLoadingStatus } = useAppSelector((state) => state.resetPasswordInfo);

  const { idle, loading, error } = status;

  const isLoading = resetPasswordLoadingStatus === loading ? true : false;
  const successFinishReset = resetPasswordLoadingStatus === idle && resetPasswordInfo ? true : false;
  const errReset = resetPasswordLoadingStatus === error ? true : false;

  return [isLoading, successFinishReset, errReset];
};
