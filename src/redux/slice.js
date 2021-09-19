import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      console.log(`state is ${JSON.stringify(state)}`);
    },
    increaseLikes(state, action) {
      state.posts[action.payload].likes += 1;
    }
  }
});

export const { addPost, increaseLikes } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
