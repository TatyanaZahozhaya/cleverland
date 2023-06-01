import { FC, useState } from 'react';

import { ChosenDataType } from '../../types';
import { getDatesToDisplayInCalendar, getTodayData } from '../../utils';

import { CalendarHeader } from './calendar-header';
import { CalendarTable } from './calendar-table';

import './index.scss';

type CalendarType= {
  chooseBookingDate(date: string): void;
  chosenData?: ChosenDataType;
}

export const Calendar: FC<CalendarType> = ({ chooseBookingDate, chosenData }) => {
  const [date, month, year] = getTodayData();

  const [isMonthListOppened, setMonthListOppened] = useState(false);
  const [activeMonth, setActiveMonth] = useState(month);
  const [activeYear, setActiveYear] = useState(year);

  const datesToDisplay = getDatesToDisplayInCalendar(activeYear, activeMonth);

  const toggleActiveMonth = (mm: number) => {
    setActiveMonth(mm);
  };
  const toggleActiveYear = (yyyy: number) => {
    setActiveYear(yyyy);
  };

  const toggleMonthList = () => {
    setMonthListOppened(!isMonthListOppened);
  };

  return (
    <div data-test-id='calendar' id='calendar' className='calendar-container'>
      <CalendarHeader
        activeMonth={activeMonth}
        activeYear={activeYear}
        toggleActiveMonth={toggleActiveMonth}
        toggleActiveYear={toggleActiveYear}
        toggleMonthList={toggleMonthList}
        isMonthListOppened={isMonthListOppened}
      />
      <CalendarTable
        today={date}
        dates={datesToDisplay}
        month={month}
        activeMonth={activeMonth}
        chooseBookingDate={chooseBookingDate}
        chosenData={chosenData ? chosenData : undefined}
      />
    </div>
  );
};
