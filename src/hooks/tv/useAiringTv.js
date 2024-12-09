import { useEffect } from "react";
import { Tv_Airing_Today_API } from "../../services/TV_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTv } from "../../utils/TvShowsSlice";

export const useAiringTv = () => {
  const dispatch = useDispatch();
  const airingTvShows = useSelector((list) => list.tv.addAiringTv);

  useEffect(() => {
    const getAiringTvShows = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
          Tv_Airing_Today_API
        );
        const response = await data.json();
        if (!response) return null;
        dispatch(addAiringTv(response?.results));
      } catch (error) {
        console.error("Failed to fetch Airing Tv Shows", error);
      }
    };
    !airingTvShows && getAiringTvShows();
  }, [dispatch]);
};
