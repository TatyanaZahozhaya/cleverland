export const getDayAndMonth = (str: string) => {
  const dateUTC = new Date(str);
  const day = dateUTC.getDate();
  const month = dateUTC.getMonth() + 1;
  const monthFormat = month.toString.length === 1 ? `0${month}` : `${month}`;
  const date = `${day}.${monthFormat}`;

  return date;
};
