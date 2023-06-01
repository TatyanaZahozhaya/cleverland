import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { changeBookNameFilter } from '../../store/slice/filter-slice';
import { CrossIcon, SearchIcon } from '../svg-icons';

import './index.scss';

type SearchFieldType = {
  onOpenChange(e: React.MouseEvent): void;
  mobileOpened: boolean;
}

export const SearchField: FC<SearchFieldType> = memo(({ onOpenChange, mobileOpened }) => {
  const { bookNameFilter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <form
      className={mobileOpened ? 'search-field search-field_mobile' : 'search-field search-field_desktop'}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        data-test-id='input-search'
        className={mobileOpened ? 'input-field input-field_mobile' : 'input-field input-field_desktop'}
        type='search'
        placeholder='Поиск книги или автора…'
        aria-label='Поиск книги или автора в библиотеке'
        value={bookNameFilter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeBookNameFilter(e.target.value))}
      />
      <p className='search-field-icon search-field-picture'>
        <SearchIcon />
      </p>
      <button
        data-test-id='button-search-open'
        className={
          mobileOpened
            ? 'search-field-icon search-field-button search-field-icon__hidden'
            : 'search-field-icon search-field-button'
        }
        type='button'
        onClick={onOpenChange}
      >
        <SearchIcon />
      </button>
      <button
        data-test-id='button-search-close'
        className={
          mobileOpened
            ? 'search-field-icon search-field-button'
            : 'search-field-icon search-field-button search-field-icon__hidden'
        }
        type='button'
        onClick={onOpenChange}
      >
        <CrossIcon />
      </button>
    </form>
  );
});
