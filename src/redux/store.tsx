import {configureStore} from '@reduxjs/toolkit';
import {productDetailReducer} from './productDetailSlice';

export const store = configureStore({
  reducer: {
    productData: productDetailReducer,
  },
});
