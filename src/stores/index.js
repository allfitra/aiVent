import { configureStore } from "@reduxjs/toolkit";
import aiReducer from "./aiSlice";

const store = configureStore({
  reducer: {
    ai: aiReducer,
  },
});

export default store;
