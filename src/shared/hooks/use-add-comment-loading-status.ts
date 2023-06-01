import { status } from '../constants';
import { useAppSelector } from '../store';

export const useAddCommentLoadingStatus = () => {
  const { addCommentInfo, addCommentInfoLoadingStatus, addCommentInfoError } = useAppSelector(
    (state) => state.addCommentInfo
  );

  const {idle, loading, error} = status;
  
  const startAddComment = addCommentInfoLoadingStatus === idle && !addCommentInfo && !addCommentInfoError;
  const isAddCommentLoaded = addCommentInfoLoadingStatus === idle && addCommentInfo ? true : false;
  const isAddCommentLoading = addCommentInfoLoadingStatus === loading;
  const isAddCommentError = addCommentInfoLoadingStatus === error;

  return { startAddComment, isAddCommentLoaded, isAddCommentLoading, isAddCommentError };
};
