import { useEffect, useState } from "react";
import { searchMovieAPI } from "../services/Movie_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedList } from "../utils/searchMovie";

export const useSearchMovie = (searchedShow) => {
  const [item, setPath] = useState("multi");
  const dispatch = useDispatch();
  const searchedMovieList = useSelector((store) => store.searchedMovieList);

  const route = useSelector((path) => path.route.route);
  useEffect(() => {
    if (route === "movie" || route === "tv" || route === "people") {
      setPath(route);
    } else if (route === "home") {
      setPath("multi");
    }
  }, [route]);

  useEffect(() => {
    const getMovie = async () => {
      if (!item || !searchedShow) return;
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/" +
            item +
            "?query=" +
            searchedShow +
            "&include_adult=false&language=en-US&page=1",
          searchMovieAPI
        ).then((response) => response.json());

        if (!data) return null;

        dispatch(setSearchedList(data));
      } catch (error) {
        console.log("Unable to fetch movies: " + error);
      }
    };
    // !searchedMovieList &&
    getMovie();
  }, [searchedShow]);
};
