import { status } from '../constants';
import { useAppSelector } from '../store';

export const useAllBooksLoadingStatus = () => {
  const { categoriesLoadingStatus } = useAppSelector((state) => state.booksCategories);
  const { allBooks, allBooksLoadingStatus } = useAppSelector((state) => state.allBooks);

  const { loading, error } = status;

  const isAllBooksLoaded = allBooks.length > 0;
  const isAllBooksLoading = categoriesLoadingStatus === loading || allBooksLoadingStatus === loading;
  const isAllBooksError = categoriesLoadingStatus === error || allBooksLoadingStatus === error;

  return [isAllBooksLoaded, isAllBooksLoading, isAllBooksError];
};
