import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    Delete: (state, action) => state.filter(el => el.id !== action.payload.id),
    Add: (state, action) => [...state, action.payload.book],
    Update: (state, action) => state.map(el => el.id == action.payload.book.id ? action.payload.book : el)
  }
})
export const { Delete, Add, Update } = booksSlice.actions
export { booksSlice }