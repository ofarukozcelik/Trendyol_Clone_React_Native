import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slice/productSlice';
import { categoriesSlice } from './slice/categoriesSlice';
import { cartSlice } from './slice/cartSlice';
import { authSlice } from './slice/authSlice';
import { favoriteSlice } from './slice/favoriteSlice';
import { userSlice } from './slice/userSlice';
import { searchSlice } from './slice/searchSlice';

export const store = configureStore({
  reducer: {
    productsStr: productSlice.reducer,
    categoriesStr: categoriesSlice.reducer,
    cartStr: cartSlice.reducer,
    authStr: authSlice.reducer,
    favoritesStr: favoriteSlice.reducer,
    userStr: userSlice.reducer,
    searchStr: searchSlice.reducer,
  },
  middleware: getDefauldMiddleware =>
    getDefauldMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
