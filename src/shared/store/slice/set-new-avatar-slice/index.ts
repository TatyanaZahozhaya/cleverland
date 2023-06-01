/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ChangePictureOutputSuccessType, FetchNewAvatarType } from '../../../types';
import { Client } from '../../client';

import { setNewAvatarInitialState } from './set-new-avatar-initial-state';

export interface ISetNewAvatarInfo {
  setNewAvatarInfo: ChangePictureOutputSuccessType;
  setNewAvatarInfoLoadingStatus: 'loading' | 'idle' | 'error';
  setNewAvatarInfoError: any;
}

const initialState: ISetNewAvatarInfo = {
  setNewAvatarInfo: setNewAvatarInitialState,
  setNewAvatarInfoLoadingStatus: 'idle',
  setNewAvatarInfoError: '',
};

export const fetchSetNewAvatarInfo = createAsyncThunk(
  'setNewAvatarInfo/fetchSetNewAvatarInfo',
  async ({ files, userId }: FetchNewAvatarType, { rejectWithValue }) => {
    try {
      const { fetchNewAvatar } = Client;
      const res = await fetchNewAvatar({ files, userId });

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const setNewAvatarSlice = createSlice({
  name: 'setNewAvatarInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSetNewAvatarInfo.pending, (state) => {
        state.setNewAvatarInfoLoadingStatus = 'loading';
      })
      .addCase(fetchSetNewAvatarInfo.fulfilled, (state, action) => {
        state.setNewAvatarInfoLoadingStatus = 'idle';
        state.setNewAvatarInfo = action.payload;
      })
      .addCase(fetchSetNewAvatarInfo.rejected, (state, action) => {
        state.setNewAvatarInfoLoadingStatus = 'error';
        state.setNewAvatarInfoError = action.payload;
      });
  },
});

const { reducer } = setNewAvatarSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
