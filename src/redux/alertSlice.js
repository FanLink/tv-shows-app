import { createSlice } from "@reduxjs/toolkit";

const alerSlice = createSlice({
  name: "alert",
  initialState: {},
  reducers: {
    setAlert: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    resetAlert: (state, action) =>{
      state.message = null;
      state.type = null;
    }
  }
})
export default alerSlice.reducer;
export const {setAlert, resetAlert} = alerSlice.actions;