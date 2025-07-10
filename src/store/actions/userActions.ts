import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_URLS } from '../../service/urls';
import { getRequest } from '../../service/verbs';

const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (params: { id: number }) => {
    const userUrl = `${USER_URLS.USERS}/${params.id}`;
    const response = await getRequest(params, userUrl);
    console.log('getUserInfo action ==>', response.data);
    return response.data;
  },
);

export { getUserInfo };
