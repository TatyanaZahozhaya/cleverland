/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { EachBookInfoOutputSuccessType } from '../../../types';
import { Client } from '../../client';

import { oneBookInfoInitialState } from './one-book-info-initial-state';

export interface IOneBookInfo {
  oneBookInfo: EachBookInfoOutputSuccessType;
  oneBookInfoLoadingStatus: 'loading' | 'idle' | 'error';
  oneBookInfoError: any;
}

const initialState: IOneBookInfo = {
  oneBookInfo: oneBookInfoInitialState,
  oneBookInfoLoadingStatus: 'idle',
  oneBookInfoError: '',
};

export const fetchOneBookInfo = createAsyncThunk(
  'oneBookInfo/fetchOneBookInfo',
  async (id: string, { rejectWithValue }) => {
    try {
      const { fetchOneBook } = Client;

      return await fetchOneBook(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const oneBookSlice = createSlice({
  name: 'oneBookInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneBookInfo.pending, (state) => {
        state.oneBookInfoLoadingStatus = 'loading';
      })
      .addCase(fetchOneBookInfo.fulfilled, (state, action) => {
        state.oneBookInfoLoadingStatus = 'idle';
        state.oneBookInfo = action.payload;
      })
      .addCase(fetchOneBookInfo.rejected, (state, action) => {
        state.oneBookInfoLoadingStatus = 'error';
        state.oneBookInfoError = action.payload;
      });
  },
});

const { reducer } = oneBookSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
