import { createSlice } from "@reduxjs/toolkit";

const TvShowSlice = createSlice({
  name: "tv",
  initialState: {
    trendingTvShows: null,
    popularTvShows: null,
    topRatedTvShows: null,
    airingTvShows: null,
    onTheAirTvShows: null,
  },
  reducers: {
    addTrendingTV: (state, action) => {
      state.trendingTvShows = action.payload;
    },
    addPopularTV: (state, action) => {
      state.popularTvShows = action.payload;
    },
    addTopRatedTv: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
    addAiringTv: (state, action) => {
      state.airingTvShows = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
  },
});

export const {
  addTrendingTV,
  addPopularTV,
  addTopRatedTv,
  addAiringTv,
  addOnTheAir,
} = TvShowSlice.actions;
export default TvShowSlice.reducer;
