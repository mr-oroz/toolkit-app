import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "./slices/productSlice";
import  counterSlice  from "./slices/counterSlice";

import { productApi } from "./rtk-query/product-api";

// всех slices собираем тут 
// тут еще добавляем productService rootReducer 
export const rootReducer = combineReducers({
  products: productSlice,
  counter: counterSlice,
  [productApi.reducerPath]: productApi.reducer,
})
