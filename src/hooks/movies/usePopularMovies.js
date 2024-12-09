import { useCallback, useEffect } from "react";
import { NowPlayingAPI } from "../../services/Movie_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/MoviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.popularMovies);
  const getPopularMovies = useCallback(async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        NowPlayingAPI
      );
      const response = await data.json();
      if (!response) return null;
      // console.log(response);
      dispatch(addPopularMovies(response?.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, getPopularMovies]);
};
