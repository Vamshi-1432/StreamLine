import React, { useEffect } from "react";
import Header from "../../common/Header";
import { useNowPlayingMovies } from "../../../hooks/movies/useNowPlayingMovies";
import PlayerContainer from "../Movies/PlayerContainer";
import VideoPlayer from "../VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayer } from "../../../utils/VideoPlayerSlice";
import MoreInfo from "../MoreInfo";
import { resetEnableInfo } from "../../../utils/MoreInfoSlice";
import DiscoverList from "./DiscoverList";

const Home = () => {
  /*
  MainContainer
    -VideoBackground
    -VideoTitle
  SecondaryContainer
    -MovieList
    -Cards
  */
  const player = useSelector((status) => status.player.enablePlayer);
  const info = useSelector((info) => info.moreInfo.enableInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetPlayer());
      dispatch(resetEnableInfo());
    };
  }, [dispatch]);

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <PlayerContainer />
      {player && <VideoPlayer />}
      {info && <MoreInfo />}
      <div className="from-black bg-gradient-to-tr xs:px-[2%] xs:pb-[30vh] xs:-mt-[28vh] sm:px-[3%] md:px-[4%] md:pb-[4vh] md:-mt-[20%] lg:mt-[5%] lg:pb-[12vh] lg:px-10 xl:-mt-10 xl:pb-[12vh]">
        <DiscoverList />
      </div>
    </div>
  );
};

export default Home;
