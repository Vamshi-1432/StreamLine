import { useEffect } from "react";
import { Tv_TopRated_API } from "../../services/TV_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedTv } from "../../utils/TvShowsSlice";

export const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTvShows = useSelector((list) => list.tv.topRatedTvShows);

  useEffect(() => {
    const getTopRatedTvShows = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          Tv_TopRated_API
        );
        const response = await data.json();
        if (!response) return null;
        dispatch(addTopRatedTv(response?.results));
      } catch (error) {
        console.log("Failed to fetch Top Rated Movies", error);
      }
    };
    !topRatedTvShows && getTopRatedTvShows();
  }, [dispatch]);
};
