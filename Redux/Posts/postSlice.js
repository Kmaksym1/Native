import { createPost, getPosts } from "./postOperations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  posts: [],
  loading: false,
  isNullPosts: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
        .addCase(getPosts.fulfilled, (state, action) => {
        state.posts=action.payload;
        state.loading = false;
      });

    // .addCase(login.rejected, (state, action) => {
    //   state.error = action.error.message;
    // })
  },
});
export const postsReducer = postsSlice.reducer;
