import React from "react";
import MovieResult from "./MovieResult";
import { useSelector } from "react-redux";

const SearchedShow = () => {
  const enableSearch = useSelector((en) => en.SearchMovie.enableSearch);

  return (
    <>
      <div
        style={{ scrollbarWidth: "hidden" }}
        className="absolute md:mt-[160px] justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2  items-center p-1 h-32 mt-64 w-[80%] md:w-[35%] rounded-md z-50 my-auto mx-auto"
      >
        <MovieResult />
      </div>
    </>
  );
};
export default SearchedShow;
