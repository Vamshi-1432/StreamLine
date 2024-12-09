import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieVideoAPI } from "../services/Movie_API_Services";
import { addTrailerVideo } from "../utils/MoviesSlice";

export const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const movieTrailerId = useSelector((state) => state.movies.trailerId);
  const route = useSelector((path) => path.route.route);

  useEffect(() => {
    if (!movieTrailerId) return;
    const getVideoTrailer = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieTrailerId}/videos`,
          MovieVideoAPI
        );
        const response = await data.json();

        const result = response?.results?.filter(
          (trailer) =>
            trailer?.type === "Trailer" && trailer?.name === "Official Trailer"
        );

        const trailer = result.length ? result[0] : response.results[0];
        if (!trailer) {
          console.log("No video available for this movie.");
          dispatch(addTrailerVideo({ message: "No video available" }));
          return;
        }
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    // !trailerVideo &&
    getVideoTrailer();
  }, [route, dispatch, movieTrailerId]);
};
