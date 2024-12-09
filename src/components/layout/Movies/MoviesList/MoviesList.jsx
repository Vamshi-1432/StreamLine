import React from "react";
import { useTopRatedMovies } from "../../../../hooks/movies/useTopRatedMovies";
import { useNowPlayingMovies } from "../../../../hooks/movies/useNowPlayingMovies";
import { usePopularMovies } from "../../../../hooks/movies/usePopularMovies";
import { useUpcomingMovies } from "../../../../hooks/movies/useUpcomingMovies";
import { useTrendingMovies } from "../../../../hooks/movies/useTrendingMovies";
import MovieCategoryList from "./MovieCategoryList";
import { useSelector } from "react-redux";

const MoviesList = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  const nowPlayingMovies = useSelector((list) => list.movies.nowPlayingMovies);
  const popularMovies = useSelector((list) => list.movies.popularMovies);
  const trendingMovies = useSelector((list) => list.movies.trendingMovies);
  const topRatedMovies = useSelector((list) => list.movies.topRatedMovies);
  const upcomingMovies = useSelector((list) => list.movies.upcomingMovies);
  const trailerVideo = useSelector((id) => id.movies.trailerVideo);

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
      <div className="pt-1 pb-2  relative">
        {nowPlayingMovies && (
          <MovieCategoryList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
      </div>
      <div className="pb-2">
        {popularMovies && (
          <MovieCategoryList title={"Popular"} movies={popularMovies} />
        )}
      </div>
      <div className="pb-2 " style={{ zIndex: 60 }}>
        {trendingMovies && (
          <MovieCategoryList title={"Trending"} movies={trendingMovies} />
        )}
      </div>
      <div className="pb-2 ">
        {topRatedMovies && (
          <MovieCategoryList title={"Top Rated"} movies={topRatedMovies} />
        )}
      </div>
      <div className="pb-0.5">
        {upcomingMovies && (
          <MovieCategoryList title={"Upcoming"} movies={upcomingMovies} />
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MoviesList;
