import React from "react";
import close from "../../Images/cross.png";
import "./VideoPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import { setEnablePlayer } from "../../utils/VideoPlayerSlice";

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  const title = useSelector((info) => info.moreInfo.infoData);
  // const enablePlayer = useSelector((enable) => enable.player.enablePlayer);

  const handlePlayer = () => {
    dispatch(setEnablePlayer());
  };
  if (!trailerVideo?.key) return null;

  return (
    <div className="fixed border-[1px] border-white h-[280px] w-[350px] md:h-[400px] md:w-[700px] lg:h-[470px] lg:w-[1050px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg xs:-mt-14 sm:-mt-10 md:pt-2 md:-mt-[25%] lg:-mt-[37%] xl:-mt-[1%] bg-black ">
      <div className="flex py-1">
        <p className="text-white text-md md:text-xl lg:text-2xl ml-4 font-serif font-semibold">
          {title.original_title ? title.original_title : title.original_name}
        </p>
        <img
          src={close}
          alt="close"
          className="cross h-6 w-6 ml-auto mr-2 hover:cursor-pointer z-50"
          onClick={handlePlayer}
        />
      </div>
      <hr className="border-white font-bold mt-2" />
      <div className="relative h-[272px] md:h-[392px] lg:h-[462px] w-full flex items-center justify-center z-50">
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&loop=1&controls=1&showinfo=0&modestBranding=1&rel=0&playsinline=1&enablejsapi=1&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
