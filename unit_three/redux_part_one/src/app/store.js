import { configureStore } from "@reduxjs/toolkit";
import iceCream from "../components/IceCream/IceCreamSlice";
import pie from "../components/Pie/PieSlice";

export const store = configureStore({
  reducer: {
    iceCream,
    pie,
  },
});
