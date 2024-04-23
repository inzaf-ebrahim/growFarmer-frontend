import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import cartSlice from "./cartSlice";

export const Store = configureStore({
  reducer: {
    jwt: tokenSlice,
    cart: cartSlice,
  },
});
