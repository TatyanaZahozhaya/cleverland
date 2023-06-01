/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CommentBodyType } from '../../../types';
import { Client } from '../../client';

export interface IAddCommentInfo {
  addCommentInfo: number;
  addCommentInfoLoadingStatus: 'loading' | 'idle' | 'error';
  addCommentInfoError: any;
}

const initialState: IAddCommentInfo = {
  addCommentInfo: 0,
  addCommentInfoLoadingStatus: 'idle',
  addCommentInfoError: '',
};

export const fetchAddCommentInfo = createAsyncThunk(
  'addCommentInfo/fetchAddCommentInfo',
  async (body: CommentBodyType, { rejectWithValue }) => {
    try {
      const { fetchAddComment } = Client;
      const res = await fetchAddComment(body);

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const addCommentSlice = createSlice({
  name: 'addCommentInfo',
  initialState,
  reducers: {
    resetAddCommentState: (state) => {
      state.addCommentInfo = 0;
      state.addCommentInfoError = '';
      state.addCommentInfoLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddCommentInfo.pending, (state) => {
        state.addCommentInfoLoadingStatus = 'loading';
      })
      .addCase(fetchAddCommentInfo.fulfilled, (state, action) => {
        state.addCommentInfoLoadingStatus = 'idle';
        state.addCommentInfo = action.payload;
      })
      .addCase(fetchAddCommentInfo.rejected, (state, action) => {
        state.addCommentInfoLoadingStatus = 'error';
        state.addCommentInfoError = action.payload;
      });
  },
});

const { actions, reducer } = addCommentSlice;

export const { resetAddCommentState } = actions;

// eslint-disable-next-line import/no-default-export
export default reducer;
