/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface IFilterState {
    categoryFilter: string;
    bookNameFilter: string;
    ratingFromHighToLowFilter: boolean;
}

const initialState: IFilterState = {
    categoryFilter: 'все книги',
    bookNameFilter: '',
    ratingFromHighToLowFilter: true,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        resetCategoryFilter: (state) => {
            state.categoryFilter = initialState.categoryFilter;
        },
        changeCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        },
        changeBookNameFilter: (state, action) => {
            state.bookNameFilter = action.payload;
        },
        changeRatingFilter: (state, action) => {
            state.ratingFromHighToLowFilter = action.payload;
        },
    },
});

const { actions, reducer } = filterSlice;

// eslint-disable-next-line import/no-default-export
export default reducer;
export const { changeCategoryFilter, changeBookNameFilter,changeRatingFilter ,resetCategoryFilter} = actions;
