/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RegistrationBodyType } from '../../../types';
import { Client } from '../../client';

export interface IRegistarationInfo {
  registrationInfo: number;
  registarationInfoLoadingStatus: 'loading' | 'idle' | 'error';
  registarationInfoError: any;
}

const initialState: IRegistarationInfo = {
  registrationInfo: 0,
  registarationInfoLoadingStatus: 'idle',
  registarationInfoError: '',
};

export const fetchRegistrationInfo = createAsyncThunk(
  'registrationInfo/fetchRegistration',
  async (body: RegistrationBodyType, { rejectWithValue }) => {
    try {
      const { fetchRegistration } = Client;
      const res = await fetchRegistration(body);

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const registrationSlice = createSlice({
  name: 'registrationInfo',
  initialState,
  reducers: {
    removeAuthInfo: (state) => {
      state.registrationInfo = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistrationInfo.pending, (state) => {
        state.registarationInfoLoadingStatus = 'loading';
      })
      .addCase(fetchRegistrationInfo.fulfilled, (state, action) => {
        state.registarationInfoLoadingStatus = 'idle';
        state.registrationInfo = action.payload;
      })
      .addCase(fetchRegistrationInfo.rejected, (state, action) => {
        state.registarationInfoLoadingStatus = 'error';
        state.registarationInfoError = action.payload;
      });
  },
});

const { actions, reducer } = registrationSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const { removeAuthInfo } = actions;
