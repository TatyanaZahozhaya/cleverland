import { DateItemType } from '../types';

import { markAvaliableDate } from './mark-avaliable-date';

export const addCalendarItemClass = (
  item: DateItemType,
  today: number,
  activeMonth: number,
  currentMonth: number,
) => {
  const avaliable = markAvaliableDate(item, today, currentMonth);

  let calendarItemClass = 'calendar-table-item calendar-table-number-item';

  if (avaliable && item.day !== today) {
    calendarItemClass += ' calendar-table-number-item_avaliable';
  }

  if ((item.weekDay === 0 || item.weekDay === 6) && item.month === activeMonth) {
    calendarItemClass += ' calendar-table-number-item_weekend';
  }

  if (item.day === today && item.month === currentMonth) {
    calendarItemClass += ' calendar-table-number-item_today';
  }

  return calendarItemClass;
};
