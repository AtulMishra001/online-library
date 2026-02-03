import { configureStore } from "@reduxjs/toolkit";
import bookRedurcer from "./booksSlice.js"
const store = configureStore({
  reducer: {
    books: bookRedurcer //adding book slice redurec to store.
  },
});

export default store;
