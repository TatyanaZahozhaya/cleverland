/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BooksGenresType } from '../../../types';
import { Client } from '../../client';

export interface IBooksCategories {
  booksCategories: BooksGenresType[];
  categoriesLoadingStatus: 'loading' | 'idle' | 'error';
  categoriesError: any;
}

const initialState: IBooksCategories = {
  booksCategories: [],
  categoriesLoadingStatus: 'idle',
  categoriesError: '',
};

export const fetchBooksCategories = createAsyncThunk('booksCategories/fetchBooksCategories', async () => {
  try {
    const { fetchCategories } = Client;

    return await fetchCategories();
  } catch (error: any) {
    return rejected(error.message);
  }
});

const booksCategoriesSlice = createSlice({
  name: 'booksCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksCategories.pending, (state) => {
        state.categoriesLoadingStatus = 'loading';
      })
      .addCase(fetchBooksCategories.fulfilled, (state, action) => {
        state.categoriesLoadingStatus = 'idle';
        state.booksCategories = action.payload;
      })
      .addCase(fetchBooksCategories.rejected, (state, action) => {
        state.categoriesLoadingStatus = 'error';
        state.categoriesError = action.payload;
      });
  },
});

const { reducer } = booksCategoriesSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;

function rejected(message: any): any {
  throw new Error(message);
}
