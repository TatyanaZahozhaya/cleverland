/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ResetPasswordBodyType } from '../../../types';
import { Client } from '../../client';

export interface IResetPasswordInfo {
  resetPasswordInfo: number;
  resetPasswordLoadingStatus: 'loading' | 'idle' | 'error';
  resetPasswordError: any;
}

const initialState: IResetPasswordInfo = {
  resetPasswordInfo: 0,
  resetPasswordLoadingStatus: 'idle',
  resetPasswordError: '',
};

export const fetchResetPasswordInfo = createAsyncThunk(
  'resetPasswordInfo/fetchResetPasswordInfo',
  async (body: ResetPasswordBodyType, { rejectWithValue }) => {
    try {
      const { fetchResetPassword } = Client;
      const res = await fetchResetPassword(body);

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: 'resetPasswordInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResetPasswordInfo.pending, (state) => {
        state.resetPasswordLoadingStatus = 'loading';
      })
      .addCase(fetchResetPasswordInfo.fulfilled, (state, action) => {
        state.resetPasswordLoadingStatus = 'idle';
        state.resetPasswordInfo = action.payload;
      })
      .addCase(fetchResetPasswordInfo.rejected, (state, action) => {
        state.resetPasswordLoadingStatus = 'error';
        state.resetPasswordError = action.payload;
      });
  },
});

const { reducer } = resetPasswordSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
