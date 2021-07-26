import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    login: "theFloGus",
    password: "12345678",
  },
  isLoggedIn: {
    isLogged: false,
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn.isLogged = !state.isLoggedIn.isLogged;
    },
  },
});

export default loginSlice.reducer;

export const { toggleLoggedIn } = loginSlice.actions;
