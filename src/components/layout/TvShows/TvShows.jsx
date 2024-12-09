import React, { useEffect } from "react";
import Header from "../../common/Header";
import PlayerContainer from "../Movies/PlayerContainer";
import { useTrendingTv } from "../../../hooks/tv/useTrendingTv";
import TvShowList from "./TvShowList";
import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../VideoPlayer";
import { resetPlayer } from "../../../utils/VideoPlayerSlice";
import MoreInfo from "../MoreInfo";
import { resetEnableInfo } from "../../../utils/MoreInfoSlice";
import Footer from "../../common/Footer";

const TvShows = () => {
  const dispatch = useDispatch();
  // const selectedMovie = useSelector((id) => id.SearchMovie.clickedMovie);
  const player = useSelector((status) => status.player.enablePlayer);
  const info = useSelector((info) => info.moreInfo.enableInfo);

  useEffect(() => {
    return () => {
      dispatch(resetPlayer());
      dispatch(resetEnableInfo());
    };
  }, [dispatch]);

  useTrendingTv();
  return (
    <div>
      <Header />
      <PlayerContainer />
      {player && <VideoPlayer />} {info && <MoreInfo />}
      <div className="from-black bg-gradient-to-tr xs:px-[2%] xs:pb-[50vh] xs:-mt-[28vh] sm:px-[3%] md:px-[4%] md:pb-[46vh] md:-mt-[20%] lg:mt-[5%] lg:pb-[54vh] lg:px-10 xl:-mt-10 xl:pb-[30vh]">
        <TvShowList />
        <Footer />
      </div>
    </div>
  );
};

export default TvShows;
