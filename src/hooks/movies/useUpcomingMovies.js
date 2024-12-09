import { useEffect } from "react";
import { UpcomingAPI } from "../../services/Movie_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../../utils/MoviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.upcomingMovies);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          UpcomingAPI
        );
        if (!data.ok) {
          throw new Error(`Error: ${data.status}`);
        }
        const response = await data.json();
        // console.log(response);
        dispatch(addUpcomingMovies(response?.results));
      } catch (error) {
        console.error("Failed to fetch Upcoming movies:", error);
      }
    };
    !upcomingMovies && getUpcomingMovies();
  }, [dispatch]);
};
