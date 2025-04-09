import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTrendingTV } from "../../utils/TvShowsSlice";
import { TV_Trending_API } from "../../services/TV_API_Services";
import { addTrendingTV } from "../../utils/TvShowsSlice";

export const useTrendingTv = () => {
  const dispatch = useDispatch();
  const trendingTvShows = useSelector((list) => list.tv.trendingTvShows);

  const getTrendingTVShows = useCallback(async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
        TV_Trending_API
      );
      const response = await data.json();
      if (!response) return null;
      dispatch(addTrendingTV(response?.results));
    } catch (error) {
      console.error("Error fetching trending TV shows:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!trendingTvShows) {
      getTrendingTVShows();
    }
  }, [trendingTvShows, getTrendingTVShows]);
};
