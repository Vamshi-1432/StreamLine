import { useDispatch, useSelector } from "react-redux";
import { addDiscoverTv } from "../../utils/HomeSlice";
import { useEffect } from "react";
import { Tv_Discover_API } from "../../services/TV_API_Services";

export const useDiscoverTv = () => {
  const dispatch = useDispatch();
  const discoverTvShows = useSelector((list) => list.home.discoverTv);
  useEffect(() => {
    const getDiscoverTvShows = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
          Tv_Discover_API
        );

        const response = await data.json();
        if (!response) return null;
        dispatch(addDiscoverTv(response?.results));
      } catch (error) {
        console.error("Failed to fetch Discover shows", error);
      }
    };
    !discoverTvShows && getDiscoverTvShows();
  }, [dispatch]);
};
