import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryPage: null,
};

export const AllSlice = createSlice({
  name: 'AllSlice',
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload; // Ensure payload is serializable
    },
    addCategoryPage: (state, action) => {
      state.categoryPage = action.payload; // Ensure payload is serializable
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategories, addCategoryPage } = AllSlice.actions;

export default AllSlice.reducer;
