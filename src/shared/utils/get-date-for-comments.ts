export const getDateForComments = (str: string) => {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const newDateFormat = date.toLocaleDateString('ru-RU', options);
  
    return newDateFormat;
  };