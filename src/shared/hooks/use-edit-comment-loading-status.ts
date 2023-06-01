import { status } from '../constants';
import { useAppSelector } from '../store';

export const useEditCommentLoadingStatus = () => {
  const { editCommentInfo, editCommentInfoLoadingStatus, editCommentInfoError } = useAppSelector(
    (state) => state.editCommentInfo
  );

  const { idle, loading, error } = status;

  const startEditComment = editCommentInfoLoadingStatus === idle && !editCommentInfo && !editCommentInfoError;
  const isEditCommentLoaded = editCommentInfoLoadingStatus === idle && editCommentInfo ? true : false;
  const isEditCommentLoading = editCommentInfoLoadingStatus === loading;
  const isEditCommentError = editCommentInfoLoadingStatus === error;

  return { startEditComment, isEditCommentLoaded, isEditCommentLoading, isEditCommentError };
};
