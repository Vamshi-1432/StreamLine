import { useDispatch, useSelector } from "react-redux";
import { Discover_Movies_API } from "../../services/Movie_API_Services";
import { addDiscoverMovies } from "../../utils/HomeSlice";
import { useEffect } from "react";

export const useDiscoverMovie = () => {
  const dispatch = useDispatch();
  const discoverMovies = useSelector((list) => list.home.discoverMovies);
  useEffect(() => {
    const getDiscoverMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
          Discover_Movies_API
        );

        const response = await data.json();
        if (!response) return null;
        dispatch(addDiscoverMovies(response?.results));
      } catch (error) {
        console.error("Failed to fetch Discover Movies", error);
      }
    };
    !discoverMovies && getDiscoverMovies();
  }, [dispatch]);
};
