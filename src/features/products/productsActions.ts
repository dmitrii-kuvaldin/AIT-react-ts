import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// запрос с параметром
export const loadLimitProducts = createAsyncThunk(
  'products/loadLimitProducts',
  async (limit: string, thunkAPI) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
