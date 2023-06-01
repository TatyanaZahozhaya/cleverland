import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { IAppState } from '../store';

export const useCategoryAndNameFilters = () => {
  const filteredBooksSelector = createSelector(
    (state: IAppState) => state.filter.categoryFilter,
    (state: IAppState) => state.filter.bookNameFilter,
    (state: IAppState) => state.allBooks.allBooks,
    (categoryFilter, bookNameFilter, booksList) => {
      let filteredInfo;

      if (categoryFilter.toLowerCase() === 'все книги') {
        filteredInfo = booksList;
      } else {
        filteredInfo = booksList.filter((item) =>
          item.categories?.find((i) => i.toLowerCase() === categoryFilter.toLowerCase())
        );
      }

      return filteredInfo.filter((item) => item.title.toLowerCase().includes(bookNameFilter.toLowerCase()));
    }
  );

  const filteredByCategory = useSelector(filteredBooksSelector);

  return filteredByCategory;
};
