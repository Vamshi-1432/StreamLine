import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "../VideoTitle";
import VideoContainer from "../VideoContainer";
import SearchedShow from "../SearchedShow";
import { setInfoData } from "../../../utils/MoreInfoSlice";

const PlayerContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((list) => list.movies?.nowPlayingMovies);
  const movieTrailer = useSelector((list) => list.SearchMovie.clickedMovie);
  const searchedMovieList = useSelector(
    (enb) => enb.SearchMovie.searchedMovieList
  );
  const enableSearch = useSelector((enable) => enable.SearchMovie.enableSearch);

  if (!movies) return;
  const PrimeMovie = movieTrailer !== null ? movieTrailer : movies[0];

  const { id, original_title, name, backdrop_path, overview } = PrimeMovie;
  dispatch(setInfoData(PrimeMovie));

  return (
    <Fragment>
      {searchedMovieList?.results && enableSearch ? <SearchedShow /> : ""}
      <div className="py-52 md:pt-0">
        <VideoTitle
          title={original_title ? original_title : name}
          overview={overview}
          image={backdrop_path}
        />
        <VideoContainer movieId={id} />
      </div>
    </Fragment>
  );
};

export default PlayerContainer;
