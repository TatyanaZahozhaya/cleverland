import { emptyFilterResultText } from '../../constants';
import { useCategoryAndNameFilters } from '../../hooks';
import { useAppSelector } from '../../store';

import './index.scss';

export const EmptyFilterResult = () => {
  const filteredBooks = useCategoryAndNameFilters();
  const { categoryFilter, bookNameFilter } = useAppSelector((state) => state.filter);
  const notEmptyResult = filteredBooks.length > 0;
  const noBooksInCategory = filteredBooks.length === 0 && categoryFilter !== 'все книги' && bookNameFilter === '';
  const { noBooksInCategoryText, noRequestResultText } = emptyFilterResultText;

  if (notEmptyResult) {
    return null;
  }
  if (noBooksInCategory) {
    return (
      <div data-test-id='empty-category' className='empty-filter-result'>
        {noBooksInCategoryText}
      </div>
    );
  }

  return (
    <div data-test-id='search-result-not-found' className='empty-filter-result'>
      {noRequestResultText}
    </div>
  );
};
