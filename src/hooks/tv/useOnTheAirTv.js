import { useEffect } from "react";
import { Tv_On_The_Air_API } from "../../services/TV_API_Services";
import { useDispatch, useSelector } from "react-redux";
import { addOnTheAir } from "../../utils/TvShowsSlice";

export const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  const onTheAirTvShows = useSelector((list) => list.tv.onTheAirTvShows);
  useEffect(() => {
    const getOnTheAirTvShows = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
          Tv_On_The_Air_API
        );
        const response = await data.json();
        // console.log(response);
        if (!response) return null;
        dispatch(addOnTheAir(response?.results));
      } catch (error) {
        console.error("Failed to fetch OnTheAir Tv Shows", error);
      }
    };
    !onTheAirTvShows && getOnTheAirTvShows();
  }, [dispatch]);
};
