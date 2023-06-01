const getNumberOfDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

const getWeekDay = (num: number) => {
  const week = Math.floor(num / 7);

  return num - week * 7;
};

const getMonthDays = (daysInMonth: number, month: number, year: number, firstDay: number) => {
  const arr = [];

  for (let i = 0; i < daysInMonth; i++) {
    arr[i] = { day: i + 1, month, year, weekDay: getWeekDay(firstDay + i) };
  }

  return arr;
};
const getPrevMonthDays = (daysInMonth: number, numberOfDays: number) => {
  const arr = [];

  for (let i = 0; i < numberOfDays; i++) {
    arr[i] = { day: daysInMonth - numberOfDays + 1 + i, month: 20, year: 20, weekDay: 1 + i };
  }

  return arr;
};

export const getDatesToDisplayInCalendar = (activeYear: number, activeMonth: number) => {
  const currentMonth = new Date(activeYear, activeMonth);
  const prevMonth = activeMonth === 0 ? 11 : activeMonth - 1;
  const prevMonthYear = activeMonth === 0 ? activeYear - 1 : activeYear;
  const nextMonth = activeMonth === 11 ? 0 : activeMonth + 1;
  const nextMonthYear = activeMonth === 11 ? activeYear + 1 : activeYear;
  const daysInCurrentMonth = getNumberOfDaysInMonth(activeMonth, activeYear);
  const firstDayCurrentMonthWeekDay = currentMonth.getDay();
  const lastDayCurrentMonthWeekDay = new Date(activeYear, activeMonth, daysInCurrentMonth).getDay();
  const currentMonthDates = getMonthDays(daysInCurrentMonth, activeMonth, activeYear, firstDayCurrentMonthWeekDay);

  const daysInPrevMonth = getNumberOfDaysInMonth(prevMonth, prevMonthYear);
  const numberOfDaysFromPrevMonth = firstDayCurrentMonthWeekDay === 0 ? 6 : firstDayCurrentMonthWeekDay - 1;

  const numberOfDaysFromNextMonth = 7 - lastDayCurrentMonthWeekDay;

  const prevMonthDates =
    firstDayCurrentMonthWeekDay === 1 ? [] : getPrevMonthDays(daysInPrevMonth, numberOfDaysFromPrevMonth);

  const nextMonthDates =
    lastDayCurrentMonthWeekDay === 0
      ? []
      : getMonthDays(numberOfDaysFromNextMonth, nextMonth, nextMonthYear, lastDayCurrentMonthWeekDay + 1);

  const allDays = [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];



  return allDays;
};
