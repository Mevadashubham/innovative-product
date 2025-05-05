import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingData: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setShippingData: (state, action) => {
      state.shippingData = action.payload;
    },
  },
});

export const { setShippingData } = orderSlice.actions;
export default orderSlice.reducer;
