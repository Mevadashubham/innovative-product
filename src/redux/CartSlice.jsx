import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    //state --> initial state
    //action --> type -> "cart/addToCart"
    //payload -> {id:1, title:"product", price:100}

    addToCart: (state, action) => {
      const newItem = action.payload;

      const existing = state.cart.find((item) => item._id === newItem._id);

      if (existing) {
        existing.quantity += newItem.quantity || 1;
      } else {
        state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    updateCartItem: (state, action) => {
      const { _id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const { addToCart, removeFromCart, updateCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
