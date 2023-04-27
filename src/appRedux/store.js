import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  // add middleware here if needed
});

export default store;
