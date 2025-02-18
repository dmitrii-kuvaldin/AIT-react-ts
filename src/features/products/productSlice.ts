import { createSlice } from '@reduxjs/toolkit';
import { loadLimitProducts, loadProducts } from "./productsActions";
import { IProductState } from "./types";

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// логика простых запросов
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      })
      /// логика лимитированных запросов
      .addCase(loadLimitProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadLimitProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(loadLimitProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productSlice;
// export const { } = productSlice.actions
