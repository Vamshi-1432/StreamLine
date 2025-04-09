import { useEffect } from "react";
import { TV_Popular_API } from "../../services/TV_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addPopularTV } from "../../utils/TvShowsSlice";

export const usePopularTv = () => {
  const dispatch = useDispatch();
  const popularTvShows = useSelector((list) => list.tv.popularTvShows);

  useEffect(() => {
    const getPopularTvShows = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          TV_Popular_API
        );
        const response = await data.json();
        if (!response) return null;
        dispatch(addPopularTV(response?.results));
      } catch (error) {
        console.error("Failed to fetch Popular shows", error);
      }
    };
    !popularTvShows && getPopularTvShows();
  }, [dispatch]);
};
