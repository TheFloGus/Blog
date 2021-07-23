import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../components/slices/PostsSlice';
import userDataSlice from '../components/slices/userDataSlice';
import loginSlice from '../components/slices/LoginSlice';


export const store = configureStore({
  reducer: {
    posts: postsSlice,
	userData: userDataSlice,
	login: loginSlice
  },
});