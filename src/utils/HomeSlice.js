import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    discoverTv: null,
    discoverMovies: null,
    trendingAll: null,
  },
  reducers: {
    addDiscoverTv: (state, action) => {
      state.discoverTv = action.payload;
    },
    addDiscoverMovies: (state, action) => {
      state.discoverMovies = action.payload;
    },
    addTrendingAll: (state, action) => {
      state.trendingAll = action.payload;
    },
  },
});

export const { addDiscoverTv, addDiscoverMovies, addTrendingAll } =
  HomeSlice.actions;
export default HomeSlice.reducer;
