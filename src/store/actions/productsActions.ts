import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verbs';
import { PRODUCTS_URLS } from '../../service/urls';
import { Params } from '../../models/data/productsState';

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.BEST_SELLER_PRODUCTS,
    );

    return response.data;
  },
);

const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URLS.POPULAR_PRODUCTS);

    return response.data;
  },
);

const getJewelryProducts = createAsyncThunk(
  'products/getJewelryProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URLS.JEWELRY_PRODUCTS);

    return response.data;
  },
);

const getElectronicProducts = createAsyncThunk(
  'products/getElectronicProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.ELECTRONICS_PRODUCTS,
    );

    return response.data;
  },
);

const getProductsDetail = createAsyncThunk(
  'products/getProductsDetail',
  async (params: Params) => {
    const productUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;

    const response = await getRequest(params, productUrl);

    return response.data;
  },
);

const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: Params) => {
    console.log('params ==>', params);

    const selectedCategoryUrl =
      params.category == 'All'
        ? PRODUCTS_URLS.ALL_PRODUCTS
        : `${PRODUCTS_URLS.CATEGORY_PRODUCTS}/${params.category}`;


    const response = await getRequest(params, selectedCategoryUrl);

    return response.data;
  },
);
export {
  getBestSellerProducts,
  getPopularProducts,
  getJewelryProducts,
  getElectronicProducts,
  getProductsDetail,
  getAllProducts,
};
