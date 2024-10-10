import {  createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";
import { logout } from "../auth/operations";

const INIT_STATE = {
  items: null,
  selectedCamper: null
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INIT_STATE,
  reducers: {
    setSelectedCamper:(state, action) =>{
      state.selectedCamper = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        console.log(action.payload)
        state.items = action.payload;
    })
},
});
export const campersReducer = contactsSlice.reducer;

export const {setSelectedCamper} = campersSlice.actions