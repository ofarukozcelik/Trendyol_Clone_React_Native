import {ProductState} from '../../models/data/productsState';
import {createSlice} from '@reduxjs/toolkit';
import {
  getAllProducts,
  getBestSellerProducts,
  getElectronicProducts,
  getJewelryProducts,
  getPopularProducts,
  getProductsDetail,
} from '../actions/productsActions';

const initialState: ProductState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  jewelry: [],
  electronics: [],
  singleProduct: {},
  pending: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavoriteOther: (state, action) => {
      const product = action.payload;

      //bestseller
      const existingProductBestSeller = state.bestSellerProducts.find(
        item => item.id === product?.id,
      );
      if (existingProductBestSeller) {
        existingProductBestSeller.isFavorite =
          !existingProductBestSeller.isFavorite;
      }
      //popular
      const existingProductPopular = state.popularProducts.find(
        item => item.id === product?.id,
      );
      if (existingProductPopular) {
        existingProductPopular.isFavorite = !existingProductPopular.isFavorite;
      }
      //jewelry
      const existingProductJewelry = state.jewelry.find(
        item => item.id === product?.id,
      );
      if (existingProductJewelry) {
        existingProductJewelry.isFavorite = !existingProductJewelry.isFavorite;
      }

      //electronics
      const existingProductElectronics = state.electronics.find(
        item => item.id === product?.id,
      );
      if (existingProductElectronics) {
        existingProductElectronics.isFavorite =
          !existingProductElectronics.isFavorite;
      }
      //allProduct
      const existingProductAll = state.products.find(
        item => item.id === product?.id,
      );
      if (existingProductAll) {
        existingProductAll.isFavorite = !existingProductAll.isFavorite;
      }
      //!  : DETAY SAYFASINDA FAVORITE TIKLAYINCA UNDEFINED DONUYO
      //singleProduct

      if (product?.id === state.singleProduct.id) {
        state.singleProduct.isFavorite = !state.singleProduct.isFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBestSellerProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.bestSellerProducts = action.payload;
      })
      .addCase(getBestSellerProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getPopularProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.popularProducts = action.payload;
      })
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getJewelryProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getJewelryProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.jewelry = action.payload);
      })
      .addCase(getJewelryProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })
      .addCase(getElectronicProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getElectronicProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.electronics = action.payload);
      })
      .addCase(getElectronicProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })

      .addCase(getProductsDetail.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getProductsDetail.fulfilled, (state, action) => {
        (state.pending = false), (state.singleProduct = action.payload);
      })
      .addCase(getProductsDetail.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })

      //all products
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.products = action.payload);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      });
  },
});

export const {addFavoriteOther} = productSlice.actions;

export default productSlice.reducer;
