import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {productDetailReducer} from './productDetailSlice';
import {WishlistReducer} from './WishlistSlice';

const persistConfig = {
  key: '@GrocceryApp',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  productData: productDetailReducer,
  wishlistData: WishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
