import { createSlice } from "@reduxjs/toolkit";

const searchMovie = createSlice({
  name: "SearchMovie",
  initialState: {
    enableSearch: false,
    clickedMovie: null,
    searchedMovieList: null,
  },
  reducers: {
    setEnableSearch: (state) => {
      state.enableSearch = !state.enableSearch;
      // if (!state.enableSearch) {
      //   state.searchedMovieList = null;
      //   state.clickedMovie = null;
      // }
    },
    addClickedMovie: (state, action) => {
      state.clickedMovie = action.payload;
    },
    removeClickedMovie: (state) => {
      state.clickedMovie = null;
    },
    setSearchedList: (state, action) => {
      state.searchedMovieList = action.payload;
    },
  },
});

export const {
  setEnableSearch,
  addClickedMovie,
  removeClickedMovie,
  setSearchedList,
} = searchMovie.actions;
export default searchMovie.reducer;
