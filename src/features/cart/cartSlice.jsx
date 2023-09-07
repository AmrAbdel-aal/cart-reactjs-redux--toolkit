import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../data";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    changeTotal: (state) => {
      console.log("dsakjdaiohjdnoia");
      state.total = 0;
      state.cartItems.forEach((item) => {
        state.total += parseFloat(item.price) * parseFloat(item.amount);

        state.total = Math.round(Number(state.total) * 100) / 100;
      });
    },
    changeCartAmount: (state) => {
      state.amount = 0;
      state.cartItems.forEach((item) => {
        state.amount += item.amount;
      });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
    increaseAmount: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
        return item;
      });
    },
    decreaseAmount: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          if (item.amount === 1) {
            return item;
          } else {
            item.amount -= 1;
          }
        }
        return item;
      });
    },
  },
});

export const {
  clearCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  changeCartAmount,
  changeTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
