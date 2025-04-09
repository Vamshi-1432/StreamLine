import React, { useEffect } from "react";
import Header from "../../common/Header";
import PlayerContainer from "./PlayerContainer";
import MoviesList from "./MoviesList/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayer } from "../../../utils/VideoPlayerSlice";
import VideoPlayer from "../VideoPlayer";
import MoreInfo from "../MoreInfo";
import { resetEnableInfo } from "../../../utils/MoreInfoSlice";

const Movies = () => {
  const player = useSelector((status) => status.player.enablePlayer);

  const info = useSelector((info) => info.moreInfo.enableInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetPlayer());
      dispatch(resetEnableInfo());
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <PlayerContainer />
      {player && <VideoPlayer />}
      {info && <MoreInfo />}
      <div className="from-black bg-gradient-to-tr xs:px-[2%] xs:pb-[20vh] xs:-mt-[28vh] sm:px-[3%] md:px-[4%] md:pb-[12vh] md:-mt-[20%] lg:mt-[5%] lg:pb-[12vh] lg:px-10 xl:-mt-10 xl:pb-[18vh]">
        <MoviesList />
      </div>
    </div>
  );
};

export default Movies;
