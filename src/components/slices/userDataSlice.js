import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: {
		nickname: 'FloGus',
		fullName: 'Бреднев Евгений Сергеевич',
		birthDate: '02.02.1999',
		description: 'lazy cat',
	},
}

const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
	  editItem: (state, action) => {
		const {keyObj, word} = action.payload;
		state.userData[keyObj] = word;
	  }
	},
});

export default userDataSlice.reducer;

export const {editItem} = userDataSlice.actions