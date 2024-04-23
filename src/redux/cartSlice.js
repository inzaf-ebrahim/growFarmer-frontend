import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: null,
  },
  reducers: {
    setCartId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setCartId } = cartSlice.actions;
export const selectCartId = (state) => state.cart.id;
export default cartSlice.reducer;
