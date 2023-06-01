/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ForgotPasswordBodyType } from '../../../types';
import { Client } from '../../client';

export interface IForgotPassword {
  forgotPasswordInfo: number;
  forgotPasswordLoadingStatus: 'loading' | 'idle' | 'error';
  forgotPasswordError: any;
}

const initialState: IForgotPassword = {
  forgotPasswordInfo: 0,
  forgotPasswordLoadingStatus: 'idle',
  forgotPasswordError: '',
};

export const fetchForgotPasswordInfo = createAsyncThunk(
  'forgotPasswordInfo/fetchPassword',
  async (body: ForgotPasswordBodyType, { rejectWithValue }) => {
    try {
      const { fetchForgotPassword } = Client;
      const res = await fetchForgotPassword(body);
      
      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const passwordSlice = createSlice({
  name: 'forgotPasswordInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForgotPasswordInfo.pending, (state) => {
        state.forgotPasswordLoadingStatus = 'loading';
      })
      .addCase(fetchForgotPasswordInfo.fulfilled, (state, action) => {
        state.forgotPasswordLoadingStatus = 'idle';
        state.forgotPasswordInfo = action.payload;
      })
      .addCase(fetchForgotPasswordInfo.rejected, (state, action) => {
        state.forgotPasswordLoadingStatus = 'error';
        state.forgotPasswordError = action.payload;
      });
  },
});

const { reducer } = passwordSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
