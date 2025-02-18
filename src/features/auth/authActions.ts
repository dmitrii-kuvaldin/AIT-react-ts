import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// * запрос за данными о юзере с передаваемыми значениями из формы
export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (userData: { username: string; password: string; }, thunkAPI) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', userData);
      // сохраняем токен для последующего запроса в браузерное хранилище localStorage
      // данные в нем не будут обновляться после перезагрузки страницы
      localStorage.setItem('token', response.data.accessToken)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginToken = createAsyncThunk(
  'auth/loginToken',
  async (token:string, thunkAPI) => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


