import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

export const searchShows = createAsyncThunk("shows/searchShows", async (searchTerm) => {
  try {
    const {
      data
    } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    return {
      loading: false,
      data
    }
  } catch (error) {
    return {
      loading: false,
      error: error.response && error.response.data.message ? error.response.data.message : error.message
    }
  }

})
export const getSingleShow = createAsyncThunk("shows/getSingleShow", async (id) => {
  try {
    const {
      data
    } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return {
      data
    }
  } catch (error) {
    return {
      error: error.response && error.response.data.message ? error.response.data.message : error.message 
    }
  }
})
const showSlice = createSlice({
  name: "shows",
  initialState: {
    loading: false,
    shows: [],
    singleShow: {},
    error: ""
  },
  reducers: {
    clearShow: (state, action) => state.singleShow = {},
  },
  extraReducers: (builder) => {
    builder.addCase(searchShows.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchShows.fulfilled, (state, action) => {
      state.loading = action.payload.loading;
      state.shows = action.payload.data;
    });
    builder.addCase(searchShows.rejected, (state, action) => {
      state.loading = action.payload.loading;
      state.shows = action.payload.error;
    });
    builder.addCase(getSingleShow.pending, (state, action) => {state.loading = true});
    builder.addCase(getSingleShow.fulfilled, (state, action) => {
      state.singleShow = action.payload.data;
      state.loading = false;
    })
    builder.addCase(getSingleShow.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    })
  }
})


export const {
  clearShow,
  initialRequest
} = showSlice.actions;
export default showSlice.reducer;