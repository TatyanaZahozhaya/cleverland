import { FC, memo } from 'react';

import { ForDetailedInfoType } from '../../types';
import { BookPageSectionHeader } from '../book-page-section-header';
import { DetailedBookInfoLine } from '../detailed-book-info-line';

import './index.scss';

type DetailedBookInfoType = {
  details: ForDetailedInfoType[];
}

export const DetailedBookInfo: FC<DetailedBookInfoType> = memo(({ details }) => (
  <div className='detailed-book-info'>
    <BookPageSectionHeader name='Подробная информация' />
    <div className='detailed-book-info-box'>
      {details.map((i: ForDetailedInfoType) => (
        <DetailedBookInfoLine parameter={i.key} value={i.value} key={`${i.key}-${i.value}`} />
      ))}
    </div>
  </div>
));
