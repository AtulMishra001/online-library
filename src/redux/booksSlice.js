import { createSlice } from "@reduxjs/toolkit";
import { dummyBooks } from "../utils/dummyData.js"; //Dummy data of books

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: dummyBooks, // Initialize with dummy data 
  },
  reducers: {
    // action to add a new book.
    addBook: (state, action) => {
      // Logic to add a new book
      state.items.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions; //exporting addBook action
export const selectBooks = (state) => state.books.items; //exporting piece of state containing books data.
export default booksSlice.reducer;