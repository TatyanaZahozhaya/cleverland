/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BooksInfoOutputSuccessType } from '../../../types';
import { Client } from '../../client';

export interface IAllBooks {
  allBooks: BooksInfoOutputSuccessType;
  allBooksLoadingStatus: 'loading' | 'idle' | 'error';
  allBooksError: any;
  bookToOpen: string;
  bookIDToOpen: number;
}

const initialState: IAllBooks = {
  allBooks: [],
  allBooksLoadingStatus: 'idle',
  allBooksError: '',
  bookToOpen: '',
  bookIDToOpen: 0,
};

export const fetchAllBooksInfo = createAsyncThunk('allBooks/fetchAllBooks', async () => {
  try {
    const { fetchAllBooks } = Client;
    const response = await fetchAllBooks();

    if (!response) {
      throw new Error('Server Error');
    }

    return response;
  } catch (error: any) {
    return rejected(error.message);
  }
});

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    setBookToOpenPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.bookToOpen = action.payload;
    },
    setBookIDToOpenPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.bookIDToOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooksInfo.pending, (state) => {
        state.allBooksLoadingStatus = 'loading';
      })
      .addCase(fetchAllBooksInfo.fulfilled, (state, action) => {
        state.allBooksLoadingStatus = 'idle';
        state.allBooks = action.payload;
      })
      .addCase(fetchAllBooksInfo.rejected, (state, action) => {
        state.allBooksLoadingStatus = 'error';
        state.allBooksError = action.payload;
      });
  },
});

const { actions, reducer } = allBooksSlice;

export const { setBookToOpenPage, setBookIDToOpenPage } = actions;

// eslint-disable-next-line import/no-default-export
export default reducer;

function rejected(message: any): any {
  throw new Error(message);
}
