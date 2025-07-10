import {createSlice} from '@reduxjs/toolkit';
import {FavoriteState} from '../../models/data/favoriteState';

const initialState: FavoriteState = {
  favorites: [],
  pending: false,
  error: null,
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.favorites.find(
        item => item.id === product?.id,
      );
      if (existingProduct) {
        existingProduct.isFavorite = false;
        state.favorites = state.favorites.filter(
          item => item.id !== product?.id,
        );
      } else {
        state.favorites.push({...product, isFavorite: true});
      }
    },
  },
});

export const {addFavoriteProduct} = favoriteSlice.actions;
export default favoriteSlice.reducer;
