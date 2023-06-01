import { createSlice } from '@reduxjs/toolkit';

export interface IViewState {
    view: string;
}

const initialState: IViewState = {
    view: 'window',
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setAppView: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.view = action.payload;
        },
    },
});

const { actions, reducer } = viewSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const { setAppView } = actions;