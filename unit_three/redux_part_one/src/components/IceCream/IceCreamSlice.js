import { createSlice } from "@reduxjs/toolkit";

export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    amount: 5,
    flavor: "Chocolate Chip Cookie Dough",
  },
  reducers: {
    incrementIceCream: (state) => {
      state.amount += 1;
    },
    decrementIceCream: (state) => {
      state.amount -= 1;
    },
    changeIceCreamFlavor: (state, action) => {
      state.flavor = action.payload;
    },
    resetIceCream: (state) => {
      state.amount = 5;
      state.flavor = "Chocolate Chip Cookie Dough";
    },
  },
});

export const {
  incrementIceCream,
  decrementIceCream,
  changeIceCreamFlavor,
  resetIceCream,
} = iceCreamSlice.actions;

export default iceCreamSlice.reducer
