import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MoviesSlice";
import RouteReducer from ".//RouteSlice";
import langReducer from "./langOptSlice";
import SearchReducer from "./searchMovie";
import TvReducer from "./TvShowsSlice";
import playerReducer from "./VideoPlayerSlice";
import moreInfoReducer from "./MoreInfoSlice";
import homeReducer from "./HomeSlice";

const reduxStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    route: RouteReducer,
    lang: langReducer,
    SearchMovie: SearchReducer,
    tv: TvReducer,
    player: playerReducer,
    moreInfo: moreInfoReducer,
    home: homeReducer,
  },
});

export default reduxStore;
