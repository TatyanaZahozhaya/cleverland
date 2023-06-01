import { fetchAllBooksInfo,fetchOneBookInfo, useAppDispatch } from '../store';

export const useUpdateMainData = (bookID: string| undefined) => {
    const dispatch = useAppDispatch();

    if (bookID) {
        dispatch(fetchOneBookInfo(bookID));
      } else {
        dispatch(fetchAllBooksInfo());
      }
}