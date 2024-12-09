import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingMovies } from "../../utils/MoviesSlice";
import { NowPlayingAPI } from "../../services/Movie_API_Services";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);
  const getNowPlayingMovieList = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        NowPlayingAPI
      );
      // console.log(NowPlayingAPI);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(addPlayingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovieList();
  }, []);
};
