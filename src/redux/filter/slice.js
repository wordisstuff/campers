import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {name:''
};

const filtersSlice = createSlice({
  name: "campers",
  initialState: INIT_STATE,
  reducers: {
      filterCampers(state, action) {
          state.name = action.payload;
    },
  },
});

export const { filterCampers} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;