/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthorizationBodyType, RegistrationOutputSuccessType } from '../../../types';
import { Client } from '../../client';

import { authorizationInfoInitialState } from './authorization-info-initial-state';

export interface IAuthorizationInfo {
  authorizationInfo: RegistrationOutputSuccessType;
  authorisationInfoLoadingStatus: 'loading' | 'idle' | 'error';
  authorisationInfoError: any;
}

const initialState: IAuthorizationInfo = {
  authorizationInfo: authorizationInfoInitialState,
  authorisationInfoLoadingStatus: 'idle',
  authorisationInfoError: '',
};

export const fetchAuthorizationInfo = createAsyncThunk(
  'authorizationInfo/fetchAuthorizationInfo',
  async (body: AuthorizationBodyType, { rejectWithValue }) => {
    try {
      const { fetchAuthorization } = Client;
      const res = await fetchAuthorization(body);

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const authorizationSlice = createSlice({
  name: 'authorizationInfo',
  initialState,
  reducers: {
    removeAuthInfo: (state) => {
      state.authorizationInfo = authorizationInfoInitialState;
    },
    removeAuthError: (state) => {
      state.authorisationInfoError = '';
      state.authorisationInfoLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorizationInfo.pending, (state) => {
        state.authorisationInfoLoadingStatus = 'loading';
      })
      .addCase(fetchAuthorizationInfo.fulfilled, (state, action) => {
        state.authorisationInfoLoadingStatus = 'idle';
        state.authorizationInfo = action.payload;
      })
      .addCase(fetchAuthorizationInfo.rejected, (state, action) => {
        state.authorisationInfoLoadingStatus = 'error';
        state.authorisationInfoError = action.payload;
      });
  },
});

const { actions, reducer } = authorizationSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const { removeAuthInfo , removeAuthError} = actions;
