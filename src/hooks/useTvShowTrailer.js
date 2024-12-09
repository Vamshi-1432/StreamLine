import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TV_Video_API } from "../services/TV_API_Services";
import { addTrailerVideo } from "../utils/MoviesSlice";

export const useTvShowTrailer = () => {
  const dispatch = useDispatch();
  const TvTrailerId = useSelector((state) => state.movies.trailerId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const route = useSelector((path) => path.route.route);

  useEffect(() => {
    if (!TvTrailerId) return;
    const getVideoTrailer = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/tv/${TvTrailerId}/videos`,
          TV_Video_API
        );
        const response = await data.json();
        // console.log(response);
        const result = response?.results?.filter(
          (trailer) =>
            trailer?.type === "Trailer" && trailer?.name === "Official Trailer"
        );

        // Select the first official trailer or fallback to any available video
        const trailer = result.length ? result[0] : response.results[0];
        console.log(trailer);
        if (!trailer) {
          console.log("No video available for this movie.");
          dispatch(addTrailerVideo({ message: "No video available" }));
          return;
        } // No trailer found
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    // !trailerVideo &&
    getVideoTrailer();
  }, [route, dispatch, TvTrailerId]);
};
