import { FC } from 'react';

import { CalendarMonthNextIcon, CalendarMonthPrevIcon, CalendarSelectMonthIcon } from '../svg-icons';

import './index.scss';

const monthesName = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

type CalendarHeaderType= {

  activeYear: number;
  activeMonth: number;
  toggleActiveMonth(month: number): void;
  toggleActiveYear(year: number): void;
  toggleMonthList(): void;
  isMonthListOppened: boolean;
}

export const CalendarHeader: FC<CalendarHeaderType> = ({

  activeMonth,
  activeYear,
  toggleActiveMonth,
  toggleActiveYear,
  toggleMonthList,
  isMonthListOppened,
}) => {
    const monthName = monthesName.find((item, index) => index === activeMonth);
  const selectMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    toggleActiveMonth(Number(value));
    toggleMonthList();
  };

  const selectPrevMonth = () => {
    if (activeMonth === 0) {
      toggleActiveYear(activeYear - 1);
      toggleActiveMonth(11);
    } else {
      toggleActiveMonth(activeMonth - 1);
    }
  };

  const selectNextMonth = () => {
    if (activeMonth === 11) {
      toggleActiveMonth(0);
      toggleActiveYear(activeYear + 1);
    } else {
      toggleActiveMonth(activeMonth + 1);
    }
  };

  return (
    <div className='calendar-header'>
      <div className='calendar-month-selector-container'>
        <button
          data-test-id='month-select'
          className='calendar-month-button'
          type='button'
          onClick={toggleMonthList}
          aria-label='кнопка для выбора месяца из списка'
        >
          <div className='calendar-month-selector-text'>
            {monthName} {activeYear}
          </div>
          <CalendarSelectMonthIcon />
        </button>
        <ul className={isMonthListOppened ? 'calendar-month-selector-list' : 'calendar-month-selector-list__hidden'}>
          {monthesName.map((item, index) => (
            <li key={item}>
              <button
                className='calendar-month-selector-text calendar-month-selector-list-item'
                type='button'
                value={index}
                onClick={(e) => selectMonth(e)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='calendar-arrows-container'>
        <button
          data-test-id='button-prev-month'
          type='button'
          onClick={selectPrevMonth}
          className='calendar-month-button'
          aria-label='кнопка для выбора предыдущего месяца'
        >
          <CalendarMonthPrevIcon />
        </button>
        <button
          data-test-id='button-next-month'
          type='button'
          onClick={selectNextMonth}
          className='calendar-month-button'
          aria-label='кнопка для выбора слкдующего месяца'
        >
          <CalendarMonthNextIcon />
        </button>
      </div>
    </div>
  );
};
