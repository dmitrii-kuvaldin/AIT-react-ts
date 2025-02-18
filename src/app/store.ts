import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import authSlice from "../features/auth/authSlice";



export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    auth:authSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
