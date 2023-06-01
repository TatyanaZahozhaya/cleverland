export const getDateISOFormat = (year: number, month: number, day: number) => {
  const dateUTC = new Date(Date.UTC(year, month, day));

  const dateISO = dateUTC.toISOString();

  return dateISO;
};
