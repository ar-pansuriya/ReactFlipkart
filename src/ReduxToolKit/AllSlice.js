import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryPage: null,
  adminProduct:[]
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
    addAdminProduct:(state,action)=>{
      state.adminProduct=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addCategories, addCategoryPage,addAdminProduct } = AllSlice.actions;

export default AllSlice.reducer;
