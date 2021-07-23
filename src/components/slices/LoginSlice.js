import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: {
		login: 'theFloGus',
		password: '12345678'
	},
	isLoggedIn: false,
}

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
	  toggleLoggedIn: (state) => {
		state.isLoggedIn = !state.isLoggedIn;
	  },
	},
});

export default loginSlice.reducer;

export const {toggleLoggedIn} = loginSlice.actions