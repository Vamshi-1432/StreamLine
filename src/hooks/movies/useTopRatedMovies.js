import { useEffect } from "react";
import { TopRatedAPI } from "../../services/Movie_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../../utils/MoviesSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TopRatedAPI
    );
    const response = await data.json();
    if (!response) return null;
    // console.log(response);
    dispatch(addTopRatedMovies(response?.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
