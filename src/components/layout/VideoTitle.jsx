import React from "react";
import info from "../../Images/info.png";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayer, setEnablePlayer } from "../../utils/VideoPlayerSlice";
import { resetEnableInfo, setEnableInfo } from "../../utils/MoreInfoSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const player = useSelector((status) => status.player.enablePlayer);
  const moreInfo = useSelector((info) => info.moreInfo.enableInfo);
  const trailerVideo = useSelector((id) => id.movies.trailerVideo);

  const handlePlayer = () => {
    if (!player && trailerVideo?.key) {
      dispatch(setEnablePlayer());
      dispatch(resetEnableInfo());
    }
  };
  const handleMoreInfo = () => {
    if (!moreInfo) {
      dispatch(setEnableInfo());
      dispatch(resetPlayer());
    }
  };

  return (
    // <div className="w-screen h-[119vh] aspect-video pt-[15%] md:pt-[20%] border-white pl-2 md:pl-10 text-white font-serif absolute ">
    <div className="w-full aspect-video pt-[18%] pl-2 md:pl-10 text-white font-serif absolute ">
      <h1 className="font-serif font-medium text-sm md:text-5xl">{title}</h1>
      <p className="text-[6px] md:text-sm w-1/4 mt-3">
        {overview.length <= 200 ? overview : overview.slice(0, 200) + "..."}
      </p>
      <div className="flex my-3">
        <button
          className={`bg-white px-1 py-0.5 hover:bg-opacity-80 md:py-0 md:px-2 text-black rounded-[3px] md:rounded-md md:font-medium md:text-base text-[6px] font-serif 
           ${player && trailerVideo?.key ? "opacity-50 cursor-not-allowed" : ""}
          `}
          onClick={handlePlayer}
        >
          ▶️ Play
        </button>
        <button
          className={`bg-gray-500 text-[8px] md:text-sm my-auto px-1 md:py-1 md:px-2 hover:bg-opacity-80 text-white rounded-[3px] md:rounded-md md:font-medium ml-2 flex
            ${moreInfo ? "opacity-50 cursor-not-allowed" : ""}
            `}
          onClick={handleMoreInfo}
        >
          <img
            src={info}
            alt="Info"
            className="h-2 w-2 md:h-4 md:w-4 my-auto mr-1"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
