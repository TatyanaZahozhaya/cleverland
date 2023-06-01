import { status } from '../constants';
import { useAppSelector } from '../store';

export const useBookLoadingStatus = () => {
  const { oneBookInfoLoadingStatus } = useAppSelector((state) => state.oneBookInfo);

  const { idle, loading, error } = status;

  const isOneBookLoaded = oneBookInfoLoadingStatus === idle;
  const isOneBookLoading = oneBookInfoLoadingStatus === loading;
  const isOneBookError = oneBookInfoLoadingStatus === error;

  return [isOneBookLoaded, isOneBookLoading, isOneBookError];
};
