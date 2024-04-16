import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";

export const Store = configureStore({
  reducer: {
    jwt: tokenSlice,
  },
});
