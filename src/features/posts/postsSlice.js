import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning redux toolkit", content: "Dummy content" },
  { id: "2", title: "Slices...", content: "CreateSlice from redux toolkit" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },                                               //reduxToolkit willl not mutate this inside createSlice immer.js
      prepare(title, content) {
        return { payload: {id:nanoid(), title, content }};
      },
    },
  },
});
export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
