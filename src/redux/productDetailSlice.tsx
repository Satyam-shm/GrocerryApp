import {createSlice} from '@reduxjs/toolkit';

const productDetailSlice = createSlice({
  name: 'productDetailSlice',
  initialState: {
    productData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const {setData} = productDetailSlice.actions;

export const productDetailReducer = productDetailSlice.reducer;
