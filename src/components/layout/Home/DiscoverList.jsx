import React from "react";
import Chart from "../Chart/Chart";
import { Image_URL } from "../../../services/TV_API_Services";
import { addClickedMovie } from "../../../utils/searchMovie";
import { useSelector } from "react-redux";
import DiscoverCategoryList from "./DiscoverCategoryList";
import { useDiscoverTv } from "../../../hooks/home/useDiscoverTv";
import { useDiscoverMovie } from "../../../hooks/home/useDiscoverMovie";
import { list } from "postcss";
import { useTrendingAll } from "../../../hooks/home/useTrendingAll";

const DiscoverList = () => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const TvList = useSelector((list) => list.home.discoverTv);
  const moviesList = useSelector((list) => list.home.discoverMovies);
  const trendingList = useSelector((list) => list.home.trendingAll);

  useDiscoverTv();
  useDiscoverMovie();
  useTrendingAll();
  return (
    <div
      className={`w-full overflow-hidden
         ${
           trailerVideo?.key
             ? "xs:-mt-[32%] md:-mt[20%] lg:-mt-[42%]"
             : "xs:mt-[50%] md:mt-[38%] lg:mt-[15%] xl:mt-[20%]"
         } 
       relative`}
    >
      <div className="relative">
        <h2 className="text-white font-serif font-semibold text-xl pt-1 underline">
          Discover
        </h2>
        <DiscoverCategoryList title={"TV"} shows={TvList} />
        <DiscoverCategoryList title={"Movies"} shows={moviesList} />
      </div>
      <h2 className="text-white font-serif font-semibold text-xl pt-1 underline">
        Trending
      </h2>
      <DiscoverCategoryList shows={trendingList} />
    </div>
  );
};

export default DiscoverList;
