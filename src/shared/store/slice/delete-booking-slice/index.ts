/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Client } from '../../client';

export interface IDeleteBookingInfo {
  deletedBookingInfo: number;
  deletedbookingInfoLoadingStatus: 'loading' | 'idle' | 'error';
  deletedbookingInfoError: any;
}

const initialState: IDeleteBookingInfo = {
  deletedBookingInfo: 0,
  deletedbookingInfoLoadingStatus: 'idle',
  deletedbookingInfoError: '',
};

export const fetchDeleteBookingInfo = createAsyncThunk(
  'deletedBookingInfo/fetchDeleteBookingInfo',
  async (bookingID: number, { rejectWithValue }) => {
    try {
      const { fetchDeleteBooking } = Client;
      const res = await fetchDeleteBooking(bookingID);

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const deleteBookingSlice = createSlice({
  name: 'deletedBookingInfo',
  initialState,
  reducers: {
    clearDeleteBookingSuccessAfterCloseToast: (state) => {
      state.deletedBookingInfo = 0;
      state.deletedbookingInfoLoadingStatus = 'idle';
    },
    clearDeleteBookingErrorAfterCloseToast: (state) => {
      state.deletedbookingInfoError = '';
      state.deletedbookingInfoLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteBookingInfo.pending, (state) => {
        state.deletedbookingInfoLoadingStatus = 'loading';
      })
      .addCase(fetchDeleteBookingInfo.fulfilled, (state, action) => {
        state.deletedbookingInfoLoadingStatus = 'idle';
        state.deletedBookingInfo = action.payload;
      })
      .addCase(fetchDeleteBookingInfo.rejected, (state, action) => {
        state.deletedbookingInfoLoadingStatus = 'error';
        state.deletedbookingInfoError = action.payload;
      });
  },
});

const { actions, reducer } = deleteBookingSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const { clearDeleteBookingSuccessAfterCloseToast, clearDeleteBookingErrorAfterCloseToast } = actions;
