import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL, PRODUCTS_URLS } from '../../service/urls';
import { getRequest } from '../../service/verbs';


export const fetchProducts = createAsyncThunk(
  'search/fetchProducts',
  async () => {
    try {
      const response = await getRequest({}, PRODUCTS_URLS.ALL_PRODUCTS);
      console.log('search action response', response.data);

      return response.data;
    } catch (error) {
      return console.log('search action error: ' + error);
    }
  },
);
