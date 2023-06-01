/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { EditCommentDataInputType } from '../../../types';
import { Client } from '../../client';

export interface IEditCommentInfo {
  editCommentInfo: number;
  editCommentInfoLoadingStatus: 'loading' | 'idle' | 'error';
  editCommentInfoError: any;
}

const initialState: IEditCommentInfo = {
  editCommentInfo: 0,
  editCommentInfoLoadingStatus: 'idle',
  editCommentInfoError: '',
};

export const fetchEditCommentInfo = createAsyncThunk(
  'editCommentInfo/fetchEditCommentInfo',
  async ({ body, commentId }: EditCommentDataInputType, { rejectWithValue }) => {
    try {
      const { fetchEditComment } = Client;
      const res = await fetchEditComment({ body, commentId });

      return res.status;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  }
);

const editCommentSlice = createSlice({
  name: 'editCommentInfo',
  initialState,
  reducers: {
    resetEditCommentState: (state) => {
      state.editCommentInfo = 0;
      state.editCommentInfoError = '';
      state.editCommentInfoLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditCommentInfo.pending, (state) => {
        state.editCommentInfoLoadingStatus = 'loading';
      })
      .addCase(fetchEditCommentInfo.fulfilled, (state, action) => {
        state.editCommentInfoLoadingStatus = 'idle';
        state.editCommentInfo = action.payload;
      })
      .addCase(fetchEditCommentInfo.rejected, (state, action) => {
        state.editCommentInfoLoadingStatus = 'error';
        state.editCommentInfoError = action.payload;
      });
  },
});

const { actions, reducer } = editCommentSlice;

export const { resetEditCommentState } = actions;

// eslint-disable-next-line import/no-default-export
export default reducer;
