/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BookingBodyType } from '../../../types';
import { Client } from '../../client';

export interface IBookingInfo {
  bookingInfo: number;
  bookingInfoLoadingStatus: 'loading' | 'idle' | 'error';
  bookingInfoError: any;
}

const initialState: IBookingInfo = {
  bookingInfo: 0,
  bookingInfoLoadingStatus: 'idle',
  bookingInfoError: '',
};

export const fetchBookingInfo = createAsyncThunk(
  'bookingInfo/fetchBookingInfo',
  async (body: BookingBodyType, { rejectWithValue }) => {
    try {
      const { fetchBooking } = Client;
      const res = await fetchBooking(body);

     return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const bookingSlice = createSlice({
  name: 'bookingInfo',
  initialState,
  reducers: {
    clearBookingSuccessAfterCloseToast: (state) => {
      state.bookingInfo = 0;
      state.bookingInfoLoadingStatus = 'idle';
    },
    clearBookingErrorAfterCloseToast: (state) => {
      state.bookingInfoError = '';
      state.bookingInfoLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingInfo.pending, (state) => {
        state.bookingInfoLoadingStatus = 'loading';
      })
      .addCase(fetchBookingInfo.fulfilled, (state, action) => {
        state.bookingInfoLoadingStatus = 'idle';
        state.bookingInfo = action.payload;

      })
      .addCase(fetchBookingInfo.rejected, (state, action) => {
        state.bookingInfoLoadingStatus = 'error';
        state.bookingInfoError = action.payload;
      });
  },
});

const { actions, reducer } = bookingSlice;

export const { clearBookingSuccessAfterCloseToast, clearBookingErrorAfterCloseToast } = actions;
// eslint-disable-next-line import/no-default-export
export default reducer;

