import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  pending: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) existingProduct.quantity += 1;
      else {
        state.cart.push({...product, quantity: 1});
      }
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      );
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;
      // console.log('decreaseQuantity', product);

      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1)
        existingProduct.quantity -= 1;
      else if (existingProduct) {
        state.cart = state.cart.filter(item => item.id !== product.id);
        state.totalPrice -= product.price;
      }

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      );
    },
    IncreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) existingProduct.quantity += 1;
      else {
        state.cart.push({...product, quantity: 1});
      }
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      );
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.cart = state.cart.filter(item => item.id !== product.id);
      state.totalPrice -= product.quantity * product.price;
    },
  },
});

export const {addToCart, decreaseQuantity, IncreaseQuantity, removeFromCart} =
  cartSlice.actions;
export default cartSlice.reducer;
