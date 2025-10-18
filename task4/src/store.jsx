import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../src/products/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: true,
})
