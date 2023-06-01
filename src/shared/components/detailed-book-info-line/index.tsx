import { FC, memo } from 'react';

import { DetailesParameterText, DetailesValueText } from '../text';

import './index.scss';

type DetailedBookInfoLineType = {
  parameter: string;
  value: string | undefined;
}

export const DetailedBookInfoLine: FC<DetailedBookInfoLineType> = memo(({ parameter, value }) => (
  <div className='detailed-book-info-line'>
    <DetailesParameterText parameter={parameter} />
    <DetailesValueText value={value} />
  </div>
));
