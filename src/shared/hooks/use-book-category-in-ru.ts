import { useParams } from 'react-router-dom';

import { useAppSelector } from '../store';
import { getRUCategoryFromEN } from '../utils';

export const useBookCategoryInRU = () => {
  const { category, bookID } = useParams();
  const { booksCategories } = useAppSelector((state) => state.booksCategories);
  const categoryRU = getRUCategoryFromEN(category, booksCategories);

  return [categoryRU, bookID];
};
