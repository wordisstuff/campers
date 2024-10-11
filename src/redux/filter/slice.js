import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {location:''
};

const filtersSlice = createSlice({
  name: "campers",
  initialState: INIT_STATE,
  reducers: {
      filterCampers(state, action) {
        console.log(action.payload)
          // state.location = action.payload.location;
    },
  },
});

export const { filterCampers} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;