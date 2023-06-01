import { getDateISOFormat } from './get-date-iso-format';

export const getTodayISO = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const todayISO = getDateISOFormat(year, month, day);

  return todayISO;
};
