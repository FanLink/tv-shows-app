
import {configureStore} from "@reduxjs/toolkit"
import alertSlice from "./alertSlice";
import showSlice from "./showSlice"
const store = configureStore({
  reducer: {
  shows: showSlice,
  alert: alertSlice
  }
})

export default store;