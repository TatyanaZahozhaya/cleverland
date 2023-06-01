import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { changeRatingFilter } from '../../store/slice/filter-slice';
import { SortDownIcon, SortUpIcon } from '../svg-icons';

import './index.scss';

type FilterByRatingButtonType =  {
  mobileOpened: boolean;
}

export const SortByRatingButton: FC<FilterByRatingButtonType> = memo(({ mobileOpened }) => {
  const { ratingFromHighToLowFilter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <button
      data-test-id='sort-rating-button'
      className={mobileOpened ? 'sort-by-rating-button__hidden' : 'sort-by-rating-button'}
      aria-label='кнопка сортировать по рейтингу'
      type='button'
      onClick={() => dispatch(changeRatingFilter(!ratingFromHighToLowFilter))}
    >
      {ratingFromHighToLowFilter ? <SortDownIcon /> : <SortUpIcon />}
      По рейтингу
    </button>
  );
});
