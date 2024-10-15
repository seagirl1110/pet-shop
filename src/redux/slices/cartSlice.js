import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      state.data.push({
        product: action.payload.product,
        count: action.payload.count,
      });
    },
    removeFromCart(state, action) {
      state.data = state.data.filter(
        (item) => item.product.id !== action.payload
      );
    },
    plus(state, action) {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );
      item.count = item.count + 1;
    },
    minus(state, action) {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );
      item.count = item.count - 1;
    },
  },
});

export const { addToCart, removeFromCart, plus, minus } = cartSlice.actions;

export default cartSlice.reducer;
