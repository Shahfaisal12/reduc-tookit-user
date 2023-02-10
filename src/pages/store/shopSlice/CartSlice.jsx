import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },

    removeToCart(state, action) {
     return state.filter((item) => item.id !== action.payload);
   
    },

    // checkOut(state, action) {},
  },
});

console.log(cartSlice.actions);

export default cartSlice.reducer;
export const { addToCart, removeToCart, checkOut } = cartSlice.actions;
