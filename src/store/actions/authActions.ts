import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from '../../service/verbs';
import { AUTH_URLS } from '../../service/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  console.log(params);
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
    if (response.data && response.data.token) {

      await AsyncStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    console.log('userLogin error', error);
  }
});

const userLogOut = createAsyncThunk('auth/userLogOut', async () => {
  try {

    await AsyncStorage.removeItem('token');
    return null;
  } catch (error) {
    console.log('userLogout error', error);
  }
});

export { userLogin, userLogOut };
