import React from "react";
import { useDispatch } from "react-redux";
import { Image_URL } from "../../../../services/Movie_API_Services";
import { addClickedMovie } from "../../../../utils/searchMovie";
import Chart from "../../Chart/Chart";
import "./MovieCategoryList.css";
const MovieCategoryList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const handleSelectedMovie = (movie) => {
    dispatch(addClickedMovie(movie));
  };

  return (
    <div className="relative">
      <h3 className="text-white font-serif font-semibold text-xs md:text-base lg:text-lg">
        {title}
      </h3>
      <div className="flex w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 pb-2">
          {movies?.map((movie, id) => (
            <div
              // className="relative border-[1px] md:h-[242px] h-36 w-24 md:w-44 mt-2 cursor-pointer rounded-lg shadow-white shadow-md cardHover"
              className="relative border-[1px] h-36 w-24 sm:h-48 sm:w-36 md:h-60 md:w-44 mt-2 cursor-pointer rounded-lg shadow-white shadow-md cardHover"
              key={id}
              onClick={() => handleSelectedMovie(movie)}
            >
              {/* Render Chart in a fixed position within the card */}
              <div className="absolute top-2 left-2">
                <Chart vote_rating={movie.vote_average} />
              </div>
              <img
                src={Image_URL + movie.poster_path}
                alt="movies"
                // className="h-36 md:h-60 sw-26 md:w-44 rounded-lg"
                className="h-36 w-24 sm:h-48 sm:w-36 md:h-60 md:w-44 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategoryList;
