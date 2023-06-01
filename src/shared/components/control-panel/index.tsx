import  { useState } from 'react';

import { ControlsContainer } from '../containers';
import { SearchField} from '../search-field';
import { SortByRatingButton } from '../sort-by-rating-button';
import { ViewToggler } from '../view-toggler';

import './index.scss';

export const ControlPanel = () => {
  const [openSearch, setOpenSearch] = useState(false);

  function toggleOpenSearch() {
    setOpenSearch(!openSearch);
  }

  return (
    <div className='control-panel'>
      <ControlsContainer>
        <SearchField onOpenChange={() => toggleOpenSearch()} mobileOpened={openSearch} />
        <SortByRatingButton mobileOpened={openSearch} />
      </ControlsContainer>
      <ViewToggler mobileOpened={openSearch} />
    </div>
  );
};
