import { FC } from 'react';

import { daysOfWeek } from '../../../app-data';
import { ChosenDataType, DateItemType } from '../../types';
import { addCalendarItemClass, getDateISOFormat, markAvaliableDate } from '../../utils';

type CalendarTableType = {
  today: number;
  month: number;
  dates: DateItemType[];
  activeMonth: number;
  chooseBookingDate(date: string): void;
  chosenData: ChosenDataType | undefined;
};

export const CalendarTable: FC<CalendarTableType> = ({
  today,
  dates,
  month,
  activeMonth,
  chooseBookingDate,
  chosenData,
}) => (
  <div className='calendar-table-container'>
    <div className='calendar-table'>
      {daysOfWeek.map((item) => (
        <p key={item.code} className='calendar-table-item calendar-table-header-item'>
          {item.value}
        </p>
      ))}
    </div>
    <div className='calendar-table'>
      {dates.map((item) => (
        <div data-test-id='day-button' key={`${item.day}-${item.month}`}>
          <input
            type='radio'
            name='calendar-date'
            id={`${item.day}-${item.month}`}
            className='calendar-table-radio'
            defaultChecked={
              chosenData &&
              item.day === chosenData.day &&
              item.month === chosenData.month &&
              item.year === chosenData.year
            }
            disabled={!markAvaliableDate(item, today, month, chosenData)}
            value={getDateISOFormat(item.year, item.month, item.day)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => chooseBookingDate(e.currentTarget.value)}
          />

          <label
            className={addCalendarItemClass(item, today, activeMonth, month)}
            htmlFor={`${item.day}-${item.month}`}
          >
            {item.day}
          </label>
        </div>
      ))}
    </div>
  </div>
);
