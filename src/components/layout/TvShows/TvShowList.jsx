import React from "react";
import TvCategoryList from "./TvCategoryList";
import { useSelector } from "react-redux";
import { usePopularTv } from "../../../hooks/tv/usePopularTv";
import { useTopRatedTv } from "../../../hooks/tv/useTopRatedTv";
import { useAiringTv } from "../../../hooks/tv/useAiringTv";
import { useOnTheAirTv } from "../../../hooks/tv/useOnTheAirTv";
import { useTvShowTrailer } from "../../../hooks/useTvShowTrailer";

const TvShowList = () => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useTvShowTrailer();
  // console.log(trailerVideo);
  usePopularTv();
  useTopRatedTv();
  useAiringTv();
  useOnTheAirTv();
  const popularTvShows = useSelector((list) => list.tv.popularTvShows);
  const trendingTvShows = useSelector((list) => list.tv.trendingTvShows);
  const topRatedTvShows = useSelector((list) => list.tv.topRatedTvShows);
  const airingTvShows = useSelector((list) => list.tv.airingTvShows);
  const onTheAirTvShows = useSelector((list) => list.tv.onTheAirTvShows);

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
      <div className="pt-1 pb-2 relative">
        {popularTvShows && (
          <TvCategoryList title={"Popular"} tvShows={popularTvShows} />
        )}
      </div>
      <div className="pb-2">
        {trendingTvShows && (
          <TvCategoryList title={"Trending"} tvShows={trendingTvShows} />
        )}
      </div>
      <div className="pb-2">
        {topRatedTvShows && (
          <TvCategoryList title={"Top Rated"} tvShows={topRatedTvShows} />
        )}
      </div>
      <div className="pb-2">
        {airingTvShows && (
          <TvCategoryList title={"Airing Today"} tvShows={airingTvShows} />
        )}
      </div>
      <div className="pb-0.5 ">
        {onTheAirTvShows && (
          <TvCategoryList title={"On The Air"} tvShows={onTheAirTvShows} />
        )}
      </div>
    </div>
  );
};

export default TvShowList;
