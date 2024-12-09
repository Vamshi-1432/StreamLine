import { useEffect } from "react";
import { Trending_All_API } from "../../services/Movie_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingAll } from "../../utils/HomeSlice";

export const useTrendingAll = () => {
  const dispatch = useDispatch();
  const trendingAll = useSelector((list) => list.home.trendingAll);
  useEffect(() => {
    const getTrendingAll = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?language=en-US",
          Trending_All_API
        );
        const response = await data.json();
        if (!response) return null;
        dispatch(addTrendingAll(response?.results));
      } catch (error) {
        console.error("Failed to fetch Trending shows", error);
      }
    };
    !trendingAll && getTrendingAll();
  }, [dispatch]);
};
