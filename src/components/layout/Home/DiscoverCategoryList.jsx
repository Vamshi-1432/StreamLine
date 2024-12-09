import React from "react";
import { useDispatch } from "react-redux";
import { addClickedMovie } from "../../../utils/searchMovie";
import { Image_URL } from "../../../services/TV_API_Services";
import Chart from "../Chart/Chart";

const DiscoverCategoryList = ({ title, shows }) => {
  const dispatch = useDispatch();
  const handleSelectedtvShows = (show) => {
    dispatch(addClickedMovie(show));
  };
  return (
    <div className="relative">
      <h3 className="text-white font-serif font-semibold text-xs md:text-base">
        {title}
      </h3>
      <div className=" flex w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex space-x-4 pb-2">
          {shows?.map((show, id) => (
            <div
              className="relative border-[1px] md:h-[242px] h-36 w-24 md:w-44 mt-2 cursor-pointer rounded-lg shadow-white shadow-md cardHover"
              key={id}
              onClick={() => handleSelectedtvShows(show)}
            >
              <div className="absolute top-2 left-2">
                <Chart vote_rating={show.vote_average} />
              </div>
              <img
                src={Image_URL + show.poster_path}
                alt="tvShows"
                className="h-36 md:h-60 w-26 md:w-44 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverCategoryList;
