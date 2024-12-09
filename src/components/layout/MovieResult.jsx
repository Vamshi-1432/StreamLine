import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image_URL } from "../../services/Movie_API_Services";
import "../../styles/scrollBar.css";
import { addClickedMovie } from "../../utils/searchMovie";

const MovieResult = () => {
  const dispatch = useDispatch();
  const searchedMovieList = useSelector(
    (list) => list.SearchMovie.searchedMovieList
  );
  // console.log(searchedMovieList);
  const list = searchedMovieList?.results
    ? searchedMovieList.results.filter(
        (filterMovie) =>
          filterMovie.original_language === "en" ||
          filterMovie.original_language === "te" ||
          filterMovie.original_language === "hi"
      )
    : [];

  const handleClickedMovie = (movie) => {
    dispatch(addClickedMovie(movie));
  };

  return (
    <div className="bg-black bg-opacity-75 bg-transparent z-50 rounded-md p-4 max-h-[400px] overflow-y-auto scrollbar-hide my-auto">
      {list.length > 0 &&
        list.map((movie) => (
          <div key={movie.id}>
            <div
              className="flex space-x-1 my-1 p-2 rounded-md bg-opacity-50 hover:bg-opacity-80 transition cursor-pointer"
              onClick={() => handleClickedMovie(movie)}
            >
              <div className="flex-shrink-0 mt-auto">
                <img
                  src={Image_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-12 h-12 p-1 object-cover rounded-md text-white font-serif text-[8px] md:text-[10px]"
                />
              </div>
              <div className="text-white font-serif flex-grow h-12 py-1">
                <h5 className="xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-semibold hover:underline">
                  {movie.title}
                </h5>
                <p className="xs:text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] hover:underline">
                  {movie.overview.length > 110
                    ? movie.overview.slice(0, 110) + "..."
                    : movie.overview}
                </p>
              </div>
            </div>
            <hr className="border-t border-gray-500 my-2" />
          </div>
        ))}
    </div>
  );
};

export default MovieResult;
