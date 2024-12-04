import { createSlice } from "@reduxjs/toolkit";

export const pieSlice = createSlice({
  name: "pie",
  initialState: {
    amount: 10,
    flavor: "Pumpkin",
  },
  reducers: {
    incrementPie: (state) => {
      state.amount += 1;
    },
    decrementPie: (state) => {
      state.amount -= 1;
    },
    changePieFlavor: (state, action) => {
      state.flavor = action.payload;
    },
    resetPie: (state) => {
      state.amount = 10;
      state.flavor = "Pumpkin";
    },
  },
});

export const { incrementPie, decrementPie, changePieFlavor, resetPie } =
  pieSlice.actions;

export default pieSlice.reducer;
