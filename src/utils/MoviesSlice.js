import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerId: null,
    searchedMovie: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
    addSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieTrailerId,
  addSearchedMovie,
} = MovieSlice.actions;

export default MovieSlice.reducer;
