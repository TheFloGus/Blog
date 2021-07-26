import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.posts.unshift(action.payload);
    },
    deleteItem: (state, action) => {
      state.posts = state.posts.filter(
        (item, index) => action.payload !== index
      );
    },
    editItem: (state, action) => {
      const { index, value } = action.payload;
      state.posts[index].text = value;
    },
  },
});

export default postSlice.reducer;

export const { addItem, deleteItem, editItem } = postSlice.actions;
