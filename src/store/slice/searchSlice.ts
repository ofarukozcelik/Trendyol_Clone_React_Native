import {createSlice} from '@reduxjs/toolkit';
import {SearchState} from '../../models/data/searchState';
import {fetchProducts} from '../actions/searchActions';

const initialState: SearchState = {
  products: [],
  filteredProducts: [],
  status: 'idle',
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addFavoriteSearch: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        item => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.isFavorite = !existingProduct.isFavorite;
      }
    },
    filterAllProducts: (state, action) => {
      const query = action.payload.toLowerCase();

      state.filteredProducts = (state.products || []).filter(
        product =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      );
      console.log(state.products);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.filteredProducts = action.payload; // İlk başta tüm ürünleri gösterelim
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Bir hata oluştu';
      });
  },
});
export const {filterAllProducts, addFavoriteSearch} = searchSlice.actions;
export default searchSlice.reducer;
