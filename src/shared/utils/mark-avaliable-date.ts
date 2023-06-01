import { ChosenDataType, DateItemType } from '../types';

export const markAvaliableDate = (item: DateItemType, today: number, month: number, chosenData?: ChosenDataType) => {
  let dateStatus = false;

  if (item.day === today && item.weekDay !== 6 && item.weekDay !== 0) {
    dateStatus = true;
  }

  if (item.day === today + 1 && item.weekDay !== 6 && item.weekDay !== 0) {
    dateStatus = true;
  }

  if (item.day === today + 3 && item.weekDay === 1) {
    dateStatus = true;
  }
  if ((item.day === today + 2 || item.day === today + 1) && item.weekDay === 1) {
    dateStatus = true;
  }
  if (item.month !== month) {
    dateStatus = false;
  }

  if (chosenData && item.day === chosenData.day && item.month === chosenData.month && item.year === chosenData.year) {
    dateStatus = false;
  }

  return dateStatus;
};
