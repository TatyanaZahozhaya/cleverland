import { status } from '../constants';
import { useAppSelector } from '../store';

export const useAuthorizationStatus = () => {
  const { authorizationInfo, authorisationInfoLoadingStatus, authorisationInfoError } = useAppSelector(
    (state) => state.authorizationInfo
  );

  const { idle, loading, error } = status;

  const successAuthorisation = authorisationInfoLoadingStatus === idle && authorizationInfo.jwt ? true : false;
  const errStatusNot400 = authorisationInfoLoadingStatus === error && authorisationInfoError !== 400 ? true : false;
  const errStatus400 = authorisationInfoLoadingStatus === error && authorisationInfoError === 400 ? true : false;
  const isLoading = authorisationInfoLoadingStatus === loading ? true : false;

  return [isLoading, successAuthorisation, errStatusNot400, errStatus400];
};
