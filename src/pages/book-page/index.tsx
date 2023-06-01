import React, { useEffect } from 'react';

import { BookPageInfo, LibPath } from '../../shared/components';
import { useBookCategoryInRU } from '../../shared/hooks';
import {
  fetchAuthUserInfo,
  fetchBooksCategories,
  fetchOneBookInfo,
  useAppDispatch,
  useAppSelector,
} from '../../shared/store';

export const BookPage = () => {
  const { bookToOpen } = useAppSelector((state) => state.allBooks);
  const [categoryRU, bookID] = useBookCategoryInRU();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthUserInfo());
    dispatch(fetchOneBookInfo(bookID ? bookID : ''));
    dispatch(fetchBooksCategories());
  }, [dispatch, bookID]);

  return (
    <React.Fragment>
      <LibPath categoryRU={categoryRU} name={bookToOpen} />
      <BookPageInfo />
    </React.Fragment>
  );
};
