import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import orderReducer from './redux/OrderSlice';
import userReducer from './redux/UserSlice';


// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) return undefined;
    return { cart: { cart: JSON.parse(serializedCart) } }; // matches initialState
  } catch (e) {
    console.warn("Error loading cart from localStorage:", e);
    return undefined;
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state.cart.cart);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.warn("Error saving cart to localStorage:", e);
  }
};

const preloadedState = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    user: userReducer, 
  },
  
  preloadedState,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveCartToLocalStorage(store.getState());
});
