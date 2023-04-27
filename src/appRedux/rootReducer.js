import { combineReducers } from "@reduxjs/toolkit";
import articleSlice from "../Pages/redux/articles/reducer";

const rootReducer = combineReducers({
  article: articleSlice.reducer,
});

export default rootReducer;
