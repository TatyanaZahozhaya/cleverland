import { useAppSelector } from '../store';
import { BooksInfoType } from '../types';

import { useCategoryAndNameFilters } from './use-category-and-name-filters';

export const useSortByRating = () => {
  const { ratingFromHighToLowFilter } = useAppSelector((state) => state.filter);
  const filteredBooks = useCategoryAndNameFilters();

  const booksWithoutRating = filteredBooks.filter((item: BooksInfoType) => !item.rating);
  const booksWithRatingSortedFromLowToHigh = filteredBooks
    .filter((item: BooksInfoType) => item.rating)
    .sort((a, b) => {
      if (a.rating && b.rating) {
        return a.rating > b.rating ? 1 : -1;
      }

      return -1;
    });

  const booksWithRatingSortedFromHighToLow = filteredBooks
    .filter((item: BooksInfoType) => item.rating)
    .sort((a, b) => {
      if (a.rating && b.rating) {
        return a.rating > b.rating ? -1 : 1;
      }

      return -1;
    });

  if (!ratingFromHighToLowFilter) {
    return [...booksWithoutRating, ...booksWithRatingSortedFromLowToHigh];
  }

  return [...booksWithRatingSortedFromHighToLow, ...booksWithoutRating];
};
