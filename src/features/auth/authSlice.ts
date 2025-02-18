import { createSlice } from '@reduxjs/toolkit';
import { loginAction, loginToken } from "./authActions";
import { IAuthState, IUser } from "./types";

const initialUser: IUser = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  accessToken: "",
  refreshToken: ""
};

const initialState: IAuthState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = initialUser;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.error = ''
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      })
      .addCase(loginToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.error = ''
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = initialUser;
        state.error = action.payload as string;
      });

  },
});

export default authSlice;

// ! не забываем экспортировать синхронные actions
export const { logoutUser } = authSlice.actions;
