/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BookingBodyType } from '../../../types';
import { Client } from '../../client';

export interface IChangeBookingInfo {
  changedBookingInfo: number;
  changedbookingInfoLoadingStatus: 'loading' | 'idle' | 'error';
  changedbookingInfoError: any;
}

const initialState: IChangeBookingInfo = {
  changedBookingInfo: 0,
  changedbookingInfoLoadingStatus: 'idle',
  changedbookingInfoError: '',
};


interface IChangeBookingInfoInput{
  body: BookingBodyType;
  bookingID: number

}
export const fetchChangeBookingInfo = createAsyncThunk(
  'changedBookingInfo/fetchChangeBookingInfo',
  async ({body, bookingID}: IChangeBookingInfoInput, { rejectWithValue }) => {
    try {
      const { fetchChangeBooking } = Client;
      const res = await fetchChangeBooking({body, bookingID});

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const changeBookingSlice = createSlice({
  name: 'changedBookingInfo',
  initialState,
  reducers: {
    clearChangeBookingSuccessAfterCloseToast: (state) => {
      state.changedBookingInfo = 0;
      state.changedbookingInfoLoadingStatus = 'idle'
    },
    clearChangeBookingErrorAfterCloseToast: (state) => {
      state.changedbookingInfoError = '';
      state.changedbookingInfoLoadingStatus = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangeBookingInfo.pending, (state) => {
        state.changedbookingInfoLoadingStatus = 'loading';
      })
      .addCase(fetchChangeBookingInfo.fulfilled, (state, action) => {
        state.changedbookingInfoLoadingStatus = 'idle';
        state.changedBookingInfo = action.payload;
      })
      .addCase(fetchChangeBookingInfo.rejected, (state, action) => {
        state.changedbookingInfoLoadingStatus = 'error';
        state.changedbookingInfoError = action.payload;
      });
  },
});

const {actions, reducer } = changeBookingSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const {clearChangeBookingSuccessAfterCloseToast, clearChangeBookingErrorAfterCloseToast } = actions;