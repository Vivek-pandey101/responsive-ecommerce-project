import { configureStore } from "@reduxjs/toolkit";
import fetchedData from "./features";

const store = configureStore({
  reducer: {
    ApiData: fetchedData,
  },
});

export default store;
