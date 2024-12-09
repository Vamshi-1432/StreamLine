import { useEffect, useCallback } from "react";
import { TrendingAPI } from "../../services/Movie_API_Services";
import { addTrendingMovies } from "../../utils/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.trendingMovies);

  const getTrendingMovies = useCallback(async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        TrendingAPI
      );
      const response = await data.json();
      if (!response) return null;
      // console.log(response);
      dispatch(addTrendingMovies(response?.results));
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!trendingMovies) {
      getTrendingMovies();
    }
  }, [trendingMovies, getTrendingMovies]);
};
