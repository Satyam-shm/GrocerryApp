import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WishlistItem {
  id: string;
  name: string;
}

interface WishlistState {
  wishlistData: WishlistItem[];
}

const initialState: WishlistState = {
  wishlistData: [],
};

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlistItem: (state, action: PayloadAction<WishlistItem>) => {
      state.wishlistData.push(action.payload);
    },
    removeWishlistItem: (state, action: PayloadAction<string>) => {
      state.wishlistData = state.wishlistData.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addWishlistItem, removeWishlistItem} = WishlistSlice.actions;

export const WishlistReducer = WishlistSlice.reducer;
