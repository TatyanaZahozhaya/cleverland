export const getDateObject = (str: string) => {
  const date = new Date(str);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateObject = { day, month, year };

  return dateObject;
};
