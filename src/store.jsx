import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/cart/cartSlice";
import modalSlice from "./features/modalSlice";
const store = configureStore({
  reducer: { cart: cartSliceReducer, modal: modalSlice },
});

export default store;
