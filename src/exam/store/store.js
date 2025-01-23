import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../slides/booksSlice";
const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})
export { store }