import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "jwt",
  initialState: {
    Token: null,
  },
  reducers:{
    setToken:(state,actions)=>{
        state.Token=actions.payload
    }
  }
});

export const {setToken}=tokenSlice.actions
export const selectToken = (state) => state.jwt.Token;
export default tokenSlice.reducer