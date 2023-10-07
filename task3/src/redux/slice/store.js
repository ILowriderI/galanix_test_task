import { configureStore } from "@reduxjs/toolkit";
import inputValueReducer from "../slice/inputSlice";
export const store = configureStore({
  reducer: { inputValueReducer },
});
