import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const articleSlice = createSlice({
  name: "article",
  initialState: { articles: [] },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice;
