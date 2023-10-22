import { createSlice } from "@reduxjs/toolkit";
import data from '../../products.json';


const initialState = {
  products: data,
  cart: [],
  open: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = state.products.find(item => item.id === action.payload);
      state.cart = [ newItem, ...state.cart ]
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    onToggleModal: (state, action) => {
      state.open = action.payload
    },
    removeCart: (state, action) => {
      state.cart = []
    }
  }
})

export const {addToCart, deleteItem, onToggleModal, removeCart} = productSlice.actions;

export default productSlice.reducer;

