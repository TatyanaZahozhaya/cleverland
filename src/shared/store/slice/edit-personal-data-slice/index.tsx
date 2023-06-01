/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { EditPersonalDataInputType, EditPersonalDataOutputSuccessType } from '../../../types';
import { Client } from '../../client';

import { editPersonalDataInitialState } from './edit-personal-data-initial-state';

export interface IEditPersonalDataInfo {
  editPersonalDataInfo: EditPersonalDataOutputSuccessType;
  editPersonalDataInfoLoadingStatus: 'loading' | 'idle' | 'error';
  editPersonalDataInfoError: any;
}

const initialState: IEditPersonalDataInfo = {
  editPersonalDataInfo: editPersonalDataInitialState,
  editPersonalDataInfoLoadingStatus: 'idle',
  editPersonalDataInfoError: '',
};

export const fetchEditPersonalDataInfo = createAsyncThunk(
  'editPersonalDataInfo/fetchEditPersonalDataInfo',
  async ({ body, userId }: EditPersonalDataInputType, { rejectWithValue }) => {
    try {
      const { fetchEditPersonalData } = Client;
      const res = await fetchEditPersonalData({ body, userId });

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const editPersonalDataSlice = createSlice({
  name: 'editPersonalDataInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditPersonalDataInfo.pending, (state) => {
        state.editPersonalDataInfoLoadingStatus = 'loading';
      })
      .addCase(fetchEditPersonalDataInfo.fulfilled, (state, action) => {
        state.editPersonalDataInfoLoadingStatus = 'idle';
        state.editPersonalDataInfo = action.payload;
      })
      .addCase(fetchEditPersonalDataInfo.rejected, (state, action) => {
        state.editPersonalDataInfoLoadingStatus = 'error';
        state.editPersonalDataInfoError = action.payload;
      });
  },
});

const { reducer } = editPersonalDataSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
