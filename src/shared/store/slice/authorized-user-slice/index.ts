/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthorizedUserInfoOutputSuccessType } from '../../../types';
import { Client } from '../../client';

import { authUserInitialState } from './auth-user-initial-state';

export interface IAuthorizedUser {
  authUserInfo: AuthorizedUserInfoOutputSuccessType;
  authUserInfoLoadingStatus: 'loading' | 'idle' | 'error';
  authUserInfoError: any;
}

const initialState: IAuthorizedUser = {
  authUserInfo: authUserInitialState,
  authUserInfoLoadingStatus: 'idle',
  authUserInfoError: '',
};

export const fetchAuthUserInfo = createAsyncThunk('authUserInfo/fetchAuthUserInfo', async () => {
  try {
    const { fetchAuthorizedUser } = Client;
    const response = await fetchAuthorizedUser();

    if (!response) {
      throw new Error('Server Error');
    }

    return response;
  } catch (error: any) {
    return rejected(error.message);
  }
});

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthUserInfo.pending, (state) => {
        state.authUserInfoLoadingStatus = 'loading';
      })
      .addCase(fetchAuthUserInfo.fulfilled, (state, action) => {
        state.authUserInfoLoadingStatus = 'idle';
        state.authUserInfo = action.payload;
      })
      .addCase(fetchAuthUserInfo.rejected, (state, action) => {
        state.authUserInfoLoadingStatus = 'error';
        state.authUserInfoError = action.payload;
      });
  },
});

const { reducer } = allBooksSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;

function rejected(message: any): any {
  throw new Error(message);
}
